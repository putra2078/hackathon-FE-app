import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { Modal, Button, Key } from "@heroui/react"
import { Dispatch, SetStateAction } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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


export default function SimpanTransaksi({metode, setMetode, list, selected, unselected}: Props) {
  return (
    <Modal>
      <Button variant="secondary" fullWidth className="my-1 rounded-lg font-bold text-background bg-green-800">Simpan Transaksi</Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Pilih Metode Pembayaran</Modal.Heading>
              <hr />
            </Modal.Header>
            <Modal.Body>
              { list.map(li => (
                  <div key={li.id} className={`flex items-center border-2 text-left rounded-lg py-3 px-2 my-2 ${li.value == metode ? selected : unselected}`} onClick={() => setMetode(li.id)}>
                    <FontAwesomeIcon icon={li.icon} size="3x" className="mr-1"/>
                    <div>
                      <h3 className="font-black">{li.value}</h3>
                      <p>{li.desc}</p>                              
                    </div>

                  </div>
                ))}
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