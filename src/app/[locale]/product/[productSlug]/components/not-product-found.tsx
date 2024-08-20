import { useTranslations } from "next-intl";

export default function NotFoundProduct() {
  const t = useTranslations("NotFoundProduct");
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col text-center py-32">
      <h1 className="text-4xl font-bold">{t("title")}</h1>{" "}
      <p className="text-lg">{t("description")}</p>
    </div>
  );
}
