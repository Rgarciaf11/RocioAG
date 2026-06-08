import Hero from '../components/sections/Hero'
import Ticker from '../components/sections/Ticker'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}
