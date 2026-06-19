"use client";
import TransactionCard from "@/components/Shared/TransactionCard";
import Transaction from "@/components/features/transaction/index";
import BannerSmall from "@/components/Banner/BannerSmall";

export default function Penjualan() {
  return (
    <>
      <section>
        <BannerSmall
          title="Daftar Transaksi Penujualan"
        />
      </section>

      <section>
        <TransactionCard />
      </section>

      <section>
        <Transaction />
      </section>
    </>
  );
}
