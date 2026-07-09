import useSWR from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { userStorage } from "@/lib/storage";
import { getUserById } from "@/lib/api/auth";
import { SWR_KEYS } from "@/lib/swr-keys";

export function useProfile() {
  const userId = userStorage.get();

  const { data, error, isLoading, mutate } = useSWR(
    SWR_KEYS.profile.me,
    () => getUserById(userId?.id),
  );

  return {
    user: data,
    error: getErrorMessage(error, "Gagal mengambil data profil"),
    isLoading,
    refetch: mutate,
  };
}