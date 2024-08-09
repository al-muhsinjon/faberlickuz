// import create from "zustand";

// interface CategoryState {
//   brand: string;
//   category: string;
//   sub_category: string;
//   stock: string;
//   query: string | null;
//   setCategories: (newCategories: Partial<CategoryState>) => void;
// }

// export const useCategoryStore = create<CategoryState>((set) => ({
//   brand: "",
//   category: "",
//   sub_category: "",
//   stock: "",
//   query: null,
//   setCategories: (newCategories) =>
//     set((state) => {
//       const updatedCategories = {
//         ...state,
//         ...newCategories,
//       };

//       const { brand, category, sub_category, stock } = updatedCategories;
//       const query = [brand, category, sub_category, stock]
//         .filter(Boolean)
//         .join("");

//       return {
//         ...updatedCategories,
//         query: query || null,
//       };
//     }),
// }));

// src/hooks/use-category-store.ts
// import create from "zustand";
// import { persist } from "zustand/middleware";

// interface CategoryState {
//   brand: string;
//   category: string;
//   sub_category: string;
//   stock: string;
//   query: string | null;
//   setCategories: (categories: {
//     brand?: string;
//     category?: string;
//     sub_category?: string;
//     stock?: string;
//   }) => void;
// }

// export const useCategoryStore = create<CategoryState>()(
//   persist(
//     (set) => ({
//       brand: "",
//       category: "",
//       sub_category: "",
//       stock: "",
//       query: null,
//       setCategories: (categories) => {
//         const {
//           brand = "",
//           category = "",
//           sub_category = "",
//           stock = "",
//         } = categories;
//         const query = [brand, category, sub_category, stock]
//           .filter(Boolean)
//           .join("");
//         set({
//           brand,
//           category,
//           sub_category,
//           stock,
//           query: query || null,
//         });
//       },
//     }),
//     {
//       name: "category", // localStorage kaliti nomi
//     }
//   )
// );

// import create from "zustand";
// import { persist } from "zustand/middleware";

// interface CategoryState {
//   brand: string;
//   category: string;
//   sub_category: string;
//   stock: string;
//   query: string | null;
//   setCategories: (categories: {
//     brand?: string;
//     category?: string;
//     sub_category?: string;
//     stock?: string;
//   }) => void;
// }

// export const useCategoryStore = create<CategoryState>()(
//   persist(
//     (set) => ({
//       brand: "",
//       category: "",
//       sub_category: "",
//       stock: "",
//       query: null,
//       setCategories: (categories) => {
//         set((state) => {
//           // Merge new categories with the existing state
//           const updatedCategories = {
//             ...state,
//             ...categories,
//           };

//           // Construct the query string based on updated categories
//           const { brand, category, sub_category, stock } = updatedCategories;
//           const query = [brand, category, sub_category, stock]
//             .filter(Boolean)
//             .join("");

//           return {
//             ...updatedCategories,
//             query: query || null,
//           };
//         });
//       },
//     }),
//     {
//       name: "category", // localStorage key name
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CategoryState {
  brand: string;
  category: string;
  sub_category: string;
  stock: string;
  query: string | null;
  setCategories: (categories: {
    brand?: string;
    category?: string;
    sub_category?: string;
    stock?: string;
  }) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      brand: "",
      category: "",
      sub_category: "",
      stock: "",
      query: null,
      setCategories: (categories) => {
        set((state) => {
          // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
          const updatedCategories = {
            ...state,
            ...categories,
          };

          // `query` stringni konstruktsiya qilish
          const { brand, category, sub_category, stock } = updatedCategories;
          const query = [brand, category, sub_category, stock]
            .filter(Boolean)
            .join("");

          return {
            ...updatedCategories,
            query: query || null, // `query` stringni yangilash
          };
        });
      },
    }),
    {
      name: "category", // localStorage key nomi
    }
  )
);
