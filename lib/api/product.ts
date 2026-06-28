import { ApiResponse } from "@/types/api/base.types";
import { createNewProductRes, getAllProductsRes } from "@/types/api/product.types";
import { apiClient } from "./client";

export async function getAllProducts(): Promise<getAllProductsRes[]> {
    const res = await apiClient.get<ApiResponse<getAllProductsRes[]>>('/products')
    return res.data.data
}

export async function createNewProduct(): Promise<createNewProductRes>{
    const res = await apiClient.post<ApiResponse<createNewProductRes>>('/products')
    return res.data.data
}