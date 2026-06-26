import {ComboBox, Input, ListBox} from "@heroui/react";
export default function Combox() {
  const caps = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1) 
  };

  const pelanggan = ['Andika', 'Dika', 'Galih', 'Galang'];

  return (
    <div>
    <ComboBox className="w-full border rounded-md" aria-label="ComboBox">
      <ComboBox.InputGroup>
        <Input className="shadow-none rounded-md" placeholder="Cari atau pilih pelanggan..." />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover placement="bottom left" className="rounded-xl">
        <ListBox>
          {
            pelanggan.map((nama, idx) => (
              <ListBox.Item key={idx} textValue={caps(nama)} className="rounded-md">
                {caps(nama)}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))
          }

        </ListBox>
      </ComboBox.Popover>
    </ComboBox>
    </div>

  )
}