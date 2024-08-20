import ProductView from "@/components/layouts/product-view";
import ShortDescription from "@/components/layouts/short-description";
import React from "react";
import AddToBasket from "./components/add-to-basket";
import Gravity from "./components/gravity";
import Desc from "./components/desc";
import Available from "./components/available";
import Price from "./components/price";
import { fetchData } from "@/utils/fetch-data";
import RelatedProducts from "./components/related-products";

export const revalidate = 60;
interface Props {
  params: {
    locale: string;
    productSlug: string;
  };
}

const Product = async ({
  params,
}: {
  params: { productSlug: string; locale: string };
}) => {
  const [product] = await Promise.all([
    fetchData(`${process.env.NEXT_API}/products/${params.productSlug}`),
  ]);

  return (
    <>
      {product ? (
        <div>
          <div className="px-12 py-6">
            <Gravity product={product} />

            <div className="grid grid-cols-1 py-12 md:grid-cols-12 lg:grid-cols-16 gap-7 lg:gap-[30px] static">
              <div className="md:col-span-5">
                {product && <ProductView images={product?.images} />}
              </div>
              <ShortDescription description={product?.short_descriptions} />
              <div className="lg:col-span-3 md:col-span-5 ">
                <div className="w-full border border-mainGray rounded-lg p-3 md:p-5  bg-white space-y-3 left-0">
                  <Available product={product} />
                  <div className="space-y-1">
                    <h3 className="text-xl xl:text-2xl  space-x-2 null   ">
                      <Price product={product} />
                    </h3>
                    <AddToBasket product={product} />
                  </div>
                </div>
              </div>
            </div>
            <Desc product={product} />
            <RelatedProducts relatedProducts={product.related_products} />
          </div>
        </div>
      ) : (
        <div className="w-full min-h-screen flex justify-center items-center flex-col text-center py-32">
          <h1 className="text-4xl font-bold">Mahsulot topilmadi</h1>{" "}
          <p className="text-lg">
            Iltimos, qayta urinib ko'ring yoki boshqa mahsulotga o'rganing.
          </p>
        </div>
      )}
    </>
  );
};

export default Product;
