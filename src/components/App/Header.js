import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { BLOGS } from '../Blog'
import {
  StyledMenu,
  StyledHeader,
  StyledHamburger,
  StyledNav,
  StyledNavHeader,
  StyledMenuItem,
} from './App.styled'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu((prevState) => (prevState ? false : true))
  const menuOff = () => setMenu(false)
  let history = useHistory()
  let location = useLocation()

  const handleNavigate = (destination) => {
    menuOff()
    if (location?.pathname !== destination) history.push(destination)
  }
  return (
    <>
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
          <StyledMenuItem
            onClick={() => handleNavigate('/about')}
            selected={location?.pathname === '/about'}>
            about
          </StyledMenuItem>
          {BLOGS?.map(({ title }, i) => (
            <StyledMenuItem
              key={title}
              onClick={() => handleNavigate(`/${i}`)}
              selected={location?.pathname === `/${i}`}>
              {title}
            </StyledMenuItem>
          ))}
        </StyledMenu>
      </StyledNav>
    </>
  )
}

export default Header
