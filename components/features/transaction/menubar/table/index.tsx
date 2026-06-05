import { useState } from 'react'
import { 
    useReactTable, 
    getCoreRowModel, 
    getPaginationRowModel, 
    flexRender 
} from '@tanstack/react-table'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import mainData from './data.json'
import { columns } from './columns' 
import { Transaction } from './types'

export default function Table() {
    const [data, setData] = useState<Transaction>( mainData );

    const table = useReactTable({ 
        data: data, 
        columns: columns, 
        getCoreRowModel:getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
            pageIndex: 0,  
            pageSize: 5,
            },
        },
    })

    // Pagination

    const buttonStyle = `border border-gray-200 w-8 h-8 rounded-lg`;
    const [pageIn, setPageIn] = useState([0,1,2]);
    const isCurrentPage = (idx: number) => 
        table.getState().pagination.pageIndex === idx
            ? 'text-background bg-brand-primary'
            : 'text-foreground bg-background';
    
    return (
        <>
        <table
            className='w-full border-separate border-spacing-0 overflow-hidden border rounded-xl'
        >
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                    <th
                        key={header.id}
                        className='text-left p-4 font-semibold'
                    >
                        {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                            )}
                    </th>
                    ))}
                </tr>
                ))}
            </thead>

            <tbody
                className='bg-background text-left text-sm '
            >
                {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                    <td
                        key={cell.id}
                        className='p-4 border-y-1 border-gray-100'
                    >
                        {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                        )}
                    </td>
                    ))}
                </tr>
                ))}
            </tbody>
        </table>

        <br />

        <div className='flex justify-between'>
            {/* Status bar*/}
            <span>
                Menampilkan <strong>{table.getRowModel().rows.length}</strong> dari <strong>{table.getRowCount()}</strong> Transaksi
            </span>

            <div className='flex gap-1'>
                <button    
                    onClick={() => {
                        table.previousPage();
                        // Mencegah underflow ke -1 index
                        pageIn[0] != 0 ? setPageIn(pageIn => pageIn.map(page => page - 1)) : {}
                    }} 
                    disabled={!table.getCanPreviousPage()}
                    className={buttonStyle}
                >
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>

                {/*
                    table.getPageOptions().map((pageIndex) => {

                    const isCurrentPage = table.getState().pagination.pageIndex == pageIndex   

                    return (
                        <button 
                            key={pageIndex}
                            onClick={() => table.setPageIndex(pageIndex)}
                            className={`
                                ${buttonStyle}
                                ${isCurrentPage ? 'text-background bg-brand-primary': 'text-foreground bg-background'}
                                `
                            }
                        >
                            {pageIndex + 1}
                        </button>
                    )
                    })
                */}

                {
                    pageIn.map(idx => (
                        <button 
                            key={idx + 1}
                            onClick={() => {table.setPageIndex(idx); console.log(pageIn)}} 
                            className={`
                                ${buttonStyle} 
                                ${isCurrentPage(idx)}
                            `}
                        >
                            {idx + 1}
                        </button>    
                    ))
                }

                <button 
                    onClick={() => {
                        table.nextPage(); 
                        // Mencegah overflow ke 8 index
                        table.getPageCount() >= (pageIn[2] + 2) ? setPageIn(pageIn => pageIn.map(page => page + 1)) : {}
                    }} 
                    disabled={!table.getCanNextPage()}
                    className={buttonStyle}
                >
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

        </div>
        </>
    )
}