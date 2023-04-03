import React from 'react'
import Benefits from '../../components/Components2Page/Benefits/Benefits'
import OfflineSEO from '../../components/Components2Page/Offline SEO/OfflineSEO'
import ServicesIncl from '../../components/Components2Page/ServicesIncl/ServicesIncl'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import Header from '../../main2/Header/Header'
import LatePosts from '../../main2/LatestPosts/LatestPost'

function Services() {
  return (
    <div>
        <div>
          <Header/>
          {/* <Maks /> */}
          <OfflineSEO/>
          <ServicesIncl/>
          <Benefits/>
          {/* <Keremet/> */}
          <Testimonials/>
          <LatePosts/>
        </div>
        <Footer/>
    </div>
  )
}

export default Services