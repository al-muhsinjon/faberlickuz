"use client";
import ProductCard from "@/components/product-card";
import useByFilter from "@/hooks/use-by-filter";
import { useCategoryStore } from "@/hooks/use-category";
import { useProductStore } from "@/hooks/use-product-store";
import { Button } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { BsFilterRight } from "react-icons/bs";
import { useTranslations } from "next-intl";

const Product = () => {
  const { query, setCategories } = useCategoryStore((state) => state);
  const { fetchProducts, products, isLoading, error } = useProductStore();
  const { isOpen, onClose, onOpen } = useByFilter();
  const t = useTranslations("Category"); // `useTranslation` hookini import qilish
  const [orderBy, setOrderBy] = useState(""); // `orderBy` holati uchun state

  // `query` o'zgarganda mahsulotlarni yuklash
  useEffect(() => {
    if (query) {
      fetchProducts(query);
    }
  }, [query, fetchProducts]);

  // `order_by` parametrini yangilash va uni `query` stringiga qo'shish
  const handleOrderByChange = (orderByValue: string, displayText: string) => {
    setCategories({ order_by: orderByValue });
    setOrderBy(displayText); // orderBy matnini yangilash
    onClose(); // filterni yopish
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
              {orderBy || ""} {/* Default matn yoki orderBy */}
            </p>
            <BsFilterRight />
          </Button>
        </div>
        {isOpen && (
          <div className="bg-white absolute z-10 top-16 right-6 border rounded-md divide-y">
            <div
              onClick={() =>
                handleOrderByChange("order_by=price", t("highPrice"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("highPrice")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("order_by=-price", t("lowPrice"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("lowPrice")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("order_by=title_uz", t("forAlphabetAZ"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("forAlphabetAZ")}
            </div>
            <div
              onClick={() =>
                handleOrderByChange("order_by=-title_uz", t("forAlphabetZA"))
              }
              className="px-3 py-2 cursor-pointer text-xs text-[#656565] font-medium duration-500 hover:bg-[rgba(113,169,233,.559)]"
            >
              {t("forAlphabetZA")}
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching products</p>
        ) : products?.results.length > 0 ? (
          <>
            {products.results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </>
        ) : (
          <p>Mahsulot topilmadi</p>
        )}
      </div>
    </>
  );
};

export default Product;
