// hooks/useUpdateProfile.ts
import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { userStorage } from "@/lib/storage";
import { UpdateUserReq } from "@/types/api/auth.types";
import { updateUser } from "@/lib/api/auth";
import { PROFILE_KEYS } from "@/lib/swr-keys";

export function useUpdateProfile() {
  const user = userStorage.get();

  const {
    trigger,
    isMutating: isLoading,
    error: swrError,
    reset,
  } = useSWRMutation(
    PROFILE_KEYS.profile,
    (_key: string, { arg }: { arg: UpdateUserReq }) => updateUser(user!.id, arg),
  );

  async function updateProfile(payload: UpdateUserReq) {
    try {
      const a = await trigger(payload);
      console.log(a.id)
      mutate(PROFILE_KEYS.profile); 
      return true;
    } catch {
      return false;
    }
  }

  return {
    updateProfile,
    isLoading,
    error: getErrorMessage(swrError, "Gagal memperbarui profil"),
    clearError: reset,
  };
}