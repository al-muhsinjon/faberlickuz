// "use client";
// import React from "react";
// import { IBasket, ICartProduct, IProduct } from "@/types";
// import { Button } from "@headlessui/react";
// import { MdAddShoppingCart } from "react-icons/md";
// import SwiperCard from "./swiper-card";
// import { useRouter } from "next/navigation";
// import { useLocale } from "use-intl";
// import { useBasketStore } from "@/hooks/use-basket";
// import { useTranslations } from "next-intl";
// import toast from "react-hot-toast";
// import { useResent } from "@/hooks/use-resent";

// interface Props {
//   product: IProduct;
// }

// const ProductCard: React.FC<Props> = ({ product }) => {
//   const t = useTranslations("Card");

//   const { addToBasket } = useBasketStore();
//   const { resentProducts, addToResent } = useResent();
//   const router = useRouter();
//   const locale = useLocale();

//   const handleAddToResent = () => {
//     addToResent(product);
//     router.push(`/${locale}/product/${product.slug}`);
//     console.table(resentProducts);
//   };

//   const handleAddToBasket = () => {
//     const cartProduct: ICartProduct = {
//       id: product.id,
//       title_uz: product.title_uz,
//       title_ru: product.title_ru,
//       price: product.price,
//       salePrice: product.sales || undefined,
//       image: product.images[0].image,
//       count: 1,
//       totalPrice: product.sales || product.price,
//     };
//     toast.success("Товар успешно добавлен в корзину");

//     addToBasket(cartProduct);
//   };

//   return (
//     <div className="border p-3 rounded-lg h-full flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
//       <div className="relative w-full h-[220px] md:h-[270px] lg:h-[300px] rounded-lg object-cover">
//         <SwiperCard images={product.images} />
//       </div>
//       <h2 className="font-bold text-base mt-4 mb-2 truncate-2-lines">
//         {locale === "uz" ? product.title_uz : product.title_ru}
//       </h2>
//       <div className="lg:flex flex-wrap gap-3 mb-4 text-sm">
//         {product.sales ? (
//           <>
//             <p className="line-through text-gray-500">
//               <span>{product.price}</span>
//               <span>&nbsp;{t("btns.sum")}</span>
//             </p>
//             <p className="text-base font-semibold text-main">
//               <span>{product.sales}</span>
//               <span>&nbsp;{t("btns.sum")}</span>
//             </p>
//           </>
//         ) : (
//           <p className="text-base font-semibold text-main">
//             <span>{product.price}</span>
//             <span>&nbsp;{t("btns.sum")}</span>
//           </p>
//         )}
//       </div>
//       <div className="flex gap-2">
//         <Button
//           onClick={handleAddToBasket}
//           className="flex items-center justify-center p-2 bg-main text-white rounded-lg w-full hover:bg-darkMain transition duration-150"
//         >
//           <MdAddShoppingCart size={20} />
//         </Button>
//         <Button
//           onClick={handleAddToResent}
//           className="p-2 text-main border-main hover:text-white hover:bg-main font-semibold rounded-lg border-2 transition duration-150 ease-in-out w-full"
//         >
//           {t("btns.batafsil")}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

"use client";
import React from "react";
import { ICartProduct, IProduct } from "@/types";
import { Button } from "@headlessui/react";
import { MdAddShoppingCart } from "react-icons/md";
import SwiperCard from "./swiper-card";
import { useRouter } from "next/navigation";
import { useLocale } from "use-intl";
import { useBasketStore } from "@/hooks/use-basket";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import { useResent } from "@/hooks/use-resent";

interface Props {
  product: IProduct;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const t = useTranslations("Card");
  const { addToBasket } = useBasketStore();
  const { addToResent } = useResent();
  const router = useRouter();
  const locale = useLocale();

  const handleAddToResent = () => {
    addToResent(product);
    router.push(`/${locale}/product/${product.slug}`);
  };

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

    toast.success("Товар успешно добавлен в корзину");
    addToBasket(cartProduct);
  };

  return (
    <div className="border p-3 rounded-lg h-full flex flex-col justify-between bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out min-h-[400px] max-h-[450px]">
      {/* Suratlar qismi */}
      <div className="relative w-full h-[220px] md:h-[270px] lg:h-[300px] rounded-lg object-cover">
        <SwiperCard images={product.images} />
      </div>
      {/* Mahsulot nomi */}
      <h2 className="font-bold text-base mt-4 mb-2 truncate-2-lines">
        {locale === "uz" ? product.title_uz : product.title_ru}
      </h2>
      {/* Narx ko'rsatish */}
      <div className="lg:flex flex-wrap gap-3 mb-4 text-sm">
        {product.sales ? (
          <>
            <p className="line-through text-gray-500">
              <span>{product.price}</span>
              <span>&nbsp;{t("btns.sum")}</span>
            </p>
            <p className="text-base font-semibold text-main">
              <span>{product.sales}</span>
              <span>&nbsp;{t("btns.sum")}</span>
            </p>
          </>
        ) : (
          <p className="text-base font-semibold text-main">
            <span>{product.price}</span>
            <span>&nbsp;{t("btns.sum")}</span>
          </p>
        )}
      </div>
      {/* Tugmalar */}
      <div className="flex gap-2">
        <Button
          onClick={handleAddToBasket}
          className="flex items-center justify-center p-2 bg-main text-white rounded-lg w-full hover:bg-darkMain transition duration-150"
        >
          <MdAddShoppingCart size={20} />
        </Button>
        <Button
          onClick={handleAddToResent}
          className="p-2 text-main border-main hover:text-white hover:bg-main font-semibold rounded-lg border-2 transition duration-150 ease-in-out w-full"
        >
          {t("btns.batafsil")}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
