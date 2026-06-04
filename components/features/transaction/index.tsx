'use client';

import SearchInput from '@/components/features/transaction/menubar/SearchInput'
import DateSelector  from '@/components/features/transaction/menubar/DateSelector'
import StatusSelect from '@/components/features/transaction/menubar/StatusSelect'
import Table from './menubar/table/index'

export default function TransactionMenu() {
  return (
    <section className='p-6 bg-bg-surface border border-gray-200 rounded-2xl'>
      {/* Menubar */}
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
          <SearchInput />
          <DateSelector />
          <StatusSelect />
        </div>
        <button className='py-3 px-6 bg-brand-primary text-background font-bold rounded-xl'>Tambah transaksi</button>
      </div> 

      {/* Table */}
      <Table />
    </section>
  )
}