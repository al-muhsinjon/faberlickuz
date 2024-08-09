// import create from "zustand";
// import { persist } from "zustand/middleware";
// import { ICartProduct } from "@/types";

// interface BasketState {
//   basket: ICartProduct[];
//   allPrice: number;
//   allCount: number;
//   addToBasket: (product: ICartProduct) => void;
// }

// export const useBasketStore = create<BasketState>()(
//   persist(
//     (set) => ({
//       basket: [],
//       allPrice: 0,
//       allCount: 0,
//       addToBasket: (product) =>
//         set((state) => {
//           const existingProductIndex = state.basket.findIndex(
//             (item) => item.id === product.id
//           );

//           if (existingProductIndex >= 0) {
//             // Mahsulot savatda mavjud bo'lsa, miqdorini va narxini yangilash
//             const updatedBasket = [...state.basket];
//             updatedBasket[existingProductIndex].count += 1;
//             updatedBasket[existingProductIndex].totalPrice +=
//               product.salePrice || product.price;

//             return {
//               basket: updatedBasket,
//               allPrice: state.allPrice + (product.salePrice || product.price),
//               allCount: state.allCount + 1,
//             };
//           } else {
//             // Yangi mahsulotni savatga qo'shish
//             const newProduct = {
//               ...product,
//               count: 1,
//               totalPrice: product.salePrice || product.price,
//             };
//             return {
//               basket: [...state.basket, newProduct],
//               allPrice: state.allPrice + (product.salePrice || product.price),
//               allCount: state.allCount + 1,
//             };
//           }
//         }),
//     }),
//     {
//       name: "basket", // localStorage kaliti nomi
//     }
//   )
// );

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICartProduct } from "@/types";

interface BasketState {
  basket: ICartProduct[];
  allPrice: number;
  allCount: number;
  addToBasket: (product: ICartProduct) => void;
  removeFromBasket: (id: number) => void;
  updateProductCount: (id: number, count: number) => void;
}

export const useBasketStore = create<BasketState>()(
  persist(
    (set) => ({
      basket: [],
      allPrice: 0,
      allCount: 0,
      addToBasket: (product) =>
        set((state) => {
          const existingProductIndex = state.basket.findIndex(
            (item) => item.id === product.id
          );

          if (existingProductIndex >= 0) {
            const updatedBasket = [...state.basket];
            updatedBasket[existingProductIndex].count += 1;
            updatedBasket[existingProductIndex].totalPrice +=
              product.salePrice || product.price;

            return {
              basket: updatedBasket,
              allPrice: state.allPrice + (product.salePrice || product.price),
              allCount: state.allCount + 1,
            };
          } else {
            const newProduct = {
              ...product,
              count: 1,
              totalPrice: product.salePrice || product.price,
            };
            return {
              basket: [...state.basket, newProduct],
              allPrice: state.allPrice + (product.salePrice || product.price),
              allCount: state.allCount + 1,
            };
          }
        }),
      removeFromBasket: (id) =>
        set((state) => {
          const updatedBasket = state.basket.filter((item) => item.id !== id);
          const removedItem = state.basket.find((item) => item.id === id);

          if (removedItem) {
            return {
              basket: updatedBasket,
              allPrice: state.allPrice - removedItem.totalPrice,
              allCount: state.allCount - removedItem.count,
            };
          }
          return state;
        }),
      updateProductCount: (id, count) =>
        set((state) => {
          const updatedBasket = state.basket.map((item) => {
            if (item.id === id) {
              const updatedTotalPrice = (item.salePrice || item.price) * count;
              return {
                ...item,
                count,
                totalPrice: updatedTotalPrice,
              };
            }
            return item;
          });

          const allPrice = updatedBasket.reduce(
            (total, item) => total + item.totalPrice,
            0
          );
          const allCount = updatedBasket.reduce(
            (total, item) => total + item.count,
            0
          );

          return {
            basket: updatedBasket,
            allPrice,
            allCount,
          };
        }),
    }),
    {
      name: "basket",
    }
  )
);
