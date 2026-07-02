"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faShop,
  faSackDollar,
  faWarehouse,
  faPeopleGroup,
  faTruckFast,
  faCartShopping,
  faBoxesPacking,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const pathname = usePathname();
  const itemsMenu = [
    { name: "dashboard", href: "/", icon: faHouse },
    { name: "produk", href: "/produk", icon: faBoxesPacking },
    { name: "penjualan", href: "/penjualan", icon: faSackDollar },
    { name: "pembelian", href: "/pembelian", icon: faCartShopping },
    { name: "stok", href: "/stock", icon: faWarehouse },
    { name: "pelanggan", href: "/pelanggan", icon: faPeopleGroup },
    { name: "supplier", href: "/supplier", icon: faTruckFast },
  ];
  return (
    <aside className="bg-surface p-4 w-60 flex flex-col sticky top-0 left-0 h-screen shadow overflow-y-auto scrollbar-thin">
      <div className="flex flex-col gap-12">
        {/* Logo */}
        <div className="flex items-center py-3">
          <div className="w-16">
            <img
              src="./brand-icon.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-bold text-2xl/tight">
              Toko<span className="text-primary">Kita</span>
            </h1>
            <p className="text-slate-600 text-base/tight">Manajemen Toko</p>
          </div>
        </div>
        {/* Nav List */}
        <nav className="flex flex-col gap-4">
          {itemsMenu.map((item, i) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={i}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-xl gap-6 transition-all ${isActive ? "bg-primary-100 text-primary shadow" : " hover:bg-primary-50 hover:text-primary"}`}
              >
                <span>
                  <FontAwesomeIcon icon={item.icon} className="text-xl" />
                </span>{" "}
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bagian bawah */}
        <div className="flex gap-2 px-4 py-6 bg-primary-100 rounded-xl items-center">
          <div>
            <FontAwesomeIcon icon={faShop} className="text-primary text-3xl" />
          </div>
          <div>
            <h3 className="font-semibold">Toko sejahtera</h3>
            <p className="text-xs">Pemilik</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
