"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import SkeletonCard from "@/components/product-card/skleton-card";
import useByFilter from "@/hooks/use-by-filter";
import { useCategoryStore } from "@/hooks/use-category";
import { useProductStore } from "@/hooks/use-product-store";
import { Button } from "@headlessui/react";
import { BsFilterRight } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const Product = () => {
  const { query, setCategories } = useCategoryStore((state) => state);
  const { fetchProducts, products, isLoading, error } = useProductStore();
  const { isOpen, onClose, onOpen } = useByFilter();
  const t = useTranslations("Category");
  const [orderBy, setOrderBy] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (query) {
      fetchProducts(query);
    }
  }, [query, fetchProducts]);

  const handleOrderByChange = (orderByValue: string, displayText: string) => {
    setCategories({ order_by: orderByValue });
    setOrderBy(displayText);
    onClose();
  };

  return (
    <>
      <div className="relative">
        <div className="relative w-full flex justify-end py-4 items-center">
          <Button
            onClick={isOpen ? onClose : onOpen}
            className="flex items-center justify-between px-4 py-2 gap-3 rounded-[41px] border border-[#efefef]"
          >
            <p className="text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]">
              {orderBy || ""}
            </p>
            <BsFilterRight />
          </Button>
        </div>
        {isOpen && (
          <div className="bg-white absolute z-10 top-16 right-6 border rounded-md divide-y">
            <div
              onClick={() =>
                handleOrderByChange("&order_by=price", t("highPrice"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("highPrice")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("&order_by=-price", t("lowPrice"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("lowPrice")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("&order_by=title_uz", t("forAlphabetAZ"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("forAlphabetAZ")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("&order_by=-title_uz", t("forAlphabetZA"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("forAlphabetZA")}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-2 md lg sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 md:gap-6 gap-3">
        {isLoading ? (
          <>
            {Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </>
        ) : error ? (
          <p>Error fetching products</p>
        ) : products?.results.length > 0 ? (
          <>
            {products.results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        ) : (
          <div className="col-span-4">
            <div className="flex flex-col items-center justify-center h-full py-16">
              <img
                src="/no-products-found.gif"
                alt={t("noProducts")}
                className="w-48 h-48 mb-8"
              />
              <h2 className="text-2xl font-bold text-gray-700 mb-4">
                {t("noProducts")}
              </h2>
              <p className="text-gray-500 mb-8">{t("tryDifferentSearch")}</p>
              <Button
                onClick={() => router.push("/")}
                className="px-4 py-2 bg-main text-white rounded-lg hover:bg-darkMain transition duration-150"
              >
                {t("goHome")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Product;
