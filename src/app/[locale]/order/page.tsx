"use client";
import { useBasketStore } from "@/hooks/use-basket";
import { XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import OrderForm from "./order-form";

const Basket = () => {
  const { basket, allPrice, allCount, removeFromBasket, updateProductCount } =
    useBasketStore();
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("Order");
  const card = useTranslations("Card");

  // State for form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOrderSubmit = () => {
    // Actions to perform after the order is submitted
    setIsFormVisible(false);
    // Optionally clear the basket here
    // clearBasket();
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="">
      {basket.length === 0 || basket === undefined ? (
        <div className="flex justify-center h-screen">
          <div className="text-center pt-16 space-y-3">
            <div className="relative mx-auto h-36 lg:h-44 w-1/2">
              <Image src={"/cartEmpty.png"} alt="Empty Cart" fill />
            </div>
            <h2 className="text-3xl font-semibold">{t("emptyCart.title")}</h2>
            <p className="text-lg lg:text-2xl mb-4">
              {t("emptyCart.description")}
            </p>
            <button
              onClick={handleBackToHome}
              className="bg-main text-white px-5 py-3 rounded-lg hover:bg-main transition"
            >
              {t("emptyCart.btn")}
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col min-h-screen lg:flex-row justify-between p-4 gap-32 lg:p-12 mx-auto">
          <div className="lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold text-gray-700 mb-4">
              {t("total")}
            </h2>
            <div className="flex justify-between mb-6">
              <span className="text-gray-600">
                {t("total")} {basket.length} {t("price")}
              </span>
              <span className="text-xl font-bold text-gray-800">
                {allPrice.toLocaleString()} {card("btns.sum")}
              </span>
            </div>
            <button
              onClick={() => setIsFormVisible(!isFormVisible)}
              className="w-full px-6 py-3 bg-main text-white rounded-lg font-semibold shadow-md hover:bg-main/90"
            >
              Buyurtma berish
            </button>

            {/* Form for user details */}
            {isFormVisible && (
              <OrderForm
                allPrice={allPrice}
                basket={basket}
                onSubmit={handleOrderSubmit}
              />
            )}
          </div>

          {/* Cart Items */}
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-6">{t("basket")}</h2>
              <div className="space-y-4 px-6 max-h-96 overflow-y-auto">
                {basket.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center border-b py-4"
                  >
                    <div className="flex items-center ">
                      <div className="relative w-24 h-24">
                        <Image
                          src={product.image}
                          alt={
                            locale === "uz"
                              ? product.title_uz
                              : product.title_ru
                          }
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="ml-4 flex flex-col w-48">
                        <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">
                          {locale === "uz"
                            ? product.title_uz
                            : product.title_ru}
                        </h3>
                        <p className="text-gray-500">
                          {product.price} so&apos;m
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() =>
                          updateProductCount(product.id, product.count - 1)
                        }
                        disabled={product.count <= 1}
                        className={`px-2 py-1 rounded-lg text-gray-600 border ${
                          product.count <= 1
                            ? "bg-gray-200 cursor-not-allowed"
                            : "bg-gray-100 hover:bg-gray-200"
                        }`}
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-lg font-medium text-gray-700">
                        {product.count}
                      </span>
                      <button
                        onClick={() =>
                          updateProductCount(product.id, product.count + 1)
                        }
                        className="px-2 py-1 bg-gray-100 border rounded-lg text-gray-600 hover:bg-gray-200"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromBasket(product.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <XIcon className="h-6 w-6" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
