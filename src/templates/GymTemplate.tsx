"use client";

import React from "react";
// import ReactMarkdown from "react-markdown";
import { GoDownload } from "react-icons/go";
import Image from "next/image";

interface GymTemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
  showDownload?: boolean;
}

const sticker = "/gymMan.png";
const heroTagLine = "Be Fierce With Wild Workouts.";
const wildProgramImages = ["/gymMan.png", "/gymMan.png", "/gymMan.png"];
const stickerBelowName="Sample Gym page"

const services = [
  {
    icon: "/gymMan.png",
    tag: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
  },
  {
    icon: "/gymMan.png",
    tag: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
  },
  {
    icon: "/gymMan.png",
    tag: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
  },
  {
    icon: "/gymMan.png",
    tag: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
  },
];
const gymDetails = 
  {
    icon: "/gymMan.png",
    name:"Lorem ipsum dolor sit amet.",
    phNum: "80000000",
    email: "support@superrecipesselection.com",
  }
 

// const wildProgramDetails = [
//   {
//     icon: "/gymMan.png",
//     tag: "Lorem ipsum dolor",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
//   },
//   {
//     icon: "/gymMan.png",
//     tag: "Lorem ipsum dolor",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
//   },
//   {
//     icon: "/gymMan.png",
//     tag: "Lorem ipsum dolor",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
//   },
//   {
//     icon: "/gymMan.png",
//     tag: "Lorem ipsum dolor",
//     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.",
//   },
// ];
const plans = [
  {
    price: "Rs 2999",
    tag: "Lorem ipsum dolor",
    desc: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
  },
  {
    price: "Rs 2999",
    tag: "Lorem ipsum dolor",
    desc: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
  },
];

const GymTemplate: React.FC<GymTemplateProps> = ({ title, subtitle, about, cta, showDownload }) => {
  const exportToHTML = () => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body class="font-sans text-gray-900 bg-white">
      <section class="bg-black text-white py-20 px-6 text-center">
        <h1 class="text-5xl font-bold">${title}</h1>
        <p class="mt-4 text-xl max-w-3xl mx-auto">${subtitle}</p>
        <button class="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold">${cta}</button>
      </section>
      <section class="px-6 py-16 max-w-4xl mx-auto">
        <h2 class="text-3xl font-semibold mb-6">Who We Are</h2>
        <p class="text-lg leading-relaxed">${about}</p>
      </section>
      <section class="bg-gray-100 py-16 px-6">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl font-semibold mb-10">Our Services</h2>
          <div class="grid gap-8 md:grid-cols-3">
            <div class="bg-white p-6 rounded shadow">
              <h3 class="text-xl font-bold mb-2">Branding</h3>
              <p class="text-sm text-gray-600">We help you stand out and grow in the digital world.</p>
            </div>
            <div class="bg-white p-6 rounded shadow">
              <h3 class="text-xl font-bold mb-2">Digital Marketing</h3>
              <p class="text-sm text-gray-600">We help you stand out and grow in the digital world.</p>
            </div>
            <div class="bg-white p-6 rounded shadow">
              <h3 class="text-xl font-bold mb-2">Web Development</h3>
              <p class="text-sm text-gray-600">We help you stand out and grow in the digital world.</p>
            </div>
          </div>
        </div>
      </section>
    </body>
    </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "agency-landing.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center bg-gradient-to-r from-gray-800 to-black py-20 text-center px-6 h-screen w-full">
        <div className="absolute bottom-0 left-0 w-full h-[70%] bg-gradient-to-t from-red-600/80 to-transparent z-0 pointer-events-none"></div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/ember.png")',
            backgroundRepeat: "repeat",
            opacity: 0.2,
            pointerEvents: "none",
          }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image src={sticker} alt="gymman" width={500} height={500} className="h-[900px] w-[500px]" />
        </div>
        <div className="absolute bottom-10 left-52 z-10 text-8xl text-left text-red-500 font-bold space-y-2">
          {heroTagLine.split(" ").map((word, i) => (
            <div key={i}>{word}</div>
          ))}
        </div>

        <div className="absolute flex flex-col justify-center top-0 left-20 bg-red-600 w-auto text-black ">
          <img src="" alt="the sticker of the gym" />
          <div className="text-2xl font-bold font-serif px-3 rotate-[-6deg]">{stickerBelowName}</div>
        </div>
        <div className="absolute top-8 right-20 space-x-4 ">
          <button className="px-4 py-2 bg-transparent text-white border border-white rounded hover:bg-red-600 hover:cursor-pointer">Login</button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-black hover:cursor-pointer">Register Now</button>
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="w-[600px] h-[600px] border-4 border-red-500 border-dashed animate-rotate-pingpong rounded-full flex justify-center items-center">
            <div className="w-120 h-120 border-4 border-red-500 border-dashed  rounded-full flex justify-center items-center">
              <div className="w-80 h-80 bg-red-600 border-4 border-red-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="h-[120vh] w-full px-4 lg:px-12 xl:px-16 py-22">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl text-red-600 font-extrabold">Wild Programs</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wildProgramImages.map((img, i) => (
            <div key={i} className="rounded-2xl overflow-hidden flex flex-col ">
              {/* Image/visual section */}
              <div className="relative w-full h-[450px] flex items-center justify-center">
                {/* Background ring */}

                <div className="flex justify-center items-center w-[300px] h-[300px] rounded-full z-0 bg-[radial-gradient(circle,_rgba(255,0,0,0.6)_20%,_rgba(255,0,0,0.3)_50%,_transparent_70%)]">
                  <div className=" z-10 w-52 h-52 border-2 bg-transparent border-red-500 border-dashed rounded-full flex items-center justify-center">
                    <div className="w-44 h-44 bg-red-600 rounded-full"></div>
                  </div>
                </div>

                {/* Foreground gymMan image */}
                <Image src="/gymMan.png" alt="gymman" width={300} height={300} className="absolute w-72 h-auto object-contain z-10" />
              </div>

              {/* Content section */}
              <div className="p-4 flex flex-col gap-2 text-left">
                <h4 className="text-2xl text-red-500 font-light ">{String(i + 1).padStart(2, "0")}.</h4>
                <hr className="border-red-500 w-full" />
                {/* H2 and P tags to be replace by AI content */}
                <h2 className="text-4xl text-white font-semibold pt-2 pb-2">Lorem, ipsum.</h2>
                <p className="text-base text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, eligendi. Fugiat velit non aspernatur dicta facere nesciunt quo natus quod.</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services provided by the gym */}
      <div className="h-[90vh] w-full px-4 lg:px-12 xl:px-16 py-22">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-5xl text-red-600 font-extrabold">Our Commitments</h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          {services.map((service, i) => (
            <div key={i} className="flex justify-center p-4 bg-gray-800 rounded-2xl shadow">
              <div className="rounded-full bg-red-500 w-[50px] h-[50px]">
                <Image src={service.icon} width={50} height={50} alt="service 1 image" />
              </div>
              <div className="flex flex-col text-white text-left p-4">
                <h2 className="pb-3">{service.tag}</h2>
                <p>{service.desc} </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plans for the gym */}

      <div className="h-[130vh] w-full px-4 lg:px-12 xl:px-16  relative flex justify-center items-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <Image src="/gymMan.png" alt="gymman" width={500} height={500} className="h-[900px] w-[500px]" />
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[600px] h-[600px] border-4 border-red-500 border-dashed animate-rotate-pingpong rounded-full flex justify-center items-center">
            <div className="flex justify-center items-center  w-[700px] h-[700px] rounded-full z-0 bg-[radial-gradient(circle,_rgba(255,0,0,0.6)_20%,_rgba(255,0,0,0.3)_50%,_transparent_70%)]">
              <div className="w-110 h-110 bg-red-600 rounded-full flex justify-center items-center "></div>
            </div>
          </div>
        </div>
        {/* Cards */}
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center gap-6 pt-6 z-10 space-x-6">
          {plans.map((plan, i) => (
            <div key={i} className="flex flex-col p-6 bg-gray-800 rounded-2xl shadow-md w-72 h-[600px]">
              <div className="flex flex-col items-center justify-center mb-4 ">
                <h1 className="text-xl text-white font-bold py-7">{plan.tag}</h1>
                <div className="rounded-full bg-red-500 w-[150px] h-[150px] flex items-center justify-center font-extrabold text-3xl text-white">{plan.price}</div>
              </div>

              <div className="flex flex-col items-center text-white text-center space-y-2">
                {plan.desc.map((option, j) => (
                  <div key={j} className="w-full">
                    <p>{option}</p>
                    {j < plan.desc.length - 1 && <hr className="border-white w-full my-2" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}

      <div className="h-[50vh] flex flex-col justify-center items-center text-center bg-red-500/50 text-black">
        <div className="w-auto h-auto pb-7">
          <Image src="/gymMan.png" alt="sticker" width={50} height={50} />
        </div>
        <h1 className="font-extrabold text-4xl pb-8">{gymDetails.name}</h1>
        <p className="font-bold text-2xl">{`Call Us: ${gymDetails.phNum}`}</p>
        <p className="font-bold text-2xl pb-8">{`Email Us: ${gymDetails.email}`}</p>
        <div className="font-light text-sm">
          <p>{`Copyright © 2022 ${gymDetails.name}`}</p>
          <p>Privacy Policy | Terms & Conditions | Support</p>
        </div>
      </div>

      {/* Download Button */}
      {showDownload && (
        <div className="text-center absolute top-5 right-5">
          <button onClick={exportToHTML} className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2">
            <GoDownload className="text-xl" />
            Download as HTML
          </button>
        </div>
      )}
    </div>
  );
};

export default GymTemplate;
