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
  title: "Faberlic - Atir va Parfumeriya Mahsulotlari | Online Market",
  description:
    "Faberlic Parfumeriya - Atir va parfumeriya mahsulotlarini online sotuvchi bozor. Yuqori sifatli parfyumlar va kosmetikani arzon narxlarda buyurtma qiling. Faberlic.uz - go'zallik va jozibadorlikning yangi manzili.",
  keywords:
    "Faberlic, parfyum, atir, parfumeriya, online market, kosmetika, go'zallik, arzon atirlar, o'zbekiston, faberlic.uz",
  authors: [{ name: "Faberlic O'zbekiston" }],
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
