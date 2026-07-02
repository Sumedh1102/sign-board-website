import { useState } from "react";
import { Minus, Plus, Headphones, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What types of LED signage do you offer?",
    answer:
      "We offer a wide range of LED signage including LED display boards, 3D letters, neon signs, channel letters, acrylic signs, and more—all customized to fit your brand and space.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most projects are completed within 7-15 business days depending on complexity, design approval, and installation requirements.",
  },
  {
    question: "Do you provide installation services?",
    answer:
      "Yes, we provide professional installation services across multiple cities to ensure a perfect finish and safe setup.",
  },
  {
    question: "Are your LED signs energy efficient?",
    answer:
      "Absolutely. Our LED signage solutions are designed to consume less power while delivering maximum brightness and durability.",
  },
  {
    question: "What is your warranty policy?",
    answer:
      "We offer warranty coverage on all our signage products. Warranty duration varies based on the product type and specifications.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-[3px] text-sm">
            FAQ
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Find quick answers to the most common questions about our
            LED signage solutions.
          </p>
        </div>

        {/* FAQ Card */}
        <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-b border-slate-200 last:border-none transition-all duration-300 ${
                active === index ? "bg-slate-50" : "bg-white"
              }`}
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex items-center justify-between gap-6 px-8 py-8 text-left"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      active === index
                        ? "bg-blue-600 text-white"
                        : "bg-slate-100 text-blue-600"
                    }`}
                  >
                    {active === index ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}
                  </div>

                  <h3 className="text-xl md:text-xl font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                </div>

                <svg
                  className={`w-6 h-6 text-slate-700 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  active === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pl-[104px] pr-12 pb-8">
                  <p className="text-slate-600 text-base leading-relaxed max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}