"use client";

import SearchInput from "@/components/features/transaction/menubar/SearchInput";
import DateSelector from "@/components/features/transaction/menubar/DateSelector";
import StatusSelect from "@/components/features/transaction/menubar/StatusSelect";
import Table from "./menubar/table/index";

export default function TransactionMenu() {
  return (
    <section className="p-6 bg-bg-surface border border-gray-200 rounded-2xl shadow">
      {/* Menubar */}
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <SearchInput />
          <DateSelector />
          <StatusSelect />
        </div>
        <button className="py-3 px-6 text-background font-bold rounded-xl shadow hover:cursor-pointer bg-linear-to-b from-primary-500 to-primary-600 active:bg-linear-to-t active:translate-y-px active:shadow-none">
          + Tambah transaksi
        </button>
      </div>
      <br />
      {/* Table */}
      <Table />
    </section>
  );
}
