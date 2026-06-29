import { ApiResponse } from "@/types/api/base.types";
import { createNewProductRes, getAllProductsRes, Product } from "@/types/api/product.types";
import { apiClient } from "./client";

export async function getAllProducts(): Promise<getAllProductsRes[]> {
    const res = await apiClient.get<ApiResponse<getAllProductsRes[]>>('/products')
    return res.data.data
}

export async function createNewProduct(payload: Product): Promise<createNewProductRes>{
    const res = await apiClient.post<ApiResponse<createNewProductRes>>('/products', payload)
    return res.data.data
}