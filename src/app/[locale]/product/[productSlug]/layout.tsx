// import { generateMetadata } from "@/lib/generateMetadata";
import { fetchData } from "@/utils/fetch-data";
import { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";
import React from "react";

interface Props {
  params: {
    locale: string;
    productSlug: string;
  };
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fetchData(
    `${process.env.NEXT_API}/products/${params.productSlug}`
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product was not found.",
    };
  }

  const title = `Faberlic | ${
    params.locale === "uz" ? product.title_uz : product.title_ru
  }`;
  const description =
    params.locale === "uz" ? product.description_uz : product.description_ru;
  const image = product.images.length
    ? product.images[0].image
    : "/default-image.jpg";
  const url = `${process.env.NEXT_SITE}/${params.locale}/product/${params.productSlug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image, alt: title }],
    },
  };
}

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
    productSlug: string;
  };
}) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};

export default Layout;
