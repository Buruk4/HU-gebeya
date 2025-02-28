import React, { useState } from "react";
import Title from "../component/Title";
import CartTotal from "../component/CartTotal";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Placeorder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h[0vh] borde-t">
      {/* left side */}
      <div className="flex flex-col w-full gap-4 sm:max-w-[480px]">
        <div className="text-xl sm:text-2x1 my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="frist name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="tel"
          placeholder="+251-900-000-000"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            min={0}
            placeholder="Block number"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            min={0}
            placeholder="Dorm or office number"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"} />
          {/* ....payment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row ">
            <div
              onClick={() => {
                setMethod("Telebirr");
              }}
              className="flex items-center gap-1 border p-2 px-3 cursor-pointer rounded-lg"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${method == "Telebirr" ? "bg-green-400" : ""}`}
              ></p>
              <img className="h-5 mx-4 " src={assets.tele_birr} alt="" />
            </div>
            <div
              onClick={() => {
                setMethod("Awash");
              }}
              className="flex items-center gap-1 border p-2 px-3 cursor-pointer"
            >
              {" "}
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${method == "Awash" ? "bg-green-400" : ""}`}
              ></p>
              <img className="h-5 mx-4 " src={assets.awash} alt="" />
            </div>
            <div
              onClick={() => {
                setMethod("cod");
              }}
              className="flex items-center gap-1 border p-2 px-3 cursor-pointer"
            >
              {" "}
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${method == "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                navigate("/orders");
              }}
              className="bg-black text-white p-4 rounded"
            >
              PlaceOrder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeorder;
