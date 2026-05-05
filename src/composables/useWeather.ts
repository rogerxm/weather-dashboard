import { onMounted, ref } from 'vue'
import type { Weather } from '@/types/weather'
import weatherService from '@/services/weatherService'

export const useWeather = (lat: number, lon: number) => {
  const weather = ref<Weather | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  onMounted(async () => {
    try {
      loading.value = true
      weather.value = await weatherService.getWeather(lat, lon)
    } catch (err) {
      error.value = 'Error al obtener el clima.'
    } finally {
      loading.value = false
    }
  })

  return {
    weather,
    loading,
    error,
  }
}
