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

interface Props {
  newProducts: ICategoryProduct;
}

const NewProduct: React.FC<Props> = ({ newProducts }) => {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {newProducts.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewProduct;
