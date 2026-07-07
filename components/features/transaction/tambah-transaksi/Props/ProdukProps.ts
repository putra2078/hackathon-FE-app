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
  Produk: ProdukType[]
  AddItem: (item: ProdukType) => void;
  RemoveItem: (item: SelectProductType) => void;
}

export interface ProductCartItemProps {
  imageUrl: string;
  name: string;
  unitPrice: number;
  quantity: number;
  item: SelectProductType;
  onRemove: (item: SelectProductType) => void;
  onIncrement: (nama: string) => void;
  onDecrement: (nama: string) => void;
  className?: string;
  // onIncrement: () => void;
}

/*
export interface ProdukType {
  image: string;
  nama: string;
  harga: number;
  stok: number;
  quantity: number;
}

I have this type as an array with useState. Give me the simplest way to increment the quantity of a specific item
*/