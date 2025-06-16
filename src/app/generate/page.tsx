"use client";

import { AgencyTemplate } from "@/templates/Agency";
import EcommerceTemplate from "@/templates/EcommerceTemplate";
import GymTemplate from "@/templates/GymTemplate";
import PortfolioTemplate from "@/templates/PortfolioiWebTemplate";
import { RealEstateTemplate } from "@/templates/RealEstate";
import { RestaurantTemplate } from "@/templates/RestaurantTemplate";
import { SaaSTemplate } from "@/templates/SaaSAppTemplate";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

interface AIContent {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}

export default function GeneratePage() {
  const searchParams = useSearchParams();
  const template = searchParams.get("template");

  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState<AIContent | null>(null);
  const [showDownload, setShowDownload] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!template || hasFetched.current) return;

    hasFetched.current = true;
    fetchContentFromAI(template);
  }, [template]);

  // text-to-image generation

  const fetchImageFromPrompt = async (prompt: string): Promise<string | null> => {
    try {
      const res = await fetch("/api/gen-image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      return data.image; // This is a base64 string
    } catch (err) {
      console.error("Image generation failed:", err);
      return null;
    }
  };

  const fetchContentFromAI = async (templateType: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Generate homepage for a ${templateType} website` }),
      });

      const data = await res.json();

      console.log("AI response (raw):", data);

      const parsed: AIContent = data.content;
      console.log("new pasring method", parsed);

      setContent(parsed);

      // image generation

      const prompts = [`E-commerce banner showing ${parsed?.title}`, `Product showcase: ${parsed?.subtitle}`, `Lifestyle image for: ${parsed?.about.slice(0, 80)}`, `Promotional image for CTA: ${parsed?.cta}`];

      const imagePromises = prompts.map((p) => fetchImageFromPrompt(p));
      const generatedImages = await Promise.all(imagePromises);
      console.log("images",generatedImages)
      setImages(generatedImages.filter((img) => img !== null) as string[]);

      setShowDownload(true);
      console.log("parsed content", content);
    } catch (error) {
      console.error("Failed to fetch or parse AI content:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderTemplate = () => {
    if (!content) return null;

    switch (template) {
      case "gym":
        return <GymTemplate {...content} showDownload={showDownload} />;
      case "ecomm":
        return <EcommerceTemplate {...content} showDownload={showDownload} images={images}/>;
      case "agency":
        return <AgencyTemplate {...content} showDownload={showDownload} />;
      case "SaaS":
        return <SaaSTemplate {...content} showDownload={showDownload} />;
      case "restaurant":
        return <RestaurantTemplate {...content} showDownload={showDownload} />;
      case "portfolio":
        return <PortfolioTemplate {...content} showDownload={showDownload} />;
      case "realEstate":
        return <RealEstateTemplate {...content} showDownload={showDownload} />;
      default:
        return <p className="text-red-600 mt-10">❌ Unsupported template type.</p>;
    }
  };

  return (
    <>
      {images&&console.log("images", images)}
      <div className="min-h-screen p-4">{loading ? <p className="text-center text-xl mt-20 animate-pulse">🔄 Generating your site...</p> : renderTemplate()}</div>;
    </>
  );
}
