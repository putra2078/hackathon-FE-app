import BannerSmall from "@/components/Banner/BannerSmall"
import DropDown from "@/components/Shared/DropDown"
import Combox from "@/components/features/transaction/combox"
import { Bulb } from "@gravity-ui/icons"
import { Combo } from "next/font/google"

export default function TambahTransaksi() {
  const ringkasan = ['Subtotal', 'Pajak (11%)', 'Diskon']
  return (
    <div>
      <BannerSmall title="Tambah Transaksi"></BannerSmall>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 min-h-screen">
        {/* Left Side*/}     
        <div className="md:col-span-2 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pelanggan</h2>
            <Combox />
          </div>
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Daftar Produk</h2>
          </div>
          
        </div>

        {/* Right Side*/}
        <div className="md:col-span-1 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pembayaran</h2>
            <div className="text-gray-500 flex flex-col gaps-20">
              {
                ringkasan.map((title, idx) => (
                  <div className="flex items-center justify-between" key={idx}>
                    <p>{title}</p>
                    <p>12000</p>
                  </div>
                ))
              }
              <hr />
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Total Bayar</h2>
                <span className="text-2xl text-green-800 font-black">Rp.264.600</span>
              </div>
              <span>Metode pembayaran</span>
            </div>

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