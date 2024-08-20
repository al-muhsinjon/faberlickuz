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
  const [filters, stocks, brands, subCategories] = await Promise.all([
    fetchData(`${process.env.NEXT_API}/categories/`),
    fetchData(`${process.env.NEXT_API}/stocks/`),
    fetchData(`${process.env.NEXT_API}/brands/`),
    fetchData(`${process.env.NEXT_API}/sub_categories/`),
  ]);

  return (
    <div className="container mx-auto px-4 py-6">
      <Gravity />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <CategoryFilter
          filters={filters}
          stocks={stocks}
          subCategories={subCategories}
        />
        <div className="lg:col-span-3">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
