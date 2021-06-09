import styled from 'styled-components'

export const StyledWrapper = styled.div`
  margin: 16px 8px;
  max-height: ${({ active, height }) => (active ? `${height + 48}px` : '48px')};
  transition: max-height 0.4s ease;
  overflow: hidden;
`

export const StyledTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 8px;
  cursor: pointer;
  user-select: none;

  font-size: 21px;
  font-weight: bold;
  line-height: 1.52;

  color: ${({ theme }) => theme?.dark};
`

export const StyledContent = styled.div`
  padding: 8px;

  font-size: 16px;
  line-height: 1.75;

  color: ${({ theme }) => theme?.dark};
`

export const StyledIconWrapper = styled.div`
  transform: ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.4s ease;
  height: 24px;
  width: 24px;
  svg {
    width: 24px;
    height: 24px;
    fill: ${({ theme }) => theme?.dark};
  }
`

// dark: '#231F20',
// color1: '#BB4430',
// color2: '#7EBDC2',
// color3: '#F3DFA2',
// light: '#E5D6C8',
