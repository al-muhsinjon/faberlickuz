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
import React, { useState } from "react";
import Accordion from "./accordion";
import { IBrands, IMainPageCategory, IStoc } from "@/types";
import { useLocale } from "next-intl";
import { useCategoryStore } from "@/hooks/use-category";
import MinMaxPriceSlider from "@/components/min-max-price-slider";

type Props = {
  filters: IMainPageCategory[];
  stocks?: IStoc[];
  brands: IBrands[];
};

const CategoryFilter: React.FC<Props> = ({ filters, stocks, brands }) => {
  const { setCategories } = useCategoryStore();

  const [value, setValue] = useState("");
  const [gender, setGender] = useState("");
  // const [min, setMin] = useState<number>(0);
  // const [max, setMax] = useState<number>(0);
  // const [newMin, setNewMin] = useState<number>(0);
  // const [newMax, setNewMax] = useState<number>(0);
  // const [brand, setBrand] = useState("");
  const [aksiya, setAksiya] = useState("");

  // const handlePriceChange = (min: number, max: number) => {
  //   setNewMin(min);
  //   setNewMax(max);
  // };
  // console.log(newMax, newMin);

  const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCategories({
      // brand: brand ? `&brand=${brand}` : "",
      sub_category: "",
      category: value ? `&category=${value}` : "",
      gender: gender ? `&gender=${gender}` : "",
      // min_price: min ? `&min_price=${newMin}` : "",
      // max_price: max ? `&max_price=${newMax}` : "",
    });
  };

  const locale = useLocale();
  const genData = [
    { id: 0, title_uz: "Erkaklar", title_ru: "Мужчины", value: "male" },
    { id: 1, title_uz: "Ayollar", title_ru: "Женщины", value: "female" },
    { id: 2, title_uz: "Unisex", title_ru: "Унисекс", value: "unisex" },
  ];

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

      <Accordion title="Gender">
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

      {/* <Accordion title="Narxlar">
        <MinMaxPriceSlider
          max={max}
          min={min}
          onPriceChange={handlePriceChange}
        />
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

// "use client";
// import React, { useState, useEffect } from "react";
// import Accordion from "./accordion";
// import { IBrands, IMainPageCategory, IStoc } from "@/types";
// import { useLocale } from "next-intl";
// import { useCategoryStore } from "@/hooks/use-category";
// import MinMaxPriceSlider from "@/components/min-max-price-slider";

// type Props = {
//   filters: IMainPageCategory[];
//   stocks?: IStoc[];
//   brands: IBrands[];
// };

// const CategoryFilter: React.FC<Props> = ({ filters, stocks, brands }) => {
//   const { setCategories } = useCategoryStore();

//   console.log(filters);

//   const [value, setValue] = useState("");
//   const [min, setMin] = useState<number>(0);
//   const [max, setMax] = useState<number>(0);
//   const [brand, setBrand] = useState("");
//   const [aksiya, setAksiya] = useState("");

//   const onSubmited = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setCategories({
//       // brand: brand ? `&brand=${brand}` : "",
//       sub_category: "",
//       category: value ? `&category=${value}` : "",
//       min_price: value ? `&min_price=${value}` : "",
//       max_price: value ? `&max_price=${value}` : "",
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
//               {locale === "uz" ? "Barcha Kategoriya" : "Все категории"}
//             </label>
//           </div>
//           {filters?.map((filter) => (
//             <div
//               key={filter.id}
//               className="flex items-center text-sm lg:text-base text-gray-700 gap-x-2"
//             >
//               <div
//                 onClick={() => {
//                   setMax(filter.max_price);
//                   setMin(filter.min_price);
//                 }}
//                 className="inline-flex items-center"
//               >
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

//       <Accordion title="Narxlar">
//         <MinMaxPriceSlider max={max} min={min} />
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
