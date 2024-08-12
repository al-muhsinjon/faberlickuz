"use client";
import { IProduct } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  product: IProduct;
}

const Price: React.FC<Props> = ({ product }) => {
  const t = useTranslations("Card");
  return (
    <>
      <div className="lg:flex gap-3 mb-4 text-sm">
      {product?.sales ? (
          <>
            <p className="line-through text-gray-500">
              <span>{product?.price}</span>
              <span>&nbsp;{t("btns.sum")}</span>
            </p>
            <p className="text-base font-semibold text-main">
              <span>{product?.sales}</span>
              <span>&nbsp;{t("btns.sum")}</span>
            </p>
          </>
        ) : (
          <p className="text-base font-semibold text-main">
            <span>{product?.price}</span>
            <span>&nbsp;{t("btns.sum")}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default Price;
