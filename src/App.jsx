import Navbar from './Navbar'
import Hero from './Hero'
import AboutUs from './AboutUs'
import Therapies from './Therapies'
import SensoryAssesments from './SensoryAssessments'
import PaediatricOT from './PaediatricOT'
import ContactUs from './ContactUs'
import Footer from './Footer'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function App() {

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  return (
    <>
      <div className='max-w-screen-2xl mx-auto'>
        <Navbar />
        <div data-aos="fade-up">
          <Hero />
        </div>
        <div data-aos="fade-up">
          <AboutUs />
        </div>
        <div data-aos="fade-up">
          <Therapies />
        </div>
        <div data-aos="fade-up">
          <SensoryAssesments />
        </div>
        <div data-aos="fade-up">
          <PaediatricOT />
        </div>
        <div data-aos="fade-up">
          <ContactUs />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
