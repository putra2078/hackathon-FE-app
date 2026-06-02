"use client";
import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBoxOpen, faUser, faMagnifyingGlass, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { describe } from 'node:test'


function Banner(){
  return (
    <section className="rounded-xl bg-brand-primary flex justify-between ">
      <div className="text-background p-8">
        {/* How to make breadcrumbs? */}
        <p>Manajemen Toko / Penjualan</p>
        <h1 className="font-bold text-2xl/tight">Daftar Transaksi Penjualan</h1>
      </div>
      <span>
        <img 
          src="banner-logo.png" 
          alt="" 
          className="w-40 opacity-40"
        />
      </span>
    </section>
  )
}

function Card() {
  // Nanti akan difetch?
  let transaction = 42
  let pendapatan = '42.500.000'
  let keranjang = '101.190'

  const cardInfo = [
    { title: 'Transaksi Hari ini', description: `${transaction} Transaksi`, icon: faCartShopping},
    { title: 'Total Pendapatan', description: `Rp.${pendapatan}`, icon: faBoxOpen},
    { title: 'Rata-rata Keranjang', description: `Rp.${keranjang}`, icon: faUser},
  ]

  return (
    <section className='grid grid-cols-3 gap-4 w-full my-6'>
      {cardInfo.map((info, index) => { 
        return (
          <div 
            key={index} 
            className='min-h-18 flex items-center bg-bg-surface border border-gray-200 rounded-2xl'
          >
            <div className='m-6 bg-brand-primary text-background text-3xl min-w-16 min-h-16 rounded-2xl flex items-center justify-center'>
              <FontAwesomeIcon icon={info.icon} className='relative'/>
            </div>
            <span>
              <p>{info.title}</p>
              <strong className='text-3xl'>{info.description}</strong>
            </span>
          </div> 
        )
      })}
    </section>
  )
}

function Search_Item() {
  return (
    <div className='p-2 text-foreground bg-background border border-gray-200 rounded-lg'>
      <span className='mr-2'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
      <input 
        type="text"
        className='outline-none'
        placeholder='Cari transaksi...'
      />
    </div>
  )
}

function Date_Picker() {
  const [date, setDate] = useState('')

  useEffect(() => {console.log(date)},[date])
  
  return (
    <>
      { /* I'll figure it out later*/ }
      <div className='bg-background px-3 border border-gray-200 rounded-xl'>
        <input 
          type="date"
          className='outline-none'
          onChange={e => setDate(e.target.value)}
        />
      </div>
    </>
  )
}

function Select_Status() {
  const [status, setStatus] = useState('all');

  const getLabel = (val: string) => {
    switch(val) {
      case 'selesai': return 'Selesai';
      case 'proses': return 'Proses';
      case 'batal': return 'Batal';
      default: return 'Semua';
    }
  };

  // useEffect(() => {
  //   console.log(getLabel(status))
  // }, [status])

  return (
    <div className='relative bg-background flex items-center justify-center border border-gray-200 rounded-xl'>
      <select 
        name="select_status" 
        id="status" 
        defaultValue='all'
        onChange={e => setStatus(e.target.value)}
        className="w-full px-14 outline-none text-transparent appearance-none select-none"
      >
        <option value="all" className="text-black">Semua</option>
        <option value="selesai" className="text-black">Selesai</option>
        <option value="proses" className="text-black">Proses</option>
        <option value="batal" className="text-black">Batal</option>
      </select>

      <div className='absolute flex justify-between px-3 inset-0 pointer-events-none'>
        <span>Status: {getLabel(status)}</span>
        <span><FontAwesomeIcon icon={faAngleDown} /></span>
      </div>
    </div>
  )
}

function Transaction_Menu() {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4 items-center'>
        <Search_Item />
        <Date_Picker />
        <Select_Status />
      </div>
      <button className='py-3 px-6 bg-brand-primary text-background font-bold rounded-xl'>+ Tambah transaksi</button>
    </div> 
  )
}


function Transaction() {
  return (
  <section className='p-6 bg-bg-surface border border-gray-200 rounded-2xl'>
    <Transaction_Menu />
  </section>
  )
}

export default function Penjualan() {
  return (
    <>
      <Banner/>
      <Card/>
      <Transaction/>
    </>
  )
}

