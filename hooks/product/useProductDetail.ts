import { ApiError } from "@/lib/api/client";
import { getProductById } from "@/lib/api/product";
import { getDetailProductRes, Product } from "@/types/api/product.types";
import { useState } from "react";

export function useProductDetail() {
  const [product, setProduct] = useState<getDetailProductRes | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getProductDetail(id: string) {
    setIsLoading(true);
    setError(null);
    try {
      const data = await getProductById(id);
      setProduct(data);
      return data;
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Gagal memuat data produk");
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  return { product, getProductDetail, isLoading, error };
}