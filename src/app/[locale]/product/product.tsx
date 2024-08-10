// "use client";
// import ProductCard from "@/components/product-card";
// import { useCategoryStore } from "@/hooks/use-category";
// import { useProductStore } from "@/hooks/use-product-store";
// import { ICategoryProduct } from "@/types";
// import axios from "axios";
// import { request } from "http";
// import React, { useEffect, useState } from "react";

// const Product = () => {
//   const [categoryProduct, setCategoryProduct] = useState<ICategoryProduct>();
//   const { query } = useCategoryStore((state) => state);
//   const { fetchProducts, products } = useProductStore();

//   useEffect(() => {
//     console.log("Products: ", query);
//     fetchProducts(query || "");
//     console.log(products);
//   }, []);

//   // useEffect(() => {
//   //   const getProducts = async () => {
//   //     try {
//   //       const { data } = await axios.get(
//   //         `${process.env.NEXT_API}/products-catalog?${query}`
//   //       );
//   //       setCategoryProduct(data);
//   //     } catch (error) {
//   //       // throw error;
//   //     }
//   //   };
//   //   if (query) {
//   //     getProducts();
//   //   }
//   // }, [query]);

//   return (
//     <>
//       {/* <div className=" grid grid-cols-4 w-full relative md:col-span-4"> */}
//       {products?.results.map((product) => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//       {/* </div> */}
//     </>
//   );
// };

// export default Product;

"use client";
import ProductCard from "@/components/product-card";
import { useCategoryStore } from "@/hooks/use-category";
import { useProductStore } from "@/hooks/use-product-store";
import React, { useEffect } from "react";

const Product = () => {
  const { query } = useCategoryStore((state) => state);
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    if (query) {
      fetchProducts(query);
    }
  }, [query]);

  return (
    <>
      {products?.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default Product;
