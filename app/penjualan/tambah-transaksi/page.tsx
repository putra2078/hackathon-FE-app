"use client";
import { Select, ListBox, Key, SelectValue, Button, Modal } from "@heroui/react";
import Combox from "@/components/features/transaction/tambah-transaksi/combox"
import BannerSmall from "@/components/Banner/BannerSmall"

import Link from "next/link";
import { Bulb, Font } from "@gravity-ui/icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave, faQrcode, faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"

import SimpanTransaksi from '@/components/features/transaction/tambah-transaksi/Modal'
import PilihTransaksi from '@/components/features/transaction/tambah-transaksi/PilihTransaksi'

export default function TambahTransaksi() {
  const ringkasan = ['Subtotal', 'Pajak (11%)', 'Diskon']
  
  const [metode, setMetode] = useState<Key | null>();
  const list = [
    { id: 'Tunai', value:'Tunai', desc: 'Bayar langsung di kasir', icon: faMoneyBillWave}, 
    { id: 'Qris', value:'Qris', desc: 'Gopay, OVO, Dana, ShopeePay', icon: faQrcode},
    { id: 'Transfer', value:'Transfer', desc: 'BCA, Mandiri, BNI, BRI', icon: faBuildingColumns},
  ]
  const selected = 'bg-green-600/10 border-green-700 text-green-700 ';
  const unselected = 'bg-background border-gray-200 text-gray-400';

  // It kinda works?
  // const res = await fetch("http://localhost:3001/api/v1/products");

  // if (!res.ok) throw new Error("Failed to fetch posts");

  // const posts = await res.json();
  // console.log(posts)
  return (
    <div>
      <BannerSmall title="Tambah Transaksi"></BannerSmall>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 min-h-screen">
        {/* Left Side*/}     
        <div className="md:col-span-2 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pelanggan</h2>
            <Combox title="Cari atau pilih pelanggan..." list={['John Doe', 'Jane Smith', 'Bob Johnson']} />
          </div>
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Daftar Produk</h2>
          </div>
          
        </div>

        {/* Right Side*/}
        <div className="md:col-span-1 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pembayaran</h2>
            <div className="text-gray-500">
              {
                ringkasan.map((title, idx) => (
                  <div className="flex items-center justify-between my-2" key={idx}>
                    <p>{title}</p>
                    <p className="text-black font-bold">Rp.12.000</p>
                  </div>
                ))
              }
              <hr className="my-2" />

              <div className="flex justify-between items-center py-2">
                <h2 className="text-lg font-semibold text-gray-800">Total Bayar</h2>
                <p className="text-2xl text-green-800 font-black">Rp.264.600</p>
              </div>
              <PilihTransaksi metode={metode} setMetode={setMetode} list={list} selected={selected} unselected={unselected}/>
            </div>
            <SimpanTransaksi metode={metode} setMetode={setMetode} list={list} selected={selected} unselected={unselected}/>
            <Link href='/penjualan'>
              <Button fullWidth className="my-1 rounded-lg bg-background border text-gray-400">Something you can do!</Button>
            </Link>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-3">
            <div className="flex gap-4">
              <div className="flex justify-center p-1 w-6 h-full bg-amber-600 rounded-md">
                <Bulb className="size-4 shrink-0 text-white"/>
              </div>
              <div>
                <h2 className="text-amber-600 font-bold pb-1">Tips Penjualan</h2>
                <p className="text-md text-gray-600">Gunakan kode promo 'PROMO20' untuk mendapatkan potongan harga Rp. 20.000 untuk transaksi di atas Rp. 200.000.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}