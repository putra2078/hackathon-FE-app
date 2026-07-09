export interface Stock {
  name: string;
  buyPrice: number;
  stock: number;
  category: string;
}

export interface PatchStocksReq {
  id: string;
  stock: number;
}

export interface PatchStocksRes {
  id: string;
  code: string;
  name: string;
  description: string | null;
  image: null | string;
  categoryId: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  createdAt: string;
  updatedAt: string;
}
