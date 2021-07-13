import styled from 'styled-components'

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  outline: 0;
  position: fixed;
  z-index: 1000;
`

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-height: 90%; // change to 100% for mobile screens
  z-index: 1001;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.light};
  border: 1px solid ${({ theme }) => theme.dark};
`
