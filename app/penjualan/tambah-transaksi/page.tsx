"use client";
import BannerSmall from      "@/components/Banner/BannerSmall";
import Combox from           "@/components/features/transaction/tambah-transaksi/Combox";
import SimpanTransaksi from  '@/components/features/transaction/tambah-transaksi/Modal';
import PilihTransaksi from   '@/components/features/transaction/tambah-transaksi/PilihTransaksi';
import { PaymentSummary } from "@/components/features/transaction/tambah-transaksi/PaymentSummary";
import TipsPopup from "@/components/features/transaction/tambah-transaksi/TipsPopup";
import { formatRupiah } from "@/components/Functions/FormatRupiah";
import { ProductCartItem } from "@/components/features/transaction/tambah-transaksi/ProductCartItem";

import { 
  Key, 
  Button, 
  SearchField,
  Surface,
  useOverlayState
} from                       "@heroui/react";
import { 
  faMoneyBillWave, 
  faQrcode, 
  faBuildingColumns
} from                       "@fortawesome/free-solid-svg-icons";
import { 
  CirclePlusFill 
} from                       "@gravity-ui/icons";
import Link from             "next/link";
import { useState } from     "react";
import ProdukDrawer from "@/components/features/transaction/tambah-transaksi/Drawer";


export default function TambahTransaksi() {
  const [metode, setMetode] = useState<Key | null>();;
  const list = [
    { id: 'Tunai', value:'Tunai', desc: 'Bayar langsung di kasir', icon: faMoneyBillWave}, 
    { id: 'Qris', value:'Qris', desc: 'Gopay, OVO, Dana, ShopeePay', icon: faQrcode},
    { id: 'Transfer', value:'Transfer', desc: 'BCA, Mandiri, BNI, BRI', icon: faBuildingColumns},
  ];


  const subtotal = 280000;
  const tax = subtotal * 0.11;
  const discount = subtotal * 0.20;
  const totalHarga = subtotal + tax - discount;

  const drawerState = useOverlayState();
  return (
    <div>
      <BannerSmall title="Tambah Transaksi"></BannerSmall>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">    

        {/* left side */}
        <section className="md:col-span-2 flex flex-col gap-5">
          <Surface className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pelanggan</h2>
            <Combox title="Cari atau pilih pelanggan..." list={['John Doe', 'Jane Smith', 'Bob Johnson']} />
          </Surface>
          
          <Surface className="bg-surface p-5 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-800">Daftar Produk</h2>
              <SearchField name="search" aria-label='Search Field' className="border rounded-md">
                <SearchField.Group className="rounded-md">
                  <SearchField.SearchIcon />
                  <SearchField.Input
                    className="w-[280px]"
                    placeholder="Cari Produk..."
                  />
                  <SearchField.ClearButton />
                </SearchField.Group>
              </SearchField>
            </div>

            <article className="grid grid-cols-3 gap-4">
              <ProductCartItem
                imageUrl="/Keyboard.jpg"
                name="Kopi Arabika Gayo 250g"
                unitPrice={85000}
                quantity={2}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onRemove={() => {}}
              />
              <ProductCartItem
                imageUrl="/Keyboard.jpg"
                name="Kopi Arabika Gayo 250g"
                unitPrice={85000}
                quantity={2}
                onIncrement={() => {}}
                onDecrement={() => {}}
                onRemove={() => {}}
              />
              <div 
                className="hover:opacity-50 transition bg-surface border-2 border-green-800 border-dashed text-green-800 rounded-xl opacity-25 flex flex-col items-center justify-center w-full h-full hover:cursor-pointer"
                onClick={drawerState.open}
              >
                <CirclePlusFill className="size-8 shrink-0"/>
                <h3 className="font-bold text-center">Tambah Produk<br/>Dari Katalog</h3>   
              </div>
            </article>


            <br />

            <Button variant="outline" 
              className="w-full rounded-2xl h-16 text-green-800 font-bold"
              onPress={drawerState.open}
            >
              <CirclePlusFill className="size-4 shrink-0"/>
              <h3>Tambah Produk Lainnya</h3>
            </Button>
            <ProdukDrawer state={drawerState}/>
          </Surface>
        </section>

        {/* right side */}
        <section className="md:col-span-1 flex flex-col gap-5">
          <Surface className="bg-surface p-5 rounded-xl border border-gray-200 text-gray-500">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pembayaran</h2>
            <PaymentSummary 
              subtotal={subtotal}
              taxRate={0.11}
              discount={discount}
              promoLabel="PROMO 20"
            />
            <hr className="my-4" />

            <div className="flex justify-between items-center py-2">
              <h2 className="text-lg font-semibold text-gray-800">Total Bayar</h2>
              <span className="text-2xl text-green-800 font-black">{formatRupiah(totalHarga)}</span>
            </div>

            <br />
            <PilihTransaksi metode={metode} setMetode={setMetode} list={list}/>
            <br />
            <SimpanTransaksi metode={metode} setMetode={setMetode} list={list} bayar={totalHarga}/>
            <Link href='/penjualan'>
              <Button fullWidth className="my-1 p-6 rounded-lg bg-background border font-bold text-green-800">
                Batal!
              </Button>
            </Link>
          </Surface>

          <TipsPopup message="Gunakan kode promo 'PROMO20' untuk mendapatkan potongan harga Rp.20.000 untuk transaksi di atas Rp. 200.000."/>
        </section>
      </div>
    </div>
  )
}