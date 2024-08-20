"use client";
import React from "react";
import ProductCard from "@/components/product-card";
import { ICategoryProduct, IProduct, IProductC } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  relatedProducts: IProduct[];
}

const RelatedProducts: React.FC<Props> = ({ relatedProducts }) => {
  const t = useTranslations("Product");

  return (
    <>
      <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
        {t("recommendation")}
      </h2>
      <div className="grid gap-4 pt-6 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
