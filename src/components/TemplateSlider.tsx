"use client";

import React from "react";
import ChooseTemplatesCard from "./ChooseTemplatesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";


const featuredTemplates = [
  {
    image: "/ecomm.png",
    desc: "Perfect for startups and agencies.",
    title: "Startup Pro",
    price: 19,
  },
  {
    image: "/news.png",
    desc: "Clean and modern for portfolios.",
    title: "Portfolio X",
    price: 25,
  },
  {
    image: "/gymming.png",
    desc: "Ideal for SaaS businesses.",
    title: "SaaS Base",
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
  return(
    <div className="w-full px-4 py-10 h-[80vh] flex justify-center item-center border-b-white overflow-x-hidden">
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
    </div>
  );
}

export default TemplateSlider;
