
import { SaaSTemplate } from "@/templates/SaaSAppTemplate";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
    <SaaSTemplate
      title="Empower Your Business "
      subtitle="A sleek landing page for your next big software product."
      about="SaaS page is a next-gen SaaS solution that solves [specific problem] for [target audience]......"
      cta="Start Your Free Trial Now"
    />

    {/* Floating Button */}
    <Link href="/generate?template=SaaS">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

        <button className="backdrop-blur-md bg-black/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">
          ✨ Generate With AI
        </button>
      </div>
    </Link>
  </div>
  );
}