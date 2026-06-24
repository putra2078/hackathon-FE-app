import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser, type RegisterPayload } from '@/lib/api/auth';
import { ApiError } from '@/lib/api/client';

export function useRegister() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(payload: RegisterPayload) {
    setIsLoading(true);
    setError(null);

    try {
      await registerUser(payload);
      router.push('/login');
    } catch (err) {
      setError(err instanceof ApiError ? err.message : 'Registrasi gagal, coba lagi');
    } finally {
      setIsLoading(false);
    }
  }

  return { register, isLoading, error };
}