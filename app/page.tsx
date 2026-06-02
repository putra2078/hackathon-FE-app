import Banner from "@/components/Banner";
import StatCard from "@/components/Shared/StatCard";
import {faBoxOpen, faCartShopping, faUser} from "@fortawesome/free-solid-svg-icons"

export default function Home(){
  return (
    <div className="w-full flex flex-col gap-6 mx-auto">
      <section id="banner-welcome" className="w-full">
        <Banner/>
      </section>
      <section id="stat-card" className="w-full">
        <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Penjualan" value={"Rp12.231.231"} subText="Profit" icon={faCartShopping}/>
        <StatCard title="Total Produk" value={"238"} subText="Stok Tersedia" icon={faBoxOpen}/>
        <StatCard title="Total Pelanggan" value={"1.024"} subTextGrowth="8.3%" subText="dari bulan lalu" icon={faUser}/>
        </div>
      </section>
    </div>
  )
}