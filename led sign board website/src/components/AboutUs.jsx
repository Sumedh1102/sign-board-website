import HeroSection from "./about/HeroSection";
import OurStorySection from "./about/OurStorySection";
import OurValuesSection from "./about/OurValuesSection";
import TeamSection from "./about/TeamSection";
import AboutCTASection from "./about/AboutCTASection";

export default function AboutUs() {
  return (
    <section id="about">
      {/* Hero Section */}
      <HeroSection />

      {/* Our Story */}
      <OurStorySection />

      {/* Our Values */}
      <OurValuesSection />

      {/* Team */}
      <TeamSection />

      {/* CTA */}
      <div className="bg-slate-50 py-20 lg:py-28">
        <AboutCTASection />
      </div>
    </section>
  );
}