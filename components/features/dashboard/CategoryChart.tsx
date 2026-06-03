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
  { name: "Makanan & Minuman", value: 45, color: "var(--brand-primary)" },
  { name: "Kebutuhan Rumah", value: 30, color: "#73A043" },
  { name: "Perawatan Tubuh", value: 15, color: "#C1D794" },
  { name: "Lainnya", value: 10, color: "var(--brand-light)" },
];

export default function CategoryChart() {
  return (
    <div className="flex flex-col gap-6 bg-bg-surface rounded-2xl p-6 shadow">
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
                <span className="font-bold text-green-800">
                    Total Penjualan
                </span>
                <span className="font-semibold text-green-600">
                    Rp12.450.000
                </span>
          </div>
    </div>
  );
}
