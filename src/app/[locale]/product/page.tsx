import CategoryFilter from "@/components/layouts/category-filter";
import { IMainPageCategory, IStoc } from "@/types";
import Link from "next/link";
import React from "react";
import Product from "./product";

const ProductsPage = async ({
  params,
}: {
  params: { productSlug: string; locale: string };
}) => {
  const res = await fetch(`${process.env.NEXT_API}/main-page-categories/`);
  const filters: IMainPageCategory[] = await res.json();

  const stockFetcher = await fetch(`${process.env.NEXT_API}/stocks`);
  const stocks: IStoc[] = await stockFetcher.json();

  return (
    <div className="px-12 py-6">
      <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
        <Link href="/">Главная</Link>
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
        <Link href={`/${params.locale}/product`}>Каталог</Link>
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
      <div className="grid grid-cols-1 lg:grid-cols-5 relative gap-6 min-h-screen">
        <CategoryFilter filters={filters} stocks={stocks} />
      <Product />
      </div>
    </div>
  );
};

export default ProductsPage;
