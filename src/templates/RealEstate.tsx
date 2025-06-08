"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

export const RealEstateTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta }) => (
  <div className="bg-white text-gray-900 font-sans">
    {/* Hero */}
    <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold">
        <ReactMarkdown>{title}</ReactMarkdown>
      </h1>
      <p className="mt-4 text-xl max-w-2xl mx-auto">
        <ReactMarkdown>{subtitle}</ReactMarkdown>
      </p>
      <button className="mt-8 bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition">
        <ReactMarkdown>{cta}</ReactMarkdown>
      </button>
    </section>

    {/* About */}
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
      <p className="text-lg leading-relaxed">
        <ReactMarkdown>{about}</ReactMarkdown>
      </p>
    </section>

    {/* Featured Listings */}
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">Featured Properties</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Luxury Villa", "Downtown Apartment", "Cozy Cottage"].map((name, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <div className="bg-gray-200 h-40 rounded mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{name}</h3>
              <p className="text-sm text-gray-600">Great location · Affordable pricing · Modern amenities</p>
              <button className="mt-4 text-indigo-600 font-medium hover:underline">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
