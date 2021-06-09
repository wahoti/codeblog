import styled from 'styled-components'

export const StyledContainer = styled.div`
  /* height: 100%; */
  margin: 0;
  @media (max-width: 699px) {
    display: flex;
    flex-direction: column;
  }
  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 130px 1fr;
    grid-template-rows: auto 1fr;
  }
`

export const StyledHeader = styled.header`
  background-image: ${({ theme }) => theme?.gradient};
  /* background-color: ${({ theme }) => theme?.dark}; */
  color: ${({ theme }) => theme?.color2};
  text-align: center;
  font-size: 1.4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  padding: 8px;
  @media (max-width: 699px) {
    border-bottom: 1px solid ${({ theme }) => theme?.color2};
  }
  @media (min-width: 700px) {
    height: 0;
    padding: 0;
    div {
      display: none;
    }
  }
`

export const StyledNav = styled.div`
  background-color: ${({ theme }) => theme?.light};
  @media (max-width: 699px) {
    border-bottom: 1px solid ${({ theme }) => theme?.color2};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    display: ${({ menu }) => (menu ? 'flex' : 'none')};
  }
  @media (min-width: 700px) {
    background-image: ${({ theme }) => theme?.gradient};
    grid-column: 1;
    grid-row: 1 / 3;
  }
`

export const StyledNavHeader = styled.h3`
  color: ${({ theme }) => theme?.color2};
  @media (max-width: 699px) {
    display: none;
  }
  @media (min-width: 700px) {
  }
`

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

export const StyledMenuItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme?.color2}33;
  color: ${({ theme }) => theme?.color1};
  cursor: pointer;
  border-left: ${({ selected, theme }) =>
    selected ? `3px solid ${theme?.color1}` : 'none'};
  :hover {
    background-color: ${({ theme }) => theme?.color2};
  }
`

export const StyledHamburger = styled.div`
  cursor: pointer;
  div {
    width: 35px;
    height: 5px;
    background-color: ${({ theme }) => theme?.color2};
    margin: 6px 0;
  }
  @media (min-width: 700px) {
    display: none;
  }
`

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme?.light};
  height: 100%;
  width: 100%;
  min-width: 0;
  p {
    color: ${({ theme }) => theme?.dark};
  }
  a {
    color: ${({ theme }) => theme?.color2};
  }
  h3 {
    color: ${({ theme }) => theme?.color1};
  }
  code {
    word-break: break-all !important;
    font-size: 12px;
  }
  pre {
    overflow: auto;
  }
`

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
