import { ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Acrylic LED Letters',
    description: 'Premium 3D cut with perfect illumination',
    image: '/led-sign-images/a.png',
  },
  {
    title: 'Channel Letter Signs',
    description: 'Premium letter signs for retail branding',
    image: '/led-sign-images/r.png',
  },
  {
    title: 'Neon Sign',
    description: 'Flexible neon signs for creative branding',
    image: '/led-sign-images/hotel.png',
  },
  {
    title: 'Outdoor Signage',
    description: 'Durable signage for outdoor excellence',
    image: '/led-sign-images/open.png',
  },
  {
    title: 'Digital LED Displays',
    description: 'High-resolution displays that command attention',
    image: '/led-sign-images/led.png',
  },
  {
    title: 'ACP Sign Boards',
    description: 'Sturdy, durable & perfect for branding',
    image: '/led-sign-images/acp.png',
  },
]

export default function LEDSignage() {
  return (
    <section className="w-full bg-white px-7 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Our Services
          </p>
          <h2 className="text-balance text-5xl font-bold tracking-tight text-gray-900 md:text-5xl">
            LED Signage Solutions for Every Need
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-8 transition-all"
            >
              {/* Icon */}
              <div className="relative h-32 w-32 overflow-hidden rounded-lg p-2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="mb-3 text-center text-lg font-semibold text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-center text-sm text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}