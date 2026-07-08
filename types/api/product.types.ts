export interface Product {
  id?: string;
  code?: string;
  name: string;
  image: string | null
  description: string | null;
  categoryId: string;
  buyPrice: number;
  sellPrice: number;
  stock: number;
}

export interface ProductsWithCategoryName extends Product{
  categoryName: string
}

export interface getAllProductsRes extends Product {
  createdAt?: string;
  updatedAt?: string;
}

export interface createNewProductRes extends Product {
  createdAt?: string;
  updatedAt?: string;
}

export interface getDetailProductRes extends Product {
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProductReq {
  id: string;
  payload: {
    category: string;
    buyPrice: number;
    sellPrice: number;
    stock: number;
    name: string;
    description: string | null;
  };
}
