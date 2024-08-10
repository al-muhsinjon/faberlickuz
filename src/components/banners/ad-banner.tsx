// "use client";
// import Image from "next/image";
// import React from "react";
// import { IAdBanner } from "@/types";
// import { useRouter } from "next/navigation";
// import { useCategoryStore } from "@/hooks/use-category";

// type AdBannerProps = {
//   adBanner: IAdBanner[];
// };

// const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
//   const setCategories = useCategoryStore((state) => state.setCategories);
//   const router = useRouter();

//   const handleBannerClick = (banner: IAdBanner) => {
//     const updatedCategory = {
//       brand: banner.brand ? `&brand=${banner.brand.title_uz}` : "",
//       category: banner.category ? `&category=${banner.category.title_uz}` : "",
//       sub_category: banner.sub_category
//         ? `&sub_category=${banner.sub_category.title_uz}`
//         : "",
//       stock: banner.stock ? `&stock=${banner.stock.stock_type}` : "",
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

interface AdBannerProps {
  adBanner: IAdBanner[];
}

const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
  const setCategories = useCategoryStore((state) => state.setCategories);
  const router = useRouter();

  const handleBannerClick = (banner: IAdBanner) => {
    setCategories({
      brand: banner.brand ? `&brand=${banner.brand.title_uz}` : "",
      category: banner.category ? `&category=${banner.category.title_uz}` : "",
      sub_category: banner.sub_category
        ? `&sub_category=${banner.sub_category.title_uz}`
        : "",
      stock: banner.stock ? `&stock=${banner.stock.stock_type}` : "",
    });
    router.push("/uz/product");
  };

  return (
    <div className="grid gap-6">
      {adBanner.map((banner) => (
        <div
          key={banner.id}
          onClick={() => handleBannerClick(banner)}
          className="relative h-60 lg:h-96 rounded-lg overflow-hidden cursor-pointer"
        >
          <Image
            alt="ad banner"
            src={banner.web_image_ru}
            fill
            className="object-cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default AdBanner;
