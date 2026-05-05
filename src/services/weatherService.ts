import api from '@/api/api'
import type { Weather } from '@/types/weather'

const weatherService = {
  async getWeather(lat: number, lon: number): Promise<Weather> {
    const response = await api.get('/weather', {
      params: {
        lat,
        lon,
      },
    })

    return response.data
  },
}

export default weatherService
