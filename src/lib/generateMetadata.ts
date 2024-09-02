// // // src/lib/metadata.ts
// // import { ResolvingMetadata, Metadata } from "next";
// // import { fetchData } from "@/utils/fetch-data";

// // interface Props {
// //   params: {
// //     locale: string;
// //     productSlug: string;
// //   };
// // }

// // export async function generateMetadata(
// //   { params }: Props,
// //   parent: ResolvingMetadata
// // ): Promise<Metadata> {
// //   const { locale, productSlug } = params;
// //   const product = await fetchData(
// //     `${process.env.NEXT_API}/products/${productSlug}`
// //   );

// //   if (!product) {
// //     return {
// //       title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
// //       description:
// //         locale === "uz"
// //           ? "Siz qidirgan mahsulot topilmadi."
// //           : "Продукт, который вы ищете, не найден.",
// //       openGraph: {
// //         title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
// //         description:
// //           locale === "uz"
// //             ? "Siz qidirgan mahsulot topilmadi."
// //             : "Продукт, который вы ищете, не найден.",
// //         url: `${process.env.NEXT_SITE}/404`,
// //         images: ["/default-image.jpg"],
// //         type: "website",
// //       },
// //       twitter: {
// //         card: "summary_large_image",
// //         title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
// //         description:
// //           locale === "uz"
// //             ? "Siz qidirgan mahsulot topilmadi."
// //             : "Продукт, который вы ищете, не найден.",
// //         images: ["/default-image.jpg"],
// //       },
// //     };
// //   }

// //   const productImages = product.images.map(
// //     (image: { image: string }) => image.image
// //   );
// //   const previousImages = (await parent).openGraph?.images || [];

// //   return {
// //     title: `Faberlic | ${
// //       locale === "uz" ? product.title_uz : product.title_ru
// //     }`,
// //     description:
// //       locale === "uz" ? product.description_uz : product.description_ru,
// //     openGraph: {
// //       title: locale === "uz" ? product.description_uz : product.description_ru,
// //       description: locale === "uz" ? product.description_uz : product.title_ru,
// //       url: `${process.env.NEXT_SITE}/${locale}/product/${params.productSlug}`,
// //       images: [...productImages, ...previousImages],
// //       type: "website",
// //     },
// //     twitter: {
// //       card: "summary_large_image",
// //       title: `Faberlic | ${
// //         locale === "uz" ? product.title_uz : product.title_ru
// //       }`,
// //       description:
// //         locale === "uz" ? product.description_uz : product.description_ru,
// //       images: productImages,
// //     },
// //   };
// // }

// src/lib/metadata.ts
import { ResolvingMetadata, Metadata } from "next";
import { fetchData } from "@/utils/fetch-data";

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
  const { locale, productSlug } = params;
  const product = await fetchData(
    `${process.env.NEXT_API}/products/${productSlug}`
  );

  if (!product) {
    return {
      title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
      description:
        locale === "uz"
          ? "Siz qidirgan mahsulot topilmadi."
          : "Продукт, который вы ищете, не найден.",
      openGraph: {
        title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
        description:
          locale === "uz"
            ? "Siz qidirgan mahsulot topilmadi."
            : "Продукт, который вы ищете, не найден.",
        images: ["/default-image.jpg"],
        url: `${process.env.NEXT_SITE}/404`,
      },
      twitter: {
        card: "summary_large_image",
        title: locale === "uz" ? "Mahsulot topilmadi" : "Продукт не найден",
        description:
          locale === "uz"
            ? "Siz qidirgan mahsulot topilmadi."
            : "Продукт, который вы ищете, не найден.",
        images: ["/default-image.jpg"],
      },
    };
  }

  const productImages = product.images.map(
    (image: { image: string }) => image.image
  );
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: `Faberlic | ${
      locale === "uz" ? product.title_uz : product.title_ru
    }`,
    description:
      locale === "uz" ? product.description_uz : product.description_ru,
    openGraph: {
      title: `Faberlic | ${
        locale === "uz" ? product.title_uz : product.title_ru
      }`,
      description:
        locale === "uz" ? product.description_uz : product.description_ru,
      url: `${process.env.NEXT_SITE}/${locale}/product/${params.productSlug}`,
      images: [...productImages, ...previousImages],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Faberlic | ${
        locale === "uz" ? product.title_uz : product.title_ru
      }`,
      description:
        locale === "uz" ? product.description_uz : product.description_ru,
      images: productImages,
    },
  };
}

// import { Metadata } from "next";
// import { fetchData } from "@/utils/fetch-data";

// interface MetadataParams {
//   params: {
//     productSlug: string;
//     locale: string;
//   };
// }

// export async function generateMetadata({
//   params,
// }: MetadataParams, p0: unknown): Promise<Metadata> {
//   const product = await fetchData(
//     `${process.env.NEXT_API}/products/${params.productSlug}`
//   );

//   const title = `Faberlic | ${
//     params.locale === "uz" ? product.title_uz : product.title_ru
//   }`;
//   const description =
//     params.locale === "uz" ? product.description_uz : product.description_ru;
//   const image = product.images.length
//     ? product.images[0].image
//     : "/default-image.jpg";

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       images: [image],
//     },
//     twitter: {
//       title,
//       description,
//       images: [image],
//     },
//   };
// }
