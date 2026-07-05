import { CategoryRes } from "@/types/api/category.types";
import { apiClient } from "./client";
import { ApiResponse } from "@/types/api/base.types";

export async function getAllCategory(): Promise<CategoryRes[]> {
  const res = await apiClient.get<ApiResponse<CategoryRes[]>>(
    `/categories`
  );
  return res.data.data;
}
export async function getCategoryById(id: string): Promise<CategoryRes> {
  const res = await apiClient.get<ApiResponse<CategoryRes>>(
    `/categories/${id}`
  );
  return res.data.data;
}