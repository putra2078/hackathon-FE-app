"use client";
import ActionProductButton from "@/components/features/product/ActionProductButton";
import NavBanner from "@/components/Shared/NavBanner";
import { ColumnDef, ReusableTable } from "@/components/Shared/ReusableTable";
import { Chip } from "@heroui/react";

interface Supplier {
  name: string;
  pic: string;
  kategori: string;
  kontak: string;
  status: "Aktif" | "Pending" | "Nonaktif";

  [key: string]: unknown
}

// Example data
const supplierData: Supplier[] = [
  {
    name: "PT. Sinar Mas Abadi",
    pic: "Agus Santoso",
    kategori: "F&B",
    kontak: "01802-374-7577",
    status: "Aktif",
  },
  {
    name: "CV. Indo Berkah",
    pic: "Ratna Dewi",
    kategori: "Toys",
    kontak: "07807-357-7830",
    status: "Aktif",
  },
  {
    name: "Distributor Utama Semesta",
    pic: "Bambang Hermawan",
    kategori: "Frozen Food",
    kontak: "07809-383-7011",
    status: "Pending",
  },
];

const supplierColumns: ColumnDef<Supplier>[] = [
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
  },
  {
    key: "kategori",
    label: "Kategori",
  },
  {
    key: "kontak",
    label: "Kontak",
  },
  {
    key: "status",
    label: "Status",
    renderCell: (row) => {
      const colorMap: Record<
        Supplier["status"],
        "success" | "warning" | "danger"
      > = {
        Aktif: "success",
        Pending: "warning",
        Nonaktif: "danger",
      };
      return (
        <Chip color={colorMap[row.status]} variant="soft" className="rounded-md capitalize">
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
  },
];

export default function SupplierPage() {
  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Daftar Supllier" />
      </section>
      <section className="w-full">
        <ReusableTable<Supplier>
          columns={supplierColumns}
          data={supplierData}
        />
      </section>
    </div>
  );
}
