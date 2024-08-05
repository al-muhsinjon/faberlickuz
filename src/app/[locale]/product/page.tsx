import { cookies } from "next/headers";
import { useCategory } from "@/hooks/use-category";
import { ICategoryProduct } from "@/types";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useState } from "react";
import IconButton from "@/components/icon-button";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import ProductCard from "@/components/product-card";

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

const CatalogPage = async () => {
  const cookieStore = cookies();
  const selectedCategory = cookieStore.get("selectedCategory");
  const data: ICategoryProduct = await getData(selectedCategory);
  // console.log(selectedCategory);
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-5">
        {data.results.map((category) => (
          <div key={category.id}>
            <ProductCard product={category} />
          </div>
        ))}
        <IconButton text="boss" icon={selectedCategory?.value} />{" "}
      </div>
    </div>
  );
};

// https://sirius-tech.uz/backend/api/products-catalog?&category=SmartWatch&page=1&page_size=8

// https://sirius-tech.uz/backend/api/products-catalog?&category=Planshetlar&sub_category=Bolalar%20Planshetlari&page=1&page_size=8

export default CatalogPage;
