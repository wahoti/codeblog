import React from 'react'
import { StyledImgWrapper, StyledImgBlurb, StyledImg } from './Blog.styled'

const Img = ({ src, alt, blurb }) => (
  <StyledImgWrapper>
    <StyledImg src={src} alt={alt} />
    <StyledImgBlurb>
      <p>{blurb}</p>
    </StyledImgBlurb>
  </StyledImgWrapper>
)

export default Img
