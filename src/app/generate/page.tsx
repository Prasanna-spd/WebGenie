"use client";

import EcommerceTemplate from "@/templates/EcommerceTemplate";
import GymTemplate from "@/templates/GymTemplate";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


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

  useEffect(() => {
    if (!template) return;
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

      const titleMatch = raw.match(/\*\*Title:\*\*\s*\n(.*?)\n/i);
      const subtitleMatch = raw.match(/\*\*Subtitle:\*\*\s*\n(.*?)\n/i);
      const aboutMatch = raw.match(/\*\*About:\*\*\s*\n([\s\S]*?)\n---/i);
      const ctaMatch = raw.match(/\*\*Call to Action \(CTA\):\*\*\s*\n([\s\S]*?)\n---/i);

      const parsed: AIContent = {
        title: titleMatch?.[1]?.trim() || "N/A",
        subtitle: subtitleMatch?.[1]?.trim() || "N/A",
        about: aboutMatch?.[1]?.trim() || "N/A",
        cta: ctaMatch?.[1]?.trim() || "N/A",
      };

      setContent(parsed);
      console.log("parsed content",content)
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
      default:
        return <p className="text-red-600 mt-10">❌ Unsupported template type.</p>;
    }
  };

  return (
    <div className="min-h-screen p-4">
      {loading ? (
        <p className="text-center text-xl mt-20 animate-pulse">🔄 Generating your site...</p>
      ) : (
        renderTemplate()
      )}
    </div>
  );
}
