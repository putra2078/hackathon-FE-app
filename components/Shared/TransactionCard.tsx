import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faBoxOpen, faUser, faMagnifyingGlass, faAngleDown, faCalendar } from '@fortawesome/free-solid-svg-icons'


export default function TransactionCard() {
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