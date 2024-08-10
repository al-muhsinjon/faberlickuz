// import {
//   Combobox,
//   ComboboxButton,
//   ComboboxInput,
//   ComboboxOption,
//   ComboboxOptions,
// } from "@headlessui/react";
// import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
// import clsx from "clsx";
// import { useState } from "react";

// const people = [
//   { id: 1, name: "Tom Cook" },
//   { id: 2, name: "Wade Cooper" },
//   { id: 3, name: "Tanya Fox" },
//   { id: 4, name: "Arlene Mccoy" },
//   { id: 5, name: "Devon Webb" },
// ];

// export default function Example() {
//   const [query, setQuery] = useState("");
//   const [selected, setSelected] = useState(people[1]);

//   const filteredPeople =
//     query === ""
//       ? people
//       : people.filter((person) => {
//           return person.name.toLowerCase().includes(query.toLowerCase());
//         });

//   return (
//     <div className="mx-auto h-screen w-52 pt-20">
//       <Combobox
//         value={selected}
//         onChange={(value) => setSelected(value)}
//         onClose={() => setQuery("")}
//         __demoMode
//       >
//         <div className="relative">
//           <ComboboxInput
//             className={clsx(
//               "w-full rounded-lg border-none bg-white/5 py-1.5 pr-8 pl-3 text-sm/6 text-white",
//               "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
//             )}
//             displayValue={(person) => person?.name}
//             onChange={(event) => setQuery(event.target.value)}
//           />
//           <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
//             <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
//           </ComboboxButton>
//         </div>

//         <ComboboxOptions
//           anchor="bottom"
//           transition
//           className={clsx(
//             "w-[var(--input-width)] rounded-xl border border-white/5 bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible",
//             "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
//           )}
//         >
//           {filteredPeople.map((person) => (
//             <ComboboxOption
//               key={person.id}
//               value={person}
//               className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
//             >
//               <CheckIcon className="invisible size-4 fill-white group-data-[selected]:visible" />
//               <div className="text-sm/6 text-white">{person.name}</div>
//             </ComboboxOption>
//           ))}
//         </ComboboxOptions>
//       </Combobox>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import { Button, Input } from "@headlessui/react";
// import { ICategoryProduct } from "@/types";
// import Link from "next/link";

// const SearchComponent: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [opened, setOpened] = useState(false);
//   const [product, setProduct] = useState<ICategoryProduct>();

//   const getSearch = async (params: string) => {
//     if (params) {
//       setOpened(false);
//       return;
//     }
//     try {
//       if (params) {
//         const res = await fetch(
//           `${process.env.NEXT_API}/product-search?search=${params}`
//         );
//         const data = await res.json();
//         setProduct(data);
//         setOpened(true);
//       }
//       // console.log(data);
//     } catch (error) {
//       console.error("Failed to fetch search results:", error);
//       setOpened(false);
//     }
//   };

//   useEffect(() => {
//     if (searchTerm) {
//       getSearch(searchTerm);
//     } else {
//       setOpened(false);
//     }
//   }, [searchTerm]);

//   return (
//     <div className="max-w-4xl px-12 w-full">
//       <div className="max-w-4xl relative">
//         <div className="w-full flex">
//           <Input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-3 rounded-l-md outline-none bg-mainGray/15"
//           />
//           <Button className="rounded-r-md bg-mainGray/15 text-black px-3 flex justify-center items-center">
//             <MagnifyingGlassIcon className="w-6 h-6" />
//           </Button>
//         </div>
//         {opened && (
//           <div className="w-full absolute z-10 overflow-y-auto bg-white shadow-lg max-h-60 mt-1 rounded-md">
//             {product && product.results && product.results.length > 0 ? (
//               product.results.map((prod) => (
//                 <Link
//                   href={`/uz/product/${prod.slug}`}
//                   key={prod.id}
//                   className="flex items-center p-2 hover:bg-gray-100 transition"
//                 >
//                   <div className="flex-shrink-0 h-16 w-16 relative mr-3">
//                     {/* {prod.image[0].image || ""} */}
//                     <Image
//                       priority={false}
//                       src={prod.image.image}
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       alt={prod.image.image || "Product Image"}
//                       fill
//                       loading="lazy"
//                       objectFit="cover"
//                       placeholder="blur"
//                       blurDataURL="/blur-image.jpg"
//                       className=" w-full h-full  object-cover duration-200 ease-in-out  scale-100  blur-0 grayscale-0 "
//                     />
//                   </div>
//                   <div className="flex flex-col">
//                     <span className="text-sm font-medium text-gray-900">
//                       {prod.title_uz}
//                     </span>
//                     <span className="text-sm text-gray-500">{prod.brand}</span>
//                     <span className="text-sm font-semibold text-gray-900">
//                       ${prod.price}
//                     </span>
//                   </div>
//                 </Link>
//               ))
//             ) : (
//               <div className="p-4 text-gray-700">Hech nima topilmadi</div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;

"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@headlessui/react";
import { ICategoryProduct } from "@/types";
import Link from "next/link";

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [opened, setOpened] = useState(false);
  const [product, setProduct] = useState<ICategoryProduct>();

  const getSearch = async (params: string) => {
    if (!params) {
      // Clear results and close dropdown if input is empty
      setProduct(undefined);
      setOpened(false);
      return;
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_API}/product-search?search=${params}`
      );
      const data = await res.json();
      setProduct(data);
      setOpened(true);
    } catch (error) {
      console.error("Failed to fetch search results:", error);
      setOpened(false);
    }
  };

  useEffect(() => {
    getSearch(searchTerm);
  }, [searchTerm]);

  return (
    <div className="max-w-4xl px-12 w-full">
      <div className="max-w-4xl relative">
        <div className="w-full flex">
          <Input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-l-md outline-none bg-mainGray/15"
          />
          <Button className="rounded-r-md bg-mainGray/15 text-black px-3 flex justify-center items-center">
            <MagnifyingGlassIcon className="w-6 h-6" />
          </Button>
        </div>
        {opened && (
          <div className="w-full mx-auto left-0 absolute  z-10 overflow-y-auto bg-white shadow-lg max-h-60 mt-1 rounded-md">
            {product && product.results && product.results.length > 0 ? (
              product.results.map((prod) => (
                <Link
                  href={`/uz/product/${prod.slug}`}
                  key={prod.id}
                  className="flex items-center p-2 hover:bg-gray-100 transition"
                >
                  <div className="flex-shrink-0 h-16 w-16 relative mr-3">
                    <Image
                      priority={false}
                      src={prod.image.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      alt={prod.image.image || "Product Image"}
                      fill
                      loading="lazy"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="/blur-image.jpg"
                      className="w-full h-full object-cover duration-200 ease-in-out scale-100 blur-0 grayscale-0"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">
                      {prod.title_uz}
                    </span>
                    <span className="text-sm text-gray-500">{prod.brand}</span>
                    <span className="text-sm font-semibold text-gray-900">
                      ${prod.price}
                    </span>
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-gray-700">Hech nima topilmadi</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;

// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import { Button, Input } from "@headlessui/react";
// import { ICategoryProduct, IProduct } from "@/types";
// import Link from "next/link";

// interface Product {
//   id: number;
//   title: string;
//   brand: string;
//   price: number;
//   image: string;
// }

// const SearchComponent: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [opened, setOpened] = useState(false);
//   const [product, setProduct] = useState<ICategoryProduct>();

//   const getSearch = async (params: string) => {
//     if (!params) {
//       setOpened(false);
//       return;
//     }
//     const res = await fetch(
//       `${process.env.NEXT_API}/product-search?search=${params}`
//     ).then((res) => res.json());
//     setProduct(res);
//     setOpened(true);
//     console.log(res);
//   };

//   useEffect(() => {
//     getSearch(searchTerm);
//     console.log(product);
//   }, [searchTerm]);

//   return (
//     <div className=" max-w-4xl px-12 w-full">
//       <div className="max-w-4xl  relative">
//         <div className=" w-full flex">
//           <Input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full px-4 py-3  rounded-l-md outline-none bg-mainGray/15 "
//           />
//           <Button className="rounded-r-md bg-mainGray/15 text-black px-3 flex justify-center items-center">
//             <MagnifyingGlassIcon className="w-6 h-6 " />
//           </Button>
//         </div>
//         {opened && (
//           <div className="w-full absolute z-10 overflow-y-scroll divide-y bg-white h-24">
//             {product.results ? (
//               product.results.map((proddocts) => (
//                 <Link href={proddocts.slug}>{proddocts.title_uz}</Link>
//               ))
//             ) : (
//               <div className="text-black">Hechnima yo'q</div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;
