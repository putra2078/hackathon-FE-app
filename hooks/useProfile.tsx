import useSWR from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { userStorage } from "@/lib/storage";
import { getUserById } from "@/lib/api/auth";

export function useProfile() {
  const userId = userStorage.get();

  const { data, error, isLoading, mutate } = useSWR(
    userId?.id ? `users/${userId}` : null,
    () => getUserById(userId?.id),
  );

  return {
    user: data,
    error: getErrorMessage(error, "Gagal mengambil data profil"),
    isLoading,
    refetch: mutate,
  };
}