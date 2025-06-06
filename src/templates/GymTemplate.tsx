import { ContentProps } from "@/types/content";
import React from "react";


const GymTemplate: React.FC<ContentProps> = ({ title, subtitle, about, cta }) => {
  return (
    <div className="bg-white text-black">
      <header className="py-20 text-center bg-gradient-to-r from-red-500 to-yellow-500 text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="mt-4 text-lg">{subtitle}</p>
      </header>

      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
        <p>{about}</p>
      </section>

      <section className="p-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 rounded shadow text-center">Certified Trainers</div>
        <div className="border p-6 rounded shadow text-center">Flexible Schedules</div>
        <div className="border p-6 rounded shadow text-center">Modern Equipment</div>
      </section>

      <footer className="text-center py-10 bg-gray-900 text-white">
        <button className="bg-emerald-500 text-white px-6 py-3 rounded-full">
          {cta}
        </button>
      </footer>
    </div>
  );
};

export default GymTemplate;