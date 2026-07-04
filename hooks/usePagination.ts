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

  // const startPage = Math.max(1, Math.min(page - 1, totalPages - 2));

  const pages = useMemo(() => {
    // Jika total halaman 7 atau kurang, tampilkan semua angka langsung
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Jika halaman aktif ada di dekat halaman awal (halaman 1 sampai 4)
    if (page <= 2) {
      return [1, 2, 3, "...", totalPages];
    }

    // Jika halaman aktif ada di dekat halaman akhir
    if (page >= totalPages - 1) {
      return [1, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // Jika halaman aktif berada tepat di tengah-tengah
    return [
      1,
      "...",
      page - 1,
      page,
      page + 1,
      "...",
      totalPages
    ];
  }, [page, totalPages]); 

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