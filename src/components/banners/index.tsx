"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IBanner } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";
import { Button } from "@headlessui/react";
import { useLocale } from "next-intl";

interface BannerProps {
  banners: IBanner[];
}

const Banner: React.FC<BannerProps> = ({ banners }) => {
  const { setCategories } = useCategoryStore();
  const locale = useLocale();
  const router = useRouter();
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const handleBannerClick = (banner: IBanner) => {
    setCategories({
      brand: banner.brand ? `&brand=${banner.brand.title_uz}` : "",
      category: banner.category ? `&category=${banner.category.title_uz}` : "",
      sub_category: banner.sub_category
        ? `&sub_category=${banner.sub_category.title_uz}`
        : "",
    });
    router.push(`/${locale}/product`);
  };

  return (
    <div className="mt-6 mx-auto w-full lg:w-full px-6 lg:px-12 rounded-md h-[20rem] lg:h-[30rem] relative">
      <Swiper
        loop={banners.length > 1}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={5}
        slidesPerView={1}
        onSwiper={(swiper) => {
          if (prevRef.current && nextRef.current) {
            swiper.navigation.prevEl = prevRef.current;
            swiper.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }
        }}
        className="h-full"
      >
        {banners.map((banner, index) => (
          <SwiperSlide
            key={index}
            onClick={() => handleBannerClick(banner)}
            className="cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                src={
                  banner?.web_image_uz && locale === "uz"
                    ? banner?.web_image_uz
                    : banner?.web_image_ru || "/default-banner.jpg"
                }
                sizes="(max-width: 768px) 100vw, (max-width: 1200px)  100vw, 80vw"
                className="rounded-lg object-cover"
                fill
                loading="eager"
                alt={`Banner ${index}`}
                onError={(e) => (e.currentTarget.src = "/default-banner.jpg")}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        ref={prevRef}
        className="absolute top-1/2 left-4 lg:left-24 transform -translate-y-1/2 z-10 bg-main text-white rounded-full p-2"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        ref={nextRef}
        className="absolute top-1/2 right-4 lg:right-24 transform -translate-y-1/2 z-10 bg-main text-white rounded-full p-2"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Banner;
