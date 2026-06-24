// lib/api/client.ts
import axios, {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
} from "axios";
import type { ApiErrorResponse } from "./types";
import { tokenStorage } from "../storage";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log(BASE_URL);

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

// extend config Axios biar bisa terima `token` & `_retryCount` custom
declare module "axios" {
  export interface AxiosRequestConfig {
    token?: string;
    _retryCount?: number;
  }
}

const MAX_RETRIES = 2;

export const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000, // axios punya timeout built-in, gak perlu AbortController manual
  headers: { "Content-Type": "application/json" },
});

// attach token per-request (kalau dikirim)
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = config.token ?? tokenStorage.get();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// auto-retry kalau network error / timeout / 5xx
apiClient.interceptors.response.use(
  (response) => response,
  async (error: AxiosError<ApiErrorResponse>) => {
    const config = error.config;
    if (!config) return Promise.reject(error);

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

    const status = error.response?.status ?? 0;
    const data = error.response?.data ?? null;
    const message = data?.message || error.message || "Terjadi kesalahan pada server";

    return Promise.reject(new ApiError(message, status, data));
  },
);
