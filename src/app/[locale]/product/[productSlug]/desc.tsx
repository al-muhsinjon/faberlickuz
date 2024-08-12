import { IProduct } from "@/types";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

interface Props {
  product: IProduct;
}

const Desc: React.FC<Props> = ({ product }) => {
  const locale = useLocale();
  const t = useTranslations("Product");
  return (
    <div>
      <h2 className="text-2xl font-semibold">{t("description")}</h2>
      <p>
        {locale === "uz" ? product?.description_uz : product?.description_ru}
      </p>
    </div>
  );
};

export default Desc;
