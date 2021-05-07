export const setTheme = (theme) => {
  try {
    localStorage.setItem('theme', JSON.stringify(theme))
  } catch {
    console.log('ERROR: setTheme')
  }
}

export const getTheme = () => {
  try {
    return JSON.parse(localStorage.getItem('theme'))
  } catch {
    console.log('ERROR: getTheme')
  }
}
