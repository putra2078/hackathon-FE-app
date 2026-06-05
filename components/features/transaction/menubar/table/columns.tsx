import { createColumnHelper } from '@tanstack/react-table'
import { Transaction } from './types'

const columnHelper = createColumnHelper<Transaction>()

export const columns = [
    columnHelper.accessor('id', {
        header: 'ID',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('tanggal', {
        header: 'TANGGAL',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('namaPelanggan', {
        header: 'NAMA PELANGGAN',
        cell: (info) => info.getValue()
    }),
    columnHelper.accessor('metode', {
        header: 'METODE',
        cell: (info) => info.getValue().toUpperCase()
    }),
    columnHelper.accessor('total', {
        header: 'TOTAL',
        cell: (info) => info.getValue().toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })
    }),
    columnHelper.accessor('status', {
        header: 'STATUS',
        cell: (info) => info.getValue()
    }),
]