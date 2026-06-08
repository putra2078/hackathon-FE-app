import { ListBox, Select } from "@heroui/react";
export default function SelectStatus() {
  return (
    <Select
      className="w-[128px]"
      placeholder="Status"
    >
      <Select.Trigger className={'rounded-md'}>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className={'rounded-md'}>
        <ListBox selectionMode="multiple" className="*:rounded-sm">
          <ListBox.Item key='aktif' id="aktif" textValue="Aktif">
            Aktif
            <ListBox.ItemIndicator />
          </ListBox.Item>
          <ListBox.Item key='tidakAktif' id="tidakAktif" textValue="Tidak Aktif">
            Tidak Aktif
            <ListBox.ItemIndicator />
          </ListBox.Item>
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
