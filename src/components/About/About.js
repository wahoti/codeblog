import React from 'react'
import { StyledWrapper, StyledAbout } from './About.styled'

const About = () => (
  <StyledWrapper>
    <h3>About</h3>
    <p>
      The blog is meant to be a document of things that I have learned and stuff
      I have worked on. My goal is to create a quick place to reference and
      share information.
    </p>
    <StyledAbout>
      <a href="https://github.com/wahoti/codeblog">Source</a>
      <a href="https://www.linkedin.com/in/abdulwahed-wahedi-64b2478a">
        LinkedIn
      </a>
      <a href="https://wahedi.me/">about me</a>
    </StyledAbout>
  </StyledWrapper>
)

export default About
