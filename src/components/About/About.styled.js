import styled from 'styled-components'

export const StyledWrapper = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 16px;
  position: relative;
`

export const StyledAbout = styled.div`
  a {
    opacity: 0.5;
    padding: 4px;
    border: 1px solid ${({ theme }) => theme?.color2};
  }
  a:hover {
    opacity: 1;
  }
`
