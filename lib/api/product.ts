import { ApiResponse } from "@/types/api/base.types";
import {
  createNewProductRes,
  getAllProductsRes,
  getDetailProductRes,
  Product,
  UpdateProductReq,
} from "@/types/api/product.types";
import { apiClient } from "./client";

export async function getAllProducts(): Promise<getAllProductsRes[]> {
  const res =
    await apiClient.get<ApiResponse<getAllProductsRes[]>>("/products");
  return res.data.data;
}

export async function createNewProduct(
  payload: Product,
): Promise<createNewProductRes> {
  
  const res = await apiClient.post<ApiResponse<createNewProductRes>>(
    "/products/",
    payload,
  );
  return res.data.data;
}

export async function getProductById(id: string): Promise<getDetailProductRes> {
  const res = await apiClient.get<ApiResponse<getDetailProductRes>>(
    `/products/${id}`
  );
  return res.data.data;
}

export async function updateProduct({
  id,
  payload,
}: UpdateProductReq): Promise<Product> {
  const res = await apiClient.put<ApiResponse<Product>>(
    `/products/${id}`,
    payload,
  );
  return res.data.data;
}

export async function deleteProductById(id: string): Promise<Product> {
  const res = await apiClient.delete<ApiResponse<Product>>(
    `/products/${id}`
  );
  return res.data.data;
}
