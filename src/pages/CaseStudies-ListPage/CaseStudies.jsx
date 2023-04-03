import React from 'react'
import Footer from '../../components/Footer/Footer'
import Testimonials from '../../components/Main2/Testimonials/Testimonials'
import CaseStudies3 from '../../Components3Page/CaseStudies3/CaseStudies'
import LatePosts from '../../main2/LatestPosts/LatestPost'
import Header from '../../main2/Header/Header'

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