import axios from 'axios'

const BASE_URL = import.meta.env.VITE_OPENWEATHERMAP_BASE_URL
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY

console.log({ BASE_URL, API_KEY })

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  params: {
    appid: API_KEY,
  },
})

export default api
