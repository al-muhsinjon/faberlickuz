"use client";
import { IProduct } from "@/types";
import { Button } from "@headlessui/react";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import SwiperCard from "./swiper-card";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const navigate = useRouter();
  const locale = useLocale();

  return (
    <div className="border p-3 rounded-lg ">
      <div className="w-full h-64  rounded-lg bg-red-300">
        <SwiperCard images={product.images} />
      </div>
      <h2 className="font-bold line-clamp-2 my-4 truncate-2-lines">
        {product.title_uz}
      </h2>
      <div className="flex gap-3 mb-4 ">
        {product.price && (
          <p className="line-through text-sm text-gray-500">
            <span>{product.price}</span>
            <span>&nbsp;so'm</span>
          </p>
        )}
        <p className="text-base font-semibold">
          <span>{product.sales}</span>
          <span>&nbsp;so'm</span>
        </p>
      </div>
      <div className="flex gap-4">
        <Button className={"p-4 bg-main rounded-lg text-white"}>
          <MdAddShoppingCart size={20} />
        </Button>
        <Button
          onClick={() => navigate.push(`${locale}/product/${product.slug}`)}
          className={
            "p-2 w-full text-main border-main  duration-100 ease-in-out hover:text-white hover:bg-main font-semibold rounded-lg border-2"
          }
        >
          podborne
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
