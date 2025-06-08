import EcommerceTemplate from "@/templates/EcommerceTemplate";
import GymTemplate from "@/templates/GymTemplate";
import Link from "next/link";

export default function PreviewPage() {
  return (
    <div className="relative min-h-screen">
      <EcommerceTemplate title="Unwind, Shop, Repeat" subtitle="Discover top-quality products with seamless shopping experiences." about="Welcome to our online store where style meets convenience. From fashion to electronics, we've got everything to elevate your lifestyle. Fast delivery, easy returns, and trusted service — all at your fingertips." cta="Shop Now" />

      {/* Floating Button */}
      <Link href="/generate?template=ecomm">
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
          <button className="backdrop-blur-md bg-black/30 border border-white/50 text-black font-semibold px-5 py-3 rounded-full shadow-md hover:backdrop-blur-none hover:bg-indigo-600 hover:text-white hover:shadow-xl hover:cursor-pointer transition-all duration-300">✨ Generate With AI</button>
        </div>
      </Link>
    </div>
  );
}
