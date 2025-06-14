"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
  showDownload:boolean
}

export const SaaSTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta,showDownload}) => (
  <div className="bg-white text-gray-900 font-sans">
    {/* Hero Section */}
    <section className=" text-red-700 py-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        <ReactMarkdown>{title}</ReactMarkdown>
      </h1>
      <p className="mt-4 text-xl md:text-2xl">
        <ReactMarkdown>{subtitle}</ReactMarkdown>
      </p>
      <button className="mt-8 bg-white text-blue-700 px-8 py-3 border border-amber-400 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg">
        <ReactMarkdown>{cta}</ReactMarkdown>
      </button>
    </section>

    {/* Why Choose Us Section */}
    <section className="px-6 py-16 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-semibold mb-6">Why Choose Us</h2>
      <p className="text-lg leading-relaxed text-gray-700">
        <ReactMarkdown>{about}</ReactMarkdown>
      </p>
    </section>

    {/* Features Section */}
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Powerful Features Built for You</h2>
        <div className="grid gap-10 md:grid-cols-3 text-left">
          {["Lightning Fast Setup", "Real-Time Analytics", "Enterprise-Grade Security"].map((feature, i) => (
            <div key={i} className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{feature}</h3>
              <p className="text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">What Our Customers Say</h2>
        <div className="text-gray-800 italic text-lg max-w-2xl mx-auto">
          “This SaaS platform transformed how we operate. It’s simple, fast, and reliable. Highly recommended!”
          <div className="mt-4 font-semibold">— A Happy Client</div>
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
);
