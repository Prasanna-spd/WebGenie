"use client";

import React from "react";
import { GoDownload } from "react-icons/go";
import ReactMarkdown from "react-markdown";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
  showDownload?:boolean
}

export const RestaurantTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta ,showDownload}) => {

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

  return(
  <div className="bg-white text-gray-900 font-sans">
    {/* Hero Section */}
    <section className="bg-red-600 text-white py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        <ReactMarkdown>{title}</ReactMarkdown>
      </h1>
      <p className="mt-4 text-xl md:text-2xl">
        <ReactMarkdown>{subtitle}</ReactMarkdown>
      </p>
      <button className="mt-8 bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-100 transition shadow-lg">
        <ReactMarkdown>{cta}</ReactMarkdown>
      </button>
    </section>

    {/* About Section */}
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">About Us</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        <ReactMarkdown>{about}</ReactMarkdown>
      </p>
    </section>

    {/* Menu Highlights */}
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Chefs Specials</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          {["Grilled Salmon", "Classic Margherita Pizza", "Spaghetti Carbonara"].map((dish, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <div className="bg-gray-200 h-40 w-full mb-4 rounded"></div>
              <h3 className="text-xl font-bold mb-2">{dish}</h3>
              <p className="text-sm text-gray-600">
                A delightful blend of fresh ingredients and bold flavors, cooked to perfection.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-red-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Guests Say</h2>
        <div className="text-gray-800 italic text-lg max-w-2xl mx-auto">
          “Absolutely loved the ambiance and the food! 10/10 would recommend for a romantic dinner or family outing.”
          <div className="mt-4 font-semibold">— Food Blogger @TastyTravels</div>
        </div>
      </div>
    </section>
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
  )
};
