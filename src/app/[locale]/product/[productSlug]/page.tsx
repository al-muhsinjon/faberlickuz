import ProductView from "@/components/layouts/product-view";
import ShortDescription from "@/components/layouts/short-description";
import { useBasketStore } from "@/hooks/use-basket";
import { ICartProduct, IProduct } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import AddToBasket from "./add-to-basket";
import Gravity from "./gravity";
import Desc from "./desc";

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
    `${process.env.NEXT_API}/products/${params.productSlug}`
  );
  const product: IProduct = await productFetch.json();

  return (
    <div className="px-12 py-6">
      <Gravity product={product} />

      <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px] static">
        <div className="md:col-span-5">
          <ProductView images={product.images} />
        </div>
        <ShortDescription description={product.short_descriptions} />
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
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <p>Mavjud</p>
            </div>
            <div className="space-y-1">
              <h3 className="text-xl xl:text-2xl  space-x-2 null   ">
                <span>{product.price || product.sales}</span>
                <span>so&apos;m</span>
              </h3>
              <AddToBasket product={product} />
            </div>
          </div>
        </div>
      </div>
      <Desc product={product} />
    </div>
  );
};

export default Product;
