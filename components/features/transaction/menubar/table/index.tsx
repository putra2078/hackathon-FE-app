import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import mainData from "./data.json";
import { Columns } from "./columns";
import PaginationType1 from "@/components/Shared/Pagination/Pagination-1";

export default function Table() {
  const data = mainData;

  const memoizedData = useMemo(() => data, [data]);
  
  const table = useReactTable({
    data: memoizedData,
    columns: Columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  return (
    <>
      <table className="w-full border-separate border-spacing-0 overflow-hidden border rounded-2xl">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className={`${header.id === "action" ? "text-center" : "text-left"} p-4 font-black`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="bg-background text-left text-sm ">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-50 ">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-4 border-y border-gray-100">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <PaginationType1 table={table} />
    </>
  );
}
