import { ApiResponse } from "@/types/api/base.types";
import { Product } from "@/types/api/product.types";
import { apiClient } from "./client";

export async function getAllProducts(): Promise<Product[]> {
    const res = await apiClient.get<ApiResponse<Product[]>>('/products')
    return res.data.data
}