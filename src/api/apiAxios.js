import axios from 'axios'

const apiUrl = 'http://shibe.online/api'

// axios.defaults.proxy = 'http://shibe.online/api'

const apiAxios = axios.create({
  baseURL: apiUrl,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiAxios
