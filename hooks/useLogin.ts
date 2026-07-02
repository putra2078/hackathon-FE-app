import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { loginUser } from '@/lib/api/auth';
import { ApiError } from '@/lib/api/client';
import { tokenStorage, userStorage } from '@/lib/storage';
import { LoginReq } from '@/types/api/auth.types';

export function useLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function login(payload: LoginReq) {
    setIsLoading(true);
    setError(null);

    try {
      const data = await loginUser(payload);
      tokenStorage.set(data.token);
      userStorage.set(data.user)
      router.push('/');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Login gagal, coba lagi');
    } finally {
      setIsLoading(false);
    }
  }

  return { login, isLoading, error };
}