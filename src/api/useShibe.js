import useSWR from 'swr'
// import apiAxios from './apiAxios'

// https://github.com/public-apis/public-apis
// https://github.com/axios/axios

// set up api axios

// set up fetch?

// use swr

// function Profile() {
//   const { data, error } = useSWR('/api/user/123', fetcher)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>

//   // render data
//   return <div>hello {data.name}!</div>
// }

// const fetcher = (url) => apiAxios.get(url)

const fetcher = (...args) => fetch(...args).then((res) => res.json())

// const shibeURL = 'http://shibe.online/api/shibes?count=[1]'
const shibeURL = '/shibes?count=[1]'

const options = {
  // revalidateOnMount: false,
  revalidateOnFocus: false,
}

const useShibe = () => {
  const { data, error } = useSWR(shibeURL, fetcher, options)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}

export default useShibe

// http://shibe.online/api/shibes?count=[1-100]&urls=[true/false]&httpsUrls=[true/false]
// https://aws.random.cat/meow
// https://alexwohlbruck.github.io/cat-facts/
