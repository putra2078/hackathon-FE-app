import BannerSmall from "@/components/Banner/BannerSmall"
import DropDown from "@/components/Shared/DropDown"

export default function TambahTransaksi() {
  return (
    <>
      <BannerSmall title="Tambah Transaksi"></BannerSmall>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 min-h-screen">
        {/* Left Side*/}     
        <div className="md:col-span-2 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">Informasi Pelanggan</h2>
            <DropDown title="Cari" list={['Sucipto', 'Sukardi']}></DropDown>
          </div>
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Daftar Produk</h2>
          </div>
          
        </div>

        {/* Right Side*/}
        <div className="md:col-span-1 flex flex-col gap-5">
          
          <div className="bg-surface p-5 rounded-xl border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pembayaran</h2>
            </div>
          
          <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 flex gap-3">
          </div>
        </div>
      </div>
    </>
    
  )
}