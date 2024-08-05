import React from "react";

const ShortDescription = () => {
  const short_descriptions = [
    {
      id: 10,
      key_uz: "Mahsulot nomi",
      key_ru: "Название товара",
      value_uz: "Bolalar uchun ta'lim plansheti",
      value_ru: "Образовательный планшет для детей",
    },
    {
      id: 11,
      key_uz: "Brend",
      key_ru: "Бренд",
      value_uz: "BOROFONE",
      value_ru: "BOROFONE",
    },
    {
      id: 12,
      key_uz: "Model",
      key_ru: "Модель",
      value_uz: "BH64",
      value_ru: "BH64",
    },
    {
      id: 13,
      key_uz: "Material",
      key_ru: "Материал",
      value_uz: "ABS + silikon + alyuminiy qotishmasi",
      value_ru: "ABS + силикон + алюминиевый сплав",
    },
    {
      id: 14,
      key_uz: "Yuk ko'taruvchi og'irlik",
      key_ru: "Грузоподъемность",
      value_uz: "800g",
      value_ru: "800g",
    },
  ];

  return (
    <div className="md:col-span-4 space-y-2.5  text-darkBlue">
      <h2 className="font-medium md:text-lg">Tovar haqida qisqacha</h2>
      <div className="space-y-2">
        {short_descriptions.map((desc) => (
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
