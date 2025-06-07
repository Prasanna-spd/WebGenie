import EcommerceTemplate from "@/templates/EcommerceTemplate";
import GymTemplate from "@/templates/GymTemplate";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
    <GymTemplate
      title="Push Beyond Limits"
      subtitle="Train with top coaches and conquer your fitness goals."
      about="Our gym is more than a workout space — it's a lifestyle revolution..."
      cta="Start Training"
    />

    {/* Floating Button */}
    <Link href="/generate?template=gym">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

        <button className="backdrop-blur-md bg-white/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">
          ✨ Generate With AI
        </button>
      </div>
    </Link>
  </div>
  );
}
