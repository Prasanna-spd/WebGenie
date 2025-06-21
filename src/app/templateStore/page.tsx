"use client";

import React from "react";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { templates } from "@/lib/template";

export default function TemplateStorePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen px-6 py-28  bg-gray-900">
      <h1 className="text-3xl font-bold text-center text-white mb-10">🧩 Choose Your Template</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {templates.map((template) => (
          <div key={template.id} onClick={() => router.push("/preview/ecomm")} className="bg-white relative text-black p-5 rounded-xl shadow hover:shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-5">
            {template.id !== "ecomm" && <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-gray-700/70 text-center text-white text-lg font-bold px-4 py-2 rounded shadow">
            <p className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Restricted · Template under progress</p></div>}

            <div className="w-full h-48 relative rounded overflow-hidden mb-4">
              <Image src={template.image} alt={template.title} fill className="object-cover" />
            </div>
            <h2 className="text-xl font-semibold mb-2">{template.title}</h2>
            <p className="text-sm text-gray-600">{template.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
