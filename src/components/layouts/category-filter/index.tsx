// "use client";
// import React, { useState } from "react";
// import Accordion from "./accordion";
// import { IBrands, IMainPageCategory, IStoc } from "@/types";
// import { useLocale } from "next-intl";
// import { useCategoryStore } from "@/hooks/use-category";

// type Props = {
//   filters: IMainPageCategory[];
//   stocks?: IStoc[];
//   brands: IBrands[];
// };

// const CategoryFilter: React.FC<Props> = ({ filters, stocks, brands }) => {
//   const { setCategories } = useCategoryStore();

//   console.log(filters);

//   const [value, setValue] = useState("");
//   const [brand, setBrand] = useState("");
//   const [aksiya, setAksiya] = useState("");

//   const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setCategories({
//       brand: brand ? `&brand=${brand}` : "",
//       sub_category: "",
//       category: value ? `&category=${value}` : "",
//       stock: aksiya ? `&stock=${aksiya}` : "",
//     });
//   };

//   const locale = useLocale();
//   return (
//     <form
//       onSubmit={onSubmited}
//       className="border space-y-4 p-4 rounded-lg bg-white shadow-lg"
//     >
//       <Accordion title="Katalog">
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
//               Barcha Kategoriya
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
//       <Accordion title="Aksiya">
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

//       <Accordion title="Brandlar">
//         <div className="max-h-48 overflow-y-auto w-full space-y-2">
//           {brands?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div className="inline-flex items-center">
//                 <input
//                   name="brands"
//                   type="radio"
//                   className="w-4 h-4 border border-gray-300 rounded focus:ring-main"
//                   id={filter.title_uz}
//                   value={filter.title_uz}
//                   onChange={(e) => setBrand(e.target.value)}
//                 />
//               </div>
//               <label htmlFor={filter.title_uz} className="cursor-pointer">
//                 {locale === "uz" ? filter.title_uz : filter.title_ru}
//               </label>
//             </div>
//           ))}
//         </div>
//       </Accordion>

//       <button
//         type="submit"
//         className="mt-4 w-full bg-main text-white py-2 px-4 rounded-md hover:bg-main transition"
//       >
//         Saralash
//       </button>
//     </form>
//   );
// };

// export default CategoryFilter;

"use client";
import React, { useState, useEffect } from "react";
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
  // const [minPrice, setMinPrice] = useState(0);
  // const [maxPrice, setMaxPrice] = useState(0);

  // useEffect(() => {
  //   const selectedCategory = filters.find(
  //     (filter) => filter.title_uz === value
  //   );
  //   if (selectedCategory) {
  //     setMinPrice(selectedCategory.min_price);
  //     setMaxPrice(selectedCategory.max_price);
  //   }
  // }, [value]);

  const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories({
      brand: brand ? `&brand=${brand}` : "",
      sub_category: "",
      category: value ? `&category=${value}` : "",
      // stock: aksiya ? `&stock=${aksiya}` : "",
      // min_price: minPrice ? `&min_price=${minPrice}` : "",
      // max_price: maxPrice ? `&max_price=${maxPrice}` : "",
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
{/* 
      <Accordion title="Brandlar">
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
      </Accordion> */}

      {/* <Accordion title="Narx bo'yicha saralash">
        <div className="flex flex-col space-y-2">
          <div className="flex items-center">
            <label className="mr-2" htmlFor="minPrice">
              Min narx:
            </label>
            <input
              type="number"
              id="minPrice"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="border border-gray-300 rounded w-full p-2"
            />
          </div>
          <div className="flex items-center">
            <label className="mr-2" htmlFor="maxPrice">
              Max narx:
            </label>
            <input
              type="number"
              id="maxPrice"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="border border-gray-300 rounded w-full p-2"
            />
          </div>
        </div>
      </Accordion> */}

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
