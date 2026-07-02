import { ArrowRight, Lightbulb } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contact" className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-primary-900/30 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900/20 to-transparent" />
        {/* Decorative dots pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-primary-600/20 flex items-center justify-center">
              <Lightbulb className="w-7 h-7 text-primary-400" />
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white">
                Ready to Illuminate Your Brand?
              </h2>
              <p className="text-gray-400 mt-1">
                Let's create something brilliant together.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="mailto:info@santoshsignworks.com"
            className="inline-flex items-center gap-3 bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary-600/30 group flex-shrink-0"
          >
            Get Free Quote
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
