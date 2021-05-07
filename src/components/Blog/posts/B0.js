import React from 'react'
// import React, { useContext } from 'react'
// import { ThemeContext } from 'styled-components'
import { ThemeControlContext } from '../../Theme/ThemeWrapper'
// import Code from '../Code'

// const cssSample = `
//   @keyframes slideright {
//     from {
//       max-width: 0;
//       border: none;
//     }
//     to {
//       max-width: 500px;
//     }
//   }

//   @keyframes slideleft {
//     from {
//       max-width: 500px;
//     }
//     to {
//       max-width: 0;
//       border: none;
//     }
//   }
// `

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

{
  /* <Code code={cssSample} language="css" /> */
}

const Post = () => {
  // const themeObject = useContext(ThemeContext)

  return (
    <>
      <p>
        In this post will use{' '}
        <a href="https://styled-components.com/">Styled-Components</a> to setup
        themes for a React project.
      </p>
      <ThemeControlContext.Consumer>
        {({ toggleTheme }) => (
          <button onClick={toggleTheme}>toggle theme</button>
        )}
      </ThemeControlContext.Consumer>
    </>
  )
}

export default Post
