import { createNewProduct } from "@/lib/api/product";
import { Product } from "@/types/api/product.types";
import { ApiError } from "next/dist/server/api-utils";
import { useRouter } from "next/router";
import { useState } from "react";

export function useAddProduct() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false)

  async function addProduct(payload: Product) {
    setIsLoading(true);

    try {
      await createNewProduct(payload);
      setIsSuccess(true)
      return true
    } catch (err) {
      setError(
        err instanceof ApiError ? err.message : "Gagal Menambahkan produk",
      );
      return false
    } finally {
      setIsLoading(false);
    }
  }

  const clearError = () => {
    setError(null)
  }
  const clearSuccess = () => setIsSuccess(false)

  return {addProduct, isLoading, error, isSuccess, clearError, clearSuccess}
}
