import { create } from "zustand";
import { createJSONStorage, persist, StateStorage } from "zustand/middleware";

/* TYPES */
interface CartItem {
  _id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  cart: CartItem[];

  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;

  getTotalPrice: () => number;
  getTotalItems: () => number;
}

/* SAFE STORAGE (SSR friendly) */
const noopStorage: StateStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

const getSafeStorage = () => {
  if (typeof window === "undefined") return noopStorage;
  try {
    return window.localStorage;
  } catch {
    return noopStorage;
  }
};

/* STORE */
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      /* ADD TO CART */
      addToCart: (product) => {
        const cart = get().cart;
        const existing = cart.find((item) => item._id === product._id);

        if (existing) {
          set({
            cart: cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          });
        } else {
          set({
            cart: [...cart, { ...product, quantity: 1 }],
          });
        }
      },

      /* REMOVE */
      removeFromCart: (id) => {
        set({
          cart: get().cart.filter((item) => item._id !== id),
        });
      },

      /* INCREASE */
      increaseQty: (id) => {
        set({
          cart: get().cart.map((item) =>
            item._id === id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        });
      },

      /* DECREASE */
      decreaseQty: (id) => {
        const updated = get().cart
          .map((item) =>
            item._id === id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0);

        set({ cart: updated });
      },

      /* CLEAR */
      clearCart: () => set({ cart: [] }),

      /* TOTAL PRICE */
      getTotalPrice: () => {
        return get().cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      /* TOTAL ITEMS */
      getTotalItems: () => {
        return get().cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
      },
    }),
    {
      name: "cart-store",
      storage: createJSONStorage(getSafeStorage),
    }
  )
);