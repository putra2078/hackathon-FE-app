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

<<<<<<< HEAD
=======

>>>>>>> d67205b (add: Table and pagination)
export const Column = [
  columnHelper.accessor("nama", {
  header: "Barang",
  cell: (info) => {
<<<<<<< HEAD
      const {image, nama, satuan} = info.row.original
      return (
        <div className="flex items-center gap-4">
          <div className="p-1 bg-gray-200 rounded-lg flex items-center justify-center">
            <img src={image} width='60' height='60' alt="imaj" />
          </div>
          <span>
            <span className="font-bold text-black">{nama}</span>
            <p>{satuan}</p>
          </span>
        </div>
      )
        
=======
      return info.getValue();
>>>>>>> d67205b (add: Table and pagination)
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
<<<<<<< HEAD
        const status = info.getValue();
        const borderValue = 30;
        switch(true) {
          case status == 0:
            return(<strong className="text-red-500">{status}</strong>)
          case status >= borderValue:
            return (<strong className="text-green-600">{status}</strong>)
          case status < borderValue:
            return (<strong className="text-yellow-500">{status}</strong>)
        }
=======
      return info.getValue();
>>>>>>> d67205b (add: Table and pagination)
    },
  }),
  columnHelper.accessor("stock_minimum", {
  header: "Stok Minimal",
<<<<<<< HEAD
  meta: {className: 'text-center'},
=======
>>>>>>> d67205b (add: Table and pagination)
  cell: (info) => {
      return info.getValue();
    },
  }),
  columnHelper.accessor("status", {
  header: "Status",
  cell: (info) => (
<<<<<<< HEAD
    <Chip color={colorMap[info.getValue()]} variant="soft" className="font-bold rounded-md">
      {info.getValue()}
    </Chip>
=======
    <Chip color={colorMap[info.getValue()]} variant="soft" className="font-bold">
      {info.getValue()}
    </Chip>
      
>>>>>>> d67205b (add: Table and pagination)
  ),
  }),
  columnHelper.display({
    header: 'Aksi',
    id: "action",
    cell: () => (
<<<<<<< HEAD
      <span className="flex gap-2 text-black">
=======
      <span className="flex gap-2">
>>>>>>> d67205b (add: Table and pagination)
        <Button isIconOnly variant="tertiary" className='rounded-lg'>
          <Icon className="size-4" icon="gravity-ui:eye" />
        </Button>
        <Button isIconOnly variant="tertiary" className='rounded-lg'>
          <Icon className="size-4" icon="gravity-ui:ellipsis" />
        </Button>
      </span>
<<<<<<< HEAD
    )
  })
]
=======

    )
  })
]
>>>>>>> d67205b (add: Table and pagination)
