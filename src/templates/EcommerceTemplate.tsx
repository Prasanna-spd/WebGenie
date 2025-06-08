"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface EcommerceTemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({ title, subtitle, about, cta }) => {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="bg-emerald-600 text-white py-16 px-6 text-center">
        <div className="text-4xl font-bold"><ReactMarkdown>{title}</ReactMarkdown></div>
        <div className="mt-4 text-xl"><ReactMarkdown>{subtitle}</ReactMarkdown></div>
        <button className="mt-6 bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          <ReactMarkdown>{cta}</ReactMarkdown>
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
        <div className="text-lg"><ReactMarkdown>{about}</ReactMarkdown></div>
      </section>

      {/* Product Showcase Placeholder */}
      <section className="px-6 py-12 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="bg-white p-4 border rounded shadow hover:shadow-md transition"
            >
              <div className="bg-gray-200 h-40 rounded mb-4"></div>
              <h3 className="font-semibold mb-2">Product Name</h3>
              <p className="text-sm text-gray-600">Short product description.</p>
              <button className="mt-4 text-emerald-600 font-medium hover:underline">
                View More
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default EcommerceTemplate;
