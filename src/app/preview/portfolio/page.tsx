import PortfolioTemplate from "@/templates/PortfolioiWebTemplate";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
    <PortfolioTemplate
      title="Showcase Your Work with Elegance & Impact"
      subtitle="A personal portfolio to display your creativity, skills, and achievements."
      about="Welcome to portfolio. This space is thoughtfully designed ........"
      cta="Ready to get noticed?"
    />

    {/* Floating Button */}
    <Link href="/generate?template=portfolio">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

        <button className="backdrop-blur-md bg-white/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">
          ✨ Generate With AI
        </button>
      </div>
    </Link>
  </div>
  );
}