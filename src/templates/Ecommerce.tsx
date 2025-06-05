import { ContentProps } from "@/types/content";

const EcommerceTemplate = ({ title, subtitle, about, cta }: ContentProps) => {
    return (
      <div className="bg-white text-black">
        <header className="py-20 text-center bg-gray-100">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="mt-4 text-lg">{subtitle}</p>
        </header>
  
        <section className="p-10 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">About</h2>
          <p>{about}</p>
        </section>
  
        <footer className="text-center py-10 bg-gray-100">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full">
            {cta}
          </button>
        </footer>
      </div>
    );
  };
  
  export default EcommerceTemplate;
  