import BannerSmall from "@/components/Banner/BannerSmall";
import Filtering from "@/components/features/stok/Filtering";
import StockTable from "@/components/features/stok/Table";

export default function Stok() {
  return (
    <>
      <section className="mb-4">
        <BannerSmall title="Stok Barang" />
      </section>

      <section className="Table border w-full rounded-xl my-4 p-0">
        {/* Filtering input */}
        <Filtering />
        <StockTable />
      </section>
    </>
  );
}
