import RippleBackground from "@/components/RippleBg";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <RippleBackground />
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Web Genie</h1>
        <p className="mt-4 text-lg text-blue-200">AI-Powered Website Builder</p>
      </div>
    </div>
  );
}
