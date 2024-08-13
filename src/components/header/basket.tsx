"use client";
import { useBasketStore } from "@/hooks/use-basket";
import { Phone, ShoppingBag } from "lucide-react";
import { useLocale } from "next-intl";
import Link from "next/link";
import React from "react";

const Basket = () => {
  const { allCount } = useBasketStore();
  const locale = useLocale();

  return (
    <div className="flex items-center gap-6">
      <Link
        href={`/${locale}/about`}
        className="py-2 border-2 rounded-lg border-main px-4 text-main"
      >
        <Phone className="text-2xl" />
      </Link>
      <Link
        href={`/uz/order`}
        className="py-2 border-2 relative rounded-lg border-main px-4 text-white bg-main"
      >
        <span className="absolute rounded-full px-2 py-1 bg-white text-black -top-5 -right-3">
          {allCount}
        </span>
        <ShoppingBag className="text-2xl" />
      </Link>
    </div>
  );
};

export default Basket;
