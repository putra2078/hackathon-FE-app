import BannerSmall from '@/components/Banner/BannerSmall' 
import CardPembelian from '@/components/features/pembelian/Card'

export default function Pembelian() {
  return (
    <>
    <BannerSmall title='Pembelian' />

    <section className="grid grid-cols-3 gap-4 w-full my-6">
      <CardPembelian 
        title='Total pengeluaran' 
        value='Rp.9.000.000' 
        icon='gravity-ui:calculator' 
        gradient='bg-linear-to-bl from-rose-600 to-rose-800'
        subTextExpenses='5%'
        changes='up'
      />

      <CardPembelian 
        title='Bom belum lunas'
        value='Rp.850.000'
        icon='gravity-ui:persons'
        gradient='bg-linear-to-b from-amber-600 to-amber-700'
        subText='3 nota belum dibayar'
      />
      <CardPembelian 
        title='Rata-rata Kulakan'
        value='Rp.950.000'
        icon='gravity-ui:boxes-3'
        gradient='bg-linear-to-b from-emerald-600 to-emerald-700'
        subText='Per transaksi belanja'
      />
    </section>
      
    </>
  )
}
