"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { IBrands, IMainPageCategory, IStoc } from "@/types";
import { useLocale } from "next-intl";
import { useCategoryStore } from "@/hooks/use-category";

type Props = {
  filters: IMainPageCategory[];
  stocks?: IStoc[];
  brands: IBrands[];
};

const CategoryFilter: React.FC<Props> = ({ filters, stocks, brands }) => {
  const { setCategories } = useCategoryStore();

  const [value, setValue] = useState("");
  const [brand, setBrand] = useState("");
  const [aksiya, setAksiya] = useState("");

  const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories({
      brand: brand ? `&brand=${brand}` : "",
      sub_category: "",
      category: value ? `&category=${value}` : "",
      stock: aksiya ? `&stock=${aksiya}` : "",
    });
  };

  const locale = useLocale();
  return (
    <form
      onSubmit={onSubmited}
      className="border space-y-4 p-4 rounded-lg bg-white shadow-lg"
    >
      <Accordion title="Katalog">
        <div className="max-h-48 overflow-y-auto w-full space-y-2">
          <div className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2">
            <div className="inline-flex items-center">
              <input
                name="catalog"
                type="radio"
                className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                id="Barcha kategoriya"
                value=" "
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <label htmlFor="Barcha kategoriya" className="cursor-pointer">
              Barcha Kategoriya
            </label>
          </div>
          {filters?.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="catalog"
                  type="radio"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                  id={filter.title_uz}
                  value={filter.title_uz}
                  onChange={(e) => setValue(e.target.value)}
                />
              </div>
              <label htmlFor={filter.title_uz} className="cursor-pointer">
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
        </div>
      </Accordion>
      <Accordion title="Aksiya">
        <div className="max-h-48 overflow-y-auto w-full space-y-2">
          {stocks?.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="stock"
                  type="radio"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                  id={filter.title_uz}
                  value={filter.title_uz}
                  onChange={(e) => setAksiya(e.target.value)}
                />
              </div>
              <label htmlFor={filter.title_uz} className="cursor-pointer">
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="Katalog">
        <div className="max-h-48 overflow-y-auto w-full space-y-2">
          {brands?.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="brands"
                  type="radio"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                  id={filter.title_uz}
                  value={filter.title_uz}
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <label htmlFor={filter.title_uz} className="cursor-pointer">
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
        </div>
      </Accordion>

      <button
        type="submit"
        className="mt-4 w-full bg-main text-white py-2 px-4 rounded-md hover:bg-main transition"
      >
        Saralash
      </button>
    </form>
  );
};

export default CategoryFilter;
