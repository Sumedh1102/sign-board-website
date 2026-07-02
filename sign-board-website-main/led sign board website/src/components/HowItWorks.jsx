import React from "react";
import {
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Headphones,
} from "lucide-react";

const processSteps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "We understand your brand, goals, and requirements.",
    image:
      "https://i.postimg.cc/W3GQrstk/Chat-GPT-Image-Jun-6-2026-03-03-07-PM.png",
  },
  {
    id: "02",
    title: "Design",
    description:
      "Our team creates custom 3D designs for your approval.",
    image:
      "https://i.postimg.cc/tCS8FSR1/Chat-GPT-Image-Jun-6-2026-03-03-08-PM.png",
  },
  {
    id: "03",
    title: "Manufacturing",
    description:
      "Precision crafting with high-quality materials.",
    image:
      "https://i.postimg.cc/G2x5tzSQ/Chat-GPT-Image-Jun-6-2026-03-03-12-PM.png",
  },
  {
    id: "04",
    title: "Installation",
    description:
      "Professional installation with attention to every detail.",
    image:
      "https://i.postimg.cc/CMvc2Zyq/Chat-GPT-Image-Jun-6-2026-03-03-14-PM.png",
  },
  {
    id: "05",
    title: "Support",
    description:
      "After-installation support and warranty coverage.",
    image:
      "https://i.postimg.cc/tTBN8cM8/Chat-GPT-Image-Jun-6-2026-03-03-16-PM.png",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-[0.35em] text-blue-600 text-sm font-semibold">
            Our Process
          </span>

          <h2 className="mt-4 text-5xl lg:text-5xl font-bold text-slate-900">
            How It{" "}
            <span className="text-slate-900">Works</span>
          </h2>

          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            A simple, transparent process to deliver premium LED signage
            from start to finish.
          </p>
        </div>

        {/* Process */}
        <div className="relative mt-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-[75px] left-[13%] right-[13%] border-t border-dashed border-blue-200"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="relative text-center"
              >
                {/* Circle Image */}
                <div className="relative mx-auto w-36 h-36">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-50 to-white shadow-xl"></div>

                  {/* Accent Arc */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-slate-500 border-r-slate-500 rotate-45"></div>

                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-3 w-[calc(100%-24px)] h-[calc(100%-24px)] rounded-full object-cover"
                  />
                </div>
 
                 <div className="w-12 h-1 mx-auto mt-4"></div>
                
                {/* Title */}
                <h3 className="mt-3 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Accent Line */}
                <div className="w-12 h-1 mx-auto"></div>

                {/* Description */}
                <p className="mt-5 text-slate-500 text-sm max-w-[240px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Features */}
        <div className="mt-24 bg-white border-2 border-slate-100 rounded-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <Feature
              icon={<ShieldCheck size={28} />}
              title="Premium Quality"
              subtitle="Guaranteed"
            />

            <Feature
              icon={<Clock3 size={28} />}
              title="On-Time Delivery"
              subtitle="Every Time"
            />

            <Feature
              icon={<BadgeCheck size={28} />}
              title="5-Year Warranty"
              subtitle="Peace of Mind"
            />

            <Feature
              icon={<Headphones size={28} />}
              title="Reliable Support"
              subtitle="Always Here"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-4 p-8 border-slate-100">
      <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">
          {title}
        </h4>
        <p className="text-sm text-slate-500 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
}