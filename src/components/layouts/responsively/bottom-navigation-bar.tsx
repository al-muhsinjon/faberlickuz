import Basket from "@/components/header/basket";
import Languages from "@/components/header/translate";
import React from "react";

const BottomNavigationBar = () => {
  return (
    <div className="md:hidden lg:hidden justify-center items-center flex h-12 bg-main fixed bottom-0 z-10 w-full">
      <div>
        <Languages />
      </div>
      <Basket />
    </div>
  );
};

export default BottomNavigationBar;
