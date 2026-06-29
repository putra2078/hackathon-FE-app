"use client";
import { ErrorAlert, SuccessAlert } from "@/components/Shared/CustomAlert";
import SelectList, { createList } from "@/components/Shared/SelectList";
import { useAddProduct } from "@/hooks/useAddProduct";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  NumberField,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const PRODUCT_CATEGORY_LIST = createList([
  { key: "aksesoris", textValue: "Aksesoris" },
  { key: "elektronik", textValue: "Elektronik" },
]);

const IDR_FORMAT_OPTIONS: Intl.NumberFormatOptions = {
  currency: "IDR",
  currencyDisplay: "narrowSymbol",
  style: "currency",
  minimumFractionDigits: 0,
};

const INITIAL_FORM_STATE = {
  name: "",
  code: "",
  category: "",
  stock: 0,
  description: "",
};

export default function AddNewProductSection() {
  const { addProduct, error, isLoading, clearError, isSuccess, clearSuccess } =
    useAddProduct();
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const [buyPrice, setBuyPrice] = useState(0);
  const [sellPrice, setSellPrice] = useState(0);
  const router = useRouter();

  const updateField = (key) => (value) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      buyPrice,
      sellPrice,
    };

    const success = await addProduct(payload);

    if (success) {
      setForm(INITIAL_FORM_STATE);
      setBuyPrice(0);
      setSellPrice(0);
    }
  };

  return (
    <div>
      {error && (
        <ErrorAlert
          desc={error}
          clearError={clearError}
          title="Gagal Menambahkan Produk"
        />
      )}
      {isSuccess && (
        <SuccessAlert
          title="Berhasil menambahkan produk"
          clear={clearSuccess}
        />
      )}

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
              value={form.name}
              onChange={updateField("name")}
            >
              <Label>Nama Produk</Label>
              <Input placeholder="Contoh: Beras" className="rounded" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              className="w-full max-w-64"
              name="code"
              type="text"
              value={form.code}
              onChange={updateField("code")}
            >
              <Label>SKU Produk</Label>
              <Input placeholder="Contoh: PRD005" className="rounded" />
              <FieldError />
            </TextField>
            <div>
              <Label>Kategori</Label>
              <SelectList
                isRequired
                ListItems={PRODUCT_CATEGORY_LIST}
                placeholder="Pilih Kategori"
                name="category"
                selectedKey={form.category}
                onSelectionChange={updateField("category")}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">2. Harga & Stok</h2>
          <div className="flex gap-4 items-start">
            <NumberField
              isRequired
              name="buyPrice"
              className="w-full max-w-64"
              value={buyPrice}
              onChange={setBuyPrice}
              minValue={0}
              formatOptions={IDR_FORMAT_OPTIONS}
            >
              <Label>Harga Beli</Label>
              <Input placeholder="Contoh: Rp10.000" className="rounded" />
              <FieldError />
            </NumberField>
            <NumberField
              isRequired
              name="sellPrice"
              className="w-full max-w-64"
              value={sellPrice}
              onChange={setSellPrice}
              minValue={0}
              formatOptions={IDR_FORMAT_OPTIONS}
              validate={(value) => {
                if (value <= buyPrice) {
                  return "Harga jual harus lebih besar dari harga beli.";
                }
                return null;
              }}
            >
              <Label>Harga Jual</Label>
              <Input placeholder="Contoh: Rp20.000" className="rounded" />
              <FieldError />
            </NumberField>
            <NumberField
              isRequired
              name="stock"
              className="w-full max-w-64"
              value={form.stock}
              onChange={updateField("stock")}
              minValue={0}
              step={1}
            >
              <Label>Jumlah Stok Awal</Label>
              <Input placeholder="Contoh: 10" className="rounded" />
              <FieldError />
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
              value={form.description}
              onChange={updateField("description")}
            />
          </div>
          <hr />
          <div className="flex gap-4 items-center w-full justify-end">
            <Button
              variant="tertiary"
              className="rounded-md shadow-sm border-0"
              onPress={() => router.push("/produk")}
              isDisabled={isLoading}
            >
              Batal
            </Button>
            <Button
              variant="primary"
              className="rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700"
              type="submit"
              isDisabled={isLoading}
            >
              {isLoading ? "Menambahkan..." : "Tambahkan Produk"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}