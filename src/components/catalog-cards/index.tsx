// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { IBanner, IMainPageCategory } from "@/types";
// import { useRouter } from "next/navigation";
// import { useCategoryStore } from "@/hooks/use-category";

// interface Props {
//   mainPageCategories: IMainPageCategory[];
// }

// const CatalogCards: React.FC<Props> = ({ mainPageCategories }) => {
//   const router = useRouter();

//   const initialCategoryState = {
//     brand: "",
//     category: "",
//     sub_category: "",
//     stock: "",
//     query: "" as string | null,
//   };

//   const [categoriya, setCategoriya] = useState(initialCategoryState);

//   useEffect(() => {
//     const storedCategories = localStorage.getItem("category");
//     if (storedCategories) {
//       setCategoriya(JSON.parse(storedCategories));
//     }
//   }, []);

//   const updateCategories = (newCategory: string) => {
//     const updatedCategories = {
//       ...categoriya,
//       category: newCategory,
//     };
//     const { brand, stock, sub_category } = categoriya;
//     const query = [brand, newCategory, sub_category, stock]
//       .filter(Boolean)
//       .join("");
//     updatedCategories.query = query || null;

//     setCategoriya(updatedCategories);
//     localStorage.setItem("category", JSON.stringify(updatedCategories));

//     router.push("/uz/product");
//   };

//   return (
//     <>
//       <div className=" px-12 mt-6 grid grid-cols-2 lg:grid-cols-8 gap-3 lg:gap-6">
//         {mainPageCategories.map((photo, ind) => (
//           <div
//             key={photo.id}
//             onClick={() => {
//               updateCategories(
//                 `${photo.title_uz ? `&category=${photo.title_uz}` : ""}`
//               );
//             }}
//             className={`
//                ring cursor-pointer ring-white hover:ring-darkBlue/90 ring-offset-2 w-full ring-5  relative block rounded-lg overflow-hidden group min-h-[150px] sm:min-h-[240px]  before:w-full  before:h-full before:absolute before:bg-black/20 before:duration-200 hover:before:bg-black/30 before:top-0 before:left-0 before:z-[4]
//                ${ind === 0 ? "row-span-4 col-span-4" : ""}
//                ${ind === 1 ? "row-span-2 col-span-4" : ""}
//                ${ind === 4 ? "row-span-2 col-span-4" : ""}
//                ${ind === 5 ? "row-span-2 col-span-4" : ""}
//                row-span-2 col-span-2
//              `}
//           >
//             <Image
//               priority
//               src={photo.image}
//               alt="bbeybyenyc"
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//               className=" w-full h-full  object-cover group-hover:scale-125 duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
//             />
//           </div>
//         ))}
//       </div>
//     </>
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

  const updateCategories = (newCatgeory: IMainPageCategory) => {
    const updateCategory = {
      brand: "",
      category: `&category=${newCatgeory.title_uz}`,
      sub_category: "",
      stock: "",
    };
    setCategories(updateCategory);
    router.push("/uz/product");
  };

  return (
    <div className="px-12 mt-6 grid grid-cols-2 lg:grid-cols-8 gap-3 lg:gap-6">
      {mainPageCategories.map((photo, ind) => (
        <div
          key={photo.id}
          onClick={() => updateCategories(photo)}
          className={`
            ring cursor-pointer ring-white hover:ring-darkBlue/90 ring-offset-2 w-full ring-5 relative block rounded-lg overflow-hidden group min-h-[150px] sm:min-h-[240px] before:w-full before:h-full before:absolute before:bg-black/20 before:duration-200 hover:before:bg-black/30 before:top-0 before:left-0 before:z-[4]
            ${ind === 0 ? "row-span-4 col-span-4" : ""}
            ${ind === 1 ? "row-span-2 col-span-4" : ""}
            ${ind === 4 ? "row-span-2 col-span-4" : ""}
            ${ind === 5 ? "row-span-2 col-span-4" : ""}
            row-span-2 col-span-2
          `}
        >
          <Image
            priority
            src={photo.image}
            alt="catalog image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-cover group-hover:scale-125 duration-200 ease-in-out scale-100 blur-0 grayscale-0"
          />
        </div>
      ))}
    </div>
  );
};

export default CatalogCards;
