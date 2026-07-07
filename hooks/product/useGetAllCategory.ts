import { createList } from "@/components/Shared/SelectList";
import { getAllCategory } from "@/lib/api/category";
import { SWR_KEYS } from "@/lib/swr-keys";
import { useMemo } from "react";
import useSWR from "swr";

export function useGetAllCategory() {
  const { data, error } = useSWR(
    SWR_KEYS.category.all,
    getAllCategory,
  );

  const productCategoryList = useMemo(() => {
    if (!data) return [];
    
    const mappingCategories = data.map(cat => ({
      key: cat.id,
      textValue: cat.name
    }));

    return createList(mappingCategories);
  }, [data]);

  return {
    categoryList: productCategoryList,
    error: error,
    isLoading: !error && !data
  }
}
