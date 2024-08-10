"use client";
import { useBasketStore } from "@/hooks/use-basket";
import { XIcon } from "lucide-react";
import { useLocale } from "next-intl";
import { useState } from "react";

const Basket = () => {
  const { basket, allPrice, allCount, removeFromBasket, updateProductCount } =
    useBasketStore();
  const locale = useLocale();

  // State for form visibility and form data
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle order submission
  const handleOrderSubmit = async () => {
    const order = basket.map((product) => ({
      product_id: product.id,
      count: product.count,
    }));

    const payload = {
      ...formData,
      order,
    };

    try {
      const response = await fetch(
        "https://api.faberlick.uz/api/product-orders/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      console.log("Order successful:", data);
      // Reset the form and basket after successful order
      setIsFormVisible(false);
      setFormData({
        name: "",
        phone: "",
        address: "",
      });
      // Clear basket if necessary
      // clearBasket();
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen lg:flex-row justify-between p-4 gap-32 lg:p-12 mx-auto">
      {/* Summary Section */}
      <div className="lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Jami</h2>
        <div className="flex justify-between mb-6">
          <span className="text-gray-600">
            Jami {basket.length} tovar narxi
          </span>
          <span className="text-xl font-bold text-gray-800">
            {allPrice.toLocaleString()} so&apos;m
          </span>
        </div>
        <button
          onClick={() => setIsFormVisible(!isFormVisible)}
          className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700"
        >
          Buyurtma berish
        </button>

        {/* Form for user details */}
        {isFormVisible && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Buyurtma Ma&apos;lumotlari
            </h3>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ism"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Telefon"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Manzil"
                className="w-full px-4 py-2 border rounded-lg"
              />
              <button
                onClick={handleOrderSubmit}
                className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700"
              >
                Buyurtmani Yuborish
              </button>
            </div>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default Basket;
