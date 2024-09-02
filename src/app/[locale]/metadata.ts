import type { Metadata } from "next";

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

export const metadataUz: MetadataSEO = {
  title:
    "Faberlic - Atir va Parfumeriya Mahsulotlari | Sayyora Almetova bilan Online Market",
  description:
    "Sayyora Almetova bilan Faberlic Parfumeriyasi - yuqori sifatli atir va kosmetika mahsulotlarini arzon narxlarda buyurtma qiling. Faberlic.uz go'zallik va jozibadorlikning yangi manzili.",
  keywords:
    "Faberlic, parfyum, atir, parfumeriya, online market, kosmetika, go'zallik, arzon atirlar, O'zbekiston, faberlic, faberlic uz, Sayyora Almetova, Faberlic - by Sayyora Almetova, Faberlic O'zbekiston",
  authors: [{ name: "Faberlic O'zbekiston" }],
  openGraph: {
    title: "Faberlic - Sayyora Almetova bilan Atir va Parfumeriya Mahsulotlari",
    description:
      "Faberlic.uz orqali yuqori sifatli parfyumeriya mahsulotlarini Sayyora Almetova bilan buyurtma qiling. Arzon narxlarda parfyum va kosmetika sotib oling.",
    url: "https://www.faberlic.uz",
    type: "website",
    images: [
      {
        url: "https://sun9-53.userapi.com/impf/l5K5RU772E000XglDqzEr2raaOwDRmTAdpdnGQ/6-_84y16bVI.jpg?size=1818x606&quality=95&crop=0,21,1124,374&sign=9285af5112311718e256e83b9e0b0fc0&type=cover_group",
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

export const metadataRu: MetadataSEO = {
  title:
    "Faberlic - Парфюмерия и Косметика | Онлайн Магазин с Сайёрой Алметовой",
  description:
    "Faberlic - качественная парфюмерия и косметика по доступным ценам. Заказывайте онлайн на Faberlic.uz с Сайёрой Алметовой.",
  keywords:
    "Faberlic, парфюм, духи, парфюмерия, онлайн магазин, косметика, красота, дешевые духи, Узбекистан, faberlic, faberlic uz, Сайёра Алметова, Faberlic - с Сайёрой Алметовой, Faberlic Узбекистан",
  authors: [{ name: "Faberlic Узбекистан" }],
  openGraph: {
    title: "Faberlic - Парфюмерия и Косметика с Сайёрой Алметовой",
    description:
      "Заказывайте качественную парфюмерию и косметику по доступным ценам на Faberlic.uz с Сайёрой Алметовой.",
    url: "https://www.faberlic.uz",
    type: "website",
    images: [
      {
        url: "https://sun9-53.userapi.com/impf/l5K5RU772E000XglDqzEr2raaOwDRmTAdpdnGQ/6-_84y16bVI.jpg?size=1818x606&quality=95&crop=0,21,1124,374&sign=9285af5112311718e256e83b9e0b0fc0&type=cover_group",
        width: 1200,
        height: 630,
        alt: "Faberlic - Парфюмерия и Косметика с Сайёрой Алметовой",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@faberlic_uz",
    title:
      "Faberlic - Парфюмерия и Косметика | Онлайн Магазин с Сайёрой Алметовой",
    description:
      "Faberlic - качественная парфюмерия и косметика по доступным ценам. Заказывайте онлайн на Faberlic.uz с Сайёрой Алметовой.",
    images: [
      {
        url: "https://sun9-53.userapi.com/impf/l5K5RU772E000XglDqzEr2raaOwDRmTAdpdnGQ/6-_84y16bVI.jpg?size=1818x606&quality=95&crop=0,21,1124,374&sign=9285af5112311718e256e83b9e0b0fc0&type=cover_group",
        alt: "Faberlic - Парфюмерия и Косметика с Сайёрой Алметовой",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
};
