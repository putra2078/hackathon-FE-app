// lib/api/auth.ts
import { apiClient } from './client';
import type { ApiResponse, LoginData, RegisterData } from './types';

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

export async function loginUser(payload: LoginPayload): Promise<LoginData> {
  const res = await apiClient.post<ApiResponse<LoginData>>('/users/login', payload);
  return res.data.data;
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterData> {
  const res = await apiClient.post<ApiResponse<RegisterData>>('/users/register', payload);
  return res.data.data;
}