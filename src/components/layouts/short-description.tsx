"use client";
import { IShortDescription } from "@/types";
import { useTranslations } from "next-intl";
import React from "react";

interface Props {
  description: IShortDescription[];
}

const ShortDescription: React.FC<Props> = ({ description }) => {
  const t  =useTranslations("Product")
  return (
    <div className="md:col-span-4 space-y-2.5  text-darkBlue">
      <h2 className="font-medium md:text-lg">{t("qisqacha")}</h2>
      <div className="space-y-2">
        {description.map((desc) => (
          <div
            key={desc.id}
            className=" text-sm xl:text-base flex justify-between items-end  w-full "
          >
            <p className="text-main whitespace-nowrap ">{desc.key_uz}</p>
            <div className="h-full w-full border-b flex-1 border-dashed"></div>
            <span className="text-black max-w-1/2 text-right text-wrap">
              {desc.value_uz}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShortDescription;
