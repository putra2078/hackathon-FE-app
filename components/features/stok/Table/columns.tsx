import { createColumnHelper } from "@tanstack/react-table";
import { Chip, Button } from "@heroui/react";
import {Icon} from "@iconify/react";

import { stokType } from './type'

const columnHelper = createColumnHelper<stokType>();

const colorMap: Record<string, 'success' | 'danger' | 'warning'> = {
  aman: 'success',
  rendah: 'warning',
  habis: 'danger'
}


export const Column = [
  columnHelper.accessor("nama", {
  header: "Barang",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("sku", {
  header: "SKU",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("kategori", {
  header: "Kategori",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("lokasi", {
  header: "Lokasi",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("stock_available", {
  header: "Stok Tersedia",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("stock_minimum", {
  header: "Stok Minimal",
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("status", {
  header: "Status",
  cell: (info) => (
    <Chip color={colorMap[info.getValue()]} variant="soft" className="font-bold">
      {info.getValue()}
    </Chip>
      
  ),
  }),
  columnHelper.display({
    header: 'Aksi',
    id: "action",
    cell: () => (
      <span className="flex gap-2">
        <Button isIconOnly variant="tertiary" className='rounded-lg'>
          <Icon className="size-4" icon="gravity-ui:eye" />
        </Button>
        <Button isIconOnly variant="tertiary" className='rounded-lg'>
          <Icon className="size-4" icon="gravity-ui:ellipsis" />
        </Button>
      </span>

    )
  })
]