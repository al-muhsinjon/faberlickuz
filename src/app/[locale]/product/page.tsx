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
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap gap-2 items-center text-gray-700 font-rubik text-sm md:text-base">
        <Link href="/" className="hover:underline">
          Главная
        </Link>
        <svg
          className="w-3 h-3 text-gray-400 mx-1"
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
        <Link href={`/${params.locale}/product`} className="hover:underline">
          Каталог
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <CategoryFilter filters={filters} stocks={stocks} />
        <div className="lg:col-span-3">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
