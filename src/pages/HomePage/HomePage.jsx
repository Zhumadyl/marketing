import React from 'react'
import Footer from '../../components/Footer/Footer'
import Case from '../../components/Main2/Case/Case'
import Pricing from '../../components/Main2/Pricing/Pricing'
import Questions from '../../components/Main2/Questions/Questions'
import Services from '../../components/Main2/Services/Services'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import Main from '../../Main2/Boost/Main'
import WhoWeAre from '../../components/Main2/WhoWeAre/WhoWeAre'
import WorkingProcess from '../../components/Main2/WorkingProcess/WorkingProcess'
import Header from '../../Main2/Header/Header'
import LatePosts from '../../Main2/LatestPosts/LatestPost'
import Meet from '../../Main2/MeetTeam/Meet'
function HomePage() {
  return (
    <div>
      <Main />
      <WhoWeAre />
      <Services />
      <WorkingProcess />
      <Case />
      <Meet />
      <Pricing />
      <Questions />
      <Testimonials />
      <LatePosts />
      <Footer />
    </div>
  )
}

export default HomePage