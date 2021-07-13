import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FetchList = () => {
  const [data, setData] = useState({ hits: [] })

  console.log('render fetch list')

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://hn.algolia.com/api/v1/search?query=redux'
      )

      setData(result.data)
    }

    fetchData()
  }, [])

  // That's why you can provide an empty array as second argument to the effect hook to avoid activating it on component updates but only for the mounting of the component.
  // without the empty array it just runs every render?
  // If the array with the variables is empty, the hook doesn't run when updating the component at all, because it doesn't have to watch any variables.

  return (
    <ul>
      {data.hits.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default FetchList
