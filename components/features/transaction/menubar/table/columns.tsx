"use client";
import { createColumnHelper } from "@tanstack/react-table";
import { Transaction } from "./types";

import { Button, Dropdown, Label } from "@heroui/react";
import { EllipsisVertical } from "@gravity-ui/icons";
import { formatRupiah } from "@/components/Functions/FormatRupiah";

const columnHelper = createColumnHelper<Transaction>();

export const Columns = [
  columnHelper.accessor("id", {
    header: "ID-TRANSAKSI",
    cell: (info) => {
      return (
        <span className="text-green-700 font-bold">
          #{info.getValue()}
        </span>
      );
    },
  }),
  columnHelper.accessor("tanggal", {
    header: "TANGGAL",
    cell: (info) => {
      return <span>{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("nama", {
    header: "NAMA PELANGGAN",
    cell: (info) => {
      return <span className="font-semibold">{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("metode", {
    header: "METODE",
    cell: (info) => {
      return <span>{info.getValue().toUpperCase()}</span>;
    },
  }),
  columnHelper.accessor("total", {
    header: "TOTAL",
    cell: (info) => {
      return (
        <span className="font-bold">
          {formatRupiah(info.getValue())}
        </span>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "STATUS",
    cell: (info) => {
      switch (info.getValue()) {
        case "selesai":
          return (
            <span className="text-success-foreground bg-success px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
        case "proses":
          return (
            <span className="text-warning-foreground bg-warning px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
        case "batal":
          return (
            <span className="text-danger-foreground bg-danger px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
      }
    },
  }),
  columnHelper.display({
    header: "AKSI",
    id: "action",
    cell: () => {
      return (
        <Dropdown>
          <Button isIconOnly aria-label="Menu" variant="tertiary">
            <EllipsisVertical className="size-4 shrink-0 text-muted" />
          </Button>
          <Dropdown.Popover placement='bottom end' className="rounded-xl">
            <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
              <Dropdown.Item id="edit-item" textValue="Edit item" className="rounded-lg">
                <Label className="font-bold">Edit item</Label>
              </Dropdown.Item>
              <Dropdown.Item id="delete-item" textValue="Delete file" variant="danger" className="rounded-lg">
                <Label className="font-bold text-red-700">Delete item</Label>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown.Popover>
        </Dropdown>
      );
    },
  }),
];

/* <Button isIconOnly className="hover:cursor-pointer" variant="tertiary">
  
</Button> */