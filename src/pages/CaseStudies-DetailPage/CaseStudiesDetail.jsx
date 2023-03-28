import React from 'react'
import Footer from '../../components/Footer/Footer'
import ProjectBrief from '../../components/Components3Page/ProjectBrief/ProjectBrief'
import Result from '../../components/Components3Page/Result/Result'
import UMightLike from '../../components/Components3Page/UMightLike/UMightLike'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
function CaseStudiesDetail() {
  return (
    <div>
      <ProjectBrief/>
      <Result/>
      <Testimonials/>
      <UMightLike/>
      <Footer/>
    </div>
  )
}

export default CaseStudiesDetail