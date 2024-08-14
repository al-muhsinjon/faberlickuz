// import { create } from "zustand";
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
//           // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
//           const updatedCategories = {
//             ...state,
//             ...categories,
//           };

//           // `query` stringni konstruktsiya qilish
//           const { brand, category, sub_category, stock } = updatedCategories;
//           const query = [brand, category, sub_category, stock]
//             .filter(Boolean)
//             .join("");

//           return {
//             ...updatedCategories,
//             query: query || null, // `query` stringni yangilash
//           };
//         });
//       },
//     }),
//     {
//       name: "category", // localStorage key nomi
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
  order_by: string; // Yangi order_by holati qo'shildi
  query: string | null;
  setCategories: (categories: {
    brand?: string;
    category?: string;
    sub_category?: string;
    stock?: string;
    order_by?: string; // order_by ni qabul qilish uchun
  }) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      brand: "",
      category: "",
      sub_category: "",
      stock: "",
      order_by: "", // Default holati
      query: null,
      setCategories: (categories) => {
        set((state) => {
          // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
          const updatedCategories = {
            ...state,
            ...categories,
          };

          // `query` stringni konstruktsiya qilish
          const { brand, category, sub_category, stock, order_by } =
            updatedCategories;
          const query = [brand, category, sub_category, stock, order_by]
            .filter(Boolean)
            .join("&");

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
