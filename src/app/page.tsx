import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Advantages } from "@/components/advantages";
import { PropertyShowcase } from "@/components/property-showcase";
import { Testimonials } from "@/components/testimonials";
import { Gallery } from "@/components/gallery";
import { Location } from "@/components/location";
import { Process } from "@/components/process";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { MobileCTA } from "@/components/mobile-cta";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#221C18] antialiased">
      {/* 1. Header & Navigation matching Figma */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 overflow-x-hidden">
        {/* 2. Hero Section + Floating Search Filter matching Figma */}
        <Hero />

        {/* 3. About Section ("We Help You To Find Your Dream Home") */}
        <About />

        {/* 4. Advantages ("Why Choose Us" 4-Cards Grid) */}
        <Advantages />

        {/* 5. Property Showcase ("Our Popular Residences" 3-Cards) */}
        <PropertyShowcase />

        {/* 6. Testimonials ("What People Say About Dwello" Carousel) */}
        <Testimonials />

        {/* 7. Gallery Section */}
        <Gallery />

        {/* 8. Location Section */}
        <Location />

        {/* 9. Consultation Process */}
        <Process />

        {/* 10. FAQ & Inquiry ("Do You Have Any Questions? Get Help From Us") */}
        <FAQ />
      </main>

      {/* 11. Footer matching Figma */}
      <Footer />

      {/* 12. Fixed Bottom Mobile WhatsApp Action */}
      <MobileCTA />
    </div>
  );
}
