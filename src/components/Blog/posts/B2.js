import React, { useEffect } from 'react'
// import Code from '../Code'
import { StyledImgWrapper, StyledImg } from '../Blog.styled.js'
import useShibe from '../../../api/useShibe'
import FetchList from './comps/FetchList'
// import { apiGetShibe } from '../../../api/shibe'
/* eslint no-unused-vars: 0 */

// why fetch?

// why axios?

// why swr?

// Example GET method implementation:
// async function getData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json',
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   })
//   return response.json() // parses JSON response into native JavaScript objects
// }

const Post = () => {
  const { data, error, loading } = useShibe()

  // console.log('use shibe', data, error, loading)

  console.log('render')

  useEffect(() => {
    // apiGetShibe()
    //   .then((res) => {
    //     console.log('res', res)
    //   })
    //   .catch((e) => {
    //     console.log('e', e)
    //   })
    // fetch('/shibes?count=[1]')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    // fetch('http://example.com/movies.json')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))
    // getData('https://example.com/answer', { answer: 42 }).then((data) => {
    //   console.log(data) // JSON data parsed by `data.json()` call
    // })
  })

  const shibeResponse = () => {
    if (loading) return <p>loading...</p>
    if (error) return <p>error</p>
    if (data)
      return (
        <StyledImgWrapper>
          <StyledImg src={data[0]} alt="shibe" />
        </StyledImgWrapper>
      )
    return <p>loading...</p>
  }

  return (
    <>
      <p>this post will be about api requests</p>
      <a href="https://shibe.online/">shibe api</a>
      <p></p>
      <a href="https://github.com/axios/axios">axios</a>
      <p></p>
      <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch">
        fetch
      </a>
      <p></p>
      <a href="https://swr.vercel.app/getting-started">swr</a>
      {shibeResponse()}
      <FetchList />
    </>
  )
}

export default Post

// https://www.pluralsight.com/guides/allow-access-control-origin-in-create-react-app
// getting cors errors????
