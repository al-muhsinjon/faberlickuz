"use client";
import React from "react";
import Image from "next/image";
import { IMainPageCategory } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";
import { useLocale } from "next-intl";

interface Props {
  mainPageCategories: IMainPageCategory[];
}

const CatalogCards: React.FC<Props> = ({ mainPageCategories }) => {
  const router = useRouter();
  const setCategories = useCategoryStore((state) => state.setCategories);
  const locale = useLocale();

  const updateCategories = (newCategory: IMainPageCategory) => {
    setCategories({
      brand: "",
      category: `&category=${newCategory.title_uz}`,
      sub_category: "",
      stock: "",
    });
    router.push(`/${locale}/product`);
  };

  return (
    <div className="px-4 lg:px-12 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-6">
      {mainPageCategories.map((photo, ind) => (
        <div
          key={photo.id}
          onClick={() => updateCategories(photo)}
          className={`
            ring ring-white hover:ring-darkBlue/90 ring-offset-2 cursor-pointer w-full relative block rounded-lg overflow-hidden group
          min-h-[150px] sm:min-h-[240px]
            ${ind === 0 ? " lg:row-span-4 col-span-1 lg:col-span-4" : ""}
            ${ind === 1 ? " lg:row-span-2 col-span-1 lg:col-span-4" : ""}
            ${ind === 4 ? " lg:row-span-2 col-span-1 lg:col-span-4" : ""}
            ${ind === 5 ? " lg:row-span-2 col-span-1 lg:col-span-4" : ""}
            row-span-2 col-span-2
          `}
        >
          <Image
            src={photo.image ? photo?.image : ""}
            decoding="async"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            alt={photo.title_uz}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-200"
          />
          <div className="w-full h-full top-0 left-0 bg-black/50 absolute"></div>
          <h1 className="absolute top-5 left-5 text-white">
            {locale === "uz" ? photo.title_uz : photo.title_ru}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CatalogCards;
