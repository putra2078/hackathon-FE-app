import { UseOverlayStateReturn } from "@heroui/react";

export interface ProdukType {
  nama: string,
  harga: number,
  stok: number,
  quantity: number
}

export interface DrawerProps {
  state: UseOverlayStateReturn;
  AddItem: (item: ProdukType) => void;
}

export interface ProductCartItemProps {
  imageUrl: string;
  name: string;
  unitPrice: number;
  quantity: number;
  item: ProdukType;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: (item: ProdukType) => void;
  className?: string;
}