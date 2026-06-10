"use client";
<<<<<<< HEAD
import { useMemo } from "react";
=======
>>>>>>> d67205b (add: Table and pagination)
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
<<<<<<< HEAD
import { Table } from "@heroui/react";

import { Column } from "./columns";
import dummy from "./dummy.json";
import StockPagination from "./pagination";

export default function StockTable() {
  const data = dummy;
=======

import { Table, Pagination } from "@heroui/react";

import { useMemo } from "react";
import dummy from "./dummy.json";
import { Column } from "./columns";

export default function Stock() {
  const data = dummy;

  const PAGE_SIZE = 9;
>>>>>>> d67205b (add: Table and pagination)
  const memoizedData = useMemo(() => data, [data]);
  const table = useReactTable({
    data: memoizedData,
    columns: Column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
<<<<<<< HEAD
        pageSize: 6,
      },
    },
  });
  
  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Header Barang" className="min-w-[600px]">
          <Table.Header >
=======
        pageSize: PAGE_SIZE,
      },
    },
  });

  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const pages = Array.from({ length: pageCount }, (_, i) => i);
  const length = table.getRowCount();
  const start = pageIndex * PAGE_SIZE + 1;
  const end = Math.min((pageIndex + 1) * PAGE_SIZE, length);

  return (
    <Table variant="secondary">
      <Table.ScrollContainer>
        <Table.Content aria-label="Team members" className="min-w-[600px]">
          <Table.Header>
>>>>>>> d67205b (add: Table and pagination)
            {table.getHeaderGroups()[0]!.headers.map((head) => {
              return (
                <Table.Column
                  key={head.id}
                  id={head.id}
                  isRowHeader={head.id == "nama"}
<<<<<<< HEAD
                  className="rounded-none text-black font-black"
=======
                  className="rounded-none"
>>>>>>> d67205b (add: Table and pagination)
                >
                  {flexRender(head.column.columnDef.header, head.getContext())}
                </Table.Column>
              );
            })}
          </Table.Header>

          <Table.Body>
            {table.getRowModel().rows.map((row) => (
              <Table.Row key={row.id}>
                {row.getVisibleCells().map((cell) => (
<<<<<<< HEAD
                  <Table.Cell key={cell.id} className={`text-gray-600`}>
                    { flexRender(cell.column.columnDef.cell, cell.getContext()) }
=======
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
>>>>>>> d67205b (add: Table and pagination)
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
<<<<<<< HEAD

      <StockPagination table={table} />
=======
      <Table.Footer>
        <Pagination size="sm">
          {/* Summary page */}
          <Pagination.Summary>
            {start} sampai {end} dari {length} hasil
          </Pagination.Summary>

          <Pagination.Content>
            {/* Previous Button */}
            <Pagination.Previous
              isDisabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              <Pagination.PreviousIcon />
            </Pagination.Previous>

            {
              pages.map((p) => 
                (
                  <Pagination.Item 
                    key={p + 1}

                  >
                    <Pagination.Link
                      isActive={p === pageIndex }
                      onPress={() => {
                        table.setPageIndex(p)
                      }}
                    >
                      {p + 1}
                    </Pagination.Link>
                  </Pagination.Item>
                )
              )
            }

            {/* Next Button */}
            <Pagination.Next
              isDisabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              <Pagination.NextIcon />
            </Pagination.Next>
          </Pagination.Content>
        </Pagination>
      </Table.Footer>
>>>>>>> d67205b (add: Table and pagination)
    </Table>
  );
}
