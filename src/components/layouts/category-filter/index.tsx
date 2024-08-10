import React from "react";
import Accordion from "./accordion";
import { IMainPageCategory, IStoc } from "@/types";
import { useLocale } from "next-intl";

type Props = {
  filters: IMainPageCategory[];
  stocks: IStoc[];
};

const CategoryFilter: React.FC<Props> = async ({ filters, stocks }) => {
  const locale = useLocale();
  return (
    <div className="border space-y-4 lg:space-y-[30px] p-4 rounded-lg max-lg:absolute z-40 top-0 left-[-100%] max-lg:h-[100vh] max-lg:w-[30vh] duration-500 bg-white false">
      <Accordion title="Katalog">
        <div className="max-h-[192px] overflow-y-scroll w-full space-y-2">
          <div className="undefined  flex items-center text-sm lg:text-base text-textColor gap-x-2">
            <div className="inline-flex items-center">
              <input
                name="catalog"
                type="radio"
                className="w-4 h-4 border border-borderGrey rounded accent-darkBlue/80"
                id="Barcha kategoriya"
                value="all"
              />
            </div>
            <label
              htmlFor="Barcha kategoriya"
              className="space-y-2 cursor-pointer"
            >
              Barcha Kategoriya
            </label>
          </div>
          {filters.map((filter) => (
            <div
              key={filter.id}
              className="undefined  flex items-center text-sm lg:text-base text-textColor gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="catalog"
                  type="radio"
                  className="w-4 h-4 border border-borderGrey rounded accent-darkBlue/80"
                  id={filter.title_uz}
                  value="all"
                />
              </div>
              <label
                htmlFor={locale === "uz" ? filter.title_uz : filter.title_ru}
                className="space-y-2 cursor-pointer"
              >
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
          <div className="true transition-opacity transition-1000 flex flex-col gap-3"></div>
        </div>
      </Accordion>
      <Accordion title="Aksiya">
        <div className="undefined  flex items-center text-sm lg:text-base text-textColor gap-x-2">
          <div className="inline-flex items-center">
            <input
              name="catalog"
              type="radio"
              className="w-4 h-4 border border-main rounded accent-main/80"
              id="yangi"
              value="new"
            />
          </div>
          <label htmlFor="yangi" className="space-y-2 cursor-pointer">
            Yangi
          </label>
        </div>
        {stocks.map((stock) => (
          <div
            key={stock.id}
            className="undefined  flex items-center text-sm lg:text-base text-textColor gap-x-2"
          >
            <div className="inline-flex items-center">
              <input
                name="catalog"
                type="checkbox"
                className="w-4 h-4 border border-main rounded accent-main/80"
                id={stock.title_uz}
                value="all"
              />
            </div>
            <label
              htmlFor={stock.title_uz}
              className="space-y-2 cursor-pointer"
            >
              {locale === "uz" ? stock.title_uz : stock.title_ru}
            </label>
          </div>
        ))}
      </Accordion>
    </div>
    // <div className="relative">
    //   <Accordion title="Katalog">
    //     {filters.map((category) => (
    //       <div key={category.id}>{category.title_uz}</div>
    //     ))}
    //     <div></div>
    //   </Accordion>
    //   <Accordion title="Katalog">
    //     <div>Assalomu alekum</div>
    //   </Accordion>
    // </div>
  );
};

export default CategoryFilter;
