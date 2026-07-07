import { getAllCategory } from "@/lib/api/category";
import { getAllProducts } from "@/lib/api/product";
import { getErrorMessage } from "@/lib/getErrorMessage";
import { SWR_KEYS } from "@/lib/swr-keys";
import { useMemo } from "react";
import useSWR from "swr";

export function useGetAllProduct() {
  const {
    data: products,
    error: productError,
    isLoading: isLoadingProducts,
    mutate,
  } = useSWR(SWR_KEYS.product.all, getAllProducts);

  const {
    data: categories,
    error: categoryError,
    isLoading: isLoadingCategories,
  } = useSWR(SWR_KEYS.category.all, getAllCategory);

  const categoryMap = useMemo(() => {
    if (!categories) return {};
    return Object.fromEntries(categories.map((cat) => [cat.id, cat.name]));
  }, [categories]);

  // categoryName ditambahkan sebagai field baru
  const productsWithCategory = useMemo(() => {
    if (!products) return [];
    return products.map((product) => ({
      ...product,
      categoryName: categoryMap[product.categoryId] ?? "Kategori tidak ditemukan",
    }));
  }, [products, categoryMap]);

  return {
    products: productsWithCategory,
    error:
      getErrorMessage(productError, "Gagal mengambil daftar produk") ??
      getErrorMessage(categoryError, "Gagal mengambil daftar kategori"),
    isLoading: isLoadingProducts || isLoadingCategories,
    refetch: mutate,
  };
}