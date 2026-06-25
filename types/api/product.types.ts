export interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  category: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}