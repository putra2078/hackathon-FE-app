import clsx from "clsx";
import { Button } from "@heroui/react";
import { CirclePlus, CircleMinus, TrashBin } from "@gravity-ui/icons";
import { ProductCartItemProps } from '@/components/features/transaction/tambah-transaksi/Props/ProdukProps'
import { formatRupiah } from "@/components/Functions/FormatRupiah";

export function ProductCartItem({
  imageUrl,
  name,
  unitPrice,
  quantity,
  onIncrement,
  onDecrement,
  item,
  onRemove,
  className,
}: ProductCartItemProps) {
  const total = unitPrice * quantity;
 
  return (
    <div
      className={clsx(
        "relative rounded-2xl border border-black/5 bg-white",
        className,
      )}
    >
      {/* Delete button */}
      <Button
        isIconOnly
        onClick={() => onRemove(item)}
        aria-label={`Hapus ${name}`}
        className="absolute right-2 top-2 z-10 size-8 rounded-full bg-red-50 text-red-500 hover:bg-red-100"
      >
        <TrashBin className="size-4" />
      </Button>
 
      {/* Product image */}
      <div className="mb-3 aspect-square w-full overflow-hidden rounded-t-xl bg-neutral-100">
        <img
          src={imageUrl}
          alt={name}
          className="size-full object-cover"
        />
      </div>
 
      {/* Name + unit price */}
      <div className="p-4">
        <h4 className="mb-1 font-bold text-neutral-900">{name}</h4>
        <p className="mb-3 text-sm text-neutral-500">{formatRupiah(unitPrice)}</p>
  
        {/* Quantity stepper + total */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 rounded-full border border-neutral-200 px-2 py-1">
            <Button
              isIconOnly
              // variant="light"
              size="sm"
              onPress={onDecrement}
              aria-label="Kurangi jumlah"
              className="size-6 rounded-full bg-neutral-100"
            >
              <CircleMinus className="size-3" />
            </Button>
            <span className="min-w-4 text-center font-bold text-neutral-900">
              {quantity}
            </span>
            <Button
              isIconOnly
              // variant="light"
              size="sm"
              onPress={onIncrement}
              aria-label="Tambah jumlah"
              className="size-6 rounded-full bg-green-100 text-green-700"
            >
              <CirclePlus className="size-3" />
            </Button>
          </div>
  
          <span className="font-bold text-neutral-900">{formatRupiah(total)}</span>
        </div>
      </div>
    </div>
  );
}
 
// Usage:
