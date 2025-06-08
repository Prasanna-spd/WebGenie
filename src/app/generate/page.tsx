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

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!template || hasFetched.current) return;

    hasFetched.current = true;
    fetchContentFromAI(template);
  }, [template]);

  const fetchContentFromAI = async (templateType: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: `Generate homepage for a ${templateType} website` }),
      });

      const data = await res.json();
      const raw = data.content as string;

      console.log("AI response (raw):", raw);
      const extractSingleLineOrNext = (label: string, raw: string): string => {
        const regex = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.*?)(?:\\n|$)(?!\\*\\*)`, "i");
        const match = raw.match(regex);

        if (match && match[1]) {
          const value = match[1].trim();
          if (value.length > 0) return value;
        }

        // Try to get next line if the line after the label was empty or not captured
        const fallbackRegex = new RegExp(`\\*\\*${label}:\\*\\*\\s*\\n+(.*?)(?:\\n|$)`, "i");
        const fallbackMatch = raw.match(fallbackRegex);

        return fallbackMatch?.[1]?.trim() || "N/A";
      };

      const extractMultiLineSection = (label: string, raw: string): string => {
        const regex = new RegExp(`\\*\\*${label}:\\*\\*\\s*\\n([\\s\\S]*?)\\n---`, "i");
        const match = raw.match(regex);
        return match?.[1]?.trim() || "N/A";
      };

      // Usage:
      const parsed: AIContent = {
        title: extractSingleLineOrNext("Title", raw),
        subtitle: extractSingleLineOrNext("Subtitle", raw),
        about: extractMultiLineSection("About", raw),
        cta: extractMultiLineSection("(Call[- ]to[- ]Action \\(CTA\\))", raw),
      };

      setContent(parsed);
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
        return <GymTemplate {...content} />;
      case "ecomm":
        return <EcommerceTemplate {...content} />;
      case "agency":
        return <AgencyTemplate {...content} />;
      case "SaaS":
        return <SaaSTemplate {...content} />;
      case "restaurant":
        return <RestaurantTemplate {...content} />;
      case "potfolio":
        return <PortfolioTemplate {...content} />;
      case "realEstate":
        return <RealEstateTemplate {...content} />;
      default:
        return <p className="text-red-600 mt-10">❌ Unsupported template type.</p>;
    }
  };

  return <div className="min-h-screen p-4">{loading ? <p className="text-center text-xl mt-20 animate-pulse">🔄 Generating your site...</p> : renderTemplate()}</div>;
}
