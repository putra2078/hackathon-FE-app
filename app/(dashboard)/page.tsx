import Banner from "@/components/features/dashboard/Banner";
import CategoryChart from "@/components/features/dashboard/CategoryChart";
import LatestSale from "@/components/features/dashboard/LatestSale";
import LowStockTables from "@/components/features/dashboard/LowStockTables";
import SalesChart from "@/components/features/dashboard/SalesChart";
import StatCard from "@/components/Shared/StatCard";
import {
  faBoxOpen,
  faCartShopping,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function DashboardPage() {
  return (
    <div className="w-full flex flex-col gap-4 mx-auto">
      <section id="banner-welcome" className="w-full">
        <Banner />
      </section>

      <section id="stat-cards" className="w-full">
        <div className="grid grid-cols-3 gap-6">
          <StatCard
            title="Total Penjualan"
            value={"Rp12.231.231"}
            subText="Profit"
            icon={faCartShopping}
            gradientClass="bg-linear-to-b from-primary-600 to-primary-700"
          />
          <StatCard
            title="Total Produk"
            value={"238"}
            subText="Stok Tersedia"
            icon={faBoxOpen}
            gradientClass="bg-linear-to-b from-primary-500 to-primary-600"
          />
          <StatCard
            title="Total Pelanggan"
            value={"1.024"}
            subTextGrowth="8.3%"
            subText="dari bulan lalu"
            icon={faUser}
            gradientClass="bg-linear-to-b from-primary-400 to-primary-500"
          />
        </div>
      </section>

      <section id="" className="w-full">
        <div className="grid grid-cols-2 gap-4">
          <LowStockTables />
          <LatestSale />
        </div>
      </section>

      <section id="chart" className="w-full">
        <div className="grid grid-cols-1 gap-4">
          <SalesChart />
          <CategoryChart />
        </div>
      </section>
    </div>
  );
}
