
import { RestaurantTemplate } from "@/templates/RestaurantTemplate";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
    <RestaurantTemplate
      title="Taste the Passion. Savor the Experience"
      subtitle="Authentic flavors, unforgettable dining, and heartwarming hospitality."
      about="Welcome !!, where we serve more than just food—we serve experiences......."
      cta="Hungry Yet?"
    />

    {/* Floating Button */}
    <Link href="/generate?template=restaurant">
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">

        <button className="backdrop-blur-md bg-black/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">
          ✨ Generate With AI
        </button>
      </div>
    </Link>
  </div>
  );
}