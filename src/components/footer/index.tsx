import axios from "axios";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import React from "react";
import Reserve from "./reserve";
import { useTranslations } from "next-intl";

const Footer = async ({ locale }: { locale: string }) => {
  const { data } = await axios.get(`${process.env.NEXT_API}/about/contacts/`);
  const response = await axios.get(`${process.env.NEXT_API}/about/socials/`);

  const { address_uz, phone_1, phone_2, address_ru } = data;

  return (
    <footer className="bg-main md:block lg:block lg:p-0 md:p-0 pb-8 text-white">
      <div className="container mx-auto divide-y px-4 py-4 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center py-4">
          <div>{locale === "uz" ? address_uz : address_ru}</div>
          <div className="flex gap-5 mt-4 lg:mt-0">
            <span>{phone_1}</span>
            <span>{phone_2}</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-4">
          <Reserve />
          <div className="flex gap-6">
            <Link href={`${response.data.instagram}`}>
              <FaInstagram size={28} />
            </Link>
            <Link href={`${response.data.facebook}`}>
              <FaFacebook size={28} />
            </Link>
            <Link href={`${response.data.telegram}`}>
              <FaTelegramPlane size={28} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
