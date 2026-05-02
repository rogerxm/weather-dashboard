import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.OPENWEATHERMAP_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: import.meta.env.OPENWEATHERMAP_API_KEY,
  },
})

export default api
