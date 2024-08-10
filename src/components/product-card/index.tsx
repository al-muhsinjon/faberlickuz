// "use client";
// import { IBasket, ICartProduct, IProduct } from "@/types";
// import { Button } from "@headlessui/react";
// import React from "react";
// import { MdAddShoppingCart } from "react-icons/md";
// import SwiperCard from "./swiper-card";
// import { useRouter } from "next/navigation";
// import { useLocale } from "use-intl";
// import { useBasketStore } from "@/hooks/use-basket";

// interface Props {
//   product: IProduct;
// }

// const ProductCard: React.FC<Props> = ({ product }) => {
//   const { addToBasket } = useBasketStore();
//   const navigate = useRouter();
//   const locale = useLocale();

//   const handleAddToBasket = () => {
//     // IProduct ob'ektini ICartProduct ga aylantirish
//     const cartProduct = {
//       id: product.id,
//       title_uz: product.title_uz,
//       title_ru: product.title_ru,
//       price: product.price,
//       salePrice: product.sales || undefined,
//       image: product.images[0].image,
//       count: 1,
//       totalPrice: product.sales || product.price,
//     };

//     addToBasket(cartProduct);
//   };

//   return (
//     <div className="border p-3 rounded-lg h-full flex flex-col justify-between ">
//       <div className="w-full h-64  rounded-lg bg-red-300">
//         <SwiperCard images={product.images} />
//       </div>
//       <h2 className="font-bold line-clamp-2 my-4 truncate-2-lines">
//         {product.title_uz}
//       </h2>
//       <div className="flex gap-3 mb-4 ">
//         {product.price && (
//           <p className="line-through text-sm text-gray-500">
//             <span>{product.price}</span>
//             <span>&nbsp;so&apos;m</span>
//           </p>
//         )}
//         <p className="text-base font-semibold">
//           <span>{product.sales}</span>
//           <span>&nbsp;so&apos;m</span>
//         </p>
//       </div>
//       <div className="flex gap-4">
//         <Button
//           onClick={handleAddToBasket}
//           className={"p-4 bg-main rounded-lg text-white"}
//         >
//           <MdAddShoppingCart size={20} />
//         </Button>
//         <Button
//           onClick={() => navigate.push(`${locale}/product/${product.slug}`)}
//           className={
//             "p-2 w-full text-main border-main  duration-100 ease-in-out hover:text-white hover:bg-main font-semibold rounded-lg border-2"
//           }
//         >
//           podborne
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// "use client";

// import React from "react";
// import { IProduct } from "@/types";
// import { Button } from "@headlessui/react";
// import { MdAddShoppingCart } from "react-icons/md";
// import SwiperCard from "./swiper-card";
// import { useRouter } from "next/navigation";
// import { useLocale } from "use-intl";
// import { useBasketStore } from "@/hooks/use-basket";

// interface Props {
//   product: IProduct;
// }

// const ProductCard: React.FC<Props> = ({ product }) => {
//   const { addToBasket } = useBasketStore();
//   const router = useRouter();
//   const locale = useLocale();

//   const handleAddToBasket = () => {
//     const cartProduct = {
//       id: product.id,
//       title_uz: product.title_uz,
//       title_ru: product.title_ru,
//       price: product.price,
//       salePrice: product.sales || undefined,
//       image: product.images[0]?.image,
//       count: 1,
//       totalPrice: product.sales || product.price,
//     };

//     addToBasket(cartProduct);
//   };

//   return (
//     <div className="border p-4 rounded-lg flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200">
//       <div className="w-full h-64 rounded-lg overflow-hidden bg-gray-200">
//         <SwiperCard images={product.images} />
//       </div>

//       <h2 className="font-bold text-lg mt-4 line-clamp-2">
//         {product.title_uz}
//       </h2>

//       <div className="flex items-center gap-2 mt-2 mb-4">
//         {product.price && (
//           <p className="line-through text-sm text-gray-500">
//             {product.price}&nbsp;so&apos;m
//           </p>
//         )}
//         <p className="text-base font-semibold text-red-500">
//           {product.sales}&nbsp;so&apos;m
//         </p>
//       </div>

//       <div className="flex gap-2">
//         <Button
//           onClick={handleAddToBasket}
//           className="flex-1 p-3 bg-main text-white rounded-lg flex items-center justify-center hover:bg-main-dark transition-colors duration-150"
//         >
//           <MdAddShoppingCart size={20} />
//         </Button>
//         <Button
//           onClick={() => router.push(`/${locale}/product/${product.slug}`)}
//           className="flex-1 p-3 text-main border-main border-2 rounded-lg flex items-center justify-center font-semibold hover:bg-main hover:text-white transition-colors duration-150"
//         >
//           Podrobne
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import React from "react";
import { IBasket, ICartProduct, IProduct } from "@/types";
import { Button } from "@headlessui/react";
import { MdAddShoppingCart } from "react-icons/md";
import SwiperCard from "./swiper-card";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";
import { useBasketStore } from "@/hooks/use-basket";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const { addToBasket } = useBasketStore();
  const router = useRouter();
  const locale = useLocale();

  const handleAddToBasket = () => {
    const cartProduct: ICartProduct = {
      id: product.id,
      title_uz: product.title_uz,
      title_ru: product.title_ru,
      price: product.price,
      salePrice: product.sales || undefined,
      image: product.images[0].image,
      count: 1,
      totalPrice: product.sales || product.price,
    };

    addToBasket(cartProduct);
  };

  return (
    <div className="border p-3 rounded-lg h-full flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="relative w-full h-[220px] md:h-[270px] lg:h-[300px] rounded-lg object-cover">
        <SwiperCard images={product.images} />
      </div>
      <h2 className="font-bold text-base mt-4 mb-2 truncate-2-lines">
        {product.title_uz}
      </h2>
      <div className="flex gap-3 mb-4 text-sm">
        {product.price && (
          <p className="line-through text-gray-500">
            <span>{product.price}</span>
            <span>&nbsp;so&apos;m</span>
          </p>
        )}
        <p className="text-base font-semibold text-main">
          <span>{product.sales}</span>
          <span>&nbsp;so&apos;m</span>
        </p>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handleAddToBasket}
          className="flex items-center justify-center p-2 bg-main text-white rounded-lg w-full hover:bg-darkMain transition duration-150"
        >
          <MdAddShoppingCart size={20} />
        </Button>
        <Button
          onClick={() => router.push(`${locale}/product/${product.slug}`)}
          className="p-2 text-main border-main hover:text-white hover:bg-main font-semibold rounded-lg border-2 transition duration-150 ease-in-out w-full"
        >
          Podrobne
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
