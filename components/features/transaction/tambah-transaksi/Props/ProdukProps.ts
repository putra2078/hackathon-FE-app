import { UseOverlayStateReturn } from "@heroui/react";

export interface ProdukType {
  image: string;
  nama: string;
  harga: number;
  stok: number;
}

export interface SelectProductType extends ProdukType {
  quantity: number;
}

export interface DrawerProps {
  state: UseOverlayStateReturn;
  AddItem: (item: ProdukType) => void;
  Produk: ProdukType[]
}

export interface ProductCartItemProps {
  imageUrl: string;
  name: string;
  unitPrice: number;
  quantity?: number;
  item: ProdukType;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: (item: ProdukType) => void;
  className?: string;
}