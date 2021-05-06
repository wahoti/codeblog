import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About'
import Blog, { BLOGS } from '../Blog'
import {
  StyledMenu,
  StyledContainer,
  StyledHeader,
  StyledHamburger,
  StyledMain,
  StyledFooter,
  StyledLink,
} from './App.styled'

const NUMBER_OF_POSTS = BLOGS.length

function App() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu((prevState) => (prevState ? false : true))
  const menuOff = () => setMenu(false)

  // let menuClass = 'menu'
  // if (menu === null) {
  //   menuClass += ' menu-init'
  // } else if (menu) {
  //   menuClass += ' menu-show'
  // } else if (!menu) {
  //   menuClass += ' menu-hide'
  // }

  return (
    <>
      <StyledContainer>
        <StyledHeader>
          code-blog
          <StyledHamburger onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </StyledHamburger>
        </StyledHeader>
        <nav>
          <StyledMenu menu={menu}>
            <StyledLink to={'/about'} onClick={menuOff}>
              about
            </StyledLink>
            {BLOGS?.map(({ title }, i) => (
              <StyledLink to={`/${i}`} key={title} onClick={menuOff}>
                {title}
              </StyledLink>
            ))}
          </StyledMenu>
        </nav>
        <StyledMain>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path={'/:id'}>
              <Blog />
            </Route>
            <Route path="/">
              <Redirect to={`/${NUMBER_OF_POSTS - 1}`} />
            </Route>
          </Switch>
        </StyledMain>
        <aside></aside>
        <StyledFooter></StyledFooter>
      </StyledContainer>
    </>
  )
}

export default App
