import { ICartProduct } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  product: ICartProduct;
}

const BasketProduct: React.FC<Props> = ({ product }) => {
  return (
    <div className="flex  items-center justify-center w-full py-4 md:py-[30px]">
      <div className="flex justify-between w-full bg-red-300 max-sm:flex-col items-center gap-2 sm:gap-0 relative py-5 sm:py-0">
        <div className="flex items-center  w-full bg-blue-300    gap-3 ">
          <div className="h-16 w-16 xl:w-24 xl:h-24 relative">
            <Image
              src={product.image}
              alt=""
              fill
              className=" w-full h-full  object-cover duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
            />
          </div>
          <div className="space-y-2">
            <p className="line-clamp-2 text-sm md:text-lg font-semibold max-w-[150px] xl:max-w-[280px]">
              {product.title_uz}
            </p>
            <div className="relative ">
              <h4 className="lg:text-lg ">{product.price}</h4>
            </div>
          </div>
          <div className="flex  items-center gap-5 justify-end w-full sm:w-auto">
            <div className="flex px-3 py-1.5 bg-[#F5F5F5] rounde-lg order-2 sm:order-1">
              <button className="cursor-pointer outline-none p-2">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 12H6"
                  ></path>
                </svg>
              </button>
              <p className="outline-none w-[70px] flex justify-center items-center  text-center text-md bg-[#F5F5F5]">
                2
              </p>
              <button className="rounded-r cursor-pointer p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.75 4.5a.75.75 0 0 1 .75.75V11h5.75a.75.75 0 0 1 0 1.5H12.5v5.75a.75.75 0 0 1-1.5 0V12.5H5.25a.75.75 0 0 1 0-1.5H11V5.25a.75.75 0 0 1 .75-.75Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
