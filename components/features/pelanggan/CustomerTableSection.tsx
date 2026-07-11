"use client";
import { ReusableTable } from "@/components/Shared/ReusableTable";
import SelectList, { createList } from "@/components/Shared/SelectList";
import TableSearchField from "@/components/Shared/TableSearchField";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@heroui/react";
import { Customer, customerColumns } from "./customer.columns";
import { usePagination } from "@/hooks/usePagination";
import { customersData } from "./mock/customer.mock";

export default function CustomerTableSection() {
  const { currentData, pagination } = usePagination({
    data: customersData,
    rowsPerPage: 5,
    itemLabel: "customer",
  });

  const StatusList = createList([
    { key: "aktif", textValue: "Aktif" },
    { key: "nonaktif", textValue: "Nonaktif" },
  ]);
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      <div className="flex flex-col bg-surface-tertiary border border-surface-border rounded-xl overflow-hidden">
        <div id="filter" className="flex gap-4 items-center p-6 w-full">
          <TableSearchField
            placeholder="Cari Pelanggan..."
            aria_label="Cari Pelanggan"
          />
          <SelectList
            ListItems={StatusList}
            placeholder="Status"
            width={128}
            ariaLabel="Pilih status"
          />
          <div className="ml-auto">
            <Button
              variant="primary"
              className={
                "rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700"
              }
            >
              <FontAwesomeIcon icon={faPlus} /> Tambah Pelanggan
            </Button>
          </div>
        </div>
        <ReusableTable<Customer>
          columns={customerColumns}
          data={currentData}
          pagination={pagination}
          emptyMessage="Belum ada data pelanggan"
        />
      </div>
    </div>
  );
}
