import { useState } from "react";
import { useRouter } from "next/navigation";
import { useBasketStore } from "@/hooks/use-basket";
import { useTranslations } from "next-intl";
import { BsCartCheck } from "react-icons/bs";

interface OrderFormProps {
  allPrice: number;
  basket: Array<{ id: number; count: number }>;
  onSubmit: () => void;
}

const OrderForm: React.FC<OrderFormProps> = ({
  allPrice,
  basket,
  onSubmit,
}) => {
  const t = useTranslations("Order");
  const clearBasket = useBasketStore((state) => state.clearBasket); // Accessing clearBasket from the store
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });
  const [thankYouVisible, setThankYouVisible] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOrderSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

      // Formani reset qilish
      setFormData({
        name: "",
        phone: "",
        address: "",
      });

      // Bildirishni ko'rsatish
      setThankYouVisible(true);

      // Bildirish oynasini 3 soniyadan keyin yopish va asosiy sahifaga o'tish
      setTimeout(() => {
        setThankYouVisible(false);
        clearBasket(); // Clearing the basket after successful order
        onSubmit(); // If you have any additional actions to perform on submit
        router.push("/"); // Asosiy sahifaga o'tish
      }, 3000);
    } catch (error) {
      console.error("Order failed:", error);
    }
  };

  return (
    <>
      {thankYouVisible ? (
        <div className="w-full  h-screen top-0 left-0 px-4 fixed bg-black/90 z-[100] flex justify-center items-center">
          <div className="bg-white text-center p-7 rounded-lg space-y-6">
            <h2 className="flex justify-center text-green-500">
              <BsCartCheck size={100} />
            </h2>
            <h3 className="text-3xl font-semibold text-main">
              {t("toast.title")}
            </h3>
            <p>{t("toast.description")}...</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleOrderSubmit} className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {t("Info.title")}
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder={t("Info.name")}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              placeholder={t("Info.phone")}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <input
              type="text"
              required
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder={t("Info.address")}
              className="w-full px-4 py-2 border rounded-lg"
            />
            <button
              type="submit"
              disabled={allPrice === 0}
              className="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700"
            >
              {t("Info.aplicate")}
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default OrderForm;
