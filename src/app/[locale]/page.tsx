import React from "react";
import AdBanner from "@/components/banners/ad-banner";
import CatalogCards from "@/components/catalog-cards";
import Banner from "@/components/banners";
import NewProduct from "@/components/layouts/new-product";
import { fetchData } from "@/utils/fetch-data";
import Service from "@/components/layouts/service";

export const revalidate = 60;

const Home: React.FC = async () => {
  const [adBanner, mainPageCategory, banner, newProduct] = await Promise.all([
    fetchData(`${process.env.NEXT_API}/ad-banners/`),
    fetchData(`${process.env.NEXT_API}/main-page-categories/`),
    fetchData(`${process.env.NEXT_API}/banners/`),
    fetchData(
      `${process.env.NEXT_API}/products-catalog?is_new=true&page=1&page_size=8/`
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
        <NewProduct newProducts={newProduct} />
      </div>
      <div className="px-4 lg:px-12">
        <Service />
      </div>
    </div>
  );
};

export default Home;
