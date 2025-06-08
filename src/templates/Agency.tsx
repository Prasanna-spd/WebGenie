"use client";

import React from "react";
import ReactMarkdown from "react-markdown";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

export const AgencyTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta }) => (
  <div className="bg-white text-gray-900 font-sans">
    {/* Hero */}
    <section className="bg-black text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold">
        <ReactMarkdown>{title}</ReactMarkdown>
      </h1>
      <p className="mt-4 text-xl max-w-3xl mx-auto">
        <ReactMarkdown>{subtitle}</ReactMarkdown>
      </p>
      <button className="mt-8 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
        <ReactMarkdown>{cta}</ReactMarkdown>
      </button>
    </section>

    {/* About */}
    <section className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
      <p className="text-lg leading-relaxed">
        <ReactMarkdown>{about}</ReactMarkdown>
      </p>
    </section>

    {/* Services */}
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-10">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {["Branding", "Digital Marketing", "Web Development"].map((service, i) => (
            <div key={i} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{service}</h3>
              <p className="text-sm text-gray-600">We help you stand out and grow in the digital world.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
