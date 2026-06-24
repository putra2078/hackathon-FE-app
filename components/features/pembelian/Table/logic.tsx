import { useMemo } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel
} from '@tanstack/react-table';
import { Column } from './columns'
import { TypePembelian } from './type' 

interface LogicType {
  data: TypePembelian[]
}

export default function LogicTable({ data }: LogicType ) {
  const memoizedData = useMemo(() => data, [data]);

  const table = useReactTable({
    data: memoizedData,
    columns: Column,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 6,
      },
    },
  });

  return {table}
}
