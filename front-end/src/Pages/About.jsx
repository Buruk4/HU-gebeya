import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import NewsLettersBox from "../component/NewsLettersBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-8 md:gap-12">
        <img
          className="w-full md:max-w-[350px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/3 text-gray-600 px-4">
          <p>
            An e-commerce website designed specifically for Hawassa University
            serves as a centralized platform for students, faculty, and staff to
            buy and sell goods or services. The site streamlines transactions,
            offering categories such as books, electronics, apparel, and
            academic resources tailored to the university community. By focusing
            on a niche audience, the platform ensures safety, convenience, and
            trust, as all users are part of the same institution. Features like
            secure payment options, user reviews, and campus-friendly delivery
            enhance the overall experience.
          </p>
          <p>
            This localized e-commerce solution promotes community engagement and
            fosters a culture of sustainability by encouraging reuse and resale
            within the university. It provides opportunities for entrepreneurial
            students to showcase their products or services, while staff and
            faculty can conveniently access what they need without leaving the
            campus. As the platform grows, it has the potential to integrate
            more advanced features such as peer-to-peer exchange, exclusive
            discounts for university members, and even partnerships with local
            businesses.
          </p>
          <b>Our Mission</b>
          <p>
            To create a seamless and secure e-commerce platform that serves the
            Hawassa University community by providing access to high-quality
            goods and services tailored to their unique needs. We aim to foster
            convenience, trust, and connectivity while empowering students,
            faculty, and staff through innovative online solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-wrap md:flex-row text-sm gap-6 mb-20">
        <div className="border px-6 md:px-10 py-10 flex-1 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p>
            We are committed to maintaining the highest standards of quality for
            all products and services offered on our platform. Every item is
            carefully reviewed to ensure it meets the expectations of the
            Hawassa University community. Our dedication to quality assurance
            guarantees reliability, satisfaction, and a seamless shopping
            experience.
          </p>
        </div>
        <div className="border px-6 md:px-10 py-10 flex-1 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            We are committed to maintaining the highest standards of quality for
            all products and services offered on our platform. Every item is
            carefully reviewed to ensure it meets the expectations of the
            Hawassa University community. Our dedication to quality assurance
            guarantees reliability, satisfaction, and a seamless shopping
            experience.
          </p>
        </div>
        <div className="border px-6 md:px-10 py-10 flex-1 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            We prioritize your satisfaction by providing exceptional customer
            service tailored to the needs of the Hawassa University community.
            Our dedicated support team is always ready to assist you with any
            inquiries, concerns, or feedback. We strive to ensure every
            interaction is positive, professional, and focused on delivering the
            best experience possible.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className=" border px-10 mdpx-16 sm:py-20 flex-col gap-5">
          <b>Quality Assurance</b>
          <p>
            We are committed to maintaining the highest standards of quality for
            all products and services offered on our platform. Every item is
            carefully reviewed to ensure it meets the expectations of the
            Hawassa University community. Our dedication to quality assurance
            guarantees reliability, satisfaction, and a seamless shopping
            experience.
          </p>
        </div>

        <div className=" border px-10 mdpx-16 sm:py-20 flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            We are committed to maintaining the highest standards of quality for
            all products and services offered on our platform. Every item is
            carefully reviewed to ensure it meets the expectations of the
            Hawassa University community. Our dedication to quality assurance
            guarantees reliability, satisfaction, and a seamless shopping
            experience.
          </p>
        </div>
        <div className=" border px-10 mdpx-16 sm:py-20 flex-col gap-5">
          <b>Exeptional Customer Service</b>
          <p className="text-gray-600">
            We prioritize your satisfaction by providing exceptional customer
            service tailored to the needs of the Hawassa University community.
            Our dedicated support team is always ready to assist you with any
            inquiries, concerns, or feedback. We strive to ensure every
            interaction is positive, professional, and focused on delivering the
            best experience possible.
          </p>
        </div>
      </div>
      <NewsLettersBox />
    </div>
  );
};

export default About;
