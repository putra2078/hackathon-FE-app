import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowUp, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";


interface StatCardProps {
    title: string
    value: string | number
    icon: IconProp
    subText?: string
    subTextGrowth?: string 
}

export default function StatCard({icon, title, value, subText, subTextGrowth}: StatCardProps) {
    return(
        <div className="flex items-center gap-4 bg-bg-survace rounded-xl p-6 shadow">
            <div className="flex items-center justify-center bg-brand-primary rounded-4xl w-20 h-20 text-white text-3xl">
                <FontAwesomeIcon icon={icon}/>
            </div>
            <div>
                <h3 className="font-semibold text-lg">{title}</h3>
                <h2 className="font-semibold text-xl">{value}</h2>
                <p>{subTextGrowth ? <span className="text-green-600"><FontAwesomeIcon icon={faArrowUp}/>{subTextGrowth}</span> : ''} {subText}</p>
            </div>
        </div>
    )
}