import React from 'react'
import Code from '../Code'

const cssSample = `
  @keyframes slideright {
    from {
      max-width: 0;
      border: none;
    }
    to {
      max-width: 500px;
    }
  }

  @keyframes slideleft {
    from {
      max-width: 500px;
    }
    to {
      max-width: 0;
      border: none;
    }
  }
`

// post idea notes
// how i set up this blog
//    create react app?
//    layout
//    sliding header
//    on render hosting?
//    lazy loading
// aoec - serverless - canvas
// theme
// token lifecycle

const Post = () => (
  <>
    <p>Hi welcome to my code blog :)</p>
    <p>
      Will start off with a series explaining methods I used when making this
      blog.
    </p>
    <Code code={cssSample} language="css" />
  </>
)

export default Post
