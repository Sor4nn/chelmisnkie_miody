import products from './data/products.ts'
import { useReveal } from './hooks/useReveal.ts'
import SkipLink from './components/SkipLink.tsx'
import JsonLd from './components/JsonLd.tsx'
import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Featured from './components/Featured.tsx'
import About from './components/About.tsx'
import Offer from './components/Offer.tsx'
import Process from './components/Process.tsx'
import Testimonials from './components/Testimonials.tsx'
import CtaBand from './components/CtaBand.tsx'
import Faq from './components/Faq.tsx'
import Contact from './components/Contact.tsx'
import Footer from './components/Footer.tsx'

export default function App() {
  useReveal()

  return (
    <>
      <JsonLd products={products} />
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <Featured />
        <About />
        <Offer />
        <Process />
        <Testimonials />
        <CtaBand />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
