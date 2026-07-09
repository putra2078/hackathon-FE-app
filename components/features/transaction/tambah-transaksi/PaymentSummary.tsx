import { formatRupiah } from "@/components/Functions/FormatRupiah";

interface PaymentSummaryProps {
  subtotal: number;
  taxRate?: number; // e.g. 0.11 for 11%
  discount?: number;
  promoLabel?: string;
}

export function PaymentSummary({
  subtotal,
  taxRate = 0.11,
  discount = 0,
  promoLabel,
}: PaymentSummaryProps) {
  const tax = Math.round(subtotal * taxRate);

  return (
    <div>
      <dl className="space-y-3">
        <div className="flex items-center justify-between">
          <dt className="text-neutral-500">Subtotal</dt>
          <dd className="font-bold text-neutral-900">
            {formatRupiah(subtotal)}
          </dd>
        </div>

        <div className="flex items-center justify-between">
          <dt className="text-neutral-500">
            Pajak ({Math.round(taxRate * 100)}%)
          </dt>
          <dd className="font-bold text-neutral-900">{formatRupiah(tax)}</dd>
        </div>

        {discount > 0 && (
          <div className="flex items-center justify-between">
            <dt className="flex items-center gap-2 text-neutral-500">
              Diskon
              {promoLabel && (
                <span className="rounded-md bg-red-100 px-2 py-0.5 text-xs font-bold text-red-500">
                  {promoLabel}
                </span>
              )}
            </dt>
            <dd className="font-bold text-red-500">
              - {formatRupiah(discount)}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}