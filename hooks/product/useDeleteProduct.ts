import { deleteProductById } from "@/lib/api/product";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import { useState } from "react";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useDeleteProduct() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    trigger,
    isMutating: isLoading,
    error: swrError,
    reset,
  } = useSWRMutation(
    SWR_KEYS.product.all,
    (_key: string, { arg: id }: { arg: string }) => deleteProductById(id),
  );

  const clearError = () => reset();
  const clearSuccess = () => setIsSuccess(false);

  async function deleteProduct(id: string) {
    setIsSuccess(false);

    try {
      await trigger(id);
      setIsSuccess(true);
      mutate(SWR_KEYS.product.all);
      return true;
    } catch {
      return false;
    }
  }

  const error = getErrorMessage(swrError, "Gagal menghapus produk")
  return {
    isLoading,
    error,
    isSuccess,
    clearError,
    clearSuccess,
    deleteProduct,
  };
}