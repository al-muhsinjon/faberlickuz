"use client";
import { IProduct } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  product: IProduct;
}

const Available: React.FC<Props> = ({ product }) => {
  const t = useTranslations("Product");
  return (
    <>
      {product?.is_available && (
        <div className="flex items-center gap-1 text-[#36E3A4]  mb-5">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="w-6 h-6 "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p>{t("available")}</p>
        </div>
      )}
      {!product?.is_available && (
        <div className="flex items-center gap-1 text-red-500  mb-5">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            className="w-6 h-6 "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm8.036-4.024a.751.751 0 0 0-1.042.018.751.751 0 0 0-.018 1.042L10.939 12l-2.963 2.963a.749.749 0 0 0 .326 1.275.749.749 0 0 0 .734-.215L12 13.06l2.963 2.964a.75.75 0 0 0 1.061-1.06L13.061 12l2.963-2.964a.749.749 0 0 0-.326-1.275.749.749 0 0 0-.734.215L12 10.939Z"></path>
          </svg>

          <p>{t("noavailable")}</p>
        </div>
      )}
    </>
  );
};

export default Available;
