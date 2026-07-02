import {Button, Drawer, UseOverlayStateReturn, Surface } from "@heroui/react";
import clsx from 'clsx'
import { formatRupiah } from "@/components/Functions/FormatRupiah";

type OverlayProps = {
  state: UseOverlayStateReturn;
}

export default function ProdukDrawer({state}: OverlayProps) {
  const something = new Array(20).fill(0)
  const button = "min-w-24 rounded-lg font-bold"
  const secondary = "text-green-800"
  const primary = "bg-green-800"
  return (
    <Drawer>
      <Drawer.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Drawer.Content placement="right">
          <Drawer.Dialog className="min-w-180 bg-surface">
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading className="text-xl font-bold">Katalog Produk</Drawer.Heading>
              <hr />
            </Drawer.Header>
            <Drawer.Body>
              <div className="grid grid-cols-3 gap-4">
                { something.map((_, idx) => 
                  <Surface key={idx} className="hover:cursor-pointer relative rounded-2xl border border-black/5 bg-white">
                    <div className="aspect-square w-full overflow-hidden rounded-t-xl h-64 bg-neutral-100">
                      <img
                        src="/Keyboard.jpg"
                        alt="alt"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-gray-500">
                      <h3 className="text-lg font-bold">
                        Keyboard
                      </h3>
                      <p>
                        {formatRupiah(12000)}
                      </p>
                      <p>
                        Stok: 12
                      </p>
                    </div>
                  </Surface> 
                )}
              </div>
            </Drawer.Body>
            <Drawer.Footer>
              <Button slot="close" variant="secondary" className={clsx(button, secondary)}>
                Cancel
              </Button>
              <Button slot="close" className={clsx(button, primary)}>Confirm</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}