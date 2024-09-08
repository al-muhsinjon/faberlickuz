"use client";
import React from "react";
import ProductCard from "@/components/product-card";
import { IProduct } from "@/types";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

interface Props {
  relatedProducts: IProduct[];
}

const RelatedProducts: React.FC<Props> = ({ relatedProducts }) => {
  const t = useTranslations("Product");

  return (
    <div className="mt-12">
      <h2 className="border-b py-4 mb-4 border-main text-2xl lg:text-4xl font-medium">
        {t("recommendation")}
      </h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={2} // Mobil uchun 2 ta mahsulot
        breakpoints={{
          640: {
            slidesPerView: 3, // O'rta ekranlarda 3 ta mahsulot
          },
          1024: {
            slidesPerView: 4, // Katta ekranlarda 4 ta mahsulot
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Navigation, Autoplay]}
        loop
        className="pt-6"
      >
        {relatedProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedProducts;
