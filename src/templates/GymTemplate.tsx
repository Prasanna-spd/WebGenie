"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { GoDownload } from "react-icons/go";


interface GymTemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
  showDownload:boolean
}

const GymTemplate: React.FC<GymTemplateProps> = ({ title, subtitle, about, cta ,showDownload}) => {

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
      <section className="bg-gradient-to-r from-gray-800 to-black py-20 text-center px-6">
        <h1 className="text-5xl font-extrabold tracking-wide"><ReactMarkdown>{title}</ReactMarkdown></h1>
        <p className="mt-4 text-xl text-gray-300"><ReactMarkdown>{subtitle}</ReactMarkdown></p>
        <button className="mt-8 bg-red-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition">
          <ReactMarkdown>{cta}</ReactMarkdown>
        </button>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-red-500">Why Choose Us?</h2>
        <p className="text-lg text-gray-300 leading-relaxed"><ReactMarkdown>{about}</ReactMarkdown></p>
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
