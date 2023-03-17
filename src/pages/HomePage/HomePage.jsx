import React from 'react'
import Footer from '../../components/Footer/Footer'
import Pricing from '../../components/Main2/Pricing/Pricing'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import WhoWeAre from '../../components/Main2/WhoWeAre/WhoWeAre'
import WorkingProcess from '../../components/Main2/WorkingProcess/WorkingProcess'
function HomePage() {
  return (
    <div>
        {/* <Header/> + */}
        {/* <Boost/> +*/}
        <WhoWeAre/>
        {/* <Services/> +*/}
        <WorkingProcess/>
        {/* <CaseStudies/> */}
        {/* <Team/> */}
        <Pricing/>
        {/* <Faqs/> */}
        <Testimonials/>
        {/* <LatestPosts/> */}
        <Footer/>
    </div>
  )
}

export default HomePage