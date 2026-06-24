// lib/api/auth.ts
import { apiClient } from './client';
import type { ApiResponse, LoginData, RegisterData } from './types';
import { mockLoginResponse, mockRegisterResponse } from './mocks/auth.mock';

const USE_MOCK = false;
const fakeDelay = () => new Promise((r) => setTimeout(r, 400));

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
    console.log(payload)
  if (USE_MOCK) {
    await fakeDelay();
    return mockLoginResponse.data;
  }
  const res = await apiClient.post<ApiResponse<LoginData>>('/users/login', payload);
  return res.data.data; // <- res.data = body axios, .data lagi = isi envelope
}

export async function registerUser(payload: RegisterPayload): Promise<RegisterData> {
  if (USE_MOCK) {
    await fakeDelay();
    return mockRegisterResponse.data;
  }
  const res = await apiClient.post<ApiResponse<RegisterData>>('/users/register', payload);
  return res.data.data;
}