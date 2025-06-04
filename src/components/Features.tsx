import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="relative text-white bg-gray-900 h-screen flex flex-col md:flex-row md:justify-between">
      
      {/* <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-gray-900 to-transparent z-10 pointer-events-none" /> */}
      
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            AI Website Builder
            <br /> that works like magic ✨
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-emerald-400">⚡ Instant Setup</h3>
              <p className="text-gray-300">Launch a fully functional website in seconds using AI-powered prompts.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-pink-400">🎨 Custom Designs</h3>
              <p className="text-gray-300">Generate unique, responsive layouts tailored to your brand with zero code.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-yellow-400">🤖 Smart Content</h3>
              <p className="text-gray-300">Let AI write your headlines, product descriptions, and SEO metadata automatically.</p>
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE CONATAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/phoneLeaning.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Features;
