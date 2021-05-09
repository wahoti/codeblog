import React from 'react'
// import React, { useContext } from 'react'
// import { ThemeContext } from 'styled-components'
import { ThemeControlContext } from '../../Theme/ThemeWrapper'
import Code from '../Code'

/* eslint no-unused-vars: 0 */

const themeProviderSample = `
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { setTheme, getTheme } from '../../store/localStorage'
import { themes, generateTheme } from './Themes'

export const ThemeControlContext = React.createContext()

export const StyledPageWrapper = styled.section\`
  height: 100vh;
  background-color: ${(props) => props.theme.dark};
\`

const ThemeWrapper = ({ children }) => {
  const [themeMode, setThemeMode] = useState(getTheme() || 'dark')
  const [customTheme, setCustomTheme] = useState(null)

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }

  useEffect(() => {
    setTheme(themeMode)
  }, [themeMode])

  return (
    <ThemeControlContext.Provider
      value={{ themeMode, toggleTheme, setCustomTheme }}>
      <ThemeProvider
        theme={customTheme ? generateTheme(customTheme) : themes[themeMode]}>
        <StyledPageWrapper>{children}</StyledPageWrapper>
      </ThemeProvider>
    </ThemeControlContext.Provider>
  )
}

export default ThemeWrapper
`

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
      <p>
        Themes are useful in projects to reuse color codes or other styling
        constants such as fonts or pictures. By using a theme you can instantly
        change styles across your app by changing one constant.
      </p>
      <p>
        A popular use case for themes is to switch between light and dark modes.
      </p>
      <p>
        In this guide we will be making use of{' '}
        <a href="https://reactjs.org/docs/context.html">react context</a> to
        achieve this.
      </p>
      <Code code={themeProviderSample} language="jsx" />
    </>
  )
}

export default Post
