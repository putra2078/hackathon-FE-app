import SearchInput from '@/components/features/transaction/menubar/SearchInput'
import DateSelector  from '@/components/features/transaction/menubar/DateSelector'
import StatusSelect from '@/components/features/transaction/menubar/StatusSelect'

import DataTable, { type TableColumn } from 'react-data-table-component';


export default function TransactionMenu() {
  interface Employee {
    id: number;
    name: string;
    salary: number;
    status: 'Active' | 'On Leave' | 'Terminated';
  }

  const columns: TableColumn<Employee>[] = [
    { name: 'Name',   selector: row => row.name },          // row: Employee
    { name: 'Salary', selector: row => row.salary,
      format: (row, idx) => `$${row.salary.toLocaleString()}` },
    { name: 'Status', selector: row => row.status,         // typed as the union, not string
      conditionalCellStyles: [
        { when: r => r.status === 'Terminated', style: { color: 'red' } },
      ],
    },
  ];

  const data = [
    { id: 1, name: 'Aria Chen', salary: 155000, status: 'Active'},
    { id: 2, name: 'Marcus Webb', salary: 132000, status: 'Active' },
  ];

  return (
    <section className='p-6 bg-bg-surface border border-gray-200 rounded-2xl'>
    {/* Menubar */}
      <div className='flex justify-between'>
        <div className='flex gap-4 items-center'>
          <SearchInput />
          <DateSelector />
          <StatusSelect />
        </div>
        <button className='py-3 px-6 bg-brand-primary text-background font-bold rounded-xl'>+ Tambah transaksi</button>
      </div> 
      <DataTable columns={columns} data={data}/>
    </section>
  )
}