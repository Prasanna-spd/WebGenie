"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { GoDownload } from "react-icons/go";

interface TemplateProps {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
  showDownload: boolean;
}

export const AgencyTemplate: React.FC<TemplateProps> = ({ title, subtitle, about, cta, showDownload }) => {
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
    <div className="bg-white text-gray-900 font-sans h-screen relative">
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
