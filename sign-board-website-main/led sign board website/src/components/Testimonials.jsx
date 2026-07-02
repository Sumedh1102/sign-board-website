import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Owner, Pro Fitness Gym",
    image: "https://i.pinimg.com/1200x/6a/d1/57/6ad157c8278e090a7151341adc8eaaa6.jpg",
    review:
      "Santosh Sign Works completely transformed our storefront. The quality, brightness, and finishing are absolutely premium!",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Head, Hotel Royal",
    image: "https://i.pinimg.com/736x/8b/46/d2/8b46d25ecd777e3a1e22829fa4f88eb1.jpg",
    review:
      "From consultation to installation, everything was seamless. The team understood our brand vision and delivered beyond expectations.",
  },
  {
    name: "Amit Verma",
    role: "Director, Trends Store",
    image: "https://i.pinimg.com/1200x/2c/e3/98/2ce398b6e5a2999258f2327bbbb72a73.jpg",
    review:
      "Professional team, on-time delivery, and outstanding support. Our LED sign looks stunning and attracts so much attention!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-5 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-[4px] uppercase text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 text-lg text-slate-500 max-w-2xl mx-auto">
            Real stories from brands that chose Santosh Sign Works to shine
            brighter.
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-10 hover:shadow-lg transition-all duration-300"
            >
              {/* Top */}
              <div className="flex items-center justify-between mb-8">
                <FaQuoteLeft className="text-5xl text-blue-600" />

                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-slate-600 text-lg"
                    />
                  ))}
                </div>
              </div>

              {/* Review */}
              <p className="text-slate-700 text-xl leading-relaxed min-h-[180px]">
                {item.review}
              </p>

              <div className="border-t border-slate-200 mt-10 pt-6">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover object-top"
                  />

                  <div>
                    <h4 className="font-semibold text-xl text-slate-900">
                      {item.name}
                    </h4>

                    <p className="text-slate-500 text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}