"use client";
import SelectList, { createList } from "@/components/Shared/SelectList";
import { Input, Label, TextField } from "@heroui/react";

export default function AddNewProductSection() {
  const productCategoryList = createList([
    { key: "aksesoris", textValue: "Aksesoris" },
    { key: "elektronik", textValue: "Elektronik" },
  ]);
  return (
    <div className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">1. Informasi Dasar</h2>
        <div className="flex gap-4 items-center">
          <TextField
            isRequired
            className="w-full max-w-64"
            name="name"
            type="text"
          >
            <Label>Nama Produk</Label>
            <Input placeholder="Contoh: Beras" className="rounded" />
          </TextField>
          <TextField
            isRequired
            className="w-full max-w-64"
            name="sku"
            type="text"
          >
            <Label>SKU Produk</Label>
            <Input placeholder="Contoh: PRD005" className="rounded" />
          </TextField>
          <div>
            <Label>Kategori</Label>
            <SelectList
              ListItems={productCategoryList}
              placeholder="Pilih Kategori"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">2. Harga & Stok</h2>
        <div className="flex gap-4 items-center">
        <TextField
          isRequired
          className="w-full max-w-64"
          name="buyPrice"
          type="text"
        >
          <Label>Harga Beli</Label>
          <Input placeholder="Contoh: Rp10.000" className="rounded" />
        </TextField>
        <TextField
          isRequired
          className="w-full max-w-64"
          name="sellPrice"
          type="text"
        >
          <Label>Harga Jual</Label>
          <Input placeholder="Contoh: Rp20.000" className="rounded" />
        </TextField>
        <TextField
          isRequired
          className="w-full max-w-64"
          name="stock"
          type="text"
        >
          <Label>Jumlah Stok Awal</Label>
          <Input placeholder="Contoh: PRD005" className="rounded" />
        </TextField>

        </div>
      </div>
    </div>
  );
}
