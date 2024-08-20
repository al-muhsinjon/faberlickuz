import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";

import CatalogDrawer from "@/components/drawers/catalog-drawer";
import Footer from "@/components/footer";
import AppBar from "@/components/layouts/responsively/app-bar";
import BottomNavigationBar from "@/components/layouts/responsively/bottom-navigation-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Faberlic - Atir va Parfumeriya Mahsulotlari | Sayyora Almetova bilan Online Market",
  description:
    "Sayyora Almetova bilan Faberlic Parfumeriyasi - yuqori sifatli atir va kosmetika mahsulotlarini arzon narxlarda buyurtma qiling. Faberlic.uz go'zallik va jozibadorlikning yangi manzili.",
  keywords:
    "Faberlic, parfyum, atir, parfumeriya, online market, kosmetika, go'zallik, arzon atirlar, o'zbekiston, faberlic, faberlic uz, Sayyora Almetova, Faberlic - by Sayyora Almetova, Faberlic O'zbekiston",
  authors: [{ name: "Faberlic O'zbekiston" }],
  openGraph: {
    title: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
    description:
      "Faberlic.uz orqali yuqori sifatli parfyumeriya mahsulotlarini Sayyora Almetova bilan buyurtma qiling. Arzon narxlarda parfyum va kosmetika sotib oling.",
    url: "https://www.faberlic.uz",
    type: "website",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faberlic_uz",
    title:
      "Faberlic - Atir va Parfumeriya Mahsulotlari | Sayyora Almetova bilan Online Market",
    description:
      "Sayyora Almetova bilan Faberlic Parfumeriyasi - yuqori sifatli atir va kosmetika mahsulotlarini arzon narxlarda buyurtma qiling.",
    images: [
      {
        url: "https://sun9-53.userapi.com/impf/l5K5RU772E000XglDqzEr2raaOwDRmTAdpdnGQ/6-_84y16bVI.jpg?size=1818x606&quality=95&crop=0,21,1124,374&sign=9285af5112311718e256e83b9e0b0fc0&type=cover_group",
        alt: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <div className="sticky top-0 z-[100]">
            <Header />
            <AppBar />
            <CatalogDrawer />
          </div>
          {/* <CatalogDrawer /> */}
          <main>{children}</main>
          <BottomNavigationBar />
          <Footer locale={locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
