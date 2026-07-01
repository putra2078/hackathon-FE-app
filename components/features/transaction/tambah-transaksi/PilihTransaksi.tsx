import { Select, ListBox } from "@heroui/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Key } from "@heroui/react"
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from 'clsx'

interface list {
  id: string,
  value: string,
  desc: string,
  icon: IconDefinition
}

type Props = {
  metode: Key | null | undefined;
  setMetode: Dispatch<SetStateAction<Key | null | undefined>>;
  list: list[];
  selected: string;
  unselected: string;
};

export default function PilihTransaksi({metode, setMetode, list, selected, unselected}: Props) {
  return (
    <>
      <p className="text-gray-500 my-2">Metode pembayaran</p>
      <Select 
        className="rounded-md border w-full"
        aria-label='Pilih Metode' 
        placeholder="Pilih Metode"
        value={metode}
        onChange={(value) => setMetode(value)}
      >
        <Select.Trigger className="rounded-md shadow-none">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover className="rounded-md">
          <ListBox>
            {list.map((li) => {
              return (
                <ListBox.Item key={li.id} id={li.id} textValue={li.value} className="rounded-sm">
                  {li.value}
                </ListBox.Item>
              );
            })}
          </ListBox>
        </Select.Popover>
      </Select>
      <div className="grid grid-cols-3 gap-4 my-2">
        { list.map(li => 
            <span 
              key={li.id}   
              className={clsx(
                "transition-all delay-50 border font-black text-center rounded-lg p-2 hover:cursor-pointer", 
                `${li.value == metode ? selected : unselected}`,
              )}
              onClick={() => setMetode(li.id)}
            >
              {li.value}
            </span>
        )}
      </div>
    </>

  )
}