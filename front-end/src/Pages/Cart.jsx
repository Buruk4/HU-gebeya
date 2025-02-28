import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import CartTotal from "../component/CartTotal";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
    getUserCart,
    token,
  } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (token) {
      getUserCart(token); // Fetch cart data from the backend
    }
  }, [token, getUserCart]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="bottom-t pt-14">
      <div className="text-2x1 mb-3">
        <Title text1={"Your"} text2={"Cart"} />
      </div>
      <div>
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );

          if (!productData) {
            return null; // Skip rendering if productData is undefined
          }

          return (
            <div
              key={index}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  className="w-16 sm:w-20"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-xs sm:text-lg font-medium">
                    {productData.name}
                  </p>

                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">
                      size: {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => {
                  e.target.value === "" || e.target.value === 0
                    ? null
                    : updateQuantity(
                        item._id,
                        item.size,
                        Number(e.target.value)
                      );
                }}
                className="border max-w-10 sm:max-w-15 px1 sm:px-2py-1 text-center"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img
                onClick={() => updateQuantity(item._id, item.size, 0)}
                src={assets.bin_icon}
                className="w-4 mr-4 sm:w-5 cursor-pointer justify-center"
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              onClick={() => navigate("/place-order")}
              className="bg-black text-white text-sm my-8 px-8 py-3"
            >
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
