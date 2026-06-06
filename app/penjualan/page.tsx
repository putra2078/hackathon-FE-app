"use client";
import Card from "@/components/Shared/TransactionCard";
import Transaction from "@/components/features/transaction/index";
import BannerSmall from "@/components/Banner/BannerSmall";

export default function Penjualan() {
  return (
    <>
      <section>
        <BannerSmall
          title="Daftar Transaksi Penujualan"
          breadcrumbs={["Manajemen Toko", "Penjualan"]}
        />
      </section>

      <section>
        <Card />
      </section>

      <section>
        <Transaction />
      </section>
    </>
  );
}
