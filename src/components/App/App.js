import React, { useState } from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom'
import About from '../About'
import Blog, { BLOGS } from '../Blog'
import {
  StyledMenu,
  StyledContainer,
  StyledHeader,
  StyledHamburger,
  StyledMain,
  StyledNav,
  StyledNavHeader,
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
          <div>code-blog</div>
          <StyledHamburger onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </StyledHamburger>
        </StyledHeader>
        <StyledNav menu={menu}>
          <StyledMenu>
            <StyledNavHeader>code-blog</StyledNavHeader>
            <Link to={'/about'} onClick={menuOff}>
              about
            </Link>
            {BLOGS?.map(({ title }, i) => (
              <Link to={`/${i}`} key={title} onClick={menuOff}>
                {title}
              </Link>
            ))}
          </StyledMenu>
        </StyledNav>
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
      </StyledContainer>
    </>
  )
}

export default App
