import React, { useState } from 'react'
import {
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'

import About from '../About'
import Blog, { BLOGS } from '../Blog'

import './App.css'

const NUMBER_OF_POSTS = BLOGS.length

function App() {
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => setMenu(prevState => prevState ? false : true)
  const menuOff = () => setMenu(false)

  return (
    <>
      <div className="container tertiaryColorBack">
        <header className="tertiaryColorBack primaryBorderBot">
          food-blog
          <div className="hamburger" onClick={toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </header>
        <nav>
          <div className={`${!menu ? 'hidden' : 'visible'}`}>
            <Link
              className="nav-link primaryColor"
              to={'/about'}
              onClick={menuOff}
            >
              about
            </Link>
            {BLOGS?.map(({ title }, i) => (
              <Link
                className="nav-link primaryColor"
                to={`/${i}`}
                key={title}
                onClick={menuOff}
              >
                {title}
              </Link>
            ))}
          </div>
        </nav>
        <main>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path={`/:id`}>
                <Blog />
              </Route>
              <Route path="/">
                <Redirect to="/0" /> 
              </Route>
            </Switch>
        </main>
        <aside></aside>
        <footer>
        </footer>
      </div>
    </>
  )
}

export default App
