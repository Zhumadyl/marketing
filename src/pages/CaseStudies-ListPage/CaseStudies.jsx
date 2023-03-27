import React from 'react'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import CaseStudies3 from '../../Components3Page/CaseStudies3/CaseStudies'
import Header from '../../Main2/Header/Header'
import LatePosts from '../../Main2/LatestPosts/LatestPost'

function CaseStudies(props) {
    return (
        <div>
            <Header/>
            <CaseStudies3 />
            <Testimonials/>
            <LatePosts/>
            <Footer />
        </div>
    )
}

export default CaseStudies