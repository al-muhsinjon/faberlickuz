// import { create } from "zustand";
// import { persist } from "zustand/middleware";

// interface CategoryState {
//   brand: string;
//   category: string;
//   sub_category: string;
//   stock: string;
//   order_by: string; // Yangi order_by holati qo'shildi
//   query: string | null;
//   gender: string; // Yangi gender holati qo'shildi
//   page: string;
//   page_size: string;
//   setCategories: (categories: {
//     brand?: string;
//     category?: string;
//     sub_category?: string;
//     stock?: string;
//     order_by?: string; // order_by ni qabul qilish uchun
//     gender?: string; // max_price ni qabul qilish uchun
//     page?: string; // Yangi page holati qo'shildi
//     page_size?: string; // Yangi page holati qo'shildi
//   }) => void;
// }

// export const useCategoryStore = create<CategoryState>()(
//   persist(
//     (set) => ({
//       brand: "",
//       category: "",
//       sub_category: "",
//       stock: "",
//       page: "1", // Default page holati
//       page_size: "8", // Default page_size holati
//       order_by: "", // Default holati
//       gender: "", // Default qiymat
//       query: null,
//       setCategories: (categories) => {
//         set((state) => {
//           // Oldingi holatni saqlab qolib yangi kategoriyalarni yangilash
//           const updatedCategories = {
//             ...state,
//             ...categories,
//           };

//           // `query` stringni konstruktsiya qilish
//           const { brand, category, sub_category, stock, order_by, gender } =
//             updatedCategories;
//           const query = [brand, category, sub_category, stock, order_by, gender]
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
  order_by: string;
  gender: string;
  page: string;
  page_size: string;
  query: string | null;
  setCategories: (categories: {
    brand?: string;
    category?: string;
    sub_category?: string;
    stock?: string;
    order_by?: string;
    gender?: string;
    page?: string;
    page_size?: string;
  }) => void;
}

export const useCategoryStore = create<CategoryState>()(
  persist(
    (set) => ({
      brand: "",
      category: "",
      sub_category: "",
      stock: "",
      order_by: "",
      gender: "",
      page: "1",
      page_size: "8",
      query: "page=1&page_size=8",
      setCategories: (categories) => {
        set((state) => {
          // Oldingi holatni saqlab, yangi kategoriyalarni yangilash
          const updatedCategories = { ...state, ...categories };

          // query stringini yig'ish
          const queryParts = [
            updatedCategories.brand && `brand=${updatedCategories.brand}`,
            updatedCategories.category &&
              `category=${updatedCategories.category}`,
            updatedCategories.sub_category &&
              `sub_category=${updatedCategories.sub_category}`,
            updatedCategories.stock && `stock=${updatedCategories.stock}`,
            updatedCategories.order_by &&
              `order_by=${updatedCategories.order_by}`,
            updatedCategories.gender && `gender=${updatedCategories.gender}`,
            `page=${updatedCategories.page}`,
            `page_size=${updatedCategories.page_size}`,
          ].filter(Boolean);

          const query = queryParts.join("&");

          return {
            ...updatedCategories,
            query: query, // Agar bo'sh bo'lsa, null qaytariladi
          };
        });
      },
    }),
    { name: "category" } // localStorage'dagi key nomi
  )
);
