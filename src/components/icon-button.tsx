"use client";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import React from "react";

type Props = {
  icon: string | undefined;
  text?: string;
  // onClick?: () => void;
};

const IconButton: React.FC<Props> = ({ icon, text }) => {
  return (
    <div onClick={() => console.log(decodeURIComponent(icon as string))}>
      IconButton
    </div>
  );
};

export default IconButton;
