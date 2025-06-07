// components/ChooseTemplatesCard.tsx
import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  desc: string;
  title: string;
  price: number;
};

function ChooseTemplatesCard({ image, desc, title, price }: Props) {
  return (
    <div className="swiper-slide-active:shadow-[0_0_40px_10px_rgba(255,255,255,0.4)] h-[100%] w-[400px] md:w-[350px] bg-white rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] flex flex-col">
      {/* Image Section */}
      <div className="w-full">
        <div className="relative w-full h-64 rounded-t-xl overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-6 flex flex-col justify-between gap-4 text-center">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-800">{title}</h2>

          <p className="mt-2 text-gray-500 text-sm">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ChooseTemplatesCard;
