import React from 'react'
import Hero from '../sections/Hero'
import Products from '../sections/Products'
import DocumentJourney from '../sections/DocumentJourney'
import EsignatureAdvantage from '../sections/EsignatureAdvantage'
import WhyChooseUs from '../sections/WhyChooseUs'
import Testimonials from '../sections/Testimonials'
import FAQ from '../sections/FAQ'
import Contact from '../sections/Contact'

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            <Hero />
            <Products />
            <DocumentJourney />
            <EsignatureAdvantage />
            <WhyChooseUs />
            <Testimonials />
            <FAQ />
            <Contact />
        </div>
    )
}

export default Home