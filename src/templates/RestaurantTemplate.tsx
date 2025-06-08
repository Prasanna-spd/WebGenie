"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

export const RestaurantTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta }) => (
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
  </div>
);
