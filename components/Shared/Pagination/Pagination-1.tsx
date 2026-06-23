import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Table } from "@tanstack/react-table";

interface PaginationProps<TData> {
  table: Table<TData>;
}

export default function PaginationType1<TData>({ table }: PaginationProps<TData>) {
  const buttonStyle = `border border-gray-200 w-8 h-8 rounded-lg hover:cursor-pointer`;
  const [pageIn, setPageIn] = useState([0, 1, 2]);

  const isCurrentPage = (idx: number) =>
    table.getState().pagination.pageIndex === idx
      ? "text-background bg-primary"
      : "text-foreground bg-background";
  return (
    <div className="flex justify-between">
      <span>
        Menampilkan <strong>{table.getRowModel().rows.length}</strong> dari{" "}
        <strong>{table.getRowCount()}</strong> Transaksi
      </span>

      <div className="flex gap-1">
        <button
          onClick={() => {
            table.previousPage();
            // Mencegah underflow ke -1 index
            if (pageIn[0] !== 0) {
              setPageIn((prevPageIn) => prevPageIn.map((page) => page - 1));
            }
          }}
          disabled={!table.getCanPreviousPage()}
          className={buttonStyle}
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>

        {pageIn.map((idx) => (
          <button
            key={idx + 1}
            onClick={() => {
              table.setPageIndex(idx);
            }}
            className={`
                              ${buttonStyle}
                              ${isCurrentPage(idx)}
                          `}
          >
            {idx + 1}
          </button>
        ))}

        <button
          onClick={() => {
            table.nextPage();
            // Mencegah overflow ke 8 index
            if (table.getPageCount() >= pageIn[2] + 2) {
              setPageIn((pageIn) => pageIn.map((page) => page + 1));
            }
          }}
          disabled={!table.getCanNextPage()}
          className={buttonStyle}
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
}
