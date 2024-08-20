import React from "react";
import ProductView from "@/components/layouts/product-view";
import ShortDescription from "@/components/layouts/short-description";
import ResentProducts from "@/components/layouts/resent-products";
import Head from "next/head";
import { ResolvingMetadata, Metadata } from "next";
import { fetchData } from "@/utils/fetch-data";
import NotFoundProduct from "./components/not-product-found";
import Available from "./components/available";
import Price from "./components/price";
import AddToBasket from "./components/add-to-basket";
import Desc from "./components/desc";
import RelatedProducts from "./components/related-products";
import Gravity from "./components/gravity";

export const revalidate = 60;

interface Props {
  params: {
    locale: string;
    productSlug: string;
  };
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.productSlug;
  const product = await fetch(`${process.env.NEXT_API}/products/${slug}`).then(
    (res) => res.json()
  );

  const previousImages = (await parent).openGraph?.images || [];
  const productImages = product.images.map(
    (image: { image: any }) => image.image
  );
  return {
    title: `Fabelic | ${product.title_uz}`,
    openGraph: {
      images: [...productImages, ...previousImages],
    },
    description:
      params.locale === "uz" ? product.description_uz : product.description_ru,
  };
}

const Product = async ({
  params,
}: {
  params: { productSlug: string; locale: string };
}) => {
  const product = await fetchData(
    `${process.env.NEXT_API}/products/${params.productSlug}`
  );

  if (!product) {
    return <NotFoundProduct />;
  }

  return (
    <>
      <Head>
        <title>{`Faberlic | ${product.title_uz}`}</title>
      </Head>
      <div className="px-12 py-6">
        <Gravity product={product} />

        <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px]">
          <div className="md:col-span-5">
            <ProductView images={product.images} />
          </div>
          <ShortDescription description={product.short_descriptions} />
          <div className="lg:col-span-3 md:col-span-5">
            <div className="w-full border border-mainGray rounded-lg p-3 md:p-5 bg-white space-y-3">
              <Available product={product} />
              <div className="space-y-1">
                <h3 className="text-xl xl:text-2xl">
                  <Price product={product} />
                </h3>
                <AddToBasket product={product} />
              </div>
            </div>
          </div>
        </div>
        <Desc product={product} />
        <RelatedProducts relatedProducts={product.related_products} />
        <ResentProducts />
      </div>
    </>
  );
};

export default Product;
