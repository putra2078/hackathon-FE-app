"use client";
import {
  Cell,
  Label,
  LabelList,
  Pie,
  PieChart,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Makanan & Minuman", value: 45, color: "var(--color-primary-800)" },
  { name: "Kebutuhan Rumah", value: 30, color: "var(--color-primary)" },
  { name: "Perawatan Tubuh", value: 15, color: "var(--color-primary-400)" },
  { name: "Lainnya", value: 10, color: "var(--color-primary-200)" },
];

export default function CategoryChart() {
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow">
      <div>
        <h2 className="font-bold">Kategori Penjualan</h2>
      </div>
      <div className="flex gap-12 items-center px-12 ">
        <div className="flex justify-center items-center">
            <PieChart width={200} height={200}>
                <Pie
                data={data}
                dataKey="value"
                cx="50%" 
                cy="50%" 
                outerRadius={90} 
                innerRadius={45}
                paddingAngle={2}
                >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>
            </PieChart>
        </div>

        <div className="flex flex-col gap-4 w-full flex-1 ">
          {data.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-md shrink-0" style={{ backgroundColor: item.color }}></div>
                <h3 >{item.name}</h3>
              </div>
              <span>{item.value}%</span>
            </div>
          ))}
        </div>

      </div>
          <div className="flex justify-between px-6">
                <span className="font-bold text-primary-800">
                    Total Penjualan
                </span>
                <span className="font-semibold text-primary">
                    Rp12.450.000
                </span>
          </div>
    </div>
  );
}
