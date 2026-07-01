import { ApiError } from "@/lib/api/client";
import { getAllProducts  } from "@/lib/api/product";
import { getAllProductsRes,  } from "@/types/api/product.types";
import { useState } from "react";
import useSWR from "swr";

export function useGetAllProduct() {
      const { data, error, isLoading, mutate } = useSWR('all-products', getAllProducts);

  return {
    products: data,
    error: error?.message,
    isLoading,
    refetch: mutate, // biar nama tetap jelas
  };
//   const [products, setProducts] = useState<getAllProductsRes[] | null>(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   async function getAllProduct() {
//     setIsLoading(true);
//     setError(null);
//     try {
//       const data = await getAllProductsApi();
//       setProducts(data);
//       return data;
//     } catch (err) {
//       setError(err instanceof ApiError ? err.message : "Gagal memuat data produk");
//       return null;
//     } finally {
//       setIsLoading(false);
//     }
//   }

//   return { products, getAllProduct, isLoading, error };
}