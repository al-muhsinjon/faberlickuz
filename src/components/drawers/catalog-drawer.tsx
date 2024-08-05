"use client";
import useCatalog from "@/hooks/use-catalog";
import { Button } from "@headlessui/react";
import axios from "axios";
import { ChevronRight, LayoutGrid, Link } from "lucide-react";
import React, { useEffect, useState } from "react";
import { ICategory } from "@/types";
import { useLocale } from "next-intl";

const CatalogDrawer = () => {
  const locale = useLocale();
  console.log(locale);
  const { isOpen, onClose } = useCatalog();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const getApi = async () => {
    try {
      const { data } = await axios.get(
        `https://birnimajon.pythonanywhere.com/api/categories/`
      );
      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {/* <Button
        className={
          "border px-4 py-3 ml-7 border-main text-main font-semibold hover:text-main/80 rounded-lg flex gap-2"
        }
      >
        <LayoutGrid />
        Category
      </Button>
      <div className="w-full h-screen fixed bg-white top-[132px] left-0 z-[100]"></div> */}
      <div
        className={`fixed bg-white inset-x-0 h-full transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out z-50`}
      >
        <div className="bg-white   h-full px-12">
          <div className="container overflow-hidden grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white pb-14">
            {categories.map((category) => (
              <ul className=" text-main pt-0 lg:py-10" key={category.id}>
                <h3 className="lg:text-lg font-medium pb-[10px]">
                  {locale === "uz" ? category.title_uz : category.title_ru}
                </h3>
                <li className="relative group z-50 pb-2 text-[#8A8A8A] duration-300 hover:text-darkBlue">
                  {category.sub_categories?.map((sub_category) => (
                    <Button
                      className={
                        "flex text-wrap break-words items-center justify-between text-left gap-5 max-md:text-sm whitespace-nowrap"
                      }
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
    </>
  );
};

export default CatalogDrawer;
