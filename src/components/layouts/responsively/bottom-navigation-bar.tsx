import Basket from "@/components/header/basket";
import Languages from "@/components/header/language"; // Assuming translate.tsx is where the Languages component is located
import React from "react";

const BottomNavigationBar = () => {
  return (
    <div className="md:hidden px-8 lg:hidden justify-center items-center flex h-12 bg-main fixed bottom-0 z-10 w-full">
      {/* Language Switcher */}
      <Languages />

      {/* Basket Component */}
      <Basket />
    </div>
  );
};

export default BottomNavigationBar;
