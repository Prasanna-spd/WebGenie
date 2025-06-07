"use client";

import React from "react";

interface GymTemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

const GymTemplate: React.FC<GymTemplateProps> = ({ title, subtitle, about, cta }) => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold tracking-wide">{title}</h1>
        <p className="mt-4 text-xl text-gray-300">{subtitle}</p>
        <button className="mt-8 bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
          {cta}
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-red-500">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 leading-relaxed">{about}</p>
      </section>

      {/* Trainer/Workout Section (Placeholder) */}
      <section className="px-6 py-12 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-6">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-gray-700 p-4 rounded shadow hover:shadow-lg transition">
              <div className="bg-gray-600 h-40 rounded mb-4"></div>
              <h3 className="font-semibold mb-2 text-white">Trainer Name</h3>
              <p className="text-sm text-gray-300">Expert in HIIT, strength, and mobility.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GymTemplate;
