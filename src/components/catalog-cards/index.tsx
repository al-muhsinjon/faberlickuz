// "use client";
// import React from "react";
// import Image from "next/image";
// import { IMainPageCategory } from "@/types";
// import { useRouter } from "next/navigation";
// import { useCategoryStore } from "@/hooks/use-category";

// interface Props {
//   mainPageCategories: IMainPageCategory[];
// }

// const CatalogCards: React.FC<Props> = ({ mainPageCategories }) => {
//   const router = useRouter();
//   const setCategories = useCategoryStore((state) => state.setCategories);

//   const updateCategories = (newCatgeory: IMainPageCategory) => {
//     const updateCategory = {
//       brand: "",
//       category: `&category=${newCatgeory.title_uz}`,
//       sub_category: "",
//       stock: "",
//     };
//     setCategories(updateCategory);
//     router.push("/uz/product");
//   };

//   return (
//     <div className="px-12 mt-6 grid grid-cols-2 lg:grid-cols-8 gap-3 lg:gap-6">
//       {mainPageCategories.map((photo, ind) => (
//         <div
//           key={photo.id}
//           onClick={() => updateCategories(photo)}
//           className={`
//             ring cursor-pointer ring-white hover:ring-darkBlue/90 ring-offset-2 w-full ring-5 relative block rounded-lg overflow-hidden group min-h-[150px] sm:min-h-[240px] before:w-full before:h-full before:absolute before:bg-black/20 before:duration-200 hover:before:bg-black/30 before:top-0 before:left-0 before:z-[4]
//             ${ind === 0 ? "row-span-4 col-span-4" : ""}
//             ${ind === 1 ? "row-span-2 col-span-4" : ""}
//             ${ind === 4 ? "row-span-2 col-span-4" : ""}
//             ${ind === 5 ? "row-span-2 col-span-4" : ""}
//             row-span-2 col-span-2
//           `}
//         >
//           <Image
//             priority
//             src={photo.image}
//             alt="catalog image"
//             fill
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//             className="w-full h-full object-cover group-hover:scale-125 duration-200 ease-in-out scale-100 blur-0 grayscale-0"
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CatalogCards;

"use client";
import React from "react";
import Image from "next/image";
import { IMainPageCategory } from "@/types";
import { useRouter } from "next/navigation";
import { useCategoryStore } from "@/hooks/use-category";

interface Props {
  mainPageCategories: IMainPageCategory[];
}

const CatalogCards: React.FC<Props> = ({ mainPageCategories }) => {
  const router = useRouter();
  const setCategories = useCategoryStore((state) => state.setCategories);

  const updateCategories = (newCategory: IMainPageCategory) => {
    setCategories({
      brand: "",
      category: newCategory.title_uz,
      sub_category: "",
      stock: "",
    });
    router.push("/uz/product");
  };

  return (
    <div className="px-4 lg:px-12 mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3 lg:gap-6">
      {mainPageCategories.map((photo, ind) => (
        <div
          key={photo.id}
          onClick={() => updateCategories(photo)}
          className={`
            ring ring-white hover:ring-darkBlue/90 ring-offset-2 cursor-pointer w-full relative block rounded-lg overflow-hidden group
            ${ind === 0 ? "row-span-4 col-span-2 lg:col-span-4" : ""}
            ${ind === 1 ? "row-span-2 col-span-2 lg:col-span-4" : ""}
          `}
        >
          <Image
            priority
            src={photo.image}
            alt={photo.title_uz}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-200"
          />
        </div>
      ))}
    </div>
  );
};

export default CatalogCards;
