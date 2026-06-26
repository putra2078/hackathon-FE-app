"use client";
import { Button } from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faPlus } from "@fortawesome/free-solid-svg-icons";
import { usePagination } from "@/hooks/usePagination";
import { ReusableTable } from "@/components/Shared/ReusableTable";
import { productColumns } from "./product.columns";
import TableSearchField from "../../Shared/TableSearchField";
import SelectList, { createList } from "@/components/Shared/SelectList";
import { Product } from "@/types/api/product.types";
import { useRouter } from "next/navigation";

export default function ProductSection({ products }: { products: Product[] }) {
  const router = useRouter()
  const { currentData, pagination } = usePagination({
    data: products,
    rowsPerPage: 5,
    itemLabel: "supplier",
  });

  const CategoriesList = createList([
    { key: "semuaKategori", textValue: "Semua Kategori" },
    { key: "makananDanMinuman", textValue: "Makanan & Minuman" },
    { key: "pakaian", textValue: "Pakaian & Aksesoris" },
    { key: "gadget", textValue: "Elektronik & Gadget" },
  ]);
  const StatusList = createList([
    { key: "aktif", textValue: "Aktif" },
    { key: "nonaktif", textValue: "Tidak Aktif" },
  ]);

  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      <div className="flex flex-col bg-surface-tertiary border border-surface-border rounded-xl overflow-hidden">
        <div id="filter" className="flex gap-4 items-center p-6 w-full">
          <TableSearchField
            placeholder="Cari Produk..."
            aria_label="Cari Produk"
          />
          {/* <SelectList ListItems={CategoriesList} placeholder="Pilih Kategori" ariaLabel="Pilih Kategori" defaultValue="semuaKategori" width={200}/>
          <SelectList ListItems={StatusList} placeholder="Status" width={128} ariaLabel="pilih status"/> */}
          <Button
            variant="outline"
            className={
              "rounded-md shadow-sm border-0 bg-white hover:bg-gray-50"
            }
          >
            <FontAwesomeIcon icon={faFilter} /> Filter
          </Button>
          <div className="ml-auto">

              <Button
                variant="primary"
                onClick={() => router.push('/produk/tambah')}
                className={
                  "rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700"
                }
              >
                <FontAwesomeIcon icon={faPlus} /> Tambah Produk
              </Button>
          </div>
        </div>
        <div id="table">
          <ReusableTable
            columns={productColumns}
            data={currentData}
            pagination={pagination}
          />
        </div>
      </div>
    </div>
  );
}
