"use client";
import { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Table } from "@heroui/react";

import { Column } from "./columns";
import dummy from "./dummy.json";
import StockPagination from "./pagination";

export default function StockTable() {
  const data = dummy;
  const memoizedData = useMemo(() => data, [data]);
  const table = useReactTable({
    data: memoizedData,
    columns: Column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 6,
      },
    },
  });
  
  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Header Barang" className="min-w-[600px]">
          <Table.Header>
            {table.getHeaderGroups()[0]!.headers.map((head) => {
              return (
                <Table.Column
                  key={head.id}
                  id={head.id}
                  isRowHeader={head.id == "nama"}
                  className="rounded-none text-black font-black bg-surface"
                >
                  {flexRender(head.column.columnDef.header, head.getContext())}
                </Table.Column>
              );
            })}
          </Table.Header>

          <Table.Body>
            {table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id} className='bg-background'>
                {row.getVisibleCells().map((cell) => (
                  <Table.Cell key={cell.id} className={`text-gray-600`}>
                    { flexRender(cell.column.columnDef.cell, cell.getContext()) }
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>

      <StockPagination table={table} />
    </Table>
  );
}
