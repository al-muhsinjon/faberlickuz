import { IProduct } from "@/types";
import { useLocale } from "next-intl";
import React from "react";

interface Props {
  product: IProduct;
}

const Desc: React.FC<Props> = ({ product }) => {
  const locale = useLocale();
  return (
    <div>
      <p>{locale === "uz" ? product.description_uz : product.description_ru}</p>
    </div>
  );
};

export default Desc;
