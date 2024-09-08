// import React from "react";
// import ProductView from "@/components/layouts/product-view";
// import ShortDescription from "@/components/layouts/short-description";
// import ResentProducts from "@/components/layouts/resent-products";
// import Head from "next/head";
// import { fetchData } from "@/utils/fetch-data";
// import NotFoundProduct from "./components/not-product-found";
// import Available from "./components/available";
// import Price from "./components/price";
// import AddToBasket from "./components/add-to-basket";
// import Desc from "./components/desc";
// import RelatedProducts from "./components/related-products";
// import Gravity from "./components/gravity";

// export const revalidate = 60;

// interface Props {
//   params: {
//     locale: string;
//     productSlug: string;
//   };
// }

// const Product = async ({
//   params,
// }: {
//   params: { productSlug: string; locale: string };
// }) => {
//   const product = await fetchData(
//     `${process.env.NEXT_API}/products/${params.productSlug}`
//   );

//   if (!product) {
//     return <NotFoundProduct />;
//   }

//   return (
//     <>
//       <Head>
//         <title>{`Faberlic | ${
//           params.locale === "uz" ? product.title_uz : product.title_ru
//         }`}</title>
//         <meta
//           name="description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta name="keywords" content="Faberlic, product, online store" />
//         {/* OpenGraph meta tags */}
//         <meta
//           property="og:title"
//           content={`Faberlic | ${
//             params.locale === "uz" ? product.title_uz : product.title_ru
//           }`}
//         />
//         <meta
//           property="og:description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta
//           property="og:url"
//           content={`${process.env.NEXT_SITE}/${params.locale}/product/${params.productSlug}`}
//         />
//         <meta property="og:type" content="product" />
//         <meta
//           property="og:image"
//           content={
//             product.images.length
//               ? product.images[0].image
//               : "/default-image.jpg"
//           }
//         />
//         <meta
//           property="og:image:alt"
//           content={params.locale === "uz" ? product.title_uz : product.title_ru}
//         />
//         {/* Twitter meta tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={`Faberlic | ${
//             params.locale === "uz" ? product.title_uz : product.title_ru
//           }`}
//         />
//         <meta
//           name="twitter:description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta
//           name="twitter:image"
//           content={
//             product.images.length
//               ? product.images[0].image
//               : "/default-image.jpg"
//           }
//         />
//         <meta
//           name="twitter:image:alt"
//           content={params.locale === "uz" ? product.title_uz : product.title_ru}
//         />
//       </Head>
//       <div className="lg:px-12 px-4 py-6">
//         <Gravity product={product} />

//         <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px]">
//           <div className="md:col-span-5">
//             <ProductView images={product.images} />
//           </div>
//           <ShortDescription description={product.short_descriptions} />
//           <div className="lg:col-span-3 md:col-span-5">
//             <div className="w-full border border-mainGray rounded-lg p-3 md:p-5 bg-white space-y-3">
//               <Available product={product} />
//               <div className="space-y-1">
//                 <h3 className="text-xl xl:text-2xl">
//                   <Price product={product} />
//                 </h3>
//                 <AddToBasket product={product} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Desc product={product} />
//         <RelatedProducts relatedProducts={product.related_products} />
//         <ResentProducts />
//       </div>
//     </>
//   );
// };

// export default Product;

// import React from "react";
// import ProductView from "@/components/layouts/product-view";
// import ShortDescription from "@/components/layouts/short-description";
// import ResentProducts from "@/components/layouts/resent-products";
// import Head from "next/head";
// import { fetchData } from "@/utils/fetch-data";
// import NotFoundProduct from "./components/not-product-found";
// import Available from "./components/available";
// import Price from "./components/price";
// import AddToBasket from "./components/add-to-basket";
// import Desc from "./components/desc";
// import RelatedProducts from "./components/related-products";
// import Gravity from "./components/gravity";
// import { ResolvingMetadata } from "next";
// import { generateMetadata } from "@/lib/generateMetadata";

// export const revalidate = 60;

// interface Props {
//   params: {
//     locale: string;
//     productSlug: string;
//   };
// }

// const Product = async ({
//   params,
// }: {
//   params: { productSlug: string; locale: string };
// }) => {
//   const product = await fetchData(
//     `${process.env.NEXT_API}/products/${params.productSlug}`
//   );

//   if (!product) {
//     return <NotFoundProduct />;
//   }
//   const metadata = await generateMetadata({ params }, {} as ResolvingMetadata);
//   console.log(metadata);

//   return (
//     <>
//       <Head>
//         <title>{`Faberlic | ${
//           params.locale === "uz" ? product.title_uz : product.title_ru
//         }`}</title>
//         <meta
//           name="description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta name="keywords" content="Faberlic, product, online store" />
//         <meta
//           property="og:title"
//           content={`Faberlic | ${
//             params.locale === "uz" ? product.title_uz : product.title_ru
//           }`}
//         />
//         <meta
//           property="og:description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta
//           property="og:url"
//           content={`${process.env.NEXT_SITE}/${params.locale}/product/${params.productSlug}`}
//         />
//         <meta property="og:type" content="product" />
//         <meta
//           property="og:image"
//           content={
//             product.images.length
//               ? product.images[0].image
//               : "/default-image.jpg"
//           }
//         />
//         <meta
//           property="og:image:alt"
//           content={params.locale === "uz" ? product.title_uz : product.title_ru}
//         />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta
//           name="twitter:title"
//           content={`Faberlic | ${
//             params.locale === "uz" ? product.title_uz : product.title_ru
//           }`}
//         />
//         <meta
//           name="twitter:description"
//           content={
//             params.locale === "uz"
//               ? product.description_uz
//               : product.description_ru
//           }
//         />
//         <meta
//           name="twitter:image"
//           content={
//             product.images.length
//               ? product.images[0].image
//               : "/default-image.jpg"
//           }
//         />
//         <meta
//           name="twitter:image:alt"
//           content={params.locale === "uz" ? product.title_uz : product.title_ru}
//         />
//       </Head>
//       <div className="lg:px-12 px-4 py-6">
//         <Gravity product={product} />

//         <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px]">
//           <div className="md:col-span-5">
//             <ProductView images={product.images} />
//           </div>
//           <ShortDescription description={product.short_descriptions} />
//           <div className="lg:col-span-3 md:col-span-5">
//             <div className="w-full border border-mainGray rounded-lg p-3 md:p-5 bg-white space-y-3">
//               <Available product={product} />
//               <div className="space-y-1">
//                 <h3 className="text-xl xl:text-2xl">
//                   <Price product={product} />
//                 </h3>
//                 <AddToBasket product={product} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Desc product={product} />
//         <RelatedProducts relatedProducts={product.related_products} />
//         <ResentProducts />
//       </div>
//     </>
//   );
// };

// export default Product;

// src/app/[locale]/product/[productSlug]/page.tsx
import { Metadata } from "next";
import React from "react";
import ProductView from "@/components/layouts/product-view";
import ShortDescription from "@/components/layouts/short-description";
import ResentProducts from "@/components/layouts/resent-products";
import NotFoundProduct from "./components/not-product-found";
import Available from "./components/available";
import Price from "./components/price";
import AddToBasket from "./components/add-to-basket";
import Desc from "./components/desc";
import RelatedProducts from "./components/related-products";
import Gravity from "./components/gravity";
import { fetchData } from "@/utils/fetch-data";

interface Props {
  params: {
    locale: string;
    productSlug: string;
  };
}

export const revalidate = 60;

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

const ProductPage = async ({ params }: Props) => {
  const product = await fetchData(
    `${process.env.NEXT_API}/products/${params.productSlug}`
  );

  if (!product) {
    return <NotFoundProduct />;
  }

  return (
    <div className="lg:px-12 px-4 py-6">
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
  );
};

export default ProductPage;

// import React from "react";
// import Head from "next/head";
// import { fetchData } from "@/utils/fetch-data";
// import ProductView from "@/components/layouts/product-view";
// import ShortDescription from "@/components/layouts/short-description";
// import ResentProducts from "@/components/layouts/resent-products";
// import NotFoundProduct from "./components/not-product-found";
// import Available from "./components/available";
// import Price from "./components/price";
// import AddToBasket from "./components/add-to-basket";
// import Desc from "./components/desc";
// import RelatedProducts from "./components/related-products";
// import Gravity from "./components/gravity";

// export const revalidate = 60;

// interface Props {
//   params: {
//     locale: string;
//     productSlug: string;
//   };
// }

// const ProductPage = async ({ params }: Props) => {
//   const product = await fetchData(
//     `${process.env.NEXT_API}/products/${params.productSlug}`
//   );

//   if (!product) {
//     return <NotFoundProduct />;
//   }

//   const title = `Faberlic | ${
//     params.locale === "uz" ? product.title_uz : product.title_ru
//   }`;
//   const description =
//     params.locale === "uz" ? product.description_uz : product.description_ru;
//   const image = product.images.length
//     ? product.images[0].image
//     : "/default-image.jpg";

//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="keywords" content="Faberlic, product, online store" />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta
//           property="og:url"
//           content={`${process.env.NEXT_SITE}/${params.locale}/product/${params.productSlug}`}
//         />
//         <meta property="og:type" content="product" />
//         <meta property="og:image" content={image} />
//         <meta property="og:image:alt" content={title} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={title} />
//         <meta name="twitter:description" content={description} />
//         <meta name="twitter:image" content={image} />
//         <meta name="twitter:image:alt" content={title} />
//       </Head>
//       <div className="lg:px-12 px-4 py-6">
//         <Gravity product={product} />
//         <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px]">
//           <div className="md:col-span-5">
//             <ProductView images={product.images} />
//           </div>
//           <ShortDescription description={product.short_descriptions} />
//           <div className="lg:col-span-3 md:col-span-5">
//             <div className="w-full border border-mainGray rounded-lg p-3 md:p-5 bg-white space-y-3">
//               <Available product={product} />
//               <div className="space-y-1">
//                 <h3 className="text-xl xl:text-2xl">
//                   <Price product={product} />
//                 </h3>
//                 <AddToBasket product={product} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Desc product={product} />
//         <RelatedProducts relatedProducts={product.related_products} />
//         <ResentProducts />
//       </div>
//     </>
//   );
// };

// export default ProductPage;

// import React from "react";
// import ProductView from "@/components/layouts/product-view";
// import ShortDescription from "@/components/layouts/short-description";
// import ResentProducts from "@/components/layouts/resent-products";
// import Head from "next/head";
// import { fetchData } from "@/utils/fetch-data";
// import NotFoundProduct from "./components/not-product-found";
// import Available from "./components/available";
// import Price from "./components/price";
// import AddToBasket from "./components/add-to-basket";
// import Desc from "./components/desc";
// import RelatedProducts from "./components/related-products";
// import Gravity from "./components/gravity";

// interface Props {
//   params: {
//     locale: string;
//     productSlug: string;
//   };
// }

// const ProductPage = async ({ params }: Props) => {
//   // Ma'lumotlarni olish
//   const product = await fetchData(
//     `${process.env.NEXT_API}/products/${params.productSlug}`
//   );

//   // Agar mahsulot mavjud bo'lmasa, NotFound sahifasini ko'rsatish
//   if (!product) {
//     return <NotFoundProduct />;
//   }

//   // Meta ma'lumotlarni sozlash
//   const title = `Faberlic | ${params.locale === "uz" ? product.title_uz : product.title_ru}`;
//   const description = params.locale === "uz" ? product.description_uz : product.description_ru;
//   const image = product.images.length ? product.images[0].image : "/default-image.jpg";

//   return (
//     <>
//       <Head>
//         <title>{title}</title>
//         <meta name="description" content={description} />
//         <meta name="keywords" content="Faberlic, product, online store" />
//         <meta property="og:title" content={title} />
//         <meta property="og:description" content={description} />
//         <meta property="og:url" content={`${process.env.NEXT_SITE}/${params.locale}/product/${params.productSlug}`} />
//         <meta property="og:type" content="product" />
//         <meta property="og:image" content={image} />
//         <meta property="og:image:alt" content={title} />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content={title} />
//         <meta name="twitter:description" content={description} />
//         <meta name="twitter:image" content={image} />
//         <meta name="twitter:image:alt" content={title} />
//       </Head>
//       <div className="lg:px-12 px-4 py-6">
//         <Gravity product={product} />
//         <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px]">
//           <div className="md:col-span-5">
//             <ProductView images={product.images} />
//           </div>
//           <ShortDescription description={product.short_descriptions} />
//           <div className="lg:col-span-3 md:col-span-5">
//             <div className="w-full border border-mainGray rounded-lg p-3 md:p-5 bg-white space-y-3">
//               <Available product={product} />
//               <div className="space-y-1">
//                 <h3 className="text-xl xl:text-2xl">
//                   <Price product={product} />
//                 </h3>
//                 <AddToBasket product={product} />
//               </div>
//             </div>
//           </div>
//         </div>
//         <Desc product={product} />
//         <RelatedProducts relatedProducts={product.related_products} />
//         <ResentProducts />
//       </div>
//     </>
//   );
// };

// export default ProductPage;
