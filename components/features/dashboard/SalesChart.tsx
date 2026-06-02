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
    <div className="flex flex-col gap-6 bg-bg-survace rounded-2xl p-6 shadow">
      <div className="flex justify-between items-end">
        <h2 className="font-bold">Grafik Penjualan</h2>
        <Link href={"/"} className="text-sm text-brand-primary hover:underline">
          Lihat semua
        </Link>
      </div>
      <div className="w-full h-80">
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
            <Area
              type="monotone"
              dataKey="revenue"
              fill="var(--brand-light)"
              stroke="none"
              dot={false}
              activeDot={false}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="var(--brand-primary)"
              strokeWidth={3}
              dot={{
                r: 6,
                stroke: "var(--brand-primary)",
                fill: "var(--brand-primary)",
              }}
              activeDot={{
                r: 6,
                stroke: "var(--brand-primary)",
                strokeWidth: 1,
                fill: "var(--bg-surface)",
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
              strokeDasharray="3 3"
              vertical={false}
              stroke="#000000"
            />
            <Tooltip
              formatter={(revenue) => `Rp${revenue?.toLocaleString("id-ID")}`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
