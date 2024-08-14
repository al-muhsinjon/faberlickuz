import CategoryFilter from "@/components/layouts/category-filter";
import React from "react";
import Product from "./product";
import { fetchData } from "@/utils/fetch-data";
import Gravity from "./gravity";

const ProductsPage = async ({
  params,
}: {
  params: { productSlug: string; locale: string };
}) => {
  const [filters, stocks, brands] = await Promise.all([
    fetchData(`${process.env.NEXT_API}/categories/`),
    fetchData(`${process.env.NEXT_API}/stocks/`),
    fetchData(`${process.env.NEXT_API}/brands/`),
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <Gravity />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <CategoryFilter filters={filters} stocks={stocks} brands={brands} />
        <div className="lg:col-span-3">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
