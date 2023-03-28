import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../Main2/Header/Header'
import WhoWeAre from '../../components/Components4Page/WhoWeAre/WhoWeAre'
import OurVision from '../../components/Components4Page/OurVision/OurVision'
import OurCoreValue from '../../components/Components4Page/OurCoreValue/Core'
function About() {
  return (
    <div>
      <Header/>
      <WhoWeAre/>
      <OurVision/>
      <OurCoreValue/>
        <Footer/>
    </div>
  )
}

export default About