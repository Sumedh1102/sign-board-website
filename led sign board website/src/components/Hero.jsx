import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '/led-sign-images/a.png';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Base light background for the left content area */}
        <div className="absolute inset-0 bg-white" />

        {/* Hero image — covers the full right side of the section */}
        <div className="absolute top-0 right-0 w-[62%] h-full">
          <img
            src="https://i.postimg.cc/qMTYCW0q/Chat-GPT-Image-Jun-5-2026-09-30-36-PM.png"
            alt="LED signage installation"
            className="w-full h-full object-cover object-center"
          />
          {/* Left-side fade: blends the image edge into the white content area */}
          <div
            className="absolute inset-y-0 left-0 w-2/5"
            style={{
              background: 'linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 30%, rgba(255,255,255,0.4) 65%, transparent 100%)',
            }}
            aria-hidden="true"
          />
        </div>

        {/* Overlay for text readability on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent w-[55%]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-xl">
          {/* Label */}
          <div className="flex items-center gap-2 mb-6 animate-fade-in">
            <span className="text-xs font-bold tracking-[0.25em] text-gray-500 uppercase">
              Design. Build. Install.
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-gray-900 animate-fade-in-up">
            Illuminate Your Brand
            <br />
            with Premium
            <br />
            <span className="text-primary-600">LED Signage</span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-base lg:text-md text-gray-500 leading-relaxed max-w-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Custom LED Sign Boards, 3D Letters & Digital Displays
            that make your brand shine day & night.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 text-white px-7 py-5 rounded-full font-semibold text-sm hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/25">
              Get Free Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust badge */}
          <div className="mt-10 flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <CheckCircle2 className="w-5 h-5 text-primary-600" />
            <span className="text-sm text-gray-500">
              Trusted by <span className="font-semibold text-gray-900">500+ Businesses</span> Across India
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
