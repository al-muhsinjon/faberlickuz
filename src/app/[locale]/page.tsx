// import React from "react";
// import AdBanner from "@/components/banners/ad-banner";
// import {
//   IAdBanner,
//   IBanner,
//   ICategoryProduct,
//   IMainPageCategory,
// } from "@/types";
// import CatalogCards from "@/components/catalog-cards";
// import Banner from "@/components/banners";
// import NewProduct from "@/components/layouts/new-product";

// const Home = async () => {
//   const adBannerFetch = await fetch(`${process.env.NEXT_API}/ad-banners/`);
//   const adBanner: IAdBanner[] = await adBannerFetch.json();

//   const mainPageCategoryFetch = await fetch(
//     `${process.env.NEXT_API}/main-page-categories/`
//   );

//   const bannerFetch = await fetch(`${process.env.NEXT_API}/banners/`);

//   const newProductFetch = await fetch(
//     `${process.env.NEXT_API}/products-catalog?is_new=true`
//   );

//   const newProduct: ICategoryProduct = await newProductFetch.json();

//   const banner: IBanner[] = await bannerFetch.json();
//   const mainPageCategory: IMainPageCategory[] =
//     await mainPageCategoryFetch.json();

//   // ${process.env.NEXT_API}/products-catalog?&category=Audio&sub_category=Airpods&page=1&page_size=8

//   return (
//     <div className="">
//       <div className="relative">
//         <Banner banners={banner} />
//       </div>
//       <CatalogCards mainPageCategories={mainPageCategory} />
//       <div className="px-12 mt-12">
//         <AdBanner adBanner={adBanner} />
//       </div>
//       <div className="p-12">
//         <h2 className="border-b py-4 border-main text-4xl font-medium">
//           Новинки
//         </h2>
//         <NewProduct newProducts={newProduct} />
//       </div>
//     </div>
//   );
// };

// export default Home;

// // https://sirius-tech.uz/backend/api/products-catalog?&brand=hoco&page=1&page_size=8

import React from "react";
import AdBanner from "@/components/banners/ad-banner";
import CatalogCards from "@/components/catalog-cards";
import Banner from "@/components/banners";
import NewProduct from "@/components/layouts/new-product";
import {
  IAdBanner,
  IBanner,
  ICategoryProduct,
  IMainPageCategory,
} from "@/types";

const Home = async () => {
  const [adBanner, mainPageCategory, banner, newProduct] = await Promise.all([
    fetch(`${process.env.NEXT_API}/ad-banners/`).then((res) => res.json()),
    fetch(`${process.env.NEXT_API}/main-page-categories/`).then((res) =>
      res.json()
    ),
    fetch(`${process.env.NEXT_API}/banners/`).then((res) => res.json()),
    fetch(`${process.env.NEXT_API}/products-catalog?is_new=true`).then((res) =>
      res.json()
    ),
  ]);

  return (
    <div>
      <Banner banners={banner} />
      <CatalogCards mainPageCategories={mainPageCategory} />
      <div className="px-4 lg:px-12 mt-12">
        <AdBanner adBanner={adBanner} />
      </div>
      <div className="p-4 lg:p-12">
        <h2 className="border-b py-4 border-main text-2xl lg:text-4xl font-medium">
          Новинки
        </h2>
        <NewProduct newProducts={newProduct} />
      </div>
    </div>
  );
};

export default Home;
