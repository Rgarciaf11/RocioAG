import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Ticker from './components/sections/Ticker'
import Services from './components/sections/Services'
import About from './components/sections/About'
import Testimonials from './components/sections/Testimonials'
import InstagramFeed from './components/sections/InstagramFeed'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <Testimonials />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
