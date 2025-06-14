
import { AgencyTemplate } from "@/templates/Agency";

import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
    <AgencyTemplate
      title="Strategic Solutions for Smart Growth"
      subtitle="We help businesses unlock potential through expert consulting."
      about="Agency is a full-service consultancy offering tailored strategies across marketing, tech, operations, and branding."
      cta="Let’s Transform Your Business"
      showDownload={false}
    />

    {/* Floating Button */}
    <Link href="/generate?template=agency">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

        <button className="backdrop-blur-md bg-black/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">
          ✨ Generate With AI
        </button>
      </div>
    </Link>
  </div>
  );
}