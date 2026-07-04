import { UseOverlayStateReturn } from "@heroui/react";

export type ProdukProps = {
  nama: string,
  harga: number,
  stok: number,
  quantity: number
}

export interface DrawerProps {
  state: UseOverlayStateReturn;
  AddItem: (item: ProdukProps) => void;
}

export interface ProductCartItemProps {
  imageUrl: string;
  name: string;
  unitPrice: number;
  quantity: number;
  item: ProdukProps;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: (item: ProdukProps) => void;
  className?: string;
}