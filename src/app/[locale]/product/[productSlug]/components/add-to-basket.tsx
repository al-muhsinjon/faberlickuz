"use client";
import { useBasketStore } from "@/hooks/use-basket";
import { ICartProduct, IProduct } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  product: IProduct;
}

const AddToBasket: React.FC<Props> = ({ product }) => {
  const { addToBasket } = useBasketStore();
  const t = useTranslations("Product");

  const handleAddToBasket = () => {
    const cartProduct: ICartProduct = {
      id: product.id,
      title_uz: product.title_uz,
      title_ru: product.title_ru,
      price: product.price,
      salePrice: product.sales || undefined,
      image: product.images[0].image,
      count: 1,
      totalPrice: product.sales || product.price,
    };

    addToBasket(cartProduct);
  };

  return (
    <button
      disabled={!product?.is_available}
      onClick={handleAddToBasket}
      className="
          bg-darkBlue text-white mt-3.5 cursor-pointer disabled:cursor-not-allowed border-main 
          hover:opacity-80 flex items-center justify-center gap-3 border
          relative rounded-lg font-rubik md:text-lg px-4 py-2 undefined 
          group w-full text-sm  lg:text-lg  
          bg-main
          "
    >
      <span className="block">{t("addToCart")}</span>
    </button>
  );
};

export default AddToBasket;
