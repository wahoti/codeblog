import React, { useState, useRef, useEffect } from 'react'
import {
  StyledWrapper,
  StyledIconWrapper,
  StyledTitle,
  StyledContent,
} from './Collapsable.styled'
import { ReactComponent as DropdownIcon } from '../images/ios-arrow-down.svg'

const Collapsable = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState(null)
  const activeToggle = () => setActive(!active)
  const contentRef = useRef(null)

  useEffect(() => {
    setHeight(contentRef?.current?.clientHeight)

    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(
        () => setHeight(contentRef?.current?.clientHeight),
        100
      )
    }
    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [active, contentRef, height])

  return (
    <StyledWrapper active={active} height={height}>
      <StyledTitle onClick={activeToggle}>
        {title}
        <StyledIconWrapper active={active}>
          <DropdownIcon />
        </StyledIconWrapper>
      </StyledTitle>
      <StyledContent ref={contentRef}>{content}</StyledContent>
    </StyledWrapper>
  )
}

export default Collapsable
