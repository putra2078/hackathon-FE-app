import { LoginReq, LoginRes, RegisterReq, RegisterRes, User } from '@/types/api/auth.types';
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

export async function getUserById(id: string): Promise<User> {
  const res = await apiClient.get<ApiResponse<User>>(`/users/${id}`);
  return res.data.data
}