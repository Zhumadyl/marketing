import React from 'react'
import css from './About.module.css'
import Footer from '../../components/Footer/Footer'
import Header from '../../Main2/Header/Header'
import WhoWeAre from '../../components/Components4Page/WhoWeAre/WhoWeAre'
import OurVision from '../../components/Components4Page/OurVision/OurVision'
import OurCoreValue from '../../components/Components4Page/OurCoreValue/Core'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import LatePosts from '../../Main2/LatestPosts/LatestPost'
import Questions from '../../components/Main2/Questions/Questions'
import OurStory from '../../components/Components4Page/OurStory/OurStory'
import OurClients from '../../components/Components4Page/OurClients/OurClients'
import GreatTeam from '../../AboutComponents/GreatTeam/GreatTeam'
import Card from '../../AboutComponents/Card/Card'
function About() {
  return (
    <div>
      <Header/>
      <WhoWeAre/>
      <OurVision/>
      <OurCoreValue/>
      <OurStory/>
      <GreatTeam/>
      <Testimonials/>
      <OurClients/>
      <LatePosts/>
      <div className={css.none}></div>
      <Questions/>
        <Footer/>
    </div>
  )
}

export default About