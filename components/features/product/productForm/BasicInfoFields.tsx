import {
  FieldError,
  Input,
  TextField,
  Label,
  Select,
  ListBox,
} from "@heroui/react";

interface BasicInfoFieldsProps {
  form: {
    name: string;
    code: string;
    category: string;
  };
  updateField: (key: string) => (value: string) => void;
  PRODUCT_CATEGORY_LIST: { key: string; textValue: string }[];
  isEditMode: boolean
}

export default function BasicInfoFields({
  form,
  updateField,
  PRODUCT_CATEGORY_LIST,
  isEditMode
}: BasicInfoFieldsProps) {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">1. Informasi Dasar</h2>
      <div className="flex gap-4 items-start">
        <TextField
          isRequired
          className="w-full max-w-64"
          name="name"
          type="text"
        >
          <Label>Nama Produk</Label>
          <Input
            placeholder="Contoh: Beras"
            className="rounded"
            onChange={(e) => updateField("name")(e.target.value)}
            value={form.name}
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          className="w-full max-w-64"
          name="code"
          type="text"
          isDisabled={isEditMode}
        >
          <Label>SKU Produk</Label>
          <Input
            placeholder="Contoh: PRD005"
            className="rounded"
            onChange={(e) => updateField("code")(e.target.value)}
            value={form.code}
          />
          <FieldError />
        </TextField>
        <Select
          isRequired
          aria-label="pilih category"
          className="w-full max-w-64"
          value={form.category}
          onChange={updateField("category")}
        >
          <Label>Kategori</Label>
          <Select.Trigger className={"rounded-md"}>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover className={"rounded-md"}>
            <ListBox className="*:rounded-sm">
              {PRODUCT_CATEGORY_LIST.map((item) => {
                return (
                  <ListBox.Item
                    key={item.key}
                    id={item.key}
                    textValue={item.textValue}
                  >
                    {item.textValue}
                  </ListBox.Item>
                );
              })}
            </ListBox>
          </Select.Popover>
          <FieldError />
        </Select>
        <div></div>
      </div>
    </div>
  );
}
