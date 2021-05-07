import React from 'react'
import { StyledPostWrapper } from '../Blog.styled'

const Post = ({ title, date, children }) => (
  <StyledPostWrapper>
    <h3>{date}</h3>
    <h3>{title}</h3>
    {children}
  </StyledPostWrapper>
)

export default Post
