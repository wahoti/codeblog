import React, { Suspense } from 'react'

import { useParams } from 'react-router-dom'

import './Blog.css'
import BasePost from './posts/Post'

// NEW POST TODO

// ADD IMPORT
const B0 = React.lazy(() => import('./posts/B0'))
const B1 = React.lazy(() => import('./posts/B1'))

// ADD TO RENDER LIST
const BLOGS_RENDER = [
  () => (<B0 />),
  () => (<B1 />),
]

// ADD TO BLOGS LIST
export const BLOGS = [
  {
    date: 'Thu Nov 12 2020',
    title: 'introduction',
  }, {
    date: 'Thu Nov 12 2021',
    title: 'lunches',
  },
]

function Blog(props) {
  let { id } = useParams()

  const renderBlog = (blogId) => {
    let post = BLOGS_RENDER[blogId]
    let postData = BLOGS[blogId]

    if (post) {
      let Post = post.bind(this)
      return <BasePost title={postData.title} date={postData.date}><Post /></BasePost>
    } else {
    return <BasePost><p>post not found</p></BasePost>
    }
  }

  return (
    <Suspense fallback={<h3 className="primaryColor">Loading...</h3>}>
      {renderBlog(id)}
    </Suspense>
  )
}

export default Blog
