"use client";
import useCatalog from "@/hooks/use-catalog";
import { Button } from "@headlessui/react";
import axios from "axios";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ICategory } from "@/types";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category"; // Import the Zustand store
import { useProductStore } from "@/hooks/use-product-store";

const CatalogDrawer = () => {
  const { isOpen, onClose } = useCatalog();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const router = useRouter();

  const { fetchProducts } = useProductStore();

  const { setCategories: setStoreCategories, query } = useCategoryStore(
    (state) => state
  ); // Access the Zustand store
  const locale = useLocale();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_API}/categories/`);
        setCategories(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  const updateCategories = (newCategory: string, newSubCategory?: string) => {
    setStoreCategories({
      category: newCategory,
      sub_category: newSubCategory,
    });
    fetchProducts(newCategory + newSubCategory);
    onClose();
    router.push("/uz/product");
  };

  return (
    <div
      className={`fixed bg-white inset-x-0 h-full transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-500 ease-in-out z-50`}
    >
      <div className="bg-white h-full px-12">
        <div className="container overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white pb-14">
          {categories.map((category) => (
            <ul className="text-main pt-0 lg:py-10" key={category.id}>
              <h3
                className="lg:text-lg font-medium pb-[10px] hover:underline cursor-pointer"
                onClick={() =>
                  updateCategories(
                    `${category ? `&category=${category.title_uz}` : ""}`,
                    ""
                  )
                }
              >
                {locale === "uz" ? category.title_uz : category.title_ru}
              </h3>
              <li className="relative z-50 pb-2 text-[#8A8A8A] duration-300 hover:text-darkBlue">
                {category.sub_categories?.map((sub_category) => (
                  <Button
                    onClick={() =>
                      updateCategories(
                        `${category ? `&category=${category.title_uz}` : ""}`,
                        `${
                          sub_category
                            ? `&sub_category=${sub_category.title_uz}`
                            : ""
                        }`
                      )
                    }
                    className="flex text-wrap break-words group items-center justify-between text-left gap-5 max-md:text-sm whitespace-nowrap"
                    key={sub_category.id}
                  >
                    {locale === "uz"
                      ? sub_category.title_uz
                      : sub_category.title_ru}
                    <div className="text-white text-xl duration-300 group-hover:text-main">
                      <ChevronRight />
                    </div>
                  </Button>
                ))}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogDrawer;
