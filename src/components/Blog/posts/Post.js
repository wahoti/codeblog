import React from 'react'
import { StyledPostWrapper, StyledHeader } from '../Blog.styled'

const Post = ({ title, date, children }) => (
  <StyledPostWrapper>
    <StyledHeader>{date}</StyledHeader>
    <StyledHeader>{title}</StyledHeader>
    {children}
  </StyledPostWrapper>
)

export default Post
