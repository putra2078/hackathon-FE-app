import { FieldError, Input, Label, NumberField } from "@heroui/react";

interface PriceFieldsProps {
  IDR_FORMAT_OPTIONS: Intl.NumberFormatOptions;
  updateField: (key: string) => (value: string | number) => void;
  buyPrice: number;
  setBuyPrice: (value: number) => void;
  form: {
    stock: number;
  };
    sellPrice: number;
  setSellPrice: (value: number) => void;
}

export default function PriceFields({
  IDR_FORMAT_OPTIONS,
  buyPrice,
  setBuyPrice,
  updateField,
  form,
  sellPrice,
  setSellPrice
}: PriceFieldsProps) {
  return (
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
  );
}
