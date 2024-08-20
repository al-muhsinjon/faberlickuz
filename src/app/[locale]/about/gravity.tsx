"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const Gravity = () => {
  const locale = useLocale();
  const t = useTranslations("Contact.gravity");
  return (
    <div className="flex pt-8 flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
      <Link href="/">{t("home")}</Link>
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
      <Link href={`/${locale}/contact`}>{t("page")}</Link>
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
    </div>
  );
};

export default Gravity;
