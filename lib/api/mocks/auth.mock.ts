// lib/api/mocks/auth.mock.ts
import type { ApiResponse, LoginData, RegisterData } from '../types';

export const mockLoginResponse: ApiResponse<LoginData> = {
  success: true,
  message: 'Login successful',
  data: {
    token: 'mock-jwt-token-123',
    user: { name: 'John Doe', email: 'john@example.com',id: "02af3f93-82b0-4edf-9a61-664ddc64d74e", createdAt: "2026-06-22T03:52:15.660Z", updatedAt: "2026-06-22T03:52:15.660Z" },
  },
};

export const mockRegisterResponse: ApiResponse<RegisterData> = {
  success: true,
  message: 'Registrasi berhasil',
  data: {
    user: { id: "02af3f93-82b0-4edf-9a61-664ddc64d74e" , name: 'New User', email: 'new@example.com', createdAt: "2026-06-22T03:52:15.660Z", updatedAt: "2026-06-22T03:52:15.660Z" },
  },
};