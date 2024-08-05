"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IMainPageCategory } from "@/types";

interface Props {
  mainPageCategories: IMainPageCategory[];
}

const CatalogCards: React.FC<Props> = ({ mainPageCategories }) => {
  return (
    <>
      <div className=" px-12 mt-6 grid grid-cols-2 lg:grid-cols-8 gap-3 lg:gap-6">
        {mainPageCategories.map((photo, ind) => (
          <div
            key={photo.id}
            onClick={() => console.log("asaas")}
            className={`
               ring cursor-pointer ring-white hover:ring-darkBlue/90 ring-offset-2 w-full ring-5  relative block rounded-lg overflow-hidden group min-h-[150px] sm:min-h-[240px]  before:w-full  before:h-full before:absolute before:bg-black/20 before:duration-200 hover:before:bg-black/30 before:top-0 before:left-0 before:z-[4]  
               ${ind === 0 ? "row-span-4 col-span-4" : ""}
               ${ind === 1 ? "row-span-2 col-span-4" : ""}
               ${ind === 4 ? "row-span-2 col-span-4" : ""}
               ${ind === 5 ? "row-span-2 col-span-4" : ""}
               row-span-2 col-span-2
             `}
          >
            <Image
              src={photo.image}
              alt="bbeybyenyc"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" w-full h-full  object-cover group-hover:scale-125 duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
              // sizes="(min-width: 1280px) 278px,
              // (min-width: 1040px) calc(12.73vw + 118px),
              // (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
            />
          </div>
        ))}
      </div>
    </>
    // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">

    //   {categories.map((category) => (
    //     <div
    //       key={category.id}
    //       className="relative group w-full max-w-5xl p-5 pb-10 mx-auto mb-10 gap-5 columns-3 overflow-hidden rounded-lg shadow-lg"
    //     >
    //       <Image
    //         src={category.image}
    //         alt={category.title_uz}
    //         layout="fill"
    //         objectFit="cover"
    //         className="transition-transform duration-500 ease-in-out transform group-hover:scale-105"
    //       />
    //       <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    //         <h2 className="text-white text-xl font-bold">
    //           {category.title_uz}
    //         </h2>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};

export default CatalogCards;
