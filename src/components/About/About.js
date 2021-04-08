import React from 'react'
import './About.css'

const About = () => (
  <div className="post-wrapper">
    <h3 className="primaryColor">About</h3>
    <p>
      Hi! this is my code blog! A place for me to document what I have learned
    </p>
    <div className="column">
      <a className="primaryColor" href="https://github.com/wahoti/codeblog">
        github
      </a>
      <a className="primaryColor" href="https://grid-grail.glitch.me/">
        layout
      </a>
      <a
        className="primaryColor"
        href="https://www.linkedin.com/in/abdulwahed-wahedi-64b2478a">
        linked in
      </a>
      <a
        className="primaryColor"
        href="https://render.com/docs/deploy-create-react-app">
        render deployment
      </a>
    </div>
  </div>
)

export default About
