"use client";
import Link from "next/link";
import React from "react";
import Translate from "./translate";
import Image from "next/image";
import SearchComponent from "./search";
import { Button } from "@headlessui/react";
import { LayoutGrid, X } from "lucide-react";
import Basket from "./basket";
import useCatalog from "@/hooks/use-catalog";
import CatalogDrawer from "../drawers/catalog-drawer";

const Header = () => {
  const { onOpen, onClose, isOpen } = useCatalog();
  return (
    <>
      <header className="relative">
        <div className="w-full h-12 bg-[#22344D] flex py-2 text-white items-center justify-between px-12">
          <Translate />
          <div className="flex gap-6">
            <Link href={"/ru/product"}>Product</Link>
            <Link href={"tel:+998973470016"}>+998 97 347 00 16</Link>
          </div>
        </div>
        <nav className="px-12 py-4 bg-white flex justify-between items-center border-b">
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
              isOpen ? onClose() : onOpen();
            }}
            className={`border px-4 py-3 ml-7 ${
              isOpen
                ? "bg-main text-white hover:bg-main/90 ease-linear"
                : "border-main text-main font-semibold hover:text-main/90"
            }  rounded-lg flex gap-2`}
          >
            {isOpen ? <X /> : <LayoutGrid />}
            Category
          </Button>
          <SearchComponent />
          <Basket />
        </nav>
      </header>
      <CatalogDrawer />
    </>
  );
};

export default Header;
