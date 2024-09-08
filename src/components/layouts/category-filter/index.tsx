// "use client";
// import React, { useState } from "react";
// import Accordion from "./accordion";
// import { IMainPageCategory, IStoc, ISubCategory } from "@/types";
// import { useLocale, useTranslations } from "next-intl";
// import { useCategoryStore } from "@/hooks/use-category";
// import { Button } from "@headlessui/react";

// type Props = {
//   filters: IMainPageCategory[];
//   stocks?: IStoc[];
//   subCategories: ISubCategory[];
// };

// const CategoryFilter: React.FC<Props> = ({
//   filters,
//   stocks,
//   subCategories,
// }) => {
//   const { setCategories } = useCategoryStore();

//   const [value, setValue] = useState("");
//   const [gender, setGender] = useState("");
//   const [aksiya, setAksiya] = useState("");
//   const [subCategeory, setSubCategeory] = useState("");

//   const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setCategories({
//       category: value ? `&category=${value}` : "",
//       gender: gender ? `&gender=${gender}` : "",
//       sub_category: subCategeory ? `&sub_category=${subCategeory}` : "",
//       stock: aksiya ? `&stock=${aksiya}` : "",
//     });
//   };

//   const locale = useLocale();
//   const genData = [
//     { id: 0, title_uz: "Erkaklar", title_ru: "Мужчины", value: "male" },
//     { id: 1, title_uz: "Ayollar", title_ru: "Женщины", value: "female" },
//     { id: 2, title_uz: "Unisex", title_ru: "Унисекс", value: "unisex" },
//   ];

//   const t = useTranslations("Category");

//   return (
//     <form
//       onSubmit={onSubmited}
//       className="border space-y-4 p-4 rounded-lg bg-white shadow-lg"
//     >
//       <Accordion title={t("sort.katalog")}>
//         <div className="max-h-48 overflow-y-auto w-full space-y-2">
//           <div className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2">
//             <div className="inline-flex items-center">
//               <input
//                 name="catalog"
//                 type="radio"
//                 className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                 id="Barcha kategoriya"
//                 value=" "
//                 onChange={(e) => setValue(e.target.value)}
//               />
//             </div>
//             <label htmlFor="Barcha kategoriya" className="cursor-pointer">
//               {locale === "uz" ? "Barcha Kategoriya" : "Все категории"}
//             </label>
//           </div>
//           {filters?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div className="inline-flex items-center">
//                 <input
//                   name="catalog"
//                   type="radio"
//                   className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                   id={filter.title_uz}
//                   value={filter.title_uz}
//                   onChange={(e) => setValue(e.target.value)}
//                 />
//               </div>
//               <label htmlFor={filter.title_uz} className="cursor-pointer">
//                 {locale === "uz" ? filter.title_uz : filter.title_ru}
//               </label>
//             </div>
//           ))}
//         </div>
//       </Accordion>
//       <Accordion title={t("sort.sub_category")}>
//         <div className="max-h-48 overflow-y-auto w-full space-y-2">
//           {subCategories?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div className="inline-flex items-center">
//                 <input
//                   name="sub_category"
//                   type="radio"
//                   className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                   id={filter.title_uz}
//                   value={filter.title_uz}
//                   onChange={(e) => setSubCategeory(e.target.value)}
//                 />
//               </div>
//               <label htmlFor={filter.title_uz} className="cursor-pointer">
//                 {locale === "uz" ? filter.title_uz : filter.title_ru}
//               </label>
//             </div>
//           ))}
//         </div>
//       </Accordion>

//       <Accordion title={t("sort.stock")}>
//         <div className="max-h-48 overflow-y-auto w-full space-y-2">
//           {stocks?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div className="inline-flex items-center">
//                 <input
//                   name="stock"
//                   type="radio"
//                   className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                   id={filter.title_uz}
//                   value={filter.title_uz}
//                   onChange={(e) => setAksiya(e.target.value)}
//                 />
//               </div>
//               <label htmlFor={filter.title_uz} className="cursor-pointer">
//                 {locale === "uz" ? filter.title_uz : filter.title_ru}
//               </label>
//             </div>
//           ))}
//         </div>
//       </Accordion>

//       <Accordion title={t("sort.gender")}>
//         <div className="max-h-48 overflow-y-auto w-full space-y-2">
//           {genData?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div className="inline-flex items-center">
//                 <input
//                   name="gender"
//                   type="radio"
//                   className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                   id={filter.value}
//                   value={filter.value}
//                   onChange={(e) => setGender(e.target.value)}
//                 />
//               </div>
//               <label htmlFor={filter.value} className="cursor-pointer">
//                 {locale === "uz" ? filter.title_uz : filter.title_ru}
//               </label>
//             </div>
//           ))}
//         </div>
//       </Accordion>

//       <Button
//         type="submit"
//         className="mt-4 w-full bg-main text-white py-2 px-4 rounded-md hover:bg-main transition"
//       >
//         {t("sort.filtered")}
//       </Button>
//     </form>
//   );
// };

// export default CategoryFilter;

"use client";
import React, { useState } from "react";
import Accordion from "./accordion";
import { IMainPageCategory, IStoc, ISubCategory } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import { useCategoryStore } from "@/hooks/use-category";
import { Button } from "@headlessui/react";

type Props = {
  filters: IMainPageCategory[];
  stocks?: IStoc[];
  subCategories: ISubCategory[];
};

const CategoryFilter: React.FC<Props> = ({
  filters,
  stocks,
  subCategories,
}) => {
  const { setCategories } = useCategoryStore();

  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  const [aksiya, setAksiya] = useState("");
  const [subCategeory, setSubCategeory] = useState("");

  const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories({
      category: value ? `&category=${value}` : "",
      gender: gender ? `&gender=${gender}` : "",
      sub_category: subCategeory ? `&sub_category=${subCategeory}` : "",
      stock: aksiya ? `&stock=${aksiya}` : "",
      page: "1", // Filtrlashda sahifa boshidan boshlansin
      page_size: "8", // Sahifadan o'ng qilinayotgan elementlar soni
    });
  };

  // Filtrlarni tozalash funksiyasi
  const clearFilters = () => {
    setCategories({
      brand: "",
      category: "",
      sub_category: "",
      stock: "",
      order_by: "",
      gender: "",
      page: "1",
      page_size: "8",
    });
    setValue("");
    setGender("");
    setAksiya("");
    setSubCategeory("");
  };

  const locale = useLocale();
  const genData = [
    { id: 0, title_uz: "Erkaklar", title_ru: "Мужчины", value: "male" },
    { id: 1, title_uz: "Ayollar", title_ru: "Женщины", value: "female" },
    { id: 2, title_uz: "Unisex", title_ru: "Унисекс", value: "unisex" },
  ];

  const t = useTranslations("Category");

  return (
    <form
      onSubmit={onSubmited}
      className="border space-y-4 p-4 rounded-lg bg-white shadow-lg"
    >
      <Accordion title={t("sort.katalog")}>
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
              {locale === "uz" ? "Barcha Kategoriya" : "Все категории"}
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
      <Accordion title={t("sort.sub_category")}>
        <div className="max-h-48 overflow-y-auto w-full space-y-2">
          {subCategories?.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="sub_category"
                  type="radio"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                  id={filter.title_uz}
                  value={filter.title_uz}
                  onChange={(e) => setSubCategeory(e.target.value)}
                />
              </div>
              <label htmlFor={filter.title_uz} className="cursor-pointer">
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title={t("sort.stock")}>
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

      <Accordion title={t("sort.gender")}>
        <div className="max-h-48 overflow-y-auto w-full space-y-2">
          {genData?.map((filter) => (
            <div
              key={filter.id}
              className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
            >
              <div className="inline-flex items-center">
                <input
                  name="gender"
                  type="radio"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
                  id={filter.value}
                  value={filter.value}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              <label htmlFor={filter.value} className="cursor-pointer">
                {locale === "uz" ? filter.title_uz : filter.title_ru}
              </label>
            </div>
          ))}
        </div>
      </Accordion>

      <div className="flex justify-between">
        <Button
          type="submit"
          className="bg-main text-white py-2 px-4 rounded-md hover:bg-darkMain transition"
        >
          {t("sort.filtered")}
        </Button>

        <Button
          type="button"
          onClick={clearFilters}
          className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-400 transition"
        >
          {t("sort.clearFilters")}
        </Button>
      </div>
    </form>
  );
};

export default CategoryFilter;
