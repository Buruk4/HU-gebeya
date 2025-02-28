import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import NewsLettersBox from "../component/NewsLettersBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            Hawassa <br />
            university
          </p>
          <p className="text-gray-500">
            Tel: (+251) 952-520-609 <br /> Email: ifaoking@gmail.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Carees at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and jop openings.
            <br />
            university
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jops
          </button>
        </div>
      </div>
      <NewsLettersBox />
    </div>
  );
};

export default Contact;
