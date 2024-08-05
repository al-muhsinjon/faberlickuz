import ProductCard from "@/components/product-card";
import { ICategoryProduct } from "@/types";
import { Button } from "@headlessui/react";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

interface Props {
  newProducts: ICategoryProduct;
}

const NewProduct: React.FC<Props> = ({ newProducts }) => {
  return (
    <div className="grid gap-5 py-12 grid-cols-4">
      {newProducts.results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewProduct;
