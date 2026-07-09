import { getCategoryById } from "@/lib/api/category";
import { SWR_KEYS } from "@/lib/swr-keys";
import useSWR from "swr";

export function useGetCategoryById(id: string | undefined){
    const {data, error, isLoading} = useSWR(id ? SWR_KEYS.category.detail(id) : null, ()=> getCategoryById(id!))

    return {
        category: data,
        error,
        isLoading
    }
}