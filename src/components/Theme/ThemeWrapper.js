import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { setTheme, getTheme } from '../../store/localStorage'
import { themes, generateTheme } from './Themes'

export const ThemeControlContext = React.createContext()

export const StyledPageWrapper = styled.section`
  height: 100vh;
  background-color: ${(props) => props.theme.dark};
`

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
