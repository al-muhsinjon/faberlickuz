// "use client";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { IAdBanner } from "@/types";
// import { useRouter } from "next/navigation";

// type AdBannerProps = {
//   adBanner: IAdBanner[];
// };

// const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
//   const initialCategoryState = {
//     brand: "",
//     category: "",
//     sub_category: "",
//     stock: "",
//     query: "" as string | null,
//   };

//   const [categories, setCategories] = useState(initialCategoryState);

//   useEffect(() => {
//     const { brand, category, sub_category, stock } = categories;
//     const query = [brand, category, sub_category, stock]
//       .filter(Boolean)
//       .join("");

//     const updatedCategory = {
//       ...categories,
//       query: query || null,
//     };

//     setCategories(updatedCategory);
//     localStorage.setItem("category", JSON.stringify(updatedCategory));
//   }, [
//     categories.brand,
//     categories.category,
//     categories.sub_category,
//     categories.stock,
//   ]);

//   const router = useRouter();

//   const handleBannerClick = (banner: IAdBanner) => {
//     const updatedCategory = {
//       brand: banner.brand ? `&brand=${banner.brand.title_uz}` : "",
//       category: banner.category ? `&category=${banner.category.title_uz}` : "",
//       sub_category: banner.sub_category
//         ? `&sub_category=${banner.sub_category.title_uz}`
//         : "",
//       stock: banner.stock ? `&stock=${banner.stock.stock_type}` : "",
//       query: null, // Will be set in useEffect
//     };

//     setCategories(updatedCategory);
//     router.push("/uz/product");
//   };

//   return (
//     <>
//       {adBanner.map((banner) => (
//         <div
//           key={banner.id}
//           onClick={() => handleBannerClick(banner)}
//           className="w-full rounded-lg h-96 overflow-hidden relative cursor-pointer"
//         >
//           <Image
//             alt="ad banner"
//             className="object-cover"
//             priority
//             src={banner.web_image_ru}
//             fill
//           />
//         </div>
//       ))}
//     </>
//   );
// };

// export default AdBanner;

"use client";
import Image from "next/image";
import React from "react";
import { IAdBanner } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";

type AdBannerProps = {
  adBanner: IAdBanner[];
};

const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
  const setCategories = useCategoryStore((state) => state.setCategories);
  const router = useRouter();

  const handleBannerClick = (banner: IAdBanner) => {
    const updatedCategory = {
      brand: banner.brand ? `&brand=${banner.brand.title_uz}` : "",
      category: banner.category ? `&category=${banner.category.title_uz}` : "",
      sub_category: banner.sub_category
        ? `&sub_category=${banner.sub_category.title_uz}`
        : "",
      stock: banner.stock ? `&stock=${banner.stock.stock_type}` : "",
    };

    setCategories(updatedCategory);
    router.push("/uz/product");
  };

  return (
    <>
      {adBanner.map((banner) => (
        <div
          key={banner.id}
          onClick={() => handleBannerClick(banner)}
          className="w-full rounded-lg h-96 overflow-hidden relative cursor-pointer"
        >
          <Image
            alt="ad banner"
            className="object-cover"
            priority
            src={banner.web_image_ru}
            fill
          />
        </div>
      ))}
    </>
  );
};

export default AdBanner;
