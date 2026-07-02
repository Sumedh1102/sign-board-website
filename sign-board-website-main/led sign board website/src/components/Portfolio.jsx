const services = [
  {
    id: 'led-signs',
    title: 'LED Signs',
    description: 'Custom acrylic & neon LED signs',
    image: 'https://i.ibb.co/Kc1nBhyT/7846e063-6158-42d6-96a0-d1004ffb649e.png',
  },
  {
    id: 'lettering',
    title: '3D Lettering',
    description: 'Custom channel letter signs',
    image: 'https://i.pinimg.com/736x/c6/c0/c5/c6c0c5f54fe2bec483f6998b0a6bb8c6.jpg',
  },
  {
    id: 'outdoor-signage',
    title: 'Outdoor Signage',
    description: 'Durable outdoor business signs',
    image: 'https://i.pinimg.com/736x/6d/a7/0f/6da70f1b76ec7f98ea751fe4fa78205c.jpg',
  },
  {
    id: 'display-screens',
    title: 'Display Screens',
    description: 'High-quality LED display boards',
    image: 'https://i.pinimg.com/736x/94/12/00/941200a6796c53b8d90d24e40ae9ec0c.jpg',
  },
]

export default function ServicesSection() {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-20">
          <div>
            <p className="text-blue-600 font-bold text-xs tracking-widest mb-2 uppercase">
              OUR SERVICES
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance leading-tight">
              Types of Services We Provide
            </h2>
          </div>
          <a href="/services" className="text-blue-600 font-semibold text-sm flex items-center gap-2 whitespace-nowrap hover:text-blue-700 transition-colors duration-300 border hover:border-blue-700 p-4 rounded-xl">
              View All Services <span className="text-base">→</span>
            </a>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col gap-3"
            >
              {/* Service Image Card */}
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="select-none object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
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