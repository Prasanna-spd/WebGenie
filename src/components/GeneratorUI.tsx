"use client";

import React, { useState, ChangeEvent } from "react";

interface GeneratedContent {
  title: string;
  subtitle: string;
  about: string;
  cta: string;
}



const GeneratorUI: React.FC = () => {
  const [prompt, setPrompt] = useState<string>("");
  const [content, setContent] = useState<GeneratedContent | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerate = async () => {
    setLoading(true);
    setContent(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const raw = data.content as string;

      
      console.log("ai data ",res)
      console.log("data from ai",data.content)

      const titleMatch = raw.match(/\*\*Title:\*\*\s*\n(.*?)\n/i);
      const subtitleMatch = raw.match(/\*\*Subtitle:\*\*\s*\n(.*?)\n/i);
      const aboutMatch = raw.match(/\*\*About:\*\*\s*\n([\s\S]*?)\n---/i);
      const ctaMatch = raw.match(/\*\*Call to Action \(CTA\):\*\*\s*\n([\s\S]*?)\n---/i);

      const parsed: GeneratedContent = {
        title: titleMatch?.[1]?.trim() || "N/A",
        subtitle: subtitleMatch?.[1]?.trim() || "N/A",
        about: aboutMatch?.[1]?.trim() || "N/A",
        cta: ctaMatch?.[1]?.trim() || "N/A",
      };

      setContent(parsed);
    } catch (error) {
      console.error("Error generating content:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-black">
      <h2 className="text-xl font-bold mb-4">🧠 AI Website Generator</h2>

      <textarea
        rows={4}
        className="w-full p-2 border rounded-lg mb-3"
        placeholder="Enter your idea, e.g. 'A website for yoga classes'"
        value={prompt}
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setPrompt(e.target.value)}
      />

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition hover:cursor-pointer"
      >
        {loading ? "Generating..." : "Generate Website"}
      </button>

      {content && (
        <div className="mt-6 text-left">
          <h3 className="text-xl font-semibold mb-2">Generated Preview:</h3>
          <p><strong>Title:</strong> {content.title}</p>
          <p><strong>Subtitle:</strong> {content.subtitle}</p>
          <p><strong>About:</strong> {content.about}</p>
          <p><strong>CTA:</strong> {content.cta}</p>
        </div>
      )}
    </div>
  );
};

export default GeneratorUI;
