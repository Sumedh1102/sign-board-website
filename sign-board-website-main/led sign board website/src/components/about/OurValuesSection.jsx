import { Gem, Lightbulb, Heart, CheckCircle, Users } from "lucide-react";
import useFadeIn from "../../hooks/useFadeIn";

const coreValues = [
  {
    icon: Gem,
    title: "Quality First",
    description:
      "We never compromise on quality. Premium materials and precise craftsmanship in every project.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead with modern technology and creative designs that set your brand apart.",
  },
  {
    icon: Heart,
    title: "Customer Focused",
    description:
      "Your goals are our priority. We listen, we understand and we deliver beyond expectations.",
  },
  {
    icon: CheckCircle,
    title: "Integrity",
    description:
      "Honest communication, transparent process and ethical business practices we stand by.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Our strength lies in our team. Together, we bring ideas to life with passion and precision.",
  },
];

export default function OurValuesSection() {
  const fade = useFadeIn();

  return (
    <section
      ref={fade.ref}
      className={`py-20 lg:py-12 bg-white transition-all duration-700 ${
        fade.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 uppercase tracking-[3px] text-sm font-semibold mb-4">
            OUR VALUES
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {coreValues.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="group text-center bg-white rounded-2xl border border-slate-200 p-7 transition-all duration-500"
              >
                {/* Icon */}
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5 transition-all duration-300">
                  <Icon className="w-20 h-20 text-blue-600 duration-300" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
