export const SWR_KEYS = {
  product: {
    all: "products",
    detail: (id: string) => `products/${id}`,
  },

  category: {
    all: "categories"
  },

  stock: {
    all: "stocks",
  },

  profile: {
    me: "profile/me"
  }
};