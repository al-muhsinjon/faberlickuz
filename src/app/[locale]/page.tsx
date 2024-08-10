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
    <div className="pb-24">
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
