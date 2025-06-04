import React from "react";
import TypeWriter from "./TypeWriter";
import RippleBackground from "./RippleBg";

function Hero() {
  return (
    <main className="relative h-screen flex flex-col items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <RippleBackground />
      </div>

{/* FADE-OUT MASK */}
<div className="absolute bottom-0 w-full h-26 bg-gradient-to-t from-gray-900 to-transparent z-10 pointer-events-none" />


      <div className="z-10 flex flex-col items-center text-center space-y-4">
        <div className="mb-12">
          <h1 className="text-7xl font-bold">Welcome to Web Genie</h1>
          <p className="mt-4 text-lg">Your wish-built web presence ✨</p>
        </div>

        <div className="text-2xl font-semibold h-12">
          <TypeWriter />
        </div>
      </div>
      
    </main>
  );
}

export default Hero;
