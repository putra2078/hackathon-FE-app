export function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    // minimumFractionDigits: 0, // Hapus jika ingin menampilkan dua angka nol di belakang (Rp1.250.000,00)
  }).format(price);

  return formattedPrice
}
