import { createNewProduct, updateProduct as updateProductApi } from "@/lib/api/product";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import { Product, UpdateProductReq } from "@/types/api/product.types";
import { useState } from "react";
import { mutate } from "swr";
import useSWRMutation from "swr/mutation";

export function useSaveProduct() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    trigger: triggerAdd,
    isMutating: isAdding,
    error: addError,
    reset: resetAddError,
  } = useSWRMutation(
    SWR_KEYS.product.all,
    (_key: string, { arg }: { arg: Product }) => createNewProduct(arg),
  );

  const {
    trigger: triggerUpdate,
    isMutating: isUpdating,
    error: updateError,
    reset: resetUpdateError,
  } = useSWRMutation(
    SWR_KEYS.product.all,
    (_key: string, { arg }: { arg: UpdateProductReq }) => updateProductApi(arg),
  );

  const clearError = () => {
    resetAddError();
    resetUpdateError();
  };
  const clearSuccess = () => setIsSuccess(false);

  async function addProduct(payload: Product) {
    setIsSuccess(false);
    try {
      await triggerAdd(payload);
      setIsSuccess(true);
      mutate(SWR_KEYS.product.all);
      return true;
    } catch {
      return false;
    }
  }

  async function updateProduct({ id, payload }: UpdateProductReq) {
    setIsSuccess(false);
    try {
      await triggerUpdate({ id, payload });
      setIsSuccess(true);
      mutate(SWR_KEYS.product.all);
      mutate(SWR_KEYS.product.detail(id));
      return true;
    } catch {
      return false;
    }
  }

  async function saveProduct(payload: Product, productId?: string) {
    if (productId) {
      return updateProduct({ id: productId, payload });
    }
    return addProduct(payload);
  }

  return {
    addProduct,
    updateProduct,
    saveProduct,
    isLoading: isAdding || isUpdating,
    error:
      getErrorMessage(addError, "Gagal menambahkan produk") ??
      getErrorMessage(updateError, "Gagal memperbarui produk"),
    isSuccess,
    clearError,
    clearSuccess,
  };
}