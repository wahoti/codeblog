import React from 'react'
import Code from '../Code'

/* eslint no-unused-vars: 0 */

// https://reactjs.org/docs/hooks-custom.html

// ok maybe this isnt a great post but do something that involves a custom hook maybe and at least read up on it

// "A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. "

// only call other Hooks unconditionally at the top level of your custom Hook.
// Don’t call Hooks inside loops, conditions, or nested functions.

// https://reactjs.org/docs/hooks-rules.html

const Post = () => {
  return (
    <>
      <p>this post will be about custom hooks</p>
    </>
  )
}

export default Post
