import { useRouter } from 'next/navigation';
import { accessTokenStorage } from '@/lib/storage';

export function useAuth() {
  const router = useRouter();

  function isAuthenticated(): boolean {
    return !!accessTokenStorage.get();
  }

  function logout() {
    accessTokenStorage.remove();
    router.push('/login');
  }

  return { isAuthenticated, logout };
}