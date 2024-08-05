import ProductView from "@/components/layouts/product-view";
import ShortDescription from "@/components/layouts/short-description";
import { IProduct } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  params: {
    locale: string;
    productSlug: string;
  };
}

const Product = async ({
  params,
}: {
  params: { productSlug: string; locale: string };
}) => {
  const productFetch = await fetch(
    `https://birnimajon.pythonanywhere.com/api/products/${params.productSlug}`
  );
  const product: IProduct = await productFetch.json();
  console.log(product);
  return (
    <div className="px-12 py-6">
      <div className="flex flex-wrap gap-1 md:gap-2 items-center text-currentGrey font-rubik text-sm md:text-base">
        <Link href="/">Главная</Link>
        <svg
          className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <Link href="/product">Каталог</Link>
        <svg
          className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 9 4-4-4-4"
          />
        </svg>
        <Link href={`/${params.locale}/product/${product.slug}`}>
          {product.title_uz}
        </Link>
      </div>

      <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px] static">
        <div className="md:col-span-5">
          <ProductView images={product.images} />
        </div>
        <ShortDescription />
        <div className="lg:col-span-3 md:col-span-5 ">
          <div className="w-full border border-mainGray rounded-lg p-3 md:p-5  bg-white space-y-3 left-0">
            <div className="flex items-center gap-1 text-[#36E3A4]  mb-5">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={0}
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="w-6 h-6 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p>Mavjud</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl xl:text-2xl  space-x-2 null   ">
                <span>520 000</span>
                <span>so&apos;m</span>
              </h3>
              <button
                className="
          bg-darkBlue text-white mt-3.5 border-main 
          hover:opacity-80 flex items-center justify-center gap-3 border
          relative rounded-lg font-rubik md:text-lg px-4 py-2 undefined 
          group w-full text-sm  lg:text-lg  
          bg-main
          "
              >
                <span className="block">Savatga qo&apos;shish</span>
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
