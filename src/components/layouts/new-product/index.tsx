// "use client";
// import ProductCard from "@/components/product-card";
// import { ICategoryProduct } from "@/types";
// import { Button } from "@headlessui/react";
// import React, { useEffect } from "react";
// import { MdAddShoppingCart } from "react-icons/md";

// interface Props {
//   newProducts: ICategoryProduct;
// }

// const NewProduct: React.FC<Props> = ({ newProducts }) => {
//   return (
//     <div className="grid gap-5 py-12 grid-cols-4">
//       {newProducts.results.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default NewProduct;

"use client";
import React from "react";
import ProductCard from "@/components/product-card";
import { ICategoryProduct } from "@/types";
import { useTranslations } from "next-intl";

interface Props {
  newProducts: ICategoryProduct;
}

const NewProduct: React.FC<Props> = ({ newProducts }) => {
  const t = useTranslations("Home");
  return (
    <>
      <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
        {t("new")}
      </h2>
      <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {newProducts.results.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default NewProduct;
