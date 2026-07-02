import {
  Users,
  BriefcaseBusiness,
  Award,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      title: "Happy Clients",
      desc: "Businesses that trust us for their branding needs.",
    },
    {
      icon: BriefcaseBusiness,
      value: "1200+",
      title: "Projects Completed",
      desc: "Successfully delivered LED signage projects across industries.",
    },
    {
      icon: Award,
      value: "8+",
      title: "Years of Experience",
      desc: "Expertise in designing and delivering premium signage.",
    },
    {
      icon: MapPin,
      value: "25+",
      title: "Cities Served",
      desc: "Proudly serving clients across multiple cities in India.",
    },
    {
      icon: ShieldCheck,
      value: "99%",
      title: "Client Satisfaction",
      desc: "Commitment to quality and exceptional service.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-neutral-300" />
            <span className="uppercase tracking-[0.25em] text-sm font-medium text-neutral-700">
              Our Stats
            </span>
            <div className="w-16 h-px bg-neutral-300" />
          </div>

          <h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-black">
            Numbers That Define Our{" "}
            <span className="italic font-serif font-normal">
              Success
            </span>
          </h2>

          <p className="mt-6 text-lg text-neutral-500 leading-relaxed">
            Every number represents our commitment to quality,
            trust, and excellence in LED signage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={index}
                className="group relative bg-white border-2 border-neutral-100 rounded-2xl p-8 text-center"
              >
                {/* Icon Circle */}
                <div className="relative w-28 h-28 mx-auto mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-neutral-200" />

                  <div className="absolute inset-[14px] rounded-full bg-neutral-50 border border-neutral-100" />

                  {/* Small Dot */}
                  <div className="absolute right-1 top-1/2 -translate-y-8 w-2 h-2 rounded-full bg-neutral-500" />

                  <Icon
                    size={36}
                    strokeWidth={1.8}
                    className="relative text-black"
                  />
                </div>

                {/* Number */}
                <h3 className="text-5xl font-light text-black tracking-tight">
                  {stat.value}
                </h3>

                {/* Divider */}
                <div className="w-14 h-px mx-auto my-5" />







            

                {/* Title */}
                <h4 className="text-xl font-medium text-black mb-4">
                  {stat.title}
                </h4>

                {/* Description */}
                <p className="text-neutral-500 text-sm leading-7">
                  {stat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}