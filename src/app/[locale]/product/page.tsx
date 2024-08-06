import { cookies } from "next/headers";
import { useCategory } from "@/hooks/use-category";
import { ICategoryProduct } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import IconButton from "@/components/icon-button";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import ProductCard from "@/components/product-card";
import Link from "next/link";
import CategoryFilter from "@/components/layouts/category-filter";

async function getData(category: RequestCookie | undefined) {
  const catalog = decodeURIComponent(category?.value as string);
  const res = await fetch(
    `https://birnimajon.pythonanywhere.com/api/products-catalog?${catalog}`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const CatalogPage = async ({ params }: { params: { locale: string } }) => {
  const cookieStore = cookies();
  const selectedCategory = cookieStore.get("selectedCategory");
  const data: ICategoryProduct = await getData(selectedCategory);
  // console.log(selectedCategory);
  return (
    <div className="px-12">
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
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
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
      </div>
      <div className="grid grid-cols-4 gap-5">
        <div>
          <CategoryFilter />
        </div>
        {data.results.map((category) => (
          <div key={category.id}>
            <ProductCard product={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

// https://sirius-tech.uz/backend/api/products-catalog?&category=SmartWatch&page=1&page_size=8

// https://sirius-tech.uz/backend/api/products-catalog?&category=Planshetlar&sub_category=Bolalar%20Planshetlari&page=1&page_size=8

export default CatalogPage;
