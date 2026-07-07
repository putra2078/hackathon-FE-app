import { ReusableTable } from "@/components/Shared/ReusableTable";
import { usePagination } from "@/hooks/usePagination";
import { Stock } from "@/types/api/stock.types";
import { stockColumns } from "./stock.columns";
import Filtering from "../Filtering";

export default function SectionStocks({ stocks }: { stocks: Stock[] }) {
  const { currentData, pagination } = usePagination({
    data: stocks,
    rowsPerPage: 5,
    itemLabel: "supplier",
  });

  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      <div className="flex flex-col bg-surface-tertiary border border-surface-border rounded-xl overflow-hidden">
        <Filtering />

        <div id="table">
          <ReusableTable
            columns={stockColumns}
            data={currentData}
            pagination={pagination}
            emptyMessage="Belum ada stock terdaftar"
          />
        </div>
      </div>
    </div>
  );
}
