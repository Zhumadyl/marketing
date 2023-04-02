import React from 'react'
import Benefits from '../../components/Components2Page/Benefits/Benefits'
import OfflineSEO from '../../components/Components2Page/Offline SEO/OfflineSEO'
import ServicesIncl from '../../components/Components2Page/ServicesIncl/ServicesIncl'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import Header from '../../Main2/Header/Header'
import LatePosts from '../../Main2/LatestPosts/LatestPost'
import MainSeo from '../../components/Components2Page/MainSeo/MainSeo'
import HowWorks from '../../components/Components2Page/HowItWorks/HowWorks'
function Services() {
  return (
    <div>
        <div>
          <MainSeo/>
          <OfflineSEO/>
          <ServicesIncl/>
          <Benefits/>
          <HowWorks/>
          <Testimonials/>
          <LatePosts/>
        </div>
        <Footer/>
    </div>
  )
}

export default Services