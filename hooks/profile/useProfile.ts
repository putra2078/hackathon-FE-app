import useSWR from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { userStorage } from "@/lib/storage";
import { getUserById } from "@/lib/api/auth";
import { PROFILE_KEYS } from "@/lib/swr-keys";

export function useProfile() {
  const userId = userStorage.get();

  const { data, error, isLoading, mutate } = useSWR(
    PROFILE_KEYS.profile,
    () => getUserById(userId?.id),
  );

  return {
    user: data,
    error: getErrorMessage(error, "Gagal mengambil data profil"),
    isLoading,
    refetch: mutate,
  };
}