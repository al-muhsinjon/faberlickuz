"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

const Languages = () => {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const pathWithoutLocale = pathname.split(`/${locale}`)[1] || "";

  const [active, setActive] = useState<"uz" | "ru">(
    locale === "uz" || locale === "ru" ? locale : "uz"
  );

  useEffect(() => {
    setActive(locale === "uz" ? "uz" : "ru");
  }, [locale]);

  const handleLanguageChange = (language: "uz" | "ru") => {
    router.push(`/${language}/${pathWithoutLocale}`);
  };

  return (
    <div className="flex gap-2">
      <button
        className={`p-2 ${active === "uz" ? "text-white" : "text-gray-500"}`}
        onClick={() => handleLanguageChange("uz")}
      >
        Uz
      </button>
      <button
        className={`p-2 border-l ${
          active === "ru" ? "text-white" : "text-gray-500"
        }`}
        onClick={() => handleLanguageChange("ru")}
      >
        Ru
      </button>
    </div>
  );
};

export default Languages;
