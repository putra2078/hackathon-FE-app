import { useSWRConfig } from "swr";
import { tokenStorage, userStorage } from "@/lib/storage";
import { SWR_KEYS } from "@/lib/swr-keys";
import { useState } from "react";

export function useLogout() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState(false);

  async function logout() {
    setIsLoading(true);
    try {
        tokenStorage.remove()
      userStorage.remove();

      await mutate(SWR_KEYS.profile.me, undefined, { revalidate: false });

      // await logoutAPI();

      return true;
    } catch (error) {
      console.error("Gagal logout:", error);
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    logout,
    isLoading,
  };
}