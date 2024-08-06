"use client";
import Image from "next/image";
import React from "react";
import { IAdBanner } from "@/types";
import { useCategory } from "@/hooks/use-category";
import { useRouter } from "next/navigation";

type AdBannerProps = {
  adBanner: IAdBanner[];
};

const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
  const handleCategoryClick = (category: string) => {
    document.cookie = `selectedCategory=${encodeURIComponent(
      category
    )}; path=/`;
    router.push("/product");
  };
  console.log("adBanner", adBanner);
  const catalog = useCategory();
  const router = useRouter();
  // const api = `https://birnimajon.pythonanywhere.com/api/products-catalog?${adBanner}`;
  return (
    <>
      {adBanner.map((banner) => (
        <div
          key={banner.id}
          onClick={() => {
            handleCategoryClick(
              `${banner.category && `&category=${banner.category.title_uz}`}${
                banner.brand && `&brand=${banner.brand.title_uz}`
              }${
                banner.sub_category &&
                `&sub_category=${banner.sub_category.title_uz}`
              }${banner.stock && `&stock=${banner.stock.stock_type}`}`
            );

            console.log(
              `https://birnimajon.pythonanywhere.com/api/products-catalog?${
                banner.category && `&category=${banner.category.title_uz}`
              }${banner.brand && `&brand=${banner.brand.title_uz}`}${
                banner.sub_category &&
                `&sub_category=${banner.sub_category.title_uz}`
              }${banner.stock && `&stock=${banner.stock.stock_type}`}`
            );
            router.push("/uz/product");
          }}
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
