import { ApiError } from "@/lib/api/client";
import { deleteProductById } from "@/lib/api/product";
import { useState } from "react";

export function useDeleteProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const clearError = () => {
    setError(null);
  };
  const clearSuccess = () => setIsSuccess(false);

  async function deleteProduct(id: string) {
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      await deleteProductById(id);
      setIsSuccess(true);
      return(true)
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Gagal menambahkan produk",
      );
      return false;
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    isSuccess,
    clearError,
    clearSuccess,
    deleteProduct,
  }
}
