import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Key, RadioGroup, Radio, Label } from "@heroui/react"
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { formatRupiah } from "@/components/Functions/FormatRupiah";

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
  bayar: number;
};

export default function SimpanTransaksi({metode, setMetode, list, bayar}: Props) {
  const selected = 'bg-green-600/10 border-green-700 text-green-700';
  const unselected = 'bg-background border-gray-200 text-gray-400';
  return (
    <Modal>
      <Button variant="secondary" fullWidth className="my-1 p-6 rounded-lg font-bold text-background bg-green-800">Simpan Transaksi</Button>
      <Modal.Backdrop variant="transparent">
        <Modal.Container>
          <Modal.Dialog className="max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading className="font-black text-lg">Pilih Metode Pembayaran</Modal.Heading>
              <hr />
            </Modal.Header>
            <Modal.Body>
              {/* { list.map(li => (
                  <div key={li.id} className={`flex items-center border-2 text-left rounded-lg py-3 px-2 my-2 ${li.value == metode ? selected : unselected}`} onClick={() => setMetode(li.id)}>
                    <FontAwesomeIcon icon={li.icon} size="3x" className="mr-1"/>
                    <div>
                      <h3 className="font-black">{li.value}</h3>
                      <p>{li.desc}</p>                              
                    </div>

                  </div>
                ))} */}
              <RadioGroup
                orientation="vertical"
                value={String(metode)}
                onChange={(value) => setMetode(value)}
              >
                { list.map(li => (
                    <Radio value={li.value} key={li.id} className={`flex relative justify-between items-center border-2 rounded-xl p-4 my-2 ${li.value == metode ? selected : unselected}`}>
                      <Radio.Content className={"flex flex-row items-center text-left transition-all"}> 
                        <div className="rounded-lg flex text-background bg-green-800 items-center justify-center w-12 h-12 mr-2">
                          <FontAwesomeIcon icon={li.icon} size="2x" className=""/>
                        </div>
                        <div>
                          <Label className="font-black">{li.value}</Label>
                          <p>{li.desc}</p>                              
                        </div>
                      </Radio.Content>
                      <Radio.Control className={`absolute right-5 `}>
                        <Radio.Indicator className={`border-1 rounded-xl border-border ${li.value == "border-green-800 bg-green-800 text-green-800" ? selected : ''}`}/>
                      </Radio.Control> 
                    </Radio>
                ))}
              </RadioGroup>

              <hr className="my-4"/>

              <div className="flex justify-between">
                <h3>Total Transaksi:</h3>
                <p className="font-bold text-green-800">{formatRupiah(bayar)}</p>
              </div>
            </Modal.Body>
            <Modal.Footer className="flex flex-col">
              <Button className="w-full rounded-lg font-bold text-background bg-green-800" slot="close">
                Lanjut ke Konfirmasi
              </Button>
              <Button className="w-full rounded-lg bg-background border text-gray-400" slot="close">
                Batal
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  )
}