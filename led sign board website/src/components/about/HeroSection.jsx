import {
  Diamond,
  Pencil,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      icon: <Diamond size={22} />,
      title: "Premium Quality",
      desc: "We use the best materials and modern technology.",
    },
    {
      icon: <Pencil size={22} />,
      title: "Custom Designs",
      desc: "Tailored signage solutions for every brand.",
    },
    {
      icon: <Truck size={22} />,
      title: "On-Time Delivery",
      desc: "We value your time, always deliver on schedule.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "5-Year Warranty",
      desc: "Quality you can trust, warranty that lasts.",
    },
  ];

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
              About Us
            </p>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-slate-900">
              We Create Signs <br />
              That Make Brands <br />
              <span className="text-blue-600">Shine.</span>
            </h2>

            <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-lg">
              At LUMI LED Signage, we blend creativity, technology,
              and craftsmanship to deliver signage solutions that
              help businesses stand out and leave a lasting
              impression.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {features.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-14 h-14 rounded-full bg-white border-2 flex items-center justify-center text-slate-600 shrink-0">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end translate-x-64">

            <div
              className="
                relative
                max-w-[650px]
                overflow-hidden
                bg-white
                border-2
                border-slate-200
                rounded-[80px]
                p-3
                -rotate-[20deg]
              "
            >
              <div className="overflow-hidden rounded-[70px] rotate-[7deg]">
                <img
                  src="https://i.pinimg.com/736x/72/d7/75/72d77500337367e91d538fc1cd185247.jpg"
                  alt="LED Signage"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}