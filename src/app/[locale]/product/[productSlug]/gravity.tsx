"use client";
import { IProduct } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface Props {
  product: IProduct;
}

const Gravity: React.FC<Props> = ({ product }) => {
  const locale = useLocale();
  const t = useTranslations("Product");
  console.log(product);
  return (
    <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <Link href="/">{t("gravity.home")}</Link>
      <svg
        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <Link href={`/${locale}/product`}>{t("gravity.katalog")}</Link>
      <svg
        className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 6 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 9 4-4-4-4"
        />
      </svg>
      <Link href={`/${locale}/product/${product.slug}`}>
        {locale === "uz" ? product.title_uz : product.title_ru}
      </Link>
    </div>
  );
};

export default Gravity;
