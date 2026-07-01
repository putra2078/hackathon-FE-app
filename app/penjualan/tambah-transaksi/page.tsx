"use client";
import BannerSmall from      "@/components/Banner/BannerSmall";
import Combox from           "@/components/features/transaction/tambah-transaksi/Combox";
import SimpanTransaksi from  '@/components/features/transaction/tambah-transaksi/Modal';
import PilihTransaksi from   '@/components/features/transaction/tambah-transaksi/PilihTransaksi';

import { 
  Key, 
  Button, 
  SearchField,
  Surface,
  Chip,
  useOverlayState
} from                       "@heroui/react";
import { 
  faMoneyBillWave, 
  faQrcode, 
  faBuildingColumns
} from                       "@fortawesome/free-solid-svg-icons";
import { 
  Bulb, 
  CirclePlusFill 
} from                       "@gravity-ui/icons";
import Link from             "next/link";
import { useState } from     "react";
import clsx from 'clsx';
import ProdukDrawer from "@/components/features/transaction/tambah-transaksi/Drawer";


export default function TambahTransaksi() {
  const ringkasan = ['Subtotal', 'Pajak (11%)', 'Diskon'];
  const [metode, setMetode] = useState<Key | null>();;
  const list = [
    { id: 'Tunai', value:'Tunai', desc: 'Bayar langsung di kasir', icon: faMoneyBillWave}, 
    { id: 'Qris', value:'Qris', desc: 'Gopay, OVO, Dana, ShopeePay', icon: faQrcode},
    { id: 'Transfer', value:'Transfer', desc: 'BCA, Mandiri, BNI, BRI', icon: faBuildingColumns},
  ];
  const selected = 'bg-green-600/10 border-green-700 text-green-700';
  const unselected = 'bg-background border-gray-200 text-gray-400';

  const bayar = 12000;
  const totalHarga = bayar.toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });


  const drawerState = useOverlayState();
  return (
    <div>
      <BannerSmall title="Tambah Transaksi"></BannerSmall>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 min-h-screen">
        {/* Left Side*/}     
        <section className="md:col-span-2 flex flex-col gap-5">
          <article className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pelanggan</h2>
            <Combox title="Cari atau pilih pelanggan..." list={['John Doe', 'Jane Smith', 'Bob Johnson']} />
          </article>
          
          <article className="bg-surface p-5 rounded-xl border border-gray-200">
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
       
            <Button 
              className={clsx(
                "bg-surface border-2 border-green-800 border-dashed text-green-800 rounded-xl opacity-25",
                "flex flex-col items-center justify-center w-64 h-82",
                "hover:cursor-pointer"
              )}
              onPress={drawerState.open}
            >
              <CirclePlusFill className="size-8 shrink-0"/>
              <h3 className="font-bold">Tambah Produk<br/>Dari Katalog</h3>   
            </Button>
            <br />
            <Button 
              variant="outline" 
              className={clsx(
                "w-full rounded-2xl h-16",
                "text-green-800 font-bold",
              )} 
              onClick={drawerState.open}
            >
              <CirclePlusFill className="size-4 shrink-0"/>
              <h3>Tambah Produk Lainnya</h3>
            </Button>
            <ProdukDrawer state={drawerState}/>
          </article>


        </section>

        {/* Right Side*/}
        <section className="md:col-span-1 flex flex-col gap-5">
          <article className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pembayaran</h2>
            <div className="text-gray-500">
              <div className="flex items-center justify-between my-2">
                <p>Subtotal</p>
                <p className="text-black font-bold">Rp.260.000</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <p>Pajak (11%)</p>
                <p className="text-black font-bold">Rp.28.000</p>
              </div>
              <div className="flex items-center justify-between my-2">
                <p>Diskon <Chip variant="primary" className="rounded-md font-bold" color="danger">PROMO 20</Chip></p>
                <p className="text-red-500 font-bold">- Rp.12.000</p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between items-center py-2">
                <h2 className="text-lg font-semibold text-gray-800">Total Bayar</h2>
                <span className="text-2xl text-green-800 font-black">{totalHarga}</span>
              </div>
              <br />
              <PilihTransaksi metode={metode} setMetode={setMetode} list={list} selected={selected} unselected={unselected}/>
            </div>
            <br />
            <SimpanTransaksi metode={metode} setMetode={setMetode} list={list} selected={selected} unselected={unselected} bayar={totalHarga}/>
            <Link href='/penjualan'><Button fullWidth className="my-1 p-6 rounded-lg bg-background border text-black">Something you can do!</Button></Link>
          </article>
          
          <article className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-3">
            <div className="flex gap-4">
              <div className="flex justify-center p-1 w-6 h-full bg-amber-600 rounded-md">
                <Bulb className="size-4 shrink-0 text-white"/>
              </div>
              <div>
                <h2 className="text-amber-600 font-bold pb-1">Tips Penjualan</h2>
                <p className="text-md text-gray-600">Gunakan kode promo 'PROMO20' untuk mendapatkan potongan harga Rp.20.000 untuk transaksi di atas Rp. 200.000.</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  )
}