import { useRouter } from 'next/navigation';
import { tokenStorage } from '@/lib/storage';

export function useAuth() {
  const router = useRouter();

  function isAuthenticated(): boolean {
    return !!tokenStorage.get();
  }

  function logout() {
    tokenStorage.remove();
    router.push('/login');
  }

  return { isAuthenticated, logout };
}