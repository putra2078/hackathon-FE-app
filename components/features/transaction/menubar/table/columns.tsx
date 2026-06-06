import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import { createColumnHelper } from "@tanstack/react-table";
import { Transaction } from "./types";

const columnHelper = createColumnHelper<Transaction>();

export const Columns = [
  columnHelper.accessor("id", {
    header: "ID-TRANSAKSI",
    cell: (info) => {
      return (
        <span className="text-status-success font-bold">
          #{info.getValue()}
        </span>
      );
    },
  }),
  columnHelper.accessor("tanggal", {
    header: "TANGGAL",
    cell: (info) => {
      return <span>{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("nama", {
    header: "NAMA PELANGGAN",
    cell: (info) => {
      return <span className="font-semibold">{info.getValue()}</span>;
    },
  }),
  columnHelper.accessor("metode", {
    header: "METODE",
    cell: (info) => {
      return <span>{info.getValue().toUpperCase()}</span>;
    },
  }),
  columnHelper.accessor("total", {
    header: "TOTAL",
    cell: (info) => {
      return (
        <span className="font-bold">
          {info
            .getValue()
            .toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
        </span>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "STATUS",
    cell: (info) => {
      switch (info.getValue()) {
        case "selesai":
          return (
            <span className="text-success-foreground bg-success px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
        case "proses":
          return (
            <span className="text-warning-foreground bg-warning px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
        case "batal":
          return (
            <span className="text-danger-foreground bg-danger px-3 py-2 rounded-2xl font-bold ">
              {info.getValue().toUpperCase()}
            </span>
          );
      }
    },
  }),
  columnHelper.display({
    header: "AKSI",
    id: "action",
    cell: () => {
      return (
        <div className="flex justify-center">
          <button className="text-center font-black w-8 h-8 bg-gray-100 rounded-3xl hover:cursor-pointer">
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      );
    },
  }),
];
