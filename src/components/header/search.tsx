"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@headlessui/react";
import { ISearchCategoryProduct } from "@/types";
import Link from "next/link";
import { useLocale } from "next-intl";

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [opened, setOpened] = useState(false);
  const [product, setProduct] = useState<ISearchCategoryProduct>();
  const locale = useLocale();

  const getSearch = async (params: string) => {
    if (!params) {
      // Clear results and close dropdown if input is empty
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
      setOpened(true);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      setOpened(false);
    }
  };

  useEffect(() => {
    getSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="max-w-4xl px-12 w-full">
      <div className="max-w-4xl relative">
        <div className="w-full flex">
          <Input
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
        {opened && (
          <div className="w-full mx-auto left-0 absolute  z-10 overflow-y-auto bg-white shadow-lg max-h-60 mt-1 rounded-md">
            {product && product.results && product.results.length > 0 ? (
              product.results.map((prod) => (
                <Link
                  href={`/uz/product/${prod.slug}`}
                  key={prod.id}
                  className="flex items-center p-2 hover:bg-gray-100 transition"
                >
                  <div className="flex-shrink-0 h-16 w-16 relative mr-3">
                    <Image
                      priority={false}
                      src={prod.image.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={prod.image.image || "Product Image"}
                      fill
                      loading="lazy"
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      blurDataURL="/blur-image.jpg"
                      className="w-full h-full object-cover duration-200 ease-in-out scale-100 blur-0 grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {locale === "uz" ? prod.title_uz : prod.title_ru}
                    </span>
                    <span className="text-sm text-gray-500">{prod.brand}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${prod.price}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-gray-700">Hech nima topilmadi</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
