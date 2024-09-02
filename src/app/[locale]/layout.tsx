// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import Header from "@/components/header";
// import { Toaster } from "react-hot-toast";

// import CatalogDrawer from "@/components/drawers/catalog-drawer";
// import Footer from "@/components/footer";
// import AppBar from "@/components/layouts/responsively/app-bar";
// import BottomNavigationBar from "@/components/layouts/responsively/bottom-navigation-bar";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title:
//     "Faberlic - Atir va Parfumeriya Mahsulotlari | Sayyora Almetova bilan Online Market",
//   description:
//     "Sayyora Almetova bilan Faberlic Parfumeriyasi - yuqori sifatli atir va kosmetika mahsulotlarini arzon narxlarda buyurtma qiling. Faberlic.uz go'zallik va jozibadorlikning yangi manzili.",
//   keywords:
//     "Faberlic, parfyum, atir, parfumeriya, online market, kosmetika, go'zallik, arzon atirlar, o'zbekiston, faberlic, faberlic uz, Sayyora Almetova, Faberlic - by Sayyora Almetova, Faberlic O'zbekiston",
//   authors: [{ name: "Faberlic O'zbekiston" }],
//   openGraph: {
//     title: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
//     description:
//       "Faberlic.uz orqali yuqori sifatli parfyumeriya mahsulotlarini Sayyora Almetova bilan buyurtma qiling. Arzon narxlarda parfyum va kosmetika sotib oling.",
//     url: "https://www.faberlic.uz",
//     type: "website",
//     images: [
//       {
//         url: "/favicon.ico",
//         width: 1200,
//         height: 630,
//         alt: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@faberlic_uz",
//     title:
//       "Faberlic - Atir va Parfumeriya Mahsulotlari | Sayyora Almetova bilan Online Market",
//     description:
//       "Sayyora Almetova bilan Faberlic Parfumeriyasi - yuqori sifatli atir va kosmetika mahsulotlarini arzon narxlarda buyurtma qiling.",
//     images: [
//       {
//         url: "https://sun9-53.userapi.com/impf/l5K5RU772E000XglDqzEr2raaOwDRmTAdpdnGQ/6-_84y16bVI.jpg?size=1818x606&quality=95&crop=0,21,1124,374&sign=9285af5112311718e256e83b9e0b0fc0&type=cover_group",
//         alt: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
//       },
//     ],
//   },
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: Readonly<{
//   children: React.ReactNode;
//   params: { locale: string };
// }>) {
//   const messages = await getMessages();
//   return (
//     <html lang={locale}>
//       <body suppressHydrationWarning={true} className={inter.className}>
// <NextIntlClientProvider messages={messages}>
//   <Toaster />
//   <div className="sticky top-0 z-[100]">
//     <Header />
//     <AppBar />
//     <CatalogDrawer />
//   </div>
//   {/* <CatalogDrawer /> */}
//   <main>{children}</main>
//   <BottomNavigationBar />
//   <Footer locale={locale} />
// </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }

import { Metadata } from "next";
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
import { metadataUz, metadataRu } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

interface MetadataSEO {
  title: string;
  description: string;
  keywords: string;
  authors: { name: string }[];
  openGraph: {
    title: string;
    description: string;
    url: string;
    type: string;
    images: { url: string; alt: string; width: number; height: number }[];
  };
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
    images: { url: string; alt: string }[];
  };
  icons: {
    icon: string;
  };
}

export const metadata = (locale: string): MetadataSEO => {
  return locale === "uz" ? metadataUz : metadataRu;
};

export const revalidate = 60;

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  console.log(locale);
  const messages = await getMessages();
  const seoMetadata: MetadataSEO = metadata(locale); // to'g'ri metadata-ni tanlash
  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{seoMetadata.title}</title>
        <meta name="description" content={seoMetadata.description} />
        <meta name="keywords" content={seoMetadata.keywords} />
        {/* OpenGraph & Twitter meta teglar */}
        <meta property="og:title" content={seoMetadata.openGraph.title} />
        <meta
          property="og:description"
          content={seoMetadata.openGraph.description}
        />
        <meta property="og:url" content={seoMetadata.openGraph.url} />
        <meta property="og:type" content={seoMetadata.openGraph.type} />
        <meta
          property="og:image"
          content={seoMetadata.openGraph.images[0].url}
        />
        <meta
          property="og:image:alt"
          content={seoMetadata.openGraph.images[0].alt}
        />
        <meta name="twitter:card" content={seoMetadata.twitter.card} />
        <meta name="twitter:site" content={seoMetadata.twitter.site} />
        <meta name="twitter:title" content={seoMetadata.twitter.title} />
        <meta
          name="twitter:description"
          content={seoMetadata.twitter.description}
        />
        <meta
          name="twitter:image"
          content={seoMetadata.twitter.images[0].url}
        />
        <meta
          name="twitter:image:alt"
          content={seoMetadata.twitter.images[0].alt}
        />
        {/* Favicon */}
        <link rel="icon" href={seoMetadata.icons.icon} />
      </head>
      <body  className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Toaster />
          <div className="sticky top-0 z-[100]">
            <Header />
            <AppBar locale={locale} />
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

// import { Inter } from "next/font/google";
// import "./globals.css";
// import { NextIntlClientProvider } from "next-intl";
// import { getMessages } from "next-intl/server";
// import Header from "@/components/header";
// import { Toaster } from "react-hot-toast";
// import CatalogDrawer from "@/components/drawers/catalog-drawer";
// import Footer from "@/components/footer";
// import AppBar from "@/components/layouts/responsively/app-bar";
// import BottomNavigationBar from "@/components/layouts/responsively/bottom-navigation-bar";
// import { metadataUz, metadataRu } from "./metadata";

// const inter = Inter({ subsets: ["latin"] });

// export default async function RootLayout({
//   children,
//   params: { locale },
// }: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   const messages = await getMessages();
//   const seoMetadata = locale === "uz" ? metadataUz : metadataRu;

//   return (
//     <html lang={locale}>
//       <head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <title>{seoMetadata.title}</title>
//         <meta name="description" content={seoMetadata.description} />
//         <meta name="keywords" content={seoMetadata.keywords} />
//         <meta property="og:title" content={seoMetadata.openGraph.title} />
//         <meta
//           property="og:description"
//           content={seoMetadata.openGraph.description}
//         />
//         <meta property="og:url" content={seoMetadata.openGraph.url} />
//         <meta property="og:type" content={seoMetadata.openGraph.type} />
//         <meta
//           property="og:image"
//           content={seoMetadata.openGraph.images[0].url}
//         />
//         <meta
//           property="og:image:alt"
//           content={seoMetadata.openGraph.images[0].alt}
//         />
//         <meta name="twitter:card" content={seoMetadata.twitter.card} />
//         <meta name="twitter:site" content={seoMetadata.twitter.site} />
//         <meta name="twitter:title" content={seoMetadata.twitter.title} />
//         <meta
//           name="twitter:description"
//           content={seoMetadata.twitter.description}
//         />
//         <meta
//           name="twitter:image"
//           content={seoMetadata.twitter.images[0].url}
//         />
//         <meta
//           name="twitter:image:alt"
//           content={seoMetadata.twitter.images[0].alt}
//         />
//         <link rel="icon" href={seoMetadata.icons.icon} />
//       </head>
//       <body className={inter.className}>
//         <NextIntlClientProvider locale={locale} messages={messages}>
//           <Header />
//           <CatalogDrawer />
//           {children}
//           <Footer locale={locale} />
//           <Toaster />
//           <AppBar />
//           <BottomNavigationBar />
//         </NextIntlClientProvider>
//       </body>
//     </html>
//   );
// }
