/* eslint no-unused-vars: 0 */

const p = [
  {
    dark: '#231F20',
    color1: '#BB4430',
    color2: '#7EBDC2',
    color3: '#F3DFA2',
    light: '#EFE6DD',
  },
]

export const generateTheme = ({ dark, color1, color2, color3, light }) => {
  return {
    dark,
    color1,
    color2,
    color3,
    light,
    gradient: `linear-gradient(45deg, ${color1}, ${color2}, ${color3})`,
  }
}

export const themes = {
  light: generateTheme({
    dark: '#231F20',
    color1: '#BB4430',
    color2: '#7EBDC2',
    color3: '#F3DFA2',
    light: '#EFE6DD',
  }),
  dark: generateTheme({
    light: '#231F20',
    color2: '#BB4430',
    color1: '#7EBDC2',
    color3: '#F3DFA2',
    dark: '#EFE6DD',
  }),
}
