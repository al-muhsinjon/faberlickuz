// "use client";
// import React from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { IImage } from "@/types";
// import Image from "next/image";

// interface Props {
//   images: IImage[];
// }

// const SwiperCard: React.FC<Props> = ({ images }) => {
//   return (
//     <div className="w-full h-full">
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="w-full h-full"
//       >
//         {images.map((image) => (
//           <SwiperSlide
//             key={image.id}
//             className="w-full h-full relative rounded-lg overflow-hidden"
//           >
//             <Image
//               priority
//               src={image.image}
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               alt="/"
//               fill
//               className="object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperCard;

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
        className="h-full w-full "
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.id}
            className=" relative w-full h-[220px] md:h-[270px] lg:h-[300px] overflow-hidden rounded-lg"
          >
            <Image
              priority={false}
              src={image.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt={image.image || "Product Image"}
              fill
              loading="lazy"
              objectFit="cover"
              placeholder="blur"
              blurDataURL="/blur-image.jpg"
              className=" w-full h-full  object-cover duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCard;
