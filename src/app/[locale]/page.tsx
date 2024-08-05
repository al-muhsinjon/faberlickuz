import React from "react";
import AdBanner from "@/components/banners/ad-banner";
import {
  IAdBanner,
  IBanner,
  ICategoryProduct,
  IMainPageCategory,
} from "@/types";
import CatalogCards from "@/components/catalog-cards";
import Banner from "@/components/banners";
import NewProduct from "@/components/layouts/new-product";

const Home = async () => {
  const adBannerFetch = await fetch(
    "https://birnimajon.pythonanywhere.com/api/ad-banners/"
  );
  const adBanner: IAdBanner[] = await adBannerFetch.json();

  const mainPageCategoryFetch = await fetch(
    "https://birnimajon.pythonanywhere.com/api/main-page-categories/"
  );

  const bannerFetch = await fetch(
    "https://birnimajon.pythonanywhere.com/api/banners/"
  );

  const newProductFetch = await fetch(
    "https://birnimajon.pythonanywhere.com/api/products-catalog?is_new=true"
  );

  const newProduct: ICategoryProduct = await newProductFetch.json();

  const banner: IBanner[] = await bannerFetch.json();
  const mainPageCategory: IMainPageCategory[] =
    await mainPageCategoryFetch.json();

  console.log(adBanner);


  // https://sirius-tech.uz/backend/api/products-catalog?&category=Audio&sub_category=Airpods&page=1&page_size=8


  return (
    <div className="">
      <div className="relative">
        <Banner banners={banner} />
      </div>
      <CatalogCards mainPageCategories={mainPageCategory} />
      <div className="px-12 mt-12">
        <AdBanner adBanner={adBanner} />
      </div>
      <div className="p-12">
        <h2 className="border-b py-4 border-main text-4xl font-medium">
          Новинки
        </h2>
        <NewProduct newProducts={newProduct} />
      </div>
    </div>
  );
};

export default Home;
