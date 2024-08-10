// import { create } from "zustand";
// import axios from "axios";
// import { ICategoryProduct } from "@/types";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   // other product properties
// }

// interface ProductState {
//   products: ICategoryProduct;
//   isLoading: boolean;
//   error: string | null;
//   fetchProducts: (query: string) => Promise<void>;
// }

// export const useProductStore = create<ProductState>((set) => ({
//   products: {
//     count: 0,
//     next: "",
//     previous: "",
//     results: [],
//   },
//   isLoading: false,
//   error: null,

//   fetchProducts: async (query: string) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.get<ICategoryProduct>(
//         `${process.env.NEXT_API}/products-catalog?${query}`
//       );
//       set({ products: response.data, isLoading: false });
//     } catch (error: any) {
//       set({ error: error.message, isLoading: false });
//     }
//   },
// }));

// import { create } from "zustand";
// import axios from "axios";
// import { ICategoryProduct } from "@/types";

// interface ProductState {
//   products: ICategoryProduct;
//   isLoading: boolean;
//   error: string | null;
//   fetchProducts: (query: string) => Promise<void>;
// }

// export const useProductStore = create<ProductState>((set) => ({
//   products: {
//     count: 0,
//     next: "",
//     previous: "",
//     results: [],
//   },
//   isLoading: false,
//   error: null,

//   fetchProducts: async (query: string) => {
//     set({ isLoading: true, error: null });
//     try {
//       const response = await axios.get<ICategoryProduct>(
//         `https://sirius-tech.uz/backend/api/products-catalog?${query}`
//       );
//       set({ products: response.data, isLoading: false });
//     } catch (error: any) {
//       set({ error: error.message, isLoading: false });
//     }
//   },
// }));

import { create } from "zustand";
import axios from "axios";
import { ICategoryProduct } from "@/types";

interface ProductState {
  products: ICategoryProduct;
  isLoading: boolean;
  error: string | null;
  fetchProducts: (query: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: {
    count: 0,
    next: "",
    previous: "",
    results: [],
  },
  isLoading: false,
  error: null,

  fetchProducts: async (query: string) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get<ICategoryProduct>(
        `${process.env.NEXT_API}/products-catalog?${query}`
      );
      set({ products: response.data, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
