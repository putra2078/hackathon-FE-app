"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/react";

// Definisi tiap kolom
export interface ColumnDef<T> {
  key: string;                          // unique key untuk kolom
  label: string;                        // teks header
  className?: string;                   // class tambahan untuk <th>
  cellClassName?: string;               // class tambahan untuk <td>
  renderCell?: (row: T) => React.ReactNode; // custom renderer; jika tidak ada, pakai row[key]
}

interface ReusableTableProps<T extends object> {
  columns: ColumnDef<T>[];
  data: T[];
  emptyContent?: string;
}

export function ReusableTable<T extends object>({
  columns,
  data,
}: ReusableTableProps<T>) {
  return (
    <Table
      aria-label="Reusable Table"
      className="rounded-none p-0"
    >
        <Table.ResizableContainer>
            <Table.Content className="min-w-[700px]">
                {/* Header */}
                <TableHeader className={"bg-surface-secondary border border-surface-border"}>
                    {columns.map((col, i) => (
                    <TableColumn isRowHeader={i === 0} key={col.key} className={"font-semibold text-black text-sm"}>
                        {col.label}
                    </TableColumn>
                    ))}
                </TableHeader>

                {/* Body */}
                <TableBody>
                    {data.map((row, rowIndex) => (
                    <TableRow key={rowIndex} className={"*:bg-surface-tertiary hover:*:bg-surface-secondary *:border-y *:border-surface-border"}>
                        {columns.map((col) => (
                        <TableCell key={col.key} className={'rounded-none'}>
                            {col.renderCell
                            ? col.renderCell(row)
                            : String((row as Record<string, unknown>)[col.key] ?? "-")}
                        </TableCell>
                        ))}
                    </TableRow>
                    ))}
                </TableBody>
            </Table.Content>
        </Table.ResizableContainer>
    </Table>
  );
}