import { useState } from 'react'
import { useReactTable, getCoreRowModel, flexRender } from '@tanstack/react-table'

import mockData from './data.json'
import { columns } from './columns' 
import { Transaction } from './types'

export default function Table() {
    const [data, setData] = useState<Transaction>( mockData )

    const table = useReactTable({ 
        data: data, 
        columns: columns, 
        getCoreRowModel:getCoreRowModel(),
    })

    // TS makes me wanna crash tf out
    return (
        <table
            style={{
                borderCollapse: "collapse",
                width: "100%",
            }}
        >
            <thead>
                {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                    <th
                        key={header.id}
                        style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        textAlign: "left",
                        }}
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
                className='bg-background'
            >
                {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                    <td
                        key={cell.id}
                        style={{
                        border: "1px solid #ddd",
                        padding: "8px",
                        }}
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
    )
}