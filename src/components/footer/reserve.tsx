"use client"
import { useTranslations } from "next-intl";
import React from "react";

const Reserve = () => {
    const t = useTranslations("Footer")
  return (
    <span className="mb-4 lg:mb-0">
      {t("reserve")}
    </span>
  );
};

export default Reserve;
