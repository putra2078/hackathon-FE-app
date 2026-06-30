import {ComboBox, Input, ListBox} from "@heroui/react";

type ComboxProps = {
  title: string;
  list: string[];
};

export default function Combox({ title,list }: ComboxProps) {
  const caps = (title: string) => {
    return title.charAt(0).toUpperCase() + title.slice(1) 
  };

  return (
    <ComboBox className="w-full border rounded-md" aria-label="ComboBox">
      <ComboBox.InputGroup>
        <Input className="shadow-none rounded-md" placeholder={title} />
        <ComboBox.Trigger />
      </ComboBox.InputGroup>
      <ComboBox.Popover placement="bottom left" className="rounded-xl">
        <ListBox>
          {
            list.map((nama: string, idx: number) => (
              <ListBox.Item key={idx} textValue={caps(nama)} className="rounded-md">
                {caps(nama)}
                <ListBox.ItemIndicator />
              </ListBox.Item>
            ))
          }

        </ListBox>
      </ComboBox.Popover>
    </ComboBox>
  )
}