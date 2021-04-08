import React from 'react'
import './About.css'

const About = () => (
  <div className="post-wrapper">
    <h3 className="primaryColor">About</h3>
    <p>
      The blog is meant to be a document of things that I have learned.
      <br />
      My goal is to create a quick place to reference and share information.
    </p>
    <div className="about">
      <a className="primaryColor" href="https://github.com/wahoti/codeblog">
        Github
      </a>
      <a
        className="primaryColor"
        href="https://www.linkedin.com/in/abdulwahed-wahedi-64b2478a">
        LinkedIn
      </a>
      <a className="primaryColor" href="https://wahedi.me/">
        about me
      </a>
    </div>
  </div>
)

export default About
