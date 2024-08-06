"use client";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { IImage } from "@/types";
import Image from "next/image";

interface Props {
  images: IImage[];
}

const SwiperCard: React.FC<Props> = ({ images }) => {
  return (
    <div className="w-full h-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className="w-full h-full relative rounded-lg overflow-hidden"
          >
            <Image
              priority
              src={image.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="/"
              fill
              className="object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
