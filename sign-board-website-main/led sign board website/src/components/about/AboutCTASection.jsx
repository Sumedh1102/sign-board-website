import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function AboutCTASection() {
  return (
    <section className="py-0">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 rounded-3xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Image with large text */}
            <div className="relative h-[300px] lg:h-auto min-h-[350px] overflow-hidden">
              <img
                src="/about-signage.jpg"
                alt="LED Signage"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-800/50" />
              <div className="absolute inset-0 flex items-center p-8 lg:p-12">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
                  LET'S
                  <br />
                  BUILD
                  <br />
                  BRANDS
                  <br />
                  <span className="text-blue-300">THAT SHINE</span>
                </h2>
              </div>
            </div>

            {/* Right - Content */}
            <div className="p-8 lg:p-12 xl:p-16 flex flex-col justify-center">
              <p className="text-blue-300 uppercase tracking-[3px] text-xs font-semibold mb-4">
                READY TO GET STARTED?
              </p>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight">
                Let's Create Something
                <br />
                Brilliant Together.
              </h3>

              <p className="mt-5 text-blue-200/80 leading-relaxed text-base max-w-md">
                Share your vision with us and let our experts craft the perfect
                signage solution for your brand.
              </p>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-3.5 rounded-xl font-semibold text-sm hover:bg-white hover:text-blue-800 transition-all duration-300 group"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
