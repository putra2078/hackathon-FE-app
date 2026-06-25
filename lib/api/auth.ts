import { LoginReq, LoginRes, RegisterReq, RegisterRes } from '@/types/api/auth.types';
import { apiClient } from './client';
import { ApiResponse } from '@/types/api/base.types';

export async function loginUser(payload: LoginReq): Promise<LoginRes> {
  const res = await apiClient.post<ApiResponse<LoginRes>>('/users/login', payload);
  return res.data.data;
}

export async function registerUser(payload: RegisterReq): Promise<RegisterRes> {
  const res = await apiClient.post<ApiResponse<RegisterRes>>('/users/register', payload);
  return res.data.data;
}