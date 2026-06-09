import { Select, ListBox } from '@heroui/react'
import { title } from 'process';

interface type {
  title: string,
  list: string[],
  width?: string
}

export default function DropDown({title, list, width}: type) {
  return (
<<<<<<< HEAD
  <Select className={`rounded-md border ${width}`} aria-label='Drop Down' placeholder={title}>
=======
  <Select className={`rounded-md border ${width}`} placeholder={title}>
>>>>>>> 181d8b8 (add: search field and filter)
      <Select.Trigger className="rounded-md">
        <Select.Value />
        <Select.Indicator />
      </Select.Trigger>
      <Select.Popover className="rounded-md">
        <ListBox>
          {list.map((li, index) => {
            return (
              <ListBox.Item
                key={index}
                id={index}
                textValue={li}
                className="rounded-sm"
              >
                {li}
              </ListBox.Item>
            );
          })}
        </ListBox>
      </Select.Popover>
    </Select>
  )
}
