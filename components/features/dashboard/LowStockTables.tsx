import Link from "next/link";

export default function LowStockTables() {
  const products = [
    { name: "Minyak Sawit", stock: 10 },
    { name: "Batu Bara", stock: 20 },
    { name: "MBG", stock: 30 },
  ];
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow">
      <div className="flex justify-between items-end">
        <h2 className="font-bold">Stok Menipis</h2>
        <Link href={"/"} className="text-sm text-primary hover:underline">
          Lihat semua
        </Link>
      </div>
      <div className="flex flex-col px-2 gap-2 end">
        {products.map((product, i) => {
          return (
            <div
              className="flex justify-between border-b border-slate-200 py-2 last:border-transparent"
              key={i}
            >
              <div className="flex gap-4 items-center">
                <div className="flex justify-center items-center w-12 h-12 bg-primary rounded-xl text-primary-foreground">
                  h
                </div>
                <div>
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-warning-foreground text-sm">
                    Stock kurang dari: {product.stock}
                  </p>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <div className="flex justify-center items-center rounded-full bg-danger text-danger-foreground px-4 py-1 text-xs">
                  <p>Rendah</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
