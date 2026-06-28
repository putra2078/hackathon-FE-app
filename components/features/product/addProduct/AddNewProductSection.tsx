"use client";
import SelectList, { createList } from "@/components/Shared/SelectList";
import { Product } from "@/types/api/product.types";
import {
  Button,
  Form,
  Input,
  Label,
  NumberField,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

export default function AddNewProductSection() {
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);

  const isHargaInvalid = buyPrice > 0 && sellPrice < buyPrice;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const payload = {
      ...data,
      buyPrice,
      sellPrice
    }
  
    console.log(payload);
  };

  const router = useRouter();
  const productCategoryList = createList([
    { key: "aksesoris", textValue: "Aksesoris" },
    { key: "elektronik", textValue: "Elektronik" },
  ]);

  return (
    <Form
      className="flex flex-col gap-6 bg-surface rounded-2xl p-6 shadow border"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-6">
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
            name="code"
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
              name="category"
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">2. Harga & Stok</h2>
        <div className="flex gap-4 items-center">
          <NumberField isRequired className="w-full max-w-64" value={buyPrice} onChange={(e) => setBuyPrice(Number(e))}>
            <Label>Harga Beli</Label>
            <Input placeholder="Contoh: Rp10.000" className="rounded"  />
          </NumberField>
          <NumberField isRequired className="w-full max-w-64" value={sellPrice} onChange={(e) => setSellPrice(Number(e))}>
            <Label>Harga Jual</Label>
            <Input placeholder="Contoh: Rp20.000" className="rounded" />
          </NumberField>
          <NumberField isRequired className="w-full max-w-64" name="stock">
            <Label>Jumlah Stok Awal</Label>
            <Input placeholder="Contoh: PRD005" className="rounded" />
          </NumberField>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-semibold">3. Deskripsi</h2>
        <div className="flex gap-4 items-center">
          <TextArea
            aria-label="Deskripsi Produk"
            id="description"
            placeholder="Masukkan deskripsi tentang produk..."
            rows={6}
            style={{ resize: "vertical" }}
            className="w-full"
            name="description"
          />
        </div>
        <hr />
        <div className="flex gap-4 items-center w-full justify-end">
          <Button
            variant="tertiary"
            className={"rounded-md shadow-sm border-0"}
            onClick={() => router.push("/produk")}
          >
            Batal
          </Button>
          <Button
            variant="primary"
            className={
              "rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700"
            }
            type="submit"
          >
            Tambahkan Produk
          </Button>
        </div>
      </div>
    </Form>
  );
}
