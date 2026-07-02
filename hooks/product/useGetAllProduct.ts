import { getAllProducts  } from "@/lib/api/product";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { PRODUCT_KEYS } from "@/lib/swr-keys";
import useSWR from "swr";

export function useGetAllProduct() {
      const { data, error, isLoading, mutate } = useSWR(PRODUCT_KEYS.all, getAllProducts);

  return {
    products: data,
    error: getErrorMessage(error, "Gagal mengambil daftar produk"),
    isLoading,
    refetch: mutate,
  };

}