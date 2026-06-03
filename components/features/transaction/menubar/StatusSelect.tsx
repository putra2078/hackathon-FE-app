import { useEffect, useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBoxOpen, faUser, faMagnifyingGlass, faAngleDown, faCalendar } from '@fortawesome/free-solid-svg-icons'

export default function StatusSelect() {
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