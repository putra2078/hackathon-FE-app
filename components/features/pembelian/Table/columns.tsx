import { createColumnHelper } from '@tanstack/react-table'
import { Icon } from '@iconify/react'
import { Button } from '@heroui/react'
import { formatRupiah } from '@/components/Functions/FormatRupiah'

import data from './MOCK_DATA.json'
import { TypePembelian } from './type' 

const columnHelper = createColumnHelper<TypePembelian>();

const cappitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
const cappitalizeEach = (list: string) => {
  const word = list.split(' ');
  const each = word.map(x => { return x.charAt(0).toUpperCase() + x.slice(1)});
  return each.join(" ");
}

export const Column = [
  columnHelper.accessor('id', {
    header: 'ID',
    cell: (info) => {
      return (
        <strong className='text-green-700'>{info.getValue()}</strong>
      )
    } 
  }),
  columnHelper.accessor('note', {
    header: 'NOTE',
    cell: (info) => {
      const {note, kuantitas, satuan } = info.row.original
      return (
        <span>
          <strong>{note}</strong>
          <div className='flex gap-1 items-center text-xs'>
            <p>{kuantitas}</p>
            <p>{satuan}</p>
          </div>
        </span>
      )
    }
  }),      
  columnHelper.accessor('nominal', {
    header: 'NOMINAL',
    cell: (info) => {
      const { status } = info.row.original
      return (
        <span>
          <strong>
            {formatRupiah(info.getValue())}
          </strong>
          <p>{cappitalizeEach(status)}</p>
        </span>
      )
    }
  }),
  columnHelper.accessor('tanggal', {
    header: 'TANGGAL',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('kategori', {
    header: 'KATEGORI',
    cell: (info) => {
      const kategori = info.getValue()
      return (
        <span>
          {cappitalize(kategori)}
        </span>
      )
    }
  }),
  columnHelper.accessor('penjab', {
    header: 'Penanggung Jawab',
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor('metode', {
    header: 'METODE',
    cell: (info) => info.getValue().toUpperCase()
  }),
  columnHelper.display({
    header: 'AKSI',
    id: 'action',
    cell: () => {
      return (
        <Button isIconOnly variant='tertiary' className='rounded-lg'> 
          <Icon icon="gravity-ui:ellipsis-vertical"></Icon>
        </Button>
      )
  }})
]
