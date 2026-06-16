import { ListBox, Select } from "@heroui/react";
export default function SelectCategory() {
  return (
    <Select
      className="w-[200px]"
      placeholder="Pilih kategori"
      defaultValue='semuaKategori'
    >
      <Select.Trigger className={'rounded-md'}>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className={'rounded-md'}>
        <ListBox className="*:rounded-sm">
          <ListBox.Item key='semuaKategori' id="semuaKategori" textValue="Semua Kategori">
            Semua Kategori
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item key='makananDanMinuman' id="makananDanMinuman" textValue="Makanan & Minuman">
            Makanan & Minuman
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item key='pakaian' id="pakaian" textValue="Pakaian & Aksesoris">
            Pakaian & Aksesoris
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item key='electronikDanGadget' id="electronikDanGadget" textValue="Elektronik & Gadget">
            Elektronik & Gadget
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
