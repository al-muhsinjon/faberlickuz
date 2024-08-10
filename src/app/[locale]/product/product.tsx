

"use client";
import ProductCard from "@/components/product-card";
import { useCategoryStore } from "@/hooks/use-category";
import { useProductStore } from "@/hooks/use-product-store";
import React, { useEffect } from "react";

const Product = () => {
  const { query } = useCategoryStore((state) => state);
  const { fetchProducts, products, isLoading, error } = useProductStore();

  useEffect(() => {
    if (query) {
      fetchProducts(query);
    }
  }, [query, fetchProducts]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching products</p>
      ) : products?.results.length > 0 ? (
        products.results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>Mahsulot topilmadi</p>
      )}
    </div>
  );
};

export default Product;
