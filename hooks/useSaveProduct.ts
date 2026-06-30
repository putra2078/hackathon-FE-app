import { ApiError } from "@/lib/api/client";
import {
  createNewProduct,
  updateProduct as updateProductApi,
} from "@/lib/api/product";
import { Product, UpdateProductReq } from "@/types/api/product.types";
import { useState } from "react";

export function useSaveProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const clearError = () => {
    setError(null);
  };
  const clearSuccess = () => setIsSuccess(false);

  async function addProduct(payload: Product) {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await createNewProduct(payload);
      setIsSuccess(true);
      return true;
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Gagal menambahkan produk",
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  async function updateProduct({ id, payload }: UpdateProductReq) {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await updateProductApi({ id, payload });
      setIsSuccess(true);
      return true;
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Gagal memperbarui produk",
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  async function saveProduct(payload: Product, productId?: string) {
    if (productId) {
      return updateProduct({ id: productId, payload: payload });
    }
    return addProduct(payload);
  }

  return {
    addProduct,
    updateProduct,
    saveProduct,
    isLoading,
    error,
    isSuccess,
    clearError,
    clearSuccess,
  };
}
