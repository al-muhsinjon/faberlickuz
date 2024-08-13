"use client";
import React from "react";
import ProductCard from "@/components/product-card";
import { ICategoryProduct } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  newProducts: ICategoryProduct;
}

const NewProduct: React.FC<Props> = ({ newProducts }) => {
  const t = useTranslations("Home");
  const newProduct = newProducts.results.slice(0, 8);
  return (
    <>
      <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
        {t("new")}
      </h2>
      <div className="grid gap-4 pt-6 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {newProduct.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default NewProduct;
