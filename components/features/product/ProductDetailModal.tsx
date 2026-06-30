"use client";

import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const LabelAndDesc = [
  {
    label: "SKU",
    desc: "PRD0005",
  },
  {
    label: "Kategori",
    desc: "Elektronik",
  },
  {
    label: "Harga Beli",
    desc: "Rp 200.000",
  },
  {
    label: "Harga Jual",
    desc: "Rp 300.000",
  },
    {
    label: "Stock",
    desc: "100",
  },
];

export default function ProductDetailModal() {
  return (
    <Modal isOpen={true}>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-[600px] h-[80vh] rounded-xl bg-surface p-0">
            <Modal.CloseTrigger />
            <Modal.Header className="gap-0 bg-linear-to-r from-primary via-primary-500 via-53% to-primary-600 to-89% p-4 text-white">
              <p>Detail Produk</p>
              <Modal.Heading className="text-xl font-bold text-white">
                Ayam 40Kg
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="py-6 px-8">
              <div className="flex gap-8 flex-wrap">
                <div className="flex flex-col flex-1 gap-4">
                  <div className="w-full h-52 rounded-sm overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1628794397139-a45fc3286892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="product-image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="space-y-0.5">
                      <h2 className="text-base font-semibold text-foreground">
                        Deskripsi Produk
                      </h2>
                      <p>
                        Hub multi-port dengan colokan HDMI 4K, 3 port USB 3.0,
                        serta slot SD/TF card reader. Cocok untuk MacBook &
                        laptop.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-4">
                  <div className="grid gap-2 grid-cols-2">
                    {LabelAndDesc.map((item, i) => {
                      return (
                        <div className="space-y-0.5" key={i}>
                          <h2 className="text-base font-semibold text-foreground">
                            {item.label}
                          </h2>
                          <p>{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
