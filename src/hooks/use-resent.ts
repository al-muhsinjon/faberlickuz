import { IProduct } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ResentState {
  resentProducts: IProduct[];
  addToResent: (product: IProduct) => void;
  getRandomResentProducts: () => IProduct[];
}

export const useResent = create<ResentState>()(
  persist(
    (set, get) => ({
      resentProducts: [],
      addToResent: (product) => {
        set((state) => {
          const exists = state.resentProducts.some(
            (item) => item.id === product.id
          );

          if (!exists) {
            return {
              resentProducts: [...state.resentProducts, product],
            };
          }

          return state;
        });
      },
      getRandomResentProducts: () => {
        const products = get().resentProducts;
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
      },
    }),
    {
      name: "resentProducts",
    }
  )
);
