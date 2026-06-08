
import 'img-comparison-slider';
import 'img-comparison-slider/dist/styles.css';

const portfolioItems = [
  {
    id: 'cafe-mocha',
    title: 'Cafe Mocha',
    description: 'Acrylic LED Sign',
    dayImage: 'https://i.postimg.cc/PrVT2Tt7/Chat-GPT-Image-Jun-5-2026-01-49-35-PM.png',
    nightImage: 'https://i.postimg.cc/4dGgm35p/Chat-GPT-Image-Jun-5-2026-01-50-52-PM.png',
  },
  {
    id: 'pro-fitness',
    title: 'Pro Fitness Gym',
    description: 'Channel Letter Sign',
    dayImage: 'https://i.postimg.cc/8CQ80CxB/Chat-GPT-Image-Jun-5-2026-01-50-09-PM.png',
    nightImage: 'https://i.postimg.cc/3R1PNFNP/Chat-GPT-Image-Jun-5-2026-01-50-14-PM.png',
  },
  {
    id: 'hotel-royal',
    title: 'Hotel Royal',
    description: 'Outdoor Signage',
    dayImage: 'https://i.postimg.cc/ZnD2FYrD/Chat-GPT-Image-Jun-5-2026-01-50-16-PM.png',
    nightImage: 'https://i.postimg.cc/gkQ1xJcx/Chat-GPT-Image-Jun-5-2026-01-50-18-PM.png',
  },
  {
    id: 'trends-store',
    title: 'Trends Store',
    description: 'LED Display Board',
    dayImage: 'https://i.postimg.cc/R0QYpL7H/Chat-GPT-Image-Jun-5-2026-01-50-19-PM.png',
    nightImage: 'https://i.postimg.cc/RhqbFrjC/Chat-GPT-Image-Jun-5-2026-01-50-28-PM.png',
  },
]

export default function PortfolioSection() {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20">
          <div>
            <p className="text-blue-600 font-bold text-xs tracking-widest mb-2 uppercase">
              OUR WORK
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance leading-tight">
              Past Works That Speak for Themselves
            </h2>
          </div>
          <a href="/our-work" className="text-blue-600 font-semibold text-sm flex items-center gap-2 whitespace-nowrap hover:text-blue-700 transition-colors duration-300 border hover:border-blue-700 p-4 rounded-xl">
              View All Projects <span className="text-base">→</span>
            </a>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col gap-3"
            >
              {/* Card with Day/Night Split */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100">
                <img-comparison-slider
                  className="outline-none"
                  style={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    '--divider-color': '#e2e8f0',
                    '--divider-width': '2px'
                  }}
                >
                  <img
                    slot="first"
                    src={item.dayImage}
                    alt={`${item.title} - Day`}
                    className="select-none"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
                  />
                  <img
                    slot="second"
                    src={item.nightImage}
                    alt={`${item.title} - Night`}
                    className="select-none"
                    style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
                  />
                  <div
                    slot="handle"
                    className="w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center cursor-ew-resize hover:scale-105 active:scale-95 transition-transform duration-200 select-none z-10"
                  >
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                  </div>
                </img-comparison-slider>

                {/* Day Overlay Badge */}
                <div className="absolute top-4 left-4 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 shadow-sm pointer-events-none z-10 select-none uppercase border-white/10">
                  DAY
                </div>

                {/* Night Overlay Badge */}
                <div className="absolute top-4 right-4 backdrop-blur-md text-white text-[10px] font-bold tracking-wider px-3 py-1.5 shadow-sm pointer-events-none z-10 select-none uppercase border-white/10">
                  NIGHT
                </div>
              </div>

              {/* Content Below Card */}
              <div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-600 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}