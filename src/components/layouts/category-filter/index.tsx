"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { IMainPageCategory, IStoc } from "@/types";
import { useLocale } from "next-intl";
import { useCategoryStore } from "@/hooks/use-category";

type Props = {
  filters: IMainPageCategory[];
  stocks?: IStoc[];
};

const CategoryFilter: React.FC<Props> = ({ filters, stocks }) => {
  const { setCategories } = useCategoryStore();

  const [value, setValue] = useState("");

  const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories({
      category: value ? `&category=${value}` : "",
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
                className="w-4 h-4 border border-gray-300 rounded focus:ring-indigo-500"
                id="Barcha kategoriya"
                value="all"
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
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-indigo-500"
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
        {stocks?.map((stock) => (
          <div
            key={stock.id}
            className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
          >
            <div className="inline-flex items-center">
              <input
                name="catalog"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded focus:ring-indigo-500"
                id={stock.title_uz}
                value="all"
              />
            </div>
            <label htmlFor={stock.title_uz} className="cursor-pointer">
              {locale === "uz" ? stock.title_uz : stock.title_ru}
            </label>
          </div>
        ))}
      </Accordion>
      <button
        type="submit"
        className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
      >
        Saralash
      </button>
    </form>
  );
};

export default CategoryFilter;
