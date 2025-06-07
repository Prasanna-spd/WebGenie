"use client";

import React from "react";
import ChooseTemplatesCard from "./ChooseTemplatesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Link from "next/link";

const featuredTemplates = [
  {
    image: "/ecomm.png",
    desc: "This modern and fully responsive ecommerce template is crafted to boost your online sales with stunning product showcases, smooth navigation, and lightning-fast performance. Ideal for clothing brands, electronics, home goods, or niche stores, it includes built-in sections for featured products, testimonials, limited-time deals, and more. Whether you're launching a startup or upgrading an existing shop, this template makes your store look premium and professional right out of the box.",
    title: "SellSmart – Ecommerce Starter Kit",
    price: 19,
  },
  {
    image: "/news.png",
    desc: "Designed for bloggers, journalists, and content creators, this sleek and content-first template delivers an exceptional reading experience with clean layouts, responsive design, and customizable article blocks. Perfect for tech news, lifestyle stories, personal blogs, or editorial platforms, it features category filters, author highlights, newsletter integration, and SEO-optimized markup. Whether you're sharing breaking news or thoughtful essays, this template helps your voice reach and engage readers effortlessly.",
    title: "NewsNova – Modern Blog & News Template",
    price: 25,
  },

  {
    image: "/gymming.png",
    desc: "Engineered for gyms, fitness trainers, and wellness studios, this high-impact template blends bold visuals with powerful calls to action. Highlight your workout programs, class schedules, trainers, testimonials, and membership options with clean sections and interactive elements. Built to convert visitors into clients, it features online booking, pricing tables, mobile-friendly design, and integration with calendars or fitness apps. Whether you're launching a new gym or marketing personal training services, this template flexes your brand with style and strength.",
    title: "FitForce – Gym & Fitness Studio Template",
    price: 29,
  },
  {
    image: "",
    desc: "Ideal for PaaS businesses.",
    title: "PaaS Base",
    price: 29,
  },
  {
    image: "",
    desc: "Ideal for IaaS businesses.",
    title: "IaaS Base",
    price: 29,
  },
  {
    image: "",
    desc: "Ideal for RaaS businesses.",
    title: "RaaS Base",
    price: 29,
  },
];

function TemplateSlider() {
  return (
    <div className="relative w-full px-4 py-10 h-100% flex flex-col justify-center items-center gap-6 border-b-white overflow-x-hidden  bg-gray-900">
      <div className="text-center max-w-2xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Transform your Website Creation Journey.</h2>
        <span className="text-lg md:text-xl text-indigo-200">Stitch your Webpage with our awesome templates and AI within seconds.</span>
      </div>

      <Swiper
        modules={[EffectCoverflow]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        initialSlide={0}
        spaceBetween={40}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: false,
        }}
        className="carousel-slider w-[50%] md:w-[40%] h-full"
      >
        {featuredTemplates.map((template, idx) => (
          <SwiperSlide key={idx} className="w-[70%] md:w-[40%] lg:w-[25%] h-[100%]">
            <ChooseTemplatesCard
              image={template.image}
              desc={template.desc}
              title={template.title}
              price={template.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-6">
  <Link
    href="/templateStore"
    className="inline-block px-6 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-2xl hover:bg-indigo-700 transition duration-300 shadow-lg"
  >
    Visit Our Template Store
  </Link>
</div>

    </div>
  );
}

export default TemplateSlider;
