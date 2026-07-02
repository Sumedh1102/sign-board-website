import React from 'react';
import useFadeIn from '../../hooks/useFadeIn';

export default function FounderSection() {
  const fade = useFadeIn();

  return (
    <section 
      ref={fade.ref}
      className={`py-20 lg:py-28 bg-white transition-all duration-700 ${
        fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/images/founder.png" 
                alt="Rahul Mehta - Founder" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600 rounded-2xl z-0 hidden sm:block"></div>
          </div>

          {/* Content */}
          <div className="lg:pl-6">
            <h3 className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold mb-4">
              Meet The Founder
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Driven by Passion, Built on Trust.
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded-full mb-8"></div>
            
            <div className="space-y-6">
              <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-blue-600 pl-6 bg-slate-50 p-4 rounded-r-lg">
                "When I started Santosh Sign Works, my vision was simple: to help businesses stand out and make a lasting impression. I realized that a sign is often the first interaction a customer has with a brand, and it needs to speak volumes about their quality and professionalism."
              </p>
              
              <p className="text-slate-600 leading-relaxed">
                Over the years, we've stayed true to our core values of innovation, exceptional craftsmanship, and unwavering dedication to our clients. Every project we undertake is a testament to our commitment to excellence. We don't just build signs; we build relationships and help brands tell their stories effectively.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="font-bold text-2xl text-slate-900">Rahul Mehta</h4>
              <p className="text-blue-600 font-medium mt-1">Founder & CEO, Santosh Sign Works</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
