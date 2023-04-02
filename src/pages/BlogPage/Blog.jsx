import React from 'react'
import Footer from '../../components/Footer/Footer'
import BlogDetail from '../Blog-DetailPage/BlogDetail'
import Posts from '../../components/Details/Posts/Posts'
import BlogDetails from '../../components/Details/BlogDetails/BlogDetails'
import LatePosts from '../../Main2/LatestPosts/LatestPost'

function Blog() {
  return (
    <div>
      <BlogDetails />
      <Posts />
      <LatePosts/>
      <Footer />
    </div>
  )
}

export default Blog