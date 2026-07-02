import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronRight,
  Star,
  MapPin,
  Calendar,
  ExternalLink,
  Filter,
  Zap,
  Award,
  Eye,
} from 'lucide-react';

/* ──────────────────────────────────────────────
   Fade-in on scroll hook
────────────────────────────────────────────── */
function useFadeIn(threshold = 0.12) {
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

/* ──────────────────────────────────────────────
   Animated Counter Hook
────────────────────────────────────────────── */
function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return { count, ref };
}

/* ──────────────────────────────────────────────
   Data
────────────────────────────────────────────── */
const categories = ['All', 'Acrylic LED', 'Channel Letters', 'Neon Signs', 'Outdoor', 'Digital Display', 'ACP Board'];

const projects = [
  {
    id: 'samsung-display',
    title: 'Samsung Display Board',
    category: 'Digital Display',
    location: 'Mumbai, MH',
    year: '2025',
    description: 'High-resolution digital LED display board with dynamic content management for modern retail.',
    image: '/images/samsung-display.png',
    featured: true,
    tags: ['Digital Display', 'Retail', 'Dynamic Content'],
    client: 'Samsung India',
  },
  {
    id: 'tata-motors',
    title: 'Tata Motors Showroom',
    category: 'Outdoor',
    location: 'Pune, MH',
    year: '2025',
    description: 'Large-format outdoor pylon sign with weather-resistant coating and vibrant LED illumination.',
    image: '/images/tata-motors.png',
    featured: true,
    tags: ['Outdoor', 'Pylon Sign', 'Automotive'],
    client: 'Tata Motors Ltd.',
  },
  {
    id: 'jsw-group',
    title: 'JSW Group Corporate Office',
    category: 'Acrylic LED',
    location: 'Mumbai, MH',
    year: '2024',
    description: 'Premium backlit acrylic 3D letters with warm-white LED glow for a corporate ambiance.',
    image: '/images/jsw-group.png',
    featured: true,
    tags: ['Acrylic LED', 'Indoor', '3D Letters'],
    client: 'JSW Group',
  },
  {
    id: 'cashify-store',
    title: 'Cashify Store',
    category: 'Channel Letters',
    location: 'Delhi, DL',
    year: '2024',
    description: 'Bold channel letter sign with high-intensity LED for round-the-clock brand visibility.',
    image: '/images/cashify-store.png',
    featured: true,
    tags: ['Channel Letters', 'Outdoor', 'Storefront'],
    client: 'Cashify',
  },
  {
    id: 'spice-garden',
    title: 'Spice Garden Restaurant',
    category: 'Neon Signs',
    location: 'Hyderabad, TS',
    year: '2025',
    description: 'Custom flex-neon signs creating an inviting, Instagram-worthy atmosphere for a premium restaurant.',
    image: '/images/spice-garden.png',
    featured: false,
    tags: ['Neon Signs', 'Restaurant', 'Decorative'],
    client: 'Spice Garden Foods',
  },
  {
    id: 'medplus-clinic',
    title: 'MedPlus Clinic',
    category: 'ACP Board',
    location: 'Chennai, TN',
    year: '2024',
    description: 'Clean and professional ACP sign board system for a multi-storey healthcare complex.',
    image: '/images/medplus-clinic.png',
    featured: false,
    tags: ['ACP Board', 'Healthcare', 'Wayfinding'],
    client: 'MedPlus Healthcare',
  },
  {
    id: 'spark-auto',
    title: 'Spark Auto Showroom',
    category: 'Channel Letters',
    location: 'Ahmedabad, GJ',
    year: '2023',
    description: 'Illuminated channel letters with backlit halo effect for a premium automotive dealership.',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80',
    featured: false,
    tags: ['Channel Letters', 'Automotive', 'Halo Effect'],
    client: 'Spark Automobiles',
  },
  {
    id: 'bloom-salon',
    title: 'Bloom Salon & Spa',
    category: 'Acrylic LED',
    location: 'Kolkata, WB',
    year: '2023',
    description: 'Elegant pink-toned acrylic LED sign with rose-gold accents, perfectly matching the salon\'s luxury brand.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13edd793be?w=800&q=80',
    featured: false,
    tags: ['Acrylic LED', 'Beauty', 'Indoor'],
    client: 'Bloom Beauty Co.',
  },
];

const stats = [
  { end: 1200, suffix: '+', label: 'Projects Completed' },
  { end: 500, suffix: '+', label: 'Happy Clients' },
  { end: 25, suffix: '+', label: 'Cities Served' },
  { end: 99, suffix: '%', label: 'Client Satisfaction' },
];

/* ──────────────────────────────────────────────
   Hero Section
────────────────────────────────────────────── */
function WorkHero() {
  return (
    <section className="relative bg-dark-900 overflow-hidden">
      {/* ── Background layers ── */}
      <div className="absolute inset-0">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        {/* Primary orb — top-right */}
        <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-primary-600/[0.07] blur-[120px] animate-pulse-glow" />
        {/* Secondary orb — bottom-left */}
        <div className="absolute -bottom-24 -left-24 w-[360px] h-[360px] rounded-full bg-primary-400/[0.05] blur-[100px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="flex flex-col items-center text-center">

          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm mb-10"
          >
            <Link
              to="/"
              className="text-slate-500 hover:text-primary-400 transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-primary-400 font-medium">Our Work</span>
          </nav>

          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
          >
            Our{' '}
            <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-5 text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl"
          >
            Explore 1,200+ signage projects that have illuminated brands across India
             from bold storefronts to elegant interiors.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Stats Bar
────────────────────────────────────────────── */
function StatsBar() {
  return (
    <div className="bg-white border-b border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.end);
            return (
              <div key={stat.label} ref={ref} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900">
                  {count}
                  <span className="text-blue-600">{stat.suffix}</span>
                </div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Project Card
────────────────────────────────────────────── */
function ProjectCard({ project, index }) {
  const fade = useFadeIn(0.05);
  const delay = (index % 4) * 80;

  return (
    <div
      ref={fade.ref}
      className="group flex flex-col bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500"
      style={{
        opacity: fade.isVisible ? 1 : 0,
        transform: fade.isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {/* Project Image */}
      <div className="relative aspect-square overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="select-none w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-md z-10">
            <Star className="w-2.5 h-2.5 fill-white" />
            Featured
          </div>
        )}

        {/* Category pill */}
        <div className="absolute bottom-3 right-3 bg-white/90 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-md z-10">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-xs text-slate-500 mt-1.5 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Meta */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-400">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Project Gallery
────────────────────────────────────────────── */
function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const fade = useFadeIn();

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="py-20 bg-[#f7f8fc]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div
          ref={fade.ref}
          className={`text-center max-w-3xl mx-auto mb-12 transition-all duration-700 ${fade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-blue-600 uppercase tracking-[4px] text-sm font-semibold mb-4">
            Project Gallery
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
            1,200+ Signs Installed Across India
          </h2>
          <p className="mt-5 text-lg text-slate-500 leading-relaxed">
            Browse through our collection of premium sign installations.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {cat === 'All' && <Filter className="w-3.5 h-3.5" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayed.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Show more */}
        {!showAll && filtered.length > 6 && (
          <div className="text-center mt-12">
            <button
              id="show-more-projects"
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold text-sm hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              <Eye className="w-4 h-4" />
              Load More Projects
            </button>
          </div>
        )}

        {displayed.length === 0 && (
          <div className="text-center py-24 text-slate-400">
            <Zap className="w-10 h-10 mx-auto mb-3 opacity-40" />
            <p className="font-medium">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Highlight Reel — Featured Projects (large cards)
────────────────────────────────────────────── */
function FeaturedProjects() {
  const fade = useFadeIn();
  const featured = projects.filter((p) => p.featured);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={fade.ref}
          className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 transition-all duration-700 ${fade.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div>
            <p className="text-blue-600 uppercase tracking-[4px] text-sm font-semibold mb-3">
              Spotlight
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Featured Projects
            </h2>
          </div>
          <a
            href="#project-gallery"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm border border-blue-200 hover:border-blue-600 hover:bg-blue-50 px-5 py-3 rounded-xl transition-all duration-300 whitespace-nowrap"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7">
          {featured.map((project, index) => {
            const anim = useFadeIn(0.1);
            return (
              <div
                key={project.id}
                ref={anim.ref}
                className="group flex flex-col rounded-3xl overflow-hidden border border-slate-100 bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                style={{
                  opacity: anim.isVisible ? 1 : 0,
                  transform: anim.isVisible ? 'translateY(0)' : 'translateY(28px)',
                  transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms, box-shadow 0.3s ease`,
                }}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="select-none w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1 bg-blue-600 text-white text-[10px] font-bold tracking-wide px-2.5 py-1 rounded-md z-10">
                    <Award className="w-2.5 h-2.5" />
                    Featured
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {project.location}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      Client: <span className="text-slate-700">{project.client}</span>
                    </span>
                    <span className="text-xs text-slate-400">{project.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Expertise Strip
────────────────────────────────────────────── */
function ExpertiseStrip() {
  const fade = useFadeIn();
  const items = [
    { icon: '✦', label: 'Acrylic LED Letters' },
    { icon: '✦', label: 'Channel Letter Signs' },
    { icon: '✦', label: 'Neon Signs' },
    { icon: '✦', label: 'Outdoor Signage' },
    { icon: '✦', label: 'Digital LED Displays' },
    { icon: '✦', label: 'ACP Sign Boards' },
    { icon: '✦', label: 'Acrylic LED Letters' },
    { icon: '✦', label: 'Channel Letter Signs' },
    { icon: '✦', label: 'Neon Signs' },
    { icon: '✦', label: 'Outdoor Signage' },
    { icon: '✦', label: 'Digital LED Displays' },
    { icon: '✦', label: 'ACP Sign Boards' },
  ];

  return (
    <div ref={fade.ref} className={`bg-slate-900 py-5 overflow-hidden transition-all duration-700 ${fade.isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div
        className="flex gap-8 whitespace-nowrap"
        style={{
          animation: 'marqueeScroll 30s linear infinite',
        }}
      >
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-3 text-sm font-semibold text-slate-300 flex-shrink-0">
            <span className="text-blue-400 text-xs">{item.icon}</span>
            {item.label}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* ──────────────────────────────────────────────
   Main Page Export
────────────────────────────────────────────── */
export default function OurWorkPage() {
  return (
    <>
      <WorkHero />
      <StatsBar />
      <FeaturedProjects />
      <ExpertiseStrip />
      <div id="project-gallery">
        <ProjectGallery />
      </div>
    </>
  );
}
