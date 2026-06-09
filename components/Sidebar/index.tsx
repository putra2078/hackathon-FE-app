"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBoxOpen, faShop } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const pathname = usePathname();
  const itemsMenu = [
    { name: "Dashboard", href: "/", icon: faHouse },
    { name: "Produk", href: "/produl", icon: faBoxOpen },
    { name: "Penjualan", href: "/penjualan", icon: faBoxOpen },
    { name: "Pembelian", href: "/pembelian", icon: faBoxOpen },
    { name: "Stok", href: "/stock", icon: faBoxOpen },
    { name: "Pelanggan", href: "/pelanggan", icon: faBoxOpen },
    { name: "Supplier", href: "/supplier", icon: faBoxOpen },
  ];
  return (
    <aside className="bg-surface p-4 w-60 flex flex-col sticky top-0 left-0 h-screen shadow overflow-y-auto scrollbar-thin">
      <div className="flex flex-col gap-12">
        {/* Logo */}
        <div className="flex items-center py-3">
          <div className="w-16">
            <img
              src="brand-icon.svg"
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
            const isActive = pathname === item.href;
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
