"use client";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

import { Table, Pagination } from "@heroui/react";

import { useMemo } from "react";
import dummy from "./dummy.json";
import { Column } from "./columns";

export default function Stock() {
  const data = dummy;

  const PAGE_SIZE = 9;
  const memoizedData = useMemo(() => data, [data]);
  const table = useReactTable({
    data: memoizedData,
    columns: Column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
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
            {table.getHeaderGroups()[0]!.headers.map((head) => {
              return (
                <Table.Column
                  key={head.id}
                  id={head.id}
                  isRowHeader={head.id == "nama"}
                  className="rounded-none"
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
                  <Table.Cell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Content>
      </Table.ScrollContainer>
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
    </Table>
  );
}
