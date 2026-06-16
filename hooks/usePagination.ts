// hooks/usePagination.ts
import { useState, useMemo } from "react";
import { PaginationConfig } from "@/components/Shared/ReusableTable";

interface UsePaginationOptions<T> {
  data: T[];
  rowsPerPage?: number;
  itemLabel?: string;
}

interface UsePaginationReturn<T> {
  currentData: T[];         // data yang sudah di-slice sesuai halaman
  pagination: PaginationConfig;
}

export function usePagination<T>({
  data,
  rowsPerPage = 10,
  itemLabel = "data",
}: UsePaginationOptions<T>): UsePaginationReturn<T> {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const startPage = Math.max(1, Math.min(page - 1, totalPages - 2));
  const pages = Array.from({ length: Math.min(3, totalPages) }, (_, i) => startPage + i);

  const currentData = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    return data.slice(start, start + rowsPerPage);
  }, [page, data, rowsPerPage]);

  const start = (page - 1) * rowsPerPage + 1;
  const end   = Math.min(page * rowsPerPage, data.length);

  return {
    currentData,
    pagination: {
      totalItems: data.length,
      currentPage: page,
      totalPages,
      start,
      end,
      itemLabel,
      pages,
      onPageChange: setPage,
    },
  };
}