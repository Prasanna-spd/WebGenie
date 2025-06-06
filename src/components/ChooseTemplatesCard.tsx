// components/ChooseTemplatesCard.tsx
import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  desc: string;
  title: string;
  price: number;
};

function ChooseTemplatesCard({ image, desc, title, price }: Props) {
  return (
    <div className="swiper-slide-active:shadow-[0_0_40px_10px_rgba(255,255,255,0.4)] h-[100%] w-[400px] md:w-[350px] bg-white rounded-xl transition duration-300">
      {/* Image */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="text-center text-black">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{desc}</p>
        <p className="font-semibold text-indigo-600 mt-2">${price}</p>
      </div>
    </div>
  );
}

export default ChooseTemplatesCard;
