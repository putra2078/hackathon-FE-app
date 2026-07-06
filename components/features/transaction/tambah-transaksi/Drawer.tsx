import {Button, Drawer, Surface } from "@heroui/react";
import clsx from 'clsx'
import { CirclePlusFill } from "@gravity-ui/icons";
import { DrawerProps, ProdukType } from '@/components/features/transaction/tambah-transaksi/Props/ProdukProps'

export default function ProdukDrawer({state, AddItem, Produk}: DrawerProps) {
  const something = [
    { image: '/Keyboard.jpg',nama: 'Keyboard', harga: 12000, stok: 12},
    { image: '/Mouse.jpg',nama: 'Mouse', harga: 24000, stok: 20},
    { image: '/Keyboard.jpg',nama: 'Bruh', harga: 32000, stok: 19},
  ];

  const Selected = (item: ProdukType) => {
    const isSelected = Produk.find(Produk => Produk.nama === item.nama)
    if (isSelected) {
      return 'opacity-50'
    }
  }

  const button = "min-w-24 rounded-lg font-bold"
  const secondary = "text-green-800"
  const primary = "bg-green-800"
  return (
    <Drawer>
      <Button variant="outline" 
        className="w-full rounded-2xl h-16 text-green-800 font-bold"
        onPress={state.open}
      >
        <CirclePlusFill className="size-4 shrink-0"/>
        <h3>Tambah Produk Lainnya</h3>
      </Button>
      <Drawer.Backdrop isOpen={state.isOpen} onOpenChange={state.setOpen}>
        <Drawer.Content placement="right">
          <Drawer.Dialog className="min-w-180 bg-surface">
            <Drawer.CloseTrigger />
            <Drawer.Header>
              <Drawer.Heading className="text-xl font-bold">Katalog Produk</Drawer.Heading>
              <p>Klik untuk menambah item</p>
              <hr />
            </Drawer.Header>
            <Drawer.Body>
              <div className="grid grid-cols-3 gap-4">
                { something.map((item, idx) => 
                  <Surface 
                    key={idx} 
                    className={clsx(
                      "relative rounded-2xl border border-black/5 bg-white hover:cursor-pointer hover:opacity-75 transition",
                      Selected(item)
                    )}
                      onClick={() => AddItem(item)}
                  >
                    <div className="aspect-square w-full overflow-hidden rounded-t-xl h-64 bg-neutral-100">
                      <img
                        src={item.image}
                        alt="alt"
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="p-4 text-gray-500">
                      <h3 className="text-lg font-bold">
                        {item.nama}
                      </h3>
                      <p>
                        {item.harga}
                      </p>
                      <p>
                        Stok: {item.stok}
                      </p>
                    </div>
                  </Surface> 
                )}
              </div>
            </Drawer.Body>
            <Drawer.Footer >
              {/* <Button slot="close" variant="secondary" className={clsx(button, secondary)}>
                Cancel
              </Button> */}
              <Button slot="close" className={clsx(button, primary)}>Close</Button>
            </Drawer.Footer>
          </Drawer.Dialog>
        </Drawer.Content>
      </Drawer.Backdrop>
    </Drawer>
  )
}