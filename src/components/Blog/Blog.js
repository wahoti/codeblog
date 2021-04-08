import React, { Suspense } from 'react'

import { useParams } from 'react-router-dom'

import './Blog.css'
import BasePost from './posts/Post'

// NEW POST TODO

// ADD IMPORT
const B0 = React.lazy(() => import('./posts/B0'))
// const B1 = React.lazy(() => import('./posts/B1'))
// const B2 = React.lazy(() => import('./posts/B2'))
// const B3 = React.lazy(() => import('./posts/B3'))
// const B4 = React.lazy(() => import('./posts/B4'))
// const B5 = React.lazy(() => import('./posts/B5'))
// const B6 = React.lazy(() => import('./posts/B6'))
// const B7 = React.lazy(() => import('./posts/B7'))
// const B8 = React.lazy(() => import('./posts/B8'))
// const B9 = React.lazy(() => import('./posts/B9'))
// const B10 = React.lazy(() => import('./posts/B10'))
// const B11 = React.lazy(() => import('./posts/B11'))

// ADD TO RENDER LIST
const BLOGS_RENDER = [
  () => (<B0 />),
  // () => (<B1 />),
  // () => (<B2 />),
  // () => (<B3 />),
  // () => (<B4 />),
  // () => (<B5 />),
  // () => (<B6 />),
  // () => (<B7 />),
  // () => (<B8 />),
  // () => (<B9 />),
  // () => (<B11 />),
  // () => (<B10 />),
]

// ADD TO BLOGS LIST
export const BLOGS = [
  { // 0
    date: 'April 7th 2021',
    title: 'introduction',
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
