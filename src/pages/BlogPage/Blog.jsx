import React from 'react'
import Footer from '../../components/Footer/Footer'
import Maximize from '../../components/MarketingBlogComponents/Maximize/Maximize'
import Search from '../../components/MarketingBlogComponents/Search/Search'
import Header from '../../main2/Header/Header'


function Blog() {
  return (
    <div>
      <Header/>
      <Maximize/>
      <Search/>
      <Footer />
    </div>
  )
}

export default Blog