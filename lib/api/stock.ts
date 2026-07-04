import { Stock } from "@/types/api/stock.types";
import { apiClient } from "./client";
import { ApiResponse } from "@/types/api/base.types";

export async function getAllStock(): Promise<Stock[]> {
    const res = await apiClient.get<ApiResponse<Stock[]>>('/products/stock')
    return res.data.data
}