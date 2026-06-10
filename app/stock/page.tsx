import BannerSmall from "@/components/Banner/BannerSmall";
import Filtering from "@/components/features/stok/Filtering";
import Stock from "@/components/features/stok/Table";
import { Tab } from "@heroui/react";

export default function Stok() {
  return (
    <>
      <section className="mb-4">
        <BannerSmall title="Stok Barang" />
      </section>

      <section className="Table border w-full rounded-xl my-4 p-0">
        {/* Filtering input */}
        <Filtering />
        <Stock />
      </section>
    </>
  );
}
