// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import Image from "next/image";
// import { Navigation, Autoplay } from "swiper/modules";
// import { Button } from "@headlessui/react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { IBanner } from "@/types";
// import { useRouter } from "next/navigation";

// type BannerProps = {
//   banners: IBanner[];
// };

// const Banner: React.FC<BannerProps> = ({ banners }) => {
//   const router = useRouter();

//   const initialCategoryState = {
//     brand: "",
//     category: "",
//     sub_category: "",
//     stock: "",
//     query: "" as string | null,
//   };
//   const [categoriya, setCategoriya] = useState(initialCategoryState);

//   useEffect(() => {
//     const storedCategories = localStorage.getItem("category");
//     if (storedCategories) {
//       setCategoriya(JSON.parse(storedCategories));
//     }
//   }, []);

//   const updateCategories = (
//     newCategory: string,
//     newSubCategory: string,
//     newBrand: string
//   ) => {
//     const updatedCategories = {
//       ...categoriya,
//       category: newCategory,
//       sub_category: newSubCategory,
//       brand: newBrand,
//     };
//     const { stock } = categoriya;
//     const query = [newBrand, newCategory, newSubCategory, stock]
//       .filter(Boolean)
//       .join("");
//     updatedCategories.query = query || null;

//     setCategoriya(updatedCategories);
//     localStorage.setItem("category", JSON.stringify(updatedCategories));

//     // router.push("/uz/product");
//   };

//   const prevRef = useRef<HTMLButtonElement>(null);
//   const nextRef = useRef<HTMLButtonElement>(null);

//   return (
//     <div className="mt-6 w-[85%] mx-auto rounded-md h-[30rem]">
//       <Swiper
//         loop={true}
//         zoom={true}
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
//           className="p-2 border-2 rounded-lg bg-main text-white border-main "
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
import { Button } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IBanner } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";

type BannerProps = {
  banners: IBanner[];
};

const Banner: React.FC<BannerProps> = ({ banners }) => {
  const { setCategories } = useCategoryStore(); // Use Zustand hook
  const router = useRouter();

  const updateCategories = (
    newCategory: string,
    newSubCategory: string,
    newBrand: string
  ) => {
    setCategories({
      category: newCategory,
      sub_category: newSubCategory,
      brand: newBrand,
    });
    router.push("/uz/product");
  };

  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="mt-6 w-[85%] mx-auto rounded-md h-[30rem] relative">
      <Swiper
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        spaceBetween={5}
        slidesPerView={1}
        className="h-full"
      >
        {banners.map((banner, ind) => (
          <SwiperSlide
            key={ind}
            onClick={() =>
              updateCategories(
                `${
                  banner.category ? `&category=${banner.category.title_uz}` : ""
                }`,
                `${
                  banner.sub_category
                    ? `&sub_category=${banner.sub_category.title_uz}`
                    : ""
                }`,
                `${banner.brand ? `&brand=${banner.brand.title_uz}` : ""}`
              )
            }
            className="rounded-lg overflow-hidden"
          >
            <div className="relative cursor-pointer w-full h-full">
              <Image
                priority
                src={banner.web_image_uz}
                className="rounded-lg object-cover"
                fill
                alt={"Banner image "}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 transform -translate-y-1/2 left-12 z-10">
        <Button
          ref={prevRef}
          className="p-2 border-2 rounded-lg bg-main text-white border-main"
        >
          <ChevronLeft size={24} />
        </Button>
      </div>
      <div className="absolute top-1/2 transform -translate-y-1/2 right-12 z-10">
        <Button
          ref={nextRef}
          className="p-2 border-2 rounded-lg bg-main text-white border-main"
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
};

export default Banner;
