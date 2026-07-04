import { getAllStock } from "@/lib/api/stock";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import useSWR from "swr";

export function useGetAllStock() {
  const { data, error, isLoading, mutate } = useSWR(SWR_KEYS.stock.all, getAllStock);

  return {
    products: data,
    error: getErrorMessage(error, "Gagal mengambil daftar stock"),
    isLoading,
    refetch: mutate,
  };

}