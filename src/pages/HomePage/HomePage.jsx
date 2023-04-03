import React from 'react'
import Footer from '../../components/Footer/Footer'
import Case from '../../components/Main2/Case/Case'
import Pricing from '../../components/Main2/Pricing/Pricing'
import Questions from '../../components/Main2/Questions/Questions'
import Services from '../../components/Main2/Services/Services'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import Main from '../../main2/Boost/Main'
import WhoWeAre from '../../components/Main2/WhoWeAre/WhoWeAre'
import WorkingProcess from '../../components/Main2/WorkingProcess/WorkingProcess'
import LatePosts from '../../main2/LatestPosts/LatestPost'
import Meet from '../../main2/MeetTeam/Meet'
function HomePage() {
  return (
    <div>
      <Main />
      <WhoWeAre />
      <Services />
      <WorkingProcess/>
      <Case />
      <Meet/>
      <Pricing />
      <Questions />
      <Testimonials />
      <LatePosts />
      <Footer />
    </div>
  )
}

export default HomePage