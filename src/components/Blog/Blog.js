import React, { Suspense } from 'react'

import { useParams } from 'react-router-dom'

import './Blog.css'
import BasePost from './posts/Post'

// NEW POST TODO

// ADD IMPORT
const B0 = React.lazy(() => import('./posts/B0'))
const B1 = React.lazy(() => import('./posts/B1'))
const B2 = React.lazy(() => import('./posts/B2'))
const B3 = React.lazy(() => import('./posts/B3'))
const B4 = React.lazy(() => import('./posts/B4'))
const B5 = React.lazy(() => import('./posts/B5'))
const B6 = React.lazy(() => import('./posts/B6'))
const B7 = React.lazy(() => import('./posts/B7'))
const B8 = React.lazy(() => import('./posts/B8'))
const B9 = React.lazy(() => import('./posts/B9'))
const B10 = React.lazy(() => import('./posts/B10'))

// ADD TO RENDER LIST
const BLOGS_RENDER = [
  () => (<B0 />),
  () => (<B1 />),
  () => (<B2 />),
  () => (<B3 />),
  () => (<B4 />),
  () => (<B5 />),
  () => (<B6 />),
  () => (<B7 />),
  () => (<B8 />),
  () => (<B9 />),
  () => (<B10 />),
]

// ADD TO BLOGS LIST
export const BLOGS = [
  { // 0
    date: 'Thu Nov 12 2020',
    title: 'introduction',
  }, { // 1
    date: 'Thu Nov 12 2020',
    title: 'lunches',
  }, { // 2
    date: 'Nov 28 2020',
    title: 'Thanksgiving',
  }, { // 3
    date: 'Dec 10 2020',
    title: 'Early December',
  }, { // 4
    date: 'Dec 25 2020',
    title: 'Christmas',
  }, { // 5
    date: 'Dec 28 2020',
    title: 'Salmon Special',
  }, { // 6
    date: 'Dec 31 2020',
    title: 'New years',
  }, { // 7
    date: 'Jan 15 2021',
    title: 'January Treats',
  }, { // 8
    date: 'Feb 6 2021',
    title: 'Burger Special',
  }, { // 9
    date: 'Feb 20 2021',
    title: 'Thai Date',
  }, { // 10
    date: 'Mar 14 2021',
    title: 'Meatball Special',
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
