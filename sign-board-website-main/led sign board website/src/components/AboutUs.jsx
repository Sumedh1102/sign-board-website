import HeroSection from "./about/HeroSection";
import OurStorySection from "./about/OurStorySection";
import OurValuesSection from "./about/OurValuesSection";
import TeamSection from "./about/TeamSection";
import AboutCTASection from "./about/AboutCTASection";
import FounderSection from "./about/FounderSection";
import MachinerySection from "./about/MachinerySection";


export default function AboutUs() {
  return (
    <section id="about">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story */}
      <OurStorySection />

      {/* Our Values */}
      <OurValuesSection />

      {/* Founder */}
      <FounderSection />

      {/* Machinery */}
      <MachinerySection />

      {/* CTA */}
      <div className="bg-slate-50 py-20 lg:py-28">
        <AboutCTASection />
      </div>
    </section>
  );
}