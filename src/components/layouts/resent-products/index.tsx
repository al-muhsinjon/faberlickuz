// "use client";
// import React from "react";
// import ProductCard from "@/components/product-card";
// import { useResent } from "@/hooks/use-resent";
// import { useTranslations } from "next-intl";

// const ResentProducts: React.FC = () => {
//   const { getRandomResentProducts } = useResent();
//   const randomResentProducts = getRandomResentProducts();
//   const t = useTranslations("Order");

//   return (
//     <>
//       <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
//         {t("seen")}
//       </h2>
//       <div className="grid gap-4 pt-6 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
//         {randomResentProducts.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </>
//   );
// };

// export default ResentProducts;

"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/product-card";
import { useResent } from "@/hooks/use-resent";
import { useTranslations } from "next-intl";
import { IProduct } from "@/types";

const ResentProducts: React.FC = () => {
  const { getRandomResentProducts } = useResent();
  const [randomResentProducts, setRandomResentProducts] = useState<IProduct[]>(
    []
  );
  const t = useTranslations("Order");
  useEffect(() => {
    setRandomResentProducts(getRandomResentProducts());
  }, [getRandomResentProducts]);

  return (
    <div className="pt-12">
      <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
        {t("seen")}
      </h2>
      <div className="grid gap-4 pt-6 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {randomResentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ResentProducts;
