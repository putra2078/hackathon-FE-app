import { Icon } from "@iconify/react"

type value = {
  title: string
  value: string
  icon: string
  gradient: string
  subText?: string
  subTextExpenses?: string
  changes?: string
}

export default function CardPembelian({title, value, icon, gradient, subText, subTextExpenses, changes}: value) {
  return (
    <div
      className="min-h-20 flex items-center bg-surface border border-gray-200 rounded-2xl shadow"
    >
      <div
        className={`m-6 ${gradient} text-background text-3xl min-w-20 min-h-20 rounded-3xl flex items-center justify-center shadow`}
      >
        <Icon icon={icon}/>
      </div>
      <span>
        <p className="text-md">{title}</p>
        <strong className="text-2xl">{value}</strong>

        {subTextExpenses ? 
          <div className={`flex gap-1 text-bold ${changes == 'up' ? 'text-red-800' : 'text-green-800'}`}>
            {changes == 'up' ? <Icon icon='gravity-ui:arrow-up' /> : <Icon icon='gravity-ui:arrow-down' />}
            <p>{subTextExpenses}</p>
            {changes == 'up' ? <p>increase</p> : <p>decrease</p> }
          </div>
        : ''}

        {subText ? <p>{subText}</p> : ''}
      </span>
    </div>
  )
}