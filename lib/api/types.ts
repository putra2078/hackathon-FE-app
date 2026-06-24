export interface User{
    id: string
    name: string
    email: string
    createdAt?: string
    updatedAt?: string
}

export interface LoginData {
  token: string;
  user: User;
}

export interface RegisterData {
  user: User;
}

export interface ApiResponse<T = unknown>{
    success: boolean
    message: string
    data: T
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  data?: null;
}