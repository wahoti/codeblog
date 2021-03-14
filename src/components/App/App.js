import React, { useState } from 'react'
import {
  Switch,
  Route,
  Link,
  useLocation,
  Redirect,
} from 'react-router-dom'

import About from '../About'
import Blog, { BLOGS } from '../Blog'

import './App.css'

// notes
// turn the arrows into a toggle button
  // hide the toggle button on small screens
// add a scrollable menu to the nav bar
  // auto show the nav bar when screen is large enough 

const NUMBER_OF_POSTS = BLOGS.length

function App() {
  const location = useLocation()
  const [menu, setMenu] = useState(false)
  const toggleMenu = () => {
    setMenu(prevState => prevState ? false : true)
  }

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
            {BLOGS?.map(({ title }, i) => (
              <Link className="nav-link primaryColor" to={`/${i}`} key={title}>{title}</Link>
            ))}
          {
            location.pathname !== '/about'
              ? (<Link className="nav-link primaryColor" to={'/about'}>about</Link>)
              : (<Link className="nav-link primaryColor" to={'/'}>home</Link>)
          }
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
