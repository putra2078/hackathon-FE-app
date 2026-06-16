"use client";
import { supplierData } from "@/components/features/supplier/mock/supplier.mock";
import { Supplier, supplierColumns } from "@/components/features/supplier/supplier.columns";
import NavBanner from "@/components/Shared/NavBanner";
import { ReusableTable } from "@/components/Shared/ReusableTable";
import { usePagination } from "@/hooks/usePagination";


export default function SupplierPage() {
  const {currentData, pagination} = usePagination({
    data: supplierData,
    rowsPerPage: 5,
    itemLabel: 'supplier'
  })

  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="navBanner" className="w-full">
        <NavBanner bannerTitle="Daftar Supllier" />
      </section>
      <section className="w-full">
        <ReusableTable<Supplier>
          columns={supplierColumns}
          data={currentData}
          pagination={pagination}
        />
      </section>
    </div>
  );
}
