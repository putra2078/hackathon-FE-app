export const SWR_KEYS = {
  product: {
    all: "products",
    detail: (id: string) => `products/${id}`,
  },

  stock: {
    all: "stocks",
  },

  profile: {
    me: "profile/me"
  }
};