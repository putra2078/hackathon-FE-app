// lib/swr-keys.ts
export const PRODUCT_KEYS = {
  all: 'products',
  detail: (id: string) => `products/${id}`,
};