import { getProductById } from "@/lib/api/product";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import useSWR from "swr";

export function useProductDetail(id: string) {
  const { data, error, isLoading } = useSWR(
    id ? SWR_KEYS.product.detail(id) : null,
    () => getProductById(id),
  );

  return {
    product: data,
    error: getErrorMessage(error, "Gagal mengambil detail produk"),
    isLoading,
  };
}
