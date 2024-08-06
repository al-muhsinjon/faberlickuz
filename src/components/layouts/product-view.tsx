"use client";
import { IImage } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Props {
  images: IImage[];
}

const ProductView: React.FC<Props> = ({ images }) => {
  const [mainImage, setMainImage] = useState<IImage>(images[0]);

  const handleThumbnailClick = (image: IImage) => {
    setMainImage(image);
  };
  return (
    <div className=" w-full aspect-[16/11]  h-full relative flex gap-5 md:gap-[10px]  ">
      <div className="">
        <div className="w-full h-[13rem] bg-red-300 flex gap-3 flex-col ">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleThumbnailClick(image)}
              className="relative h-14 w-14  space-y-2 rounded-lg overflow-hidden"
            >
              <Image
                priority
                src={image.image}
                alt={`Thumbnail ${image.image}`}
                className="cursor-pointer object-cover "
                fill
              />
            </div>
          ))}
        </div>
        {/* <Swiper
          direction={"vertical"}
          slidesPerView={3}
          spaceBetween={5}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          className="w-full h-[13rem]"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="relative rounded-lg   overflow-hidden border"
              onClick={() => handleThumbnailClick(image)}
            >
              <div className="w-16 h-16  relative">
                <Image
                  src={image.image}
                  alt={`Thumbnail ${index}`}
                  className="cursor-pointer object-cover "
                  fill
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}
      </div>
      <div className=" w-96 h-96 overflow-hidden relative rounded-lg">
        <Image
          priority={false}
          fill
          src={mainImage.image}
          alt="Main"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ProductView;
