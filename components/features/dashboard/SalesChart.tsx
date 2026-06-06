"use client";
import Link from "next/link";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
  LineChart,
} from "recharts";

const data = [
  {
    day: "19 Mei",
    revenue: 5000000,
  },
  {
    day: "20 Mei",
    revenue: 13000000,
  },
  {
    day: "21 Mei",
    revenue: 9000000,
  },
  {
    day: "22 Mei",
    revenue: 15000000,
  },
  {
    day: "23 Mei",
    revenue: 12000000,
  },
  {
    day: "24 Mei",
    revenue: 17000000,
  },
  {
    day: "25 Mei",
    revenue: 20000000,
  },
];

export default function SalesChart() {
  const formatRevenue = (revenue: number) => {
    if (revenue >= 1000000) {
      return `${revenue / 1000000} jt`;
    }
    return revenue.toString();
  };
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow">
      <div className="flex justify-between items-end">
        <h2 className="font-bold">Grafik Penjualan</h2>
        <select className="text-sm border border-slate-300 rounded-lg px-2 py-2 bg-surface font-semibold focus:outline-none cursor-pointer">
          <option>7 Hari Terakhir</option>
        </select>
      </div>
      <div className="w-full h-80 self-center">
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 24,
              right: 24,
              left: 24,
              bottom: 24,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C6D6BF" stopOpacity={1} />
                <stop offset="100%" stopColor="#C6D6BF" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              type="monotone"
              dataKey="revenue"
              fill="url(#colorValue)"
              stroke="none"
              dot={false}
              activeDot={false}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={3}
              dot={{
                r: 6,
                stroke: "var(--color-primary)",
                fill: "var(--color-primary)",
              }}
              activeDot={{
                r: 6,
                stroke: "var(--color-primary)",
                strokeWidth: 1,
                fill: "var(--color-surface)",
              }}
            />

            <XAxis dataKey={"day"} tickLine={false} dy={10} />
            <YAxis
              tickFormatter={formatRevenue}
              tick={{ fontSize: 16 }}
              tickLine={false}
              axisLine={false}
              dx={-10}
            />
            <CartesianGrid
              strokeDasharray="0 0"
              vertical={false}
              stroke="#6a7282"
              opacity={0.2}
            />
            <Tooltip
              formatter={(revenue) => `Rp${revenue?.toLocaleString("id-ID")}`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex items-center gap-2 self-center">
        <div className="w-3 h-3 bg-primary rounded-full"></div>
        <p>Penjualan (Rp)</p>
      </div>
    </div>
  );
}
