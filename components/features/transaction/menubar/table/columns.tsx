import { createColumnHelper } from '@tanstack/react-table'
import { Transaction } from './types'

const columnHelper = createColumnHelper<Transaction>()

export const columns = [
    columnHelper.accessor('id', {
        header: 'ID-TRANSAKSI',
        cell: (info) => {
            return <span className='text-status-success font-bold'>#{info.getValue()}</span>
        }
    }),
    columnHelper.accessor('tanggal', {
        header: 'TANGGAL',
        cell: (info) => {
            return <span>{info.getValue()}</span>
        }
    }),
    columnHelper.accessor('nama', {
        header: 'NAMA PELANGGAN',
        cell: (info) => {
            return <span className='font-semibold'>{info.getValue()}</span>
        }
    }),
    columnHelper.accessor('metode', {
        header: 'METODE',
        cell: (info) => {
            return <span>{info.getValue().toUpperCase()}</span>

        }
    }),
    columnHelper.accessor('total', {
        header: 'TOTAL',
        cell: (info) => {
            return <span className='font-bold'>{info.getValue().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</span>
        }
            
    }),
    columnHelper.accessor('status', {
        header: 'STATUS',
        cell: (info) => {
            switch(info.getValue()) {
                case 'selesai':
                    return <span className='text-status-success bg-green-200 px-3 py-2 rounded-2xl font-bold '>{info.getValue().toUpperCase()}</span>
                case 'proses':
                    return <span className='text-status-danger bg-orange-200 px-3 py-2 rounded-2xl font-bold '>{info.getValue().toUpperCase()}</span> 
                case 'batal': 
                    return <span className='text-status-failed bg-red-200 px-3 py-2 rounded-2xl font-bold '>{info.getValue().toUpperCase()}</span>
            }
        }
    }),
    columnHelper.display({
        header: 'AKSI',
        id: 'action',
        cell: (info) => {
            return <p className='text-center font-black'>{":"}</p>
        }
            
    }),
]