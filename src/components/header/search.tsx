"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@headlessui/react";
import { ISearchCategoryProduct } from "@/types";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [opened, setOpened] = useState(false);
  const [product, setProduct] = useState<ISearchCategoryProduct | undefined>();
  const locale = useLocale();
  const t = useTranslations("Search");

  const getSearch = async (params: string) => {
    if (!params) {
      // Agar input bo'sh bo'lsa, natijalarni tozalab dropdownni yopish
      setProduct(undefined);
      setOpened(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_API}/product-search?search=${params}`
      );
      const data = await res.json();
      setProduct(data);
      if (searchTerm) {
        setOpened(true);
      }
    } catch (error) {
      console.error("Qidiruv natijalarini olishda xato yuz berdi:", error);
      setOpened(false);
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      getSearch(searchTerm);
    } else {
      setOpened(false);
    }
  }, [searchTerm]);

  return (
    <div className="max-w-4xl px-12 w-full">
      <div className="max-w-4xl relative">
        <div className="w-full flex">
          <Input
            onFocus={() => setOpened(true)}
            onBlur={() => setTimeout(() => setOpened(false), 200)} // Foydalanuvchi mahsulotga bosishi uchun biroz vaqt berish
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-l-md outline-none bg-mainGray/15"
          />
          <Button className="rounded-r-md bg-mainGray/15 text-black px-3 flex justify-center items-center">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </div>
        {opened && product && (
          <div className="w-full mx-auto left-0 absolute z-10 overflow-y-auto bg-white shadow-lg max-h-60 mt-1 rounded-md">
            {product.results && product.results.length > 0 ? (
              product.results.map((prod) => (
                <Link
                  href={`/uz/product/${prod.slug}`}
                  key={prod.id}
                  className="flex items-center p-2 hover:bg-gray-100 transition"
                  passHref
                >
                  <div className="flex-shrink-0 h-16 w-16 relative mr-3">
                    <Image
                      priority={false}
                      src={prod?.image.image || "/blur-image.jpg"}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={prod?.image.image || "Product Image"}
                      fill
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL="/blur-image.jpg"
                      className="w-full h-full object-cover duration-200 ease-in-out"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {locale === "uz" ? prod.title_uz : prod.title_ru}
                    </span>
                    <span className="text-sm text-gray-500">{prod.brand}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      {prod.price.toLocaleString()}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-gray-700">{t("empty")}</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
