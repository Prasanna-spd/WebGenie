import RippleBackground from "@/components/RippleBg";
// import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
    <RippleBackground />
    <div className="z-10 text-center">
      <h1 className="text-4xl font-bold">Welcome to Web Genie</h1>
      <p className="mt-4 text-lg">Your wish-built web presence ✨</p>
    </div>
  </main>
  );
}
