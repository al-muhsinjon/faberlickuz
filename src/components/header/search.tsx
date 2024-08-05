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

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Button, Input } from "@headlessui/react";

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  image: string;
}

const SearchComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className=" max-w-4xl px-12 w-full">
      <div className="max-w-4xl  relative">
        <div className=" w-full flex">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3  rounded-l-md outline-none bg-mainGray/15 "
          />
          <Button className="rounded-r-md bg-mainGray/15 text-black px-3 flex justify-center items-center">
            <MagnifyingGlassIcon className="w-6 h-6 " />
          </Button>
        </div>
        {/* <div className="w-full absolute bg-red-300 h-24"></div> */}
      </div>
    </div>
  );
};

export default SearchComponent;
