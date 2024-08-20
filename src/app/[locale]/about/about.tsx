"use client";
import { IContact, ISocial } from "@/types";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface Props {
  contact: IContact;
  socials: ISocial;
}

const About: React.FC<Props> = ({ contact, socials }) => {
  const t = useTranslations("Contact");
  return (
    <div className="grid grid-cols-1 border-b py-12 md:grid-cols-2 gap-10 items-center">
      <div>
        <div className="flex font-rubik items-end text-main justify-between border-main">
          <div className="flex items-end gap-2.5 relative">
            <h2 className=" font-medium text-2xl md:text-3xl lg:text-4xl">
              {t("title")}
            </h2>
          </div>
        </div>
        <div className="space-y-5 py-[30px] border-b border-borderGrey">
          <div className="flex items-center gap-[30px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="text-[25px] flex-shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
            </svg>
            <div className="space-y-2">
              <p className="text-sm text-main">{t("email")}</p>
              <p className="text-base md:text-xl">{contact.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[25px] flex-shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <div className="space-y-2">
              <p className="text-sm text-main">{t("phone")}</p>
              <p className="text-base md:text-xl">{contact.phone_1}</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-main">{t("phone")}</p>
              <p className="text-base md:text-xl">{contact.phone_2}</p>
            </div>
          </div>
          <div className="flex items-center gap-[30px]">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 256 256"
              className="text-[25px] flex-shrink-0"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M200,224H150.54A266.56,266.56,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25a88,88,0,0,0-176,0c0,31.4,14.51,64.68,42,96.25A266.56,266.56,0,0,0,105.46,224H56a8,8,0,0,0,0,16H200a8,8,0,0,0,0-16ZM56,104a72,72,0,0,1,144,0c0,57.23-55.47,105-72,118C111.47,209,56,161.23,56,104Zm112,0a40,40,0,1,0-40,40A40,40,0,0,0,168,104Zm-64,0a24,24,0,1,1,24,24A24,24,0,0,1,104,104Z"></path>
            </svg>
            <div className="space-y-2">
              <p className="text-sm text-main">{t("address")}</p>
              <p className="text-base md:text-xl">{contact.address_uz}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-[30px] my-[38px] justify-center md:justify-start">
          <Link className="text-main" href={socials.facebook}>
            <p className="text-base md:text-xl">Facebook</p>
          </Link>
          <Link className="text-main" href={socials.telegram}>
            <p className="text-base md:text-xl">Telegram</p>
          </Link>
          <Link className="text-main" href={socials.instagram}>
            <p className="text-base md:text-xl">Instagram</p>
          </Link>
        </div>
      </div>
      <iframe
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full aspect-video lg:aspect-[10/7]"
        src={contact.map}
      ></iframe>
    </div>
  );
};

export default About;
