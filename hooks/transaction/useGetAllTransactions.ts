import { getAllTransactions } from "@/lib/api/transaction";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import useSWR from "swr";

export function useGetAllTransactions() {
  const {
    data: transactions,
    error,
    isLoading,
    mutate,
  } = useSWR(SWR_KEYS.transaction.all, getAllTransactions);

  return {
    transactions: transactions ?? [],
    error: getErrorMessage(error, "Gagal mengambil daftar transaksi"),
    isLoading,
    refetch: mutate,
  };
}
