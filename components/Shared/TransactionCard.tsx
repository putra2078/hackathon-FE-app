import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBoxOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function TransactionCard() {
  // Nanti akan difetch?
  const transaction = 42;
  const pendapatan = "42.500.000";
  const keranjang = "101.190";

  const cardInfo = [
    {
      title: "Transaksi Hari ini",
      description: `${transaction} Transaksi`,
      icon: faCartShopping,
      gradient: "bg-linear-to-b from-primary-600 to-primary-500",
    },
    {
      title: "Total Pendapatan",
      description: `Rp.${pendapatan}`,
      icon: faBoxOpen,
      gradient: "bg-linear-to-b from-primary-500 to-primary-600",
    },
    {
      title: "Rata-rata Keranjang",
      description: `Rp.${keranjang}`,
      icon: faUser,
      gradient: "bg-linear-to-b from-primary-500 to-primary-600",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-4 w-full my-6">
      {cardInfo.map((info, index) => {
        return (
          <div
            key={index}
            className="min-h-18 flex items-center bg-surface border border-gray-200 rounded-2xl shadow"
          >
            <div
              className={`m-6 ${info.gradient} text-background text-3xl min-w-16 min-h-16 rounded-2xl flex items-center justify-center shadow`}
            >
              <FontAwesomeIcon icon={info.icon} className="relative" />
            </div>
            <span>
              <p>{info.title}</p>
              <strong className="text-3xl">{info.description}</strong>
            </span>
          </div>
        );
      })}
    </section>
  );
}
