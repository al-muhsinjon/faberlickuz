// "use client";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Button } from "@headlessui/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IBanner } from "@/types";
// import { useRouter } from "next/navigation";
// import { useCategoryStore } from "@/hooks/use-category";

// type BannerProps = {
//   banners: IBanner[];
// };

// const Banner: React.FC<BannerProps> = ({ banners }) => {
//   const { setCategories } = useCategoryStore(); // Use Zustand hook
//   const router = useRouter();

//   const updateCategories = (
//     newCategory: string,
//     newSubCategory: string,
//     newBrand: string
//   ) => {
//     setCategories({
//       category: newCategory,
//       sub_category: newSubCategory,
//       brand: newBrand,
//     });
//     router.push("/uz/product");
//   };

//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);

//   return (
//     <div className="mt-6 w-[85%] mx-auto rounded-md h-[30rem] relative">
//       <Swiper
//         loop={true}
//         modules={[Navigation, Autoplay]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         spaceBetween={5}
//         slidesPerView={1}
//         className="h-full"
//       >
//         {banners.map((banner, ind) => (
//           <SwiperSlide
//             key={ind}
//             onClick={() =>
//               updateCategories(
//                 `${
//                   banner.category ? `&category=${banner.category.title_uz}` : ""
//                 }`,
//                 `${
//                   banner.sub_category
//                     ? `&sub_category=${banner.sub_category.title_uz}`
//                     : ""
//                 }`,
//                 `${banner.brand ? `&brand=${banner.brand.title_uz}` : ""}`
//               )
//             }
//             className="rounded-lg overflow-hidden"
//           >
//             <div className="relative cursor-pointer w-full h-full">
//               <Image
//                 priority
//                 src={banner.web_image_uz}
//                 className="rounded-lg object-cover"
//                 fill
//                 alt={"Banner image "}
//               />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <div className="absolute top-1/2 transform -translate-y-1/2 left-12 z-10">
//         <Button
//           ref={prevRef}
//           className="p-2 border-2 rounded-lg bg-main text-white border-main"
//         >
//           <ChevronLeft size={24} />
//         </Button>
//       </div>
//       <div className="absolute top-1/2 transform -translate-y-1/2 right-12 z-10">
//         <Button
//           ref={nextRef}
//           className="p-2 border-2 rounded-lg bg-main text-white border-main"
//         >
//           <ChevronRight />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Banner;

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
    <div className="mt-6 mx-auto w-full lg:w-[85%] rounded-md h-[20rem] lg:h-[30rem] relative">
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        spaceBetween={5}
        slidesPerView={1}
        className="h-full"
      >
        {banners.map((banner, ind) => (
          <SwiperSlide
            key={ind}
            onClick={() => handleBannerClick(banner)}
            className="cursor-pointer"
          >
            <div className="relative w-full h-full">
              <Image
                priority
                src={
                  locale === "uz" ? banner.web_image_uz : banner.web_image_ru
                }
                className="rounded-lg object-cover"
                fill
                alt={`Banner ${ind}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        ref={prevRef}
        className="absolute top-1/2 left-2 lg:left-12 transform -translate-y-1/2 z-10 bg-main text-white rounded-full p-2"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button
        ref={nextRef}
        className="absolute top-1/2 right-2 lg:right-12 transform -translate-y-1/2 z-10 bg-main text-white rounded-full p-2"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Banner;
