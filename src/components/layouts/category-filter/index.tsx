"use client";
import React from "react";
import Accordion from "./accordion";

const CategoryFilter = () => {
  return (
    <div className="relative">
      <Accordion title="Katalog">
        <div></div>
      </Accordion>
      <Accordion title="Katalog">
        <div>Assalomu alekum</div>
      </Accordion>
    </div>
  );
};

export default CategoryFilter;
