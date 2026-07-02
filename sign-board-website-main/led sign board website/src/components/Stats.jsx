import { useEffect, useRef, useState } from 'react';
import { Users, FolderCheck, Clock, MapPin } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
  },
  {
    icon: FolderCheck,
    value: 1200,
    suffix: '+',
    label: 'Projects Completed',
  },
  {
    icon: Clock,
    value: 8,
    suffix: '+',
    label: 'Years of Experience',
  },
  {
    icon: MapPin,
    value: 25,
    suffix: '+',
    label: 'Cities Served',
  },
];

const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return { count, ref };
};

const Stats = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="section-label">Our Stats</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const { count, ref } = useCountUp(stat.value);
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                ref={ref}
                className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:border-primary-100 hover:bg-primary-50/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center group-hover:bg-primary-100 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {count}{stat.suffix}
                  </div>
                  <div className="text-sm text-gray-500">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
