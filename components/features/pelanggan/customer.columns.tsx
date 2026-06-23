import { ColumnDef } from "@/components/Shared/ReusableTable";
import { Chip } from "@heroui/react";
import ActionProductButton from "../product/ActionProductButton";

export interface Customer {
  name: string;
  id: string;
  category: string;
  point: number;
  last_buy: string;
  status: "aktif" | "nonaktif";
}

const statusColorMap: Record<Customer["status"], "success" | "danger"> = {
  aktif: "success",
  nonaktif: "danger",
};

export const customerColumns: ColumnDef<Customer>[] = [
  {
    key: "pelanggan",
    label: "Pelanggan",
    renderCell: (row) => (
      <div>
        <p className="font-semibold text-gray-900">{row.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">{row.id}</p>
      </div>
    ),
  },
  {
    key: "category",
    label: "Kategori"
  },
  {
    key: "point",
    label: "Point"
  },
  {
    key: "last_buy",
    label: "Terakhir Belanja"
  },
  {
    key: 'status',
    label: 'Status',
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
