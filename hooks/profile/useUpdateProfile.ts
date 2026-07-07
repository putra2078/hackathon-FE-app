import useSWRMutation from "swr/mutation";
import { mutate } from "swr";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { userStorage } from "@/lib/storage";
import { UpdateUserReq } from "@/types/api/auth.types";
import { updateUser } from "@/lib/api/auth";
import { SWR_KEYS } from "@/lib/swr-keys";

export function useUpdateProfile() {
  const user = userStorage.get();

  const {
    trigger,
    isMutating: isLoading,
    error: swrError,
    reset,
  } = useSWRMutation(
    SWR_KEYS.profile.me,
    (_key: string, { arg }: { arg: UpdateUserReq }) => updateUser(user!.id, arg),
  );

  async function updateProfile(payload: UpdateUserReq) {
    try {
      await trigger(payload);
      mutate(SWR_KEYS.profile.me); 
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