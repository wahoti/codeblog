import styled from 'styled-components'

export const StyledWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 16px;
  position: relative;
  h3 {
    color: #ffcc00;
  }
  p {
    color: white;
  }
`

export const StyledAbout = styled.div`
  a {
    opacity: 0.5;
    padding: 4px;
    border: 1px solid #ffcc00;
    color: #ffcc00;
  }
  a:hover {
    opacity: 1;
  }
`
