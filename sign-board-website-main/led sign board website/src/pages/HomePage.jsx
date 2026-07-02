import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import StatsAndTestimonials from '../components/StatsAndTestimonials'
import HowItWorks from '../components/HowItWorks'
import BrandsMarquee from '../components/BrandsMarquee'
import CTA from '../components/CTA'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <HowItWorks />
      <BrandsMarquee />
      <StatsAndTestimonials />
      <Testimonials />
      <Faq/>
    </>
  )
}
