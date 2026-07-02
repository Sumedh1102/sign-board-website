import React from "react";
import {
  Flag,
  Users,
  Cog,
  Building2,
  Star,
  ArrowRight,
} from "lucide-react";

const timelineData = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Santosh Sign Boards was founded with a simple idea – to create high-quality signage that helps brands shine.",
    icon: Flag,
  },
  {
    year: "2018",
    title: "Growing Together",
    description:
      "We expanded our team and delivered our first 100+ successful projects.",
    icon: Users,
  },
  {
    year: "2020",
    title: "Upgrading Excellence",
    description:
      "Invested in advanced technology and expanded our production unit.",
    icon: Cog,
  },
  {
    year: "2022",
    title: "Nationwide Reach",
    description:
      "Served 1000+ clients across India with innovative signage solutions.",
    icon: Building2,
  },
  {
    year: "2024+",
    title: "Building the Future",
    description:
      "Continuing to innovate and set new standards in the signage industry.",
    icon: Star,
  },
];

const OurStory = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[320px_1fr] gap-16">
          {/* Left Content */}
          <div>
            <span className="text-blue-600 text-sm font-semibold uppercase tracking-wider">
              Our Story
            </span>

            <div className="w-12 h-1 rounded-full mt-3 mb-6"></div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
              The Journey
              <br />
              Behind Santosh Sign Boards
            </h2>

            <p className="text-slate-600 leading-relaxed mb-5">
              What started as a small team with a passion for design and quality
              has grown into a trusted signage partner for 500+ businesses
              across India.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              We believe great signage does more than just look good it
              builds brand identity, attracts attention, and creates impact.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-blue-100"></div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 relative">
              {timelineData.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="text-center flex flex-col items-center"
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 bg-white rounded-full border border-black flex items-center justify-center relative z-10">
                      <Icon
                        size={32}
                        className="text-slate-600"
                        strokeWidth={1.8}
                      />
                    </div>

                    {/* Dot */}
                    <div className="w-3 h-3 rounded-full bg-white mt-5 mb-5"></div>

                    {/* Year */}
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">
                      {item.year}
                    </h3>

                    {/* Title */}
                    <h4 className="font-semibold text-slate-900 mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 leading-relaxed max-w-[180px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;