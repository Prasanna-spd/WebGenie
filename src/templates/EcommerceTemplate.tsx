"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { GoDownload } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import EditingPanel from "@/components/EditingPanel";

export interface EcommerceTemplateProps {
  title: string;
  subtitle: string;
  brand_name?: string;
  about: string;
  cta: string;
  images?: Array<string>;
  address?: string;
  contactNo?: string;
  email?: string;
  showDownload: boolean;

  heroImages?: string[];
  featureImages?: string[];
  bestSellingImages?: string[];
  brands?: string[];
}

const brandNames = ["NIKE", "HOKA", "LI-NING", "PUMA"];

const brandStyles = ["text-4xl font-extrabold uppercase tracking-widest font-[impact] text-black", "text-4xl font-semibold italic text-gray-900 border px-4 py-1 rounded-full border-black shadow-sm", "text-4xl font-bold italic tracking-tight border-b-4 border-black text-black", "text-4xl font-bold text-black relative before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-1 before:bg-black"];

const heroDefaultImages = ["/hero1.png", "/hero2.png", "/hero3.png", "/hero4.png"];

// to convert image to base64 format
async function imageUrlToBase64(url: string): Promise<string> {
  const res = await fetch(url);
  const blob = await res.blob();
  return await new Promise((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.readAsDataURL(blob);
  });
}

const EcommerceTemplate: React.FC<EcommerceTemplateProps> = ({ title, subtitle, about, cta, showDownload, images, brand_name, address, contactNo, email, heroImages, featureImages, bestSellingImages, brands }) => {
  const [base64HeroImages, setBase64HeroImages] = useState<string[]>([]);
  const [base64FeatureImages, setBase64FeatureImages] = useState<string[]>([]);
  const [base64BestSellingImages, setBase64BestSellingImages] = useState<string[]>([]);
  const [base64heroDefaultImages, setBase64heroDefaultImages] = useState<string[]>([]);

  const [showEditor, setShowEditor] = useState(true);

  const [templateData, setTemplateData] = useState<EcommerceTemplateProps>({
    title,
    subtitle,
    about,
    cta,
    showDownload,
    images: images ?? [],
    brand_name: brand_name ?? "",
    address: address ?? "",
    contactNo: contactNo ?? "",
    email: email ?? "",
    heroImages: heroImages ?? [],
    featureImages: featureImages ?? [],
    bestSellingImages: bestSellingImages ?? [],
    brands: brands ?? [],
  });

  useEffect(() => {
    if (images && images.length > 0) {
      const heroImages = images.slice(0, 3);
      const featureImages = images.slice(3, 7);
      const bestSellingImages = images.slice(7);

      setBase64HeroImages(heroImages);
      setBase64FeatureImages(featureImages);
      setBase64BestSellingImages(bestSellingImages);
    }
  }, [images]);

  useEffect(() => {
    if (images && images.length > 0) return;

    const convertImages = async () => {
      const [hero, feature, bestSelling, heroDefaultImagesbase64] = await Promise.all([Promise.all((templateData.heroImages ?? []).map((img) => imageUrlToBase64(img))), Promise.all((templateData.featureImages ?? []).map((img) => imageUrlToBase64(img))), Promise.all((templateData.bestSellingImages ?? []).map((img) => imageUrlToBase64(img))), Promise.all((heroDefaultImages ?? []).map((img) => imageUrlToBase64(img)))]);

      setBase64HeroImages(hero);
      setBase64FeatureImages(feature);
      setBase64BestSellingImages(bestSelling);
      setBase64heroDefaultImages(heroDefaultImagesbase64);
    };

    convertImages();
  }, [templateData.heroImages, templateData.featureImages, templateData.bestSellingImages, images]);

  const exportToHTML = () => {
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>${templateData.brand_name}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     
     <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
     <link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
    </head>
    <body class="bg-white text-gray-900 font-sans">
  
      <!-- Navbar -->
      <header class="h-24 flex items-center justify-between px-6 lg:px-16">
        <div class="text-xl font-bold">${templateData.title}</div>
        <nav class="hidden md:flex gap-6">
          <a href="#" class="hover:underline">Homepage</a>
          <a href="#" class="hover:underline">Menu</a>
          <a href="#" class="hover:underline">Contact</a>
        </nav>
        <div class="flex items-center gap-2 bg-orange-300 px-2 py-1 rounded-md">
          <img src="/phone.png" width="20" height="20" alt="Phone" />
          <span>123 456 78</span>
        </div>
      </header>
  
      <!-- Hero Section -->

<div class="w-full h-[80vh] overflow-hidden">
  <div id="default-carousel" class="relative w-full p-4 h-full" data-carousel="slide" data-carousel-interval="3000">
    
    <!-- Carousel wrapper -->
    <div class="relative w-full h-full">
      ${(base64HeroImages?.length ? base64HeroImages : base64heroDefaultImages)
        .map(
          (img, i) => `
          <div class="hidden duration-700 ease-in-out w-full h-full p-4" data-carousel-item>
            <img 
              src="${img}" 
              alt="Hero Slide ${i + 1}" 
              class="w-full h-full object-cover rounded-4xl"
            />
            <div class="absolute bottom-8 left-8 text-black drop-shadow-xl">
              <h1 class="text-4xl font-bold">${templateData.title}</h1>
              <p class="mt-2 text-xl">${templateData.subtitle}</p>
            </div>
          </div>`
        )
        .join("")}
    </div>

  </div>
</div>


      

  
      <!-- Shop From The Gram -->
      <section class="w-full px-6 lg:px-12 py-20">
        <div class="text-center mb-10">
          <h2 class="text-4xl font-bold">Shop From The Gram</h2>
          <p class="text-xl text-gray-400">Discover trendy styles inspired by your favorite social media moments!</p>
        </div>
        <div class="flex flex-wrap justify-center gap-4">
          ${(base64FeatureImages?.length ? base64FeatureImages : base64heroDefaultImages)
            .map(
              (img, i) => `
            <div style="width: 337.5px; height: 449.7px" class="relative rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <img src=${img} class="w-full h-full object-cover" />
              <div class="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl">
                <h3 class="text-lg font-semibold">Style ${i}</h3>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
  
      <!-- Best Selling -->
      <section class="w-full px-6 lg:px-16 py-20 text-center">
        <h2 class="text-4xl font-bold">Best Selling</h2>
        <p class="text-xl text-gray-400">Discover our top-rated items, loved for their comfort and style.</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          ${(base64BestSellingImages?.length ? base64BestSellingImages : base64heroDefaultImages)
            .map(
              (img, i) => `
            <div key=${i} class="bg-white p-4 border rounded shadow hover:shadow-md transition">
              <div class="bg-gray-200 h-40 rounded mb-4">
                  
                  <img
                src=${img} 
                alt="Feature Image"
                class="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
                </div>
              <h3 class="font-semibold mb-2">Product Name</h3>
              <p class="text-sm text-gray-600">Short product description.</p>
              <button class="mt-4 text-emerald-600 font-medium hover:underline">View More</button>
            </div>
          `
            )
            .join("")}
        </div>
      </section>
  
      <!-- Brands You'll Love -->
      <section class="w-full px-6 lg:px-16 py-20 text-center">
        <h2 class="text-4xl font-bold text-black mb-2">Brands You'll Love</h2>
        <p class="text-lg text-gray-600 mb-10">Express your style with our standout collection—fashion meets sophistication.</p>
          <div class="grid grid-cols-2 md:grid-cols-4  gap-10">
    ${(templateData?.brands?.length ? templateData.brands : brandNames)
      .map((brand, index) => {
        const brandClass = brandStyles[index % brandStyles.length];
        return `<div class="${brandClass}">${brand}</div>`;
      })
      .join("")}
  </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 text-white px-6 py-12">
        <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-semibold mb-4">About Us</h2>
            <p class="text-gray-300 text-lg leading-relaxed">${templateData.about}</p>
            <button class="mt-6 bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">${templateData.cta}</button>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xl font-semibold mb-2">Contact Us</h3>
              <ul class="text-gray-400 space-y-1">
                <li>Email: ${templateData.email ? templateData.email : "contact@example.com"}</li>
                <li>Phone:${templateData.contactNo ? templateData.contactNo : "+91 12345 67890"} +91 12345 67890</li>
                <li>Support Hours: 9 AM – 6 PM</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Privacy Policy</h3>
              <ul class="text-gray-400 space-y-1">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Return Policy</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-semibold mb-2">Address</h3>
              <p class="text-gray-400">${templateData.address ? templateData.address : "123 Street Name"},<br>City, State, 000000<br>Country</p>
            </div>
          </div>
        </div>
      </footer>
  

     <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>





    </body>
    </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "downloadable_page.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // console.log(templateData)
  return (
    <>
      <div className="flex flex-col  md:flex-row max-w-full px-4 md:px-8 mt-10 gap-6">
        {/* Left: Editing Panel */}
        {showEditor && (
          <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-50 p-4 rounded-md shadow-md h-[90vh] overflow-y-auto overflow-x-hidden sticky top-6 text-black">
            <h1 className="text-2xl font-bold mb-4">Edit Panel</h1>
            <EditingPanel {...templateData} onChange={setTemplateData} />
          </div>
        )}
        {/* Right: Live Preview */}

        <div className={`w-full transition-all duration-300 ${showEditor ? "md:w-3/4" : "md:w-full"}`}>
          <div className="flex-1 bg-white p-1.5 rounded-md shadow-md overflow-auto">
            <div className="bg-white text-gray-900 font-sans">
              {/* --------------------------------------------------------------------------------------------------- */}
              {/* Hero Section */}
              <div className="h-12 md:h-24 text-black flex items-center justify-between md:transform md:translate-x-0.5 px-4 lg:px-14 xl:px-16 ">
                {/* Left-side Logo/name */}
                <div className="text-xl md:font-bold">
                  <Link href="/">{templateData?.brand_name||"Sample Name"}</Link>
                  {/* replace title with brand name {brand} */}
                </div>

                {/* Middle nav items (absolute center) */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex  gap-6">
                  <Link href="/">Homepage</Link>
                  <Link href="/menu">Menu</Link>
                  <Link href="/">Contact</Link>
                </div>

                {/* Right items */}
                <div className="hidden md:flex items-center gap-4">
                  <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 rounded-md">
                    <Image src="/phone.png" alt="" width={20} height={20} />
                    <span>123 456 78</span>
                  </div>
                </div>
              </div>

              {/* First hero carousel section */}
              <div className="relative h-[80vh] mx-4 lg:mx-14 rounded-2xl overflow-hidden">
                <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  spaceBetween={0}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  speed={600} // <-- smooth transition time
                  pagination={{ clickable: true }}
                  navigation
                  className="h-full w-full"
                >
                  {/* replace hero images withe the ai generated images for carousel */}
                  {(base64HeroImages?.length ? base64HeroImages : base64heroDefaultImages).map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="h-[80vh] w-full bg-cover bg-center relative " style={{ backgroundImage: `url(${image})` }}>
                        <div className="absolute bottom-4 left-4 text-black">
                          <h1 className="text-4xl font-bold">
                            <ReactMarkdown>{templateData.title}</ReactMarkdown>
                          </h1>
                          <div className="mt-4 text-xl">
                            <ReactMarkdown>{templateData.subtitle}</ReactMarkdown>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* ----------------------------------------------------------------------------------------------------------------------- */}

              {/* features section */}

              <div className="h-auto w-full px-4 lg:px-12 xl:px-16 py-22">
                {/* Header */}
                <div className="text-center mb-10">
                  <h2 className="text-4xl text-black font-bold">Shop From The Gram</h2>
                  <p className="text-xl text-gray-400 font-light">Discover trendy styles inspired by your favorite social media moments!</p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {(base64FeatureImages?.length ? base64FeatureImages : base64heroDefaultImages).map((img, i) => (
                    <div key={i} className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                      <img src={img} alt={`Style ${i}`} className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105" />
                      <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-xl">
                        <h3 className="text-lg font-semibold">Style {i + 1}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="w-full px-4 lg:px-14 xl:px-16 py-22 text-center">
                  <h2 className="text-4xl font-bold">Best Selling</h2>
                  <p className="text-xl text-gray-400 font-light">Discover our top-rated items, loved for their comfort and style.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                    {(base64BestSellingImages?.length ? base64BestSellingImages : base64heroDefaultImages).map((img, i) => (
                      <div key={i} className="bg-white p-4 border rounded shadow hover:shadow-md transition">
                        <div className="bg-gray-200 h-40 rounded mb-4">
                          {/* replace  the features images withe the ai generaed images */}
                          <img
                            src={img} // Replace with real paths
                            alt={`Style ${i}`}
                            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <h3 className="font-semibold mb-2">Product Name</h3>
                        <p className="text-sm text-gray-600">Short product description.</p>
                        <button className="mt-4 text-emerald-600 font-medium hover:underline">View More</button>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full py-10 px-4 lg:px-14 text-center">
                  {/* Title */}
                  <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">Brands You'll Love</h2>
                  <p className="text-md md:text-lg text-gray-600 mb-10">Express your style with our standout collection—fashion meets sophistication.</p>

                  <div className="grid grid-cols-4 gap-10">
                    
                    {(templateData.brands && templateData.brands.length > 0 ? templateData.brands : brandNames).map((brand, index) => (
                      <div key={index} className={brandStyles[index % brandStyles.length]}>
                        {brand}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ------------------------------------------------------------------------------------------------------------------------- */}

              {/* Footer Section */}
              <footer className="bg-gray-900 text-white px-6 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* About Us - Left Side */}
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                    <div className="text-gray-300 text-lg leading-relaxed">
                      <ReactMarkdown>{templateData.about}</ReactMarkdown>
                    </div>

                    <button className="mt-6 bg-white text-emerald-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
                      <ReactMarkdown>{templateData.cta}</ReactMarkdown>
                    </button>
                  </div>

                  {/* Right Side - Three Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                    {/* Contact Us */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                      <ul className="text-gray-400 space-y-1">
                        <li>Email: {templateData?.email}</li>
                        <li>Phone: {templateData?.contactNo}</li>
                        <li>Support Hours: 9 AM – 6 PM</li>
                      </ul>
                    </div>

                    {/* Privacy Policy */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
                      <ul className="text-gray-400 space-y-1">
                        <li>
                          <a href="/terms" className="hover:underline">
                            Terms of Service
                          </a>
                        </li>
                        <li>
                          <a href="/privacy" className="hover:underline">
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a href="/returns" className="hover:underline">
                            Return Policy
                          </a>
                        </li>
                      </ul>
                    </div>

                    {/* Address */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Address</h3>
                      <p className="text-gray-400">
                        {templateData?.address}
                        <br />
                        City, State, 000000
                        <br />
                        Country
                      </p>
                    </div>
                  </div>
                </div>
              </footer>

              {/* Download Button */}
              {showDownload && (
              <div className="text-center absolute top-2 right-5">
                <button onClick={exportToHTML} className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition flex items-center gap-2">
                  <GoDownload className="text-xl" />
                  Download as HTML
                </button>
              </div>
               )}
            </div>
          </div>
        </div>

        <button onClick={() => setShowEditor(!showEditor)} className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-6 py-3 rounded-full shadow-lg z-50 hover:shadow-xl hover:cursor-pointer">
          {showEditor ? "Hide Editor" : "Show Editor"}
        </button>
      </div>
    </>
  );
};

export default EcommerceTemplate;
