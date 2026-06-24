// hooks/useLogin.ts
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser, type LoginPayload } from '@/lib/api/auth';
import { ApiError } from '@/lib/api/client';
import { tokenStorage } from '@/lib/storage';

export function useLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(payload: LoginPayload) {
    setIsLoading(true);
    setError(null);

    try {
      const data = await loginUser(payload);
      tokenStorage.set(data.token);
      router.push('/');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Login gagal, coba lagi');
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}