export function formatRupiah(value: number) {
  // .toLocaleString("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 })
  return `Rp ${value.toLocaleString("id-ID", {maximumFractionDigits: 0})}`;
}