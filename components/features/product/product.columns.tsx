import { ColumnDef } from "@/components/Shared/ReusableTable";
import { Chip } from "@heroui/react";
import ActionProductButton from "./ActionProductButton";
import { Product } from "@/types/api/product.types";
import { formatPrice } from "@/lib/formatPrice";

// export interface ProductExt extends Product {
//   status: "aktif" | "tidak aktif";
// }

// const statusColorMap: Record<
//   ProductExt["status"],
//   "success" | "warning" | "danger"
// > = {
//   aktif: "success",
//   "tidak aktif": "danger",
// };

export const productColumns: ColumnDef<Product>[] = [
  {
    key: "produk",
    label: "Produk",
    minWidth: 220,
    renderCell: (row) => (
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-12 h-12 bg-primary rounded-md shrink-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1628794397139-a45fc3286892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="product-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="truncate">
          <p className="truncate font-semibold">{row.name}</p>
          <p className="text-sm text-gray-500">SKU: {row.code}</p>
        </div>
      </div>
    ),
  },
  {
    key: "category",
    label: "Kategori",
    minWidth: 160
  },
  {
    key: "stock",
    label: "Stok",
    minWidth: 100,
    renderCell: (row) => (
      <div className="flex flex-col ">
        <p className="text-success-foreground font-semibold">{row.stock}</p>
        <p className="text-sm text-gray-500">Tersedia</p>
      </div>
    ),
  },
  { key: "buyPrice", label: "Harga Beli", minWidth: 140, renderCell: (row) => (
    <p>{formatPrice(row.buyPrice)}</p>
  )},
  { key: "sellPrice", label: "Harga Jual", minWidth: 140, renderCell: (row) => (
    <p>{formatPrice(row.sellPrice)}</p>
  )},
  // {
  //   key: "status",
  //   label: "Status",
  //   minWidth: 110,
  //   renderCell: (row) => (
  //     <Chip
  //       color={statusColorMap[row.status]}
  //       variant="soft"
  //       className="rounded-md capitalize"
  //     >
  //       {row.status}
  //     </Chip>
  //   ),
  // },
  {
    key: "aksi",
    label: "Aksi",
    minWidth: 160,
    renderCell: (row) =>  (
      <div className="flex items-center gap-2">
        <ActionProductButton id={row.id} code={row.code}/>
      </div>
    ),
  },
];
