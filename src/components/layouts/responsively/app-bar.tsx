"use client";
import useCatalog from "@/hooks/use-catalog";
import useSearch from "@/hooks/use-search";
import { ISearchCategoryProduct } from "@/types";
import { Button, Input } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { LayoutGrid, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AppBar = () => {
  const { onOpen, onClose, isOpen } = useCatalog();
  const [searchTerm, setSearchTerm] = useState("");
  const searchOpen = useSearch();

  const [opened, setOpened] = useState(false);
  const [product, setProduct] = useState<ISearchCategoryProduct>();

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
    <>
      <div className="flex px-2 py-4 bg-white items-center border-b lg:hidden md:hidden justify-between">
        <Button
          onClick={() => {
            isOpen ? onClose() : onOpen();
          }}
          className={`border px-4 py-3 ml-7 ${
            isOpen
              ? "bg-main text-white hover:bg-main/90 ease-linear"
              : "border-main text-main font-semibold hover:text-main/90"
          }  rounded-lg flex gap-2`}
        >
          {isOpen ? <X /> : <LayoutGrid />}
        </Button>
        <Link href={"/"}>
          <div className="relative h-8 w-32">
            <Image
              src={"/logo.jpg"}
              className="object-fill"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="Logo"
            />
          </div>
        </Link>
        <Button
          onClick={() => {
            searchOpen.isOpen ? searchOpen.onClose() : searchOpen.onOpen();
          }}
          className={`border px-4 py-3 ml-7 ${
            searchOpen.isOpen
              ? "bg-main text-white hover:bg-main/90 ease-linear"
              : "border-main text-main font-semibold hover:text-main/90"
          }  rounded-lg flex gap-2`}
        >
          {searchOpen.isOpen ? <X /> : <Search />}
        </Button>
      </div>
      {searchOpen.isOpen && (
        <>
          <div className="w-full px-6 flex">
            <Input
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-l-md outline-none bg-mainGray/15"
            />
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
                        objectFit="cover"
                        placeholder="blur"
                        blurDataURL="/blur-image.jpg"
                        className="w-full h-full object-cover duration-200 ease-in-out scale-100 blur-0 grayscale-0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-900">
                        {prod.title_uz}
                      </span>
                      <span className="text-sm text-gray-500">
                        {prod.brand}
                      </span>
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
        </>
      )}
    </>
  );
};

export default AppBar;
