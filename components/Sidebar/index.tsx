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
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import { userStorage } from "@/lib/storage";
import { buttonVariants } from "@heroui/styles";

export default function Sidebar() {
  const pathname = usePathname();
    const userData = userStorage.get()
  
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
        <Link href={'/profile'} className={`${buttonVariants({ variant: "primary" })} text-black rounded-xl shadow-sm border-0 bg-primary-100 hover:bg-primary-200 px-4 py-8 flex gap-2 items-center w-full`}>
          <div>
            <FontAwesomeIcon icon={faShop} className="text-primary text-3xl" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">{userData?.name || "Anomali"}</h3>
            <p className="text-xs">Pemilik</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faEllipsisVertical} size="lg"/>
          </div>
        </Link>
      </div>
    </aside>
  );
}
