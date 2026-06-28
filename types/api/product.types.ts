export interface Product {
  id?: string;
  code: string;
  name: string;
  description?: string;
  category: string;
  buyPrice: number ;
  sellPrice: number ;
  stock: number ;
}

export interface getAllProductsRes extends Product{
  createdAt?: string
  updatedAt?: string
}

export interface createNewProductRes extends Product{
    createdAt?: string
  updatedAt?: string
}