"use client";
import { Button } from "@headlessui/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { ReactNode, useState } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const Accordion = ({ children, title }: Props) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="rounded-md divide-y mb-2">
      <Button
        className="w-full p-4 font-bold text0-main flex justify-between ease-linear"
        onClick={toggleAccordion}
      >
        {title} {isOpen ? <ChevronDown /> : <ChevronUp />}
      </Button>
      {isOpen && <div className="p-4 divide-y bg-white">{children}</div>}
    </div>
  );
};

export default Accordion;
