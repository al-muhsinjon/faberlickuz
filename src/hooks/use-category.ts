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
  min_price: string | ""; // Min price qo'shildi
  max_price: string | ""; // Max price qo'shildi
  query: string | null;
  gender: string; // Yangi gender holati qo'shildi
  setCategories: (categories: {
    brand?: string;
    category?: string;
    sub_category?: string;
    stock?: string;
    order_by?: string; // order_by ni qabul qilish uchun
    min_price?: string; // min_price ni qabul qilish uchun
    max_price?: string; // max_price ni qabul qilish uchun
    gender?: string; // max_price ni qabul qilish uchun
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
      min_price: "", // Default qiymat
      max_price: "",
      gender: "", // Default qiymat
      query: null,
      setCategories: (categories) => {
        set((state) => {
          // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
          const updatedCategories = {
            ...state,
            ...categories,
          };

          // `query` stringni konstruktsiya qilish
          const {
            brand,
            category,
            sub_category,
            stock,
            order_by,
            min_price,
            max_price,
            gender,
          } = updatedCategories;
          const query = [
            brand,
            category,
            sub_category,
            stock,
            order_by,
            min_price,
            max_price,
            gender,
          ]
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

// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CategoryState {
//   brand: string;
//   category: string;
//   sub_category: string;
//   stock: string;
//   order_by: string; // Yangi order_by holati qo'shildi
//   query: string | null;
//   setCategories: (categories: {
//     brand?: string;
//     category?: string;
//     sub_category?: string;
//     stock?: string;
//     order_by?: string; // order_by ni qabul qilish uchun
//   }) => void;
// }

// export const useCategoryStore = create<CategoryState>()(
//   persist(
//     (set) => ({
//       brand: "",
//       category: "",
//       sub_category: "",
//       stock: "",
//       order_by: "", // Default holati
//       query: null,
//       setCategories: (categories) => {
//         set((state) => {
//           // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
//           const updatedCategories = {
//             ...state,
//             ...categories,
//           };

//           // `query` stringni konstruktsiya qilish
//           const { brand, category, sub_category, stock, order_by } =
//             updatedCategories;
//           const query = [brand, category, sub_category, stock, order_by]
//             .filter(Boolean)
//             .join("&");

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
