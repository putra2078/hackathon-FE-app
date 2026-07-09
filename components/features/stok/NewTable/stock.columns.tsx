import { ColumnDef } from "@/components/Shared/ReusableTable";
import { formatPrice } from "@/lib/formatPrice";
import { Stock } from "@/types/api/stock.types";
import ActionProductButton from "../../product/ActionProductButton";

export const stockColumns: ColumnDef<Stock>[] = [
  {
    key: "barang",
    label: "Barang",
    minWidth: 220,
    renderCell: (row) => (
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center w-12 h-12 bg-primary rounded-md shrink-0 overflow-hidden border">
          <img
            src="sawit.jpg"
            alt="stock-image"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="truncate">
          <span className="truncate font-semibold">{row.name}</span>
        </span>
      </div>
    ),
  },
  {
    key: "category",
    label: "Kategori",
  },
  {
    key: "stock",
    label: "Stok Tersedia",
    renderCell: (row) => {
      switch (true) {
        case row.stock == 0:
          return <p className="text-danger-foreground">{row.stock}</p>;
        case row.stock <= 20:
          return <p className="text-warning-foreground">{row.stock}</p>;
        case row.stock >= 21:
          return <p className="text-success-foreground">{row.stock}</p>;
      }
    },
  },
  {
    key: "buyPrice",
    label: "Harga Beli",
    renderCell: (row) => <p>{formatPrice(row.buyPrice)}</p>,
  },
    {
      key: "aksi",
      label: "Aksi",
      minWidth: 160,
      renderCell: (row) =>  (
        <div className="flex items-center gap-2">
          <ActionProductButton />
        </div>
      ),
    }
];
