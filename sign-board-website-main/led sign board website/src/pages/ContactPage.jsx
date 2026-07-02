import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight,
  Loader2,
  AlertCircle,
  Building2,
  HelpCircle
} from 'lucide-react';

/* ──────────────────────────────────────────────
   Fade-in on scroll hook
   (Matching design system of OurWorkPage)
────────────────────────────────────────────── */
function useFadeIn(threshold = 0.1) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, isVisible };
}

export default function ContactPage() {
  const heroFade = useFadeIn();
  const contentFade = useFadeIn();
  const faqFade = useFadeIn();

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success

  // FAQ State
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const projectTypes = [
    'Acrylic LED Letters',
    'Channel Letter Signs',
    'Neon Signs',
    'Outdoor Signage',
    'Digital LED Displays',
    'ACP Sign Boards',
    'Other / Custom Project'
  ];

  const faqs = [
    {
      q: "What is your typical lead time for a custom sign board?",
      a: "Our typical production timeline is 7 to 10 business days from the date the design mockup is approved and deposit is received. For extremely urgent projects, we offer expedited production services depending on our current schedule and project complexity."
    },
    {
      q: "Do you provide design assistance?",
      a: "Yes, absolutely! We have a dedicated, experienced in-house design team that works closely with you. We will convert your ideas or logo into a high-fidelity visual mockup (both day and night renderings) and recommend the best materials, lighting types, and finishes for your brand."
    },
    {
      q: "What file formats should I provide for my custom logo?",
      a: "We prefer vector formats as they ensure pixel-perfect scaling during manufacturing. Accepted file types include .AI (Adobe Illustrator), .EPS, .SVG, or vector-based .PDF. If you only have high-resolution images (.PNG or .JPG), our designers can recreate and vectorize them for you."
    },
    {
      q: "Do you offer shipping and installation services?",
      a: "Yes, we offer door-to-door, secure shipping across India. In addition, we have a specialized team of signage technicians who conduct professional, safe, and clean on-site installations. We handle everything from structural alignment to electrical connectivity."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field when typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9]{7,15}$/.test(formData.phone.replace(/[\s-()]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');
    // Simulate API request delay
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ── HERO HEADER SECTION ── */}
      <section className="relative bg-dark-900 overflow-hidden" ref={heroFade.ref}>
        {/* Background layers */}
        <div className="absolute inset-0">
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          {/* Ambient light effects */}
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary-600/[0.07] blur-[120px] animate-pulse-glow" />
          <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-primary-400/[0.05] blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="flex flex-col items-center text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm mb-8">
              <Link to="/" className="text-slate-500 hover:text-primary-400 transition-colors duration-200">
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <span className="text-primary-400 font-medium">Contact Us</span>
            </nav>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              Get in{' '}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              Have a project in mind or need a custom quotation? Fill out our form below, 
              or reach out directly. Our experts are ready to bring your design to life.
            </p>
          </div>
        </div>
      </section>

      {/* ── MAIN LAYOUT GRID ── */}
      <section className="py-16 lg:py-24" ref={contentFade.ref}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: CONTACT CARDS & MAP */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Heading */}
              <div>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-xs block">
                  Contact Information
                </span>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-2">
                  Our Office & Studio
                </h2>
                <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                  Visit us or reach out via phone or email. We will guide you from the initial planning 
                  to design rendering and structural layout.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                
                {/* Card 1: Address */}
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4 transition-all duration-300">
                  <div className="w-11 h-11 rounded-full border-4 bg-white flex items-center justify-center text-black shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Headquarters</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      123 Industrial Area, Phase II,
                      <br />
                      Mumbai, Maharashtra 400001
                    </p>
                    <a
                      href="https://maps.google.com/?q=Industrial+Area,+Lower+Parel,+Mumbai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-blue-600 font-semibold mt-3 hover:text-blue-700 hover:underline"
                    >
                      View on Google Maps <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* Card 2: Phone */}
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4  transition-all duration-300">
                  <div className="w-11 h-11 rounded-full border-4 bg-white flex items-center justify-center text-black shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Phone Inquiries</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </p>
                    <div className="mt-2 space-y-1">
                      <a href="tel:+919876543210" className="block text-xs text-slate-700 hover:text-blue-600 font-medium transition-colors">
                        Sales: <span className="font-semibold text-slate-900 hover:text-blue-600">+91 98765 43210</span>
                      </a>
                      <a href="tel:+919876543211" className="block text-xs text-slate-700 hover:text-blue-600 font-medium transition-colors">
                        Support: <span className="font-semibold text-slate-900 hover:text-blue-600">+91 98765 43211</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3: Email */}
                <div className="bg-white p-5 rounded-2xl border shadow-sm flex gap-4  transition-all duration-300">
        <div className="w-11 h-11 rounded-full border-4 bg-white flex items-center justify-center text-black shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email Support</h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Shoot us a mail directly for standard project quotes.
                    </p>
                    <div className="mt-2 space-y-1">
                      <a href="mailto:info@santoshsignworks.com" className="block text-xs text-slate-700 hover:text-blue-600 font-medium transition-colors">
                        General: <span className="font-semibold text-slate-900 hover:text-blue-600">info@santoshsignworks.com</span>
                      </a>
                      <a href="mailto:support@santoshsignworks.com" className="block text-xs text-slate-700 hover:text-blue-600 font-medium transition-colors">
                        Support: <span className="font-semibold text-slate-900 hover:text-blue-600">support@santoshsignworks.com</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Styled Interactive Map Container */}
              <div className="rounded-xl overflow-hidden bg-white transition-shadow duration-300">
                <div className="relative aspect-[16/10] sm:aspect-[16/8] lg:aspect-[16/10] rounded-xl overflow-hidden bg-slate-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7984180424564!2d72.83359007584107!3d19.00650965377312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ceebbff0af2d%3A0xb35a0f6a2c2ff37c!2sIndustrial%20Area%2C%20Lower%20Parel%2C%20Mumbai%2C%20Maharashtra%20400013!5e0!3m2!1sen!2sin!4v1717654870000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Santosh Sign Works Location Map"
                    className="w-full h-full grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: INTERACTIVE FORM CARD */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border-2 p-6 sm:p-10 relative overflow-hidden">
                {/* Decorative border accent line */}
                <div className="absolute top-0 left-0 right-0 h-1.5" />
                
                {status !== 'success' ? (
                  <>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                        Send a Message
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Fill out the details below to request a callback or quotation.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                      
                      {/* Name & Email (2-Column Grid on larger screens) */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div className="space-y-1.5">
                          <label htmlFor="name" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="John Doe"
                            className={`w-full text-sm bg-slate-50 border px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:bg-white ${
                              errors.name 
                                ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                            }`}
                            disabled={status === 'loading'}
                          />
                          {errors.name && (
                            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.name}
                            </span>
                          )}
                        </div>

                        {/* Email */}
                        <div className="space-y-1.5">
                          <label htmlFor="email" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className={`w-full text-sm bg-slate-50 border px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:bg-white ${
                              errors.email 
                                ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                            }`}
                            disabled={status === 'loading'}
                          />
                          {errors.email && (
                            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.email}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Phone & Project Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Phone */}
                        <div className="space-y-1.5">
                          <label htmlFor="phone" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+91 98765 43210"
                            className={`w-full text-sm bg-slate-50 border px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:bg-white ${
                              errors.phone 
                                ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                                : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                            }`}
                            disabled={status === 'loading'}
                          />
                          {errors.phone && (
                            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.phone}
                            </span>
                          )}
                        </div>

                        {/* Project Type */}
                        <div className="space-y-1.5">
                          <label htmlFor="projectType" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                            Interested In
                          </label>
                          <div className="relative">
                            <select
                              name="projectType"
                              id="projectType"
                              value={formData.projectType}
                              onChange={handleInputChange}
                              className={`w-full text-sm bg-slate-50 border px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:bg-white appearance-none cursor-pointer pr-10 ${
                                errors.projectType 
                                  ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                                  : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                              }`}
                              disabled={status === 'loading'}
                            >
                              <option value="" disabled>Select a sign board type</option>
                              {projectTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-400">
                              <ChevronDown className="w-4 h-4" />
                            </div>
                          </div>
                          {errors.projectType && (
                            <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.projectType}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-1.5">
                        <label htmlFor="message" className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                          Project Description / Message
                        </label>
                        <textarea
                          name="message"
                          id="message"
                          rows="4"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your brand, size requirements, placement (indoor/outdoor), or budget constraints..."
                          className={`w-full text-sm bg-slate-50 border px-4 py-3.5 rounded-xl outline-none transition-all duration-200 focus:bg-white resize-y ${
                            errors.message 
                              ? 'border-red-400 focus:border-red-400 focus:ring-4 focus:ring-red-100' 
                              : 'border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
                          }`}
                          disabled={status === 'loading'}
                        />
                        {errors.message && (
                          <span className="text-xs text-red-500 font-medium flex items-center gap-1 mt-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errors.message}
                          </span>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        id="submit-contact-form"
                        disabled={status === 'loading'}
                        className={`w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-3xl font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99] disabled:opacity-75 disabled:cursor-not-allowed shadow-lg shadow-blue-600/15 hover:shadow-xl hover:shadow-blue-600/25`}
                      >
                        {status === 'loading' ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processing Inquiry...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Submit Request
                          </>
                        )}
                      </button>

                    </form>
                  </>
                ) : (
                  /* Success Screen Overlay */
                  <div className="py-12 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500 shadow-md">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-slate-900">
                        Thank You, {formData.name}!
                      </h3>
                      <p className="text-sm text-slate-500 max-w-md">
                        Your inquiry regarding <span className="font-semibold text-blue-600">{formData.projectType}</span> has been received successfully.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 max-w-sm text-xs text-slate-500 leading-relaxed">
                      We have sent a validation email to <span className="font-semibold text-slate-900">{formData.email}</span>. A sales representative will review your message and contact you at <span className="font-semibold text-slate-900">{formData.phone}</span> within 24 hours.
                    </div>

                    <button
                      onClick={() => {
                        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
                        setStatus('idle');
                      }}
                      className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl text-xs font-semibold transition-all duration-200"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ACCORDION SECTION ── */}
      <section className="bg-white py-16 lg:py-24 border-t border-slate-100" ref={faqFade.ref}>
        <div className="max-w-4xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> F.A.Q
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
              Common Questions
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Everything you need to know about starting a project with Santosh Sign Works.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-2xl transition-all duration-300 ${
                  activeFaq === index
                    ? 'border-blue-600 bg-blue-50/10 shadow-md shadow-blue-50/5'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-bold text-slate-900 text-sm sm:text-base outline-none"
                  aria-expanded={activeFaq === index}
                >
                  <span>{faq.q}</span>
                  {activeFaq === index ? (
                    <ChevronUp className="w-4 h-4 text-blue-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Accordion Content */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    activeFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-xs sm:text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
