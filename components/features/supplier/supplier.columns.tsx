// app/supplier/supplier.columns.tsx
import { ColumnDef } from "@/components/Shared/ReusableTable";
import { Chip } from "@heroui/react";
import ActionProductButton from "../product/ActionProductButton";

export interface Supplier {
  name: string;
  pic: string;
  kategori: string;
  kontak: string;
  status: "Aktif" | "Pending" | "Nonaktif";
}

const statusColorMap: Record<Supplier["status"], "success" | "warning" | "danger"> = {
  Aktif:    "success",
  Pending:  "warning",
  Nonaktif: "danger",
};

export const supplierColumns: ColumnDef<Supplier>[] = [
  {
    key: "supplier",
    label: "Supplier",
    // render dua baris: nama tebal + PIC abu
    renderCell: (row) => (
      <div>
        <p className="font-semibold text-gray-900">{row.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">PIC: {row.pic}</p>
      </div>
    ),
    minWidth: 200
  },
  {
    key: "kategori",
    label: "Kategori",
        minWidth: 110
  },
  {
    key: "kontak",
    label: "Kontak",
        minWidth: 140
  },
  {
    key: "status",
    label: "Status",
    renderCell: (row) => {
      return (
        <Chip
          color={statusColorMap[row.status]}
          variant="soft"
          className="rounded-md capitalize"
        >
          {row.status}
        </Chip>
      );
    },
        minWidth: 110
  },
  {
    key: "aksi",
    label: "Aksi",
    renderCell: (row) => (
      <div className="flex items-center gap-2">
        <ActionProductButton />
      </div>
    ),
        minWidth: 150
  },
];