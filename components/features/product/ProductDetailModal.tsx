"use client";

import { useGetCategoryById } from "@/hooks/product/useGetCategoryById";
import { useProductDetail } from "@/hooks/product/useProductDetail";
import { formatDate } from "@/lib/formatDate";
import { formatPrice } from "@/lib/formatPrice";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, buttonVariants, Modal } from "@heroui/react";
import Link from "next/link";

interface ProductDetailModalProps {
  id: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export default function ProductDetailModal({
  id,
  isOpen,
  setIsOpen,
}: ProductDetailModalProps) {
  const {error, isLoading, product} = useProductDetail(id)

  console.log(product)

  const {category} = useGetCategoryById(product?.categoryId)

  const categoryName = category ? category.name : "Loading..."

    if (isLoading || !product) return null;

    const imgURL = product.image || 'https://images.unsplash.com/photo-1628794397139-a45fc3286892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


  const LabelAndDesc = [
    {
      label: "Nama Produk",
      desc: product.name,
    },
    {
      label: "SKU",
      desc: product.code,
    },
    {
      label: "Kategori",
      desc: categoryName,
    },
    {
      label: "Stock",
      desc: product.stock,
    },
    {
      label: "Harga Beli",
      desc: formatPrice(product.buyPrice),
    },
    {
      label: "Harga Jual",
      desc: formatPrice(product.sellPrice),
    },
  ];
  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-[600px] h-[90vh] rounded-xl bg-surface p-0">
            <Modal.CloseTrigger className="flex justify-center items-center text-white bg-transparent">
              <FontAwesomeIcon icon={faX} />
            </Modal.CloseTrigger>
            <Modal.Header className="gap-0 bg-linear-to-r from-primary via-primary-500 via-53% to-primary-600 to-89% p-4 text-white">
              <h3>Detail Produk</h3>
              <Modal.Heading className="text-2xl font-bold text-white">
                {product.name}
              </Modal.Heading>
            </Modal.Header>
            <Modal.Body className="m-0 py-4 px-8">
              <div className="flex gap-4 flex-col">
                <div className="flex gap-8">
                  <div>
                    <div className="w-46 h-46 rounded-sm overflow-hidden shadow">
                      <img
                        src={imgURL}
                        alt="product-image"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 grid-cols-2 w-full">
                    {LabelAndDesc.map((item, i) => {
                      return (
                        <div key={i}>
                          <h2 className="text-base font-semibold text-foreground">
                            {item.label}
                          </h2>
                          <p className="text-base">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
                <div>
                  <div className="space-y-0.5">
                    <h2 className="text-base font-semibold text-foreground">
                      Deskripsi Produk
                    </h2>
                    <p>
                      {product.description ||
                        "*Produk tidak memiliki deskripsi"}
                    </p>
                  </div>
                </div>
                <hr />
                <div>
                  <div className="space-y-0.5">
                    <h2 className="text-base font-semibold text-foreground">
                      Riwayat Perubahan
                    </h2>
                    <div className="flex gap-6">
                      <div>
                        <h4>Waktu Dibuat</h4>
                        <span> {formatDate(product.createdAt)}</span>
                      </div>
                      <div>
                        <h4>Pembaruan Terakhir</h4>
                        <span> {formatDate(product.updatedAt)}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="p-4 border-t m-0" >
              <Button
                slot="close"
                variant="tertiary"
                className="rounded-md shadow-sm"
              >
                Tutup
              </Button>
              <Link
                href={`/produk/edit/${id}`}
                className={`${buttonVariants({ variant: "primary" })} text-white rounded-md shadow-sm border-0 bg-primary hover:bg-primary-700`}
              >
                Edit Produk
              </Link>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
