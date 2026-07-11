import { ApiResponse } from "@/types/api/base.types";
import {
  Transaction,
  CreateTransactionReq,
  UpdateTransactionReq,
} from "@/types/api/transaction.types";
import { apiClient } from "./client";

export async function getAllTransactions(): Promise<Transaction[]> {
  const res = await apiClient.get<ApiResponse<Transaction[]>>("/transactions");
  return res.data.data;
}

export async function getTransactionById(id: string): Promise<Transaction> {
  const res = await apiClient.get<ApiResponse<Transaction>>(`/transactions/${id}`);
  return res.data.data;
}

export async function createTransaction(
  payload: CreateTransactionReq,
): Promise<Transaction> {
  const res = await apiClient.post<ApiResponse<Transaction>>(
    "/transactions",
    payload,
  );
  return res.data.data;
}

export async function updateTransaction({
  id,
  payload,
}: UpdateTransactionReq): Promise<Transaction> {
  const res = await apiClient.put<ApiResponse<Transaction>>(
    `/transactions/${id}`,
    payload,
  );
  return res.data.data;
}

export async function deleteTransaction(id: string): Promise<void> {
  await apiClient.delete<ApiResponse<void>>(`/transactions/${id}`);
}
