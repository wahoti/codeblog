import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import About from '../About'
import Blog, { BLOGS } from '../Blog'
import { StyledContainer, StyledMain } from './App.styled'
import Header from './Header'

const NUMBER_OF_POSTS = BLOGS.length

function App() {
  return (
    <>
      <StyledContainer>
        <Header />
        <StyledMain>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path={'/:id'}>
              <Blog />
            </Route>
            <Route path="/">
              <Redirect to={`/${NUMBER_OF_POSTS - 1}`} />
            </Route>
          </Switch>
        </StyledMain>
      </StyledContainer>
    </>
  )
}

export default App
