import { Surface } from "@heroui/react"
import { Bulb } from "@gravity-ui/icons"

type message = {
  message?: string;
}

export default function TipsPopup({message}: message) {
  return (
    <Surface className="bg-amber-50 p-6 rounded-xl border border-amber-200 flex gap-3">
      <div className="flex gap-4">
        <div className="flex justify-center p-1 w-6 h-full bg-amber-600 rounded-md">
          <Bulb className="size-4 shrink-0 text-white"/>
        </div>
        <div>
          <h2 className="text-amber-600 font-bold pb-1">Tips Penjualan</h2>
          <p className="text-md text-gray-600">{message}</p>
        </div>
      </div>
    </Surface>
  )
}