"use client";
import Image from "next/image";
import React from "react";
import { IAdBanner } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";
import { useLocale } from "next-intl";

interface AdBannerProps {
  adBanner: IAdBanner[];
}

const AdBanner: React.FC<AdBannerProps> = ({ adBanner }) => {
  const setCategories = useCategoryStore((state) => state.setCategories);
  const router = useRouter();
  const locale = useLocale();

  const handleBannerClick = (banner: IAdBanner) => {
    setCategories({
      brand: banner.brand ? `${banner.brand.title_uz}` : "",
      category: banner.category ? `${banner.category.title_uz}` : "",
      sub_category: banner.sub_category
        ? `${banner.sub_category.title_uz}`
        : "",
      stock: banner.stock ? `${banner.stock.stock_type}` : "",
      page_size: "8",
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px)  100vw, 80vw"
            alt="ad banner"
            src={locale === "uz" ? banner?.web_image_uz : banner?.web_image_ru}
            fill
            className="object-cover"
            // priority
            loading="lazy"
            blurDataURL="/blur-image.jpg"
          />
        </div>
      ))}
    </div>
  );
};

export default AdBanner;
