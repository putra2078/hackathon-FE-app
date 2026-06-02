import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function LatestSale() {
  const transactions = [
    {
      transaction_id: "INV/2024/05/025",
      date: "25 Mei 2024",
      time: "10:15",
      total: "250.000",
      status: "Selesai",
    },
    {
      transaction_id: "INV/2024/07/011",
      date: "11 july 2024",
      time: "09:00",
      total: "50.000",
      status: "Selesai",
    },
    {
      transaction_id: "INV/2024/06/012",
      date: "12 Juni 2024",
      time: "13:15",
      total: "100.000",
      status: "Selesai",
    },
  ];
  return (
    <div className="flex flex-col gap-6 bg-bg-survace rounded-2xl p-6 shadow">
      <div className="flex justify-between items-end">
        <h2 className="font-bold">Penjualan Terbaru</h2>
        <Link href={"/"} className="text-sm text-brand-primary hover:underline">
          Lihat semua
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        {transactions.map((transaction, i) => {
          return (
            <div className="flex justify-between py-2" key={i}>
              <div className="flex items-center gap-4">
                <div className="flex justify-center items-center bg-brand-light w-12 h-12 rounded-lg text-lg text-brand-primary">
                  <FontAwesomeIcon icon={faFileInvoice} />
                </div>
                <div>
                  <h3 className="font-semibold">{transaction.transaction_id}</h3>
                  <p className="text-sm text-gray-500">{transaction.date}, {transaction.time}</p>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <p className="font-semibold">Rp{transaction.total}</p>
                <div className="bg-green-100 text-xs py-1 px-4 rounded-full">
                  <p className="font-semibold text-green-600">{transaction.status}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
