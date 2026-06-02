import Banner from "@/components/Banner";
import LatestSale from "@/components/features/dashboard/LatestSale";
import LowStockTables from "@/components/features/dashboard/LowStockTables";
import StatCard from "@/components/Shared/StatCard";
import {faBoxOpen, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons"

export default function Home(){
  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="banner-welcome" className="w-full">
        <Banner/>
      </section>

      <section id="stat-cards" className="w-full">
        <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Penjualan" value={"Rp12.231.231"} subText="Profit" icon={faCartShopping}/>
        <StatCard title="Total Produk" value={"238"} subText="Stok Tersedia" icon={faBoxOpen}/>
        <StatCard title="Total Pelanggan" value={"1.024"} subTextGrowth="8.3%" subText="dari bulan lalu" icon={faUser}/>
        </div>
      </section>

      <section id="" className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <LowStockTables/>
          <LatestSale/>
        </div>
      </section>
    </div>
  )
}