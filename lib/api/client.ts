import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import { accessTokenStorage, refreshTokenStorage, userStorage } from "../storage";
import { ApiErrorResponse } from "@/types/api/base.types";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ApiError extends Error {
  status: number;
  data: ApiErrorResponse | null;

  constructor(
    message: string,
    status: number,
    data: ApiErrorResponse | null = null,
  ) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

declare module "axios" {
  export interface AxiosRequestConfig {
    token?: string;
    _retryCount?: number;
    _retry?: boolean;
  }
}

const MAX_RETRIES = 2;

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

// attach token
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = config.token ?? accessTokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

let isRefreshing = false;
let failedQueue: Array<{
  resolve: (token: string) => void;
  reject: (err: unknown) => void;
}> = [];

const processQueue = (error: unknown, token: string | null) => {
  failedQueue.forEach((prom) => {
    if (error) prom.reject(error);
    else prom.resolve(token!);
  });
  failedQueue = [];
};

// auto-retry kalau network error / timeout / 5xx
// apiClient.interceptors.response.use(
//   (response) => response,
//   async (error: AxiosError<ApiErrorResponse>) => {
//     const config = error.config;
//     if (!config) return Promise.reject(error);

//     config._retryCount = config._retryCount ?? 0;
//     const isNetworkOrTimeout = !error.response;
//     const isServerError = (error.response?.status ?? 0) >= 500;
//     const shouldRetry =
//       (isNetworkOrTimeout || isServerError) && config._retryCount < MAX_RETRIES;

//     if (shouldRetry) {
//       config._retryCount += 1;
//       await new Promise((r) => setTimeout(r, 500 * config._retryCount!));
//       return apiClient(config);
//     }

//     const status = error.response?.status ?? 0;
//     const data = error.response?.data ?? null;
//     const message =
//       data?.message || error.message || "Terjadi kesalahan pada server";

//     return Promise.reject(new ApiError(message, status, data));
//   },
// );

// ─── Response interceptor ────────────────────────────────────────────────────
apiClient.interceptors.response.use(
  (response) => {
    const newToken = response.headers["authorization"] as string | undefined;
    if (newToken?.startsWith("Bearer ")) {
      accessTokenStorage.set(newToken.replace("Bearer ", ""));
    }
 
    return response;
  },
 
  async (error: AxiosError<ApiErrorResponse>) => {
    const config = error.config;
    if (!config) return Promise.reject(error);
 
    // Auto-retry: network error / timeout / 5xx 
    config._retryCount = config._retryCount ?? 0;
    const isNetworkOrTimeout = !error.response;
    const isServerError = (error.response?.status ?? 0) >= 500;
    const shouldRetry =
      (isNetworkOrTimeout || isServerError) && config._retryCount < MAX_RETRIES;
 
    if (shouldRetry) {
      config._retryCount += 1;
      await new Promise((r) => setTimeout(r, 500 * config._retryCount!));
      return apiClient(config);
    }
 
    // 401, 403: access token expired, refresh
    if (error.response?.status === 401 || error.response?.status === 403  && !config._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        }).then((token) => {
          config.headers.Authorization = `Bearer ${token}`;
          return apiClient(config);
        });
      }
 
      config._retry = true;
      isRefreshing = true;
 
      try {
        const refreshToken = refreshTokenStorage.get();
        if (!refreshToken) throw new Error("No refresh token");
 
        const { data } = await axios.post(
          `${BASE_URL}/api/v1/users/refresh`,
          { refreshToken },
          { headers: { "Content-Type": "application/json" } },
        );

 
        const newAccessToken: string = data.data.accessToken;
        accessTokenStorage.set(newAccessToken);
        processQueue(null, newAccessToken);
 
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return apiClient(config);
      } catch  {
        processQueue(null, null);
 
        accessTokenStorage.remove();
        refreshTokenStorage.remove();
        userStorage.remove()
        window.location.href = "/login";
 
        return Promise.reject(error);
      } finally {
        isRefreshing = false;
      }
    }
 
    const status = error.response?.status ?? 0;
    const data = error.response?.data ?? null;
    const message =
      data?.message || error.message || "Terjadi kesalahan pada server";
 
    return Promise.reject(new ApiError(message, status, data));
  },
);
