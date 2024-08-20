"use client";
import { IImage } from "@/types";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
        <div className="w-full h-[13rem] flex gap-3 flex-col ">
          {images.map((image) => (
            <div
              key={image.id}
              onClick={() => handleThumbnailClick(image)}
              className="relative h-14 w-14 border space-y-2 rounded-lg overflow-hidden"
            >
              <Image
                priority
                src={image.image}
                alt={`Thumbnail ${image.image}`}
                className="cursor-pointer  object-cover "
                fill
              />
            </div>
          ))}
        </div>
      </div>
      <div className=" w-96 h-96 overflow-hidden border relative rounded-lg">
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
