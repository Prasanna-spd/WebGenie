import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TemplateSlider from "@/components/TemplateSlider";
import Vision from "@/components/Vision";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <TemplateSlider />
      <Vision/>
      <ContactUs/>
    </main>
  );
}
