"use client";
import { useBasketStore } from "@/hooks/use-basket";
import { XIcon } from "lucide-react";
import { useLocale } from "next-intl";

const Basket = () => {
  const { basket, allPrice, allCount, removeFromBasket, updateProductCount } =
    useBasketStore();
  const locale = useLocale();

  return (
    <div className="flex flex-col min-h-screen lg:flex-row justify-between p-4 gap-32 lg:p-12 mx-auto">
      {/* Cart Items */}
      <div className="lg:w-2/3 w-full">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">Savatcha</h2>
          {basket.length === 0 ? (
            <p className="text-gray-500">Savatcha bo&apos;sh</p>
          ) : (
            <div className="space-y-4 px-6 max-h-96 overflow-y-auto">
              {basket.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center border-b py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={product.image}
                      alt={
                        locale === "uz" ? product.title_uz : product.title_ru
                      }
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="ml-4 flex flex-col w-48">
                      <h3 className="text-lg font-semibold text-gray-700 line-clamp-2">
                        {locale === "uz" ? product.title_uz : product.title_ru}
                      </h3>
                      <p className="text-gray-500">{product.price} so&apos;m</p>
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
          )}
        </div>
      </div>

      {/* Summary Section */}
      <div className="lg:w-1/3 w-full bg-white p-6 mt-4 lg:mt-0 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Jami</h2>
        <div className="flex justify-between mb-6">
          <span className="text-gray-600">
            Jami {basket.length} tovar narxi
          </span>
          <span className="text-xl font-bold text-gray-800">
            {allPrice.toLocaleString()} so&apos;m
          </span>
        </div>
        <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700">
          Buyurtma berish
        </button>
      </div>
    </div>
  );
};

export default Basket;
