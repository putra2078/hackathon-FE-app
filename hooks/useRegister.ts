import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { registerUser} from '@/lib/api/auth';
import { ApiError } from '@/lib/api/client';
import { RegisterReq } from '@/types/api/auth.types';

export function useRegister() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function register(payload: RegisterReq) {
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