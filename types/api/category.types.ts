export interface Category {
  id: string;
  name: string;
  description?: string | null;
}


export interface CategoryRes extends Category {
    createdAt?: string
    updatedAt?: string
}