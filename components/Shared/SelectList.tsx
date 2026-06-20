import { ListBox, Select } from "@heroui/react";

export const createList  = <K extends string>(items: ListItemsDef<K>[]) => items;


export interface ListItemsDef<K extends string> {
  key: K;
  textValue: string;
}

interface SelectListProps<K extends string> {
  ListItems: ListItemsDef<K>[];
  placeholder: string;
  defaultValue?: K;
  width?: number;
}

export default function SelectList<K extends string>({ListItems, placeholder, defaultValue, width = 200}: SelectListProps<K>) {
  const styleWidth =  `${width}px`;
    return (
    
    <Select
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{
        width: styleWidth
      }}
    >
      <Select.Trigger className={"rounded-md"}>
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className={"rounded-md"}>
        <ListBox className="*:rounded-sm">
            {ListItems.map((item) => {
                return(
                    <ListBox.Item key={item.key} id={item.key} textValue={item.textValue}>
                        {item.textValue}
                    </ListBox.Item>
                )
            })}
        </ListBox>
      </Select.Popover>
    </Select>
  );
}
