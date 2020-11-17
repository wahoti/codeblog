import React, { Suspense } from 'react'

import { useParams } from 'react-router-dom'

import './Blog.css'

// NEW POST TODO
const B0 = React.lazy(() => import('./posts/B0'))
const B1 = React.lazy(() => import('./posts/B1'))

function Blog(props) {
  let { id } = useParams()

  const renderBlog = (blogId) => {
    // NEW POST TODO
    switch(blogId) {
      case '0':
        return <B0 />
      case '1':
        return <B1 />
      default:
        return <B0 />
    }
  }

  return (
    <Suspense fallback={<h3 className="primaryColor">Loading...</h3>}>
      {renderBlog(id)}
    </Suspense>
  )
}

export default Blog
