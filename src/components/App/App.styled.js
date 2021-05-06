import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledMenu = styled.div`
  display: ${({ menu }) => (menu ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  a {
    opacity: 30%;
  }
  a:hover {
    opacity: 1;
  }
  @media (min-width: 700px) {
    border-right: 1px groove #ffcc0077;
    overflow: hidden;

    //     .menu-init {
    //       max-width: 0;
    //       border: none;
    //     }

    //     .menu-show {
    //       animation-duration: 400ms;
    //       animation-name: slideright;
    //       animation-fill-mode: forwards;
    //       animation-timing-function: ease-in-out;
    //     }

    //     .menu-hide {
    //       animation-duration: 400ms;
    //       animation-name: slideleft;
    //       animation-fill-mode: forwards;
    //       animation-timing-function: ease-in-out;
    //     }
  }

  @media (max-width: 699px) {
    border-bottom: 1px groove #ffcc0077;
    overflow: hidden;

    //     .menu-init {
    //       max-height: 0;
    //       border: none;
    //     }

    //     .menu-show {
    //       animation-duration: 400ms;
    //       animation-name: slidedown;
    //       animation-fill-mode: forwards;
    //       animation-timing-function: ease-in-out;
    //     }

    //     .menu-hide {
    //       animation-duration: 400ms;
    //       animation-name: slideup;
    //       animation-fill-mode: forwards;
    //       animation-timing-function: ease-in-out;
    //     }
  }
`

export const StyledContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  background-color: #282c34;
  /* transition: all 400ms; */

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 64px 1fr auto;
  }

  @media (max-width: 699px) {
    display: flex;
    flex-direction: column;
  }
`

export const StyledHeader = styled.header`
  grid-column: span 3;
  text-align: center;
  font-size: 1.4em;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  background-color: #282c34;
  border-bottom: 1px solid #fc0;
`

export const StyledHamburger = styled.div`
  cursor: pointer;
  div {
    width: 35px;
    height: 5px;
    background-color: #ffcc00;
    margin: 6px 0;
  }
`

export const StyledMain = styled.main`
  @media (min-width: 700px) {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media (max-width: 699px) {
    flex: 1;
  }
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-column: span 3;
`

export const StyledLink = styled(Link)`
  margin: 4px;
  color: #ffcc00;
`

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

//   @keyframes slidedown {
//     from {
//       max-height: 0;
//       border: none;
//     }
//     to {
//       max-height: 500px;
//     }
//   }

//   @keyframes slideup {
//     from {
//       max-height: 500px;
//     }
//     to {
//       max-height: 0;
//       border: none;
//     }
//   }
