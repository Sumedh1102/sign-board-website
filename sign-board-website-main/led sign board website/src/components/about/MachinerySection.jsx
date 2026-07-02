import React from "react";
import useFadeIn from "../../hooks/useFadeIn";

const machines = [
  {
    name: "Printing Machine",
    description: "High-resolution large format printing for stunning visuals.",
    image: "/images/machines/printing_machine.png",
  },
  {
    name: "UV Printer",
    description: "Vibrant, durable UV printing on a variety of substrates.",
    image: "/images/machines/uv_printer.png",
  },
  {
    name: "CNC Router",
    description: "Precision cutting and carving for complex sign shapes.",
    image: "/images/machines/cnc_router.png",
  },
  {
    name: "Laser Machine",
    description: "Flawless acrylic and metal laser cutting with exact precision.",
    image: "/images/machines/laser_machine.png",
  },
  {
    name: "Channel Bending Machine",
    description: "Automated bending for perfect 3D channel letter fabrication.",
    image: "/images/machines/channel_bending.png",
  },
  {
    name: "Vinyl Plotter",
    description: "Crisp, fast vinyl cutting for decals and detailed graphics.",
    image: "/images/machines/vinyl_plotter.png",
  },
];

export default function MachinerySection() {
  const fade = useFadeIn();

  return (
    <section
      ref={fade.ref}
      className={`py-20 lg:py-28 bg-[#F8FAFC] transition-all duration-700 ${
        fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold mb-4">
            Our Infrastructure
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            State of the Art Manufacturing
          </h2>
          <p className="text-slate-600 text-lg">
            We operate a fully equipped, modern production facility housing the latest machinery. 
            This allows us to maintain strict quality control and deliver precision signage on time, every time.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {machines.map((machine, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-500"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={machine.image}
                  alt={machine.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative z-20 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {machine.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {machine.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
