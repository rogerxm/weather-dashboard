<template>
  <div class="min-h-screen flex items-center justify-center">
    <CardContainer>
      <LoadingSpinner v-if="loading" />

      <span v-else-if="error" class="text-red-500">
        {{ error }}
      </span>

      <div v-else>
        <SearchInput />

        <h1 class="text-7xl text-center mt-8">
          {{ weather?.main.temp.toFixed(1) }}°C
        </h1>

        <p class="text-center text-gray-500 mt-2">
          {{ weather?.name }}
        </p>
      </div>
    </CardContainer>
  </div>
</template>

<script setup lang="ts">
import CardContainer from '@/components/CardContainer.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import SearchInput from '@/components/SearchInput.vue';
import { useWeather } from '@/composables/useWeather';

const defaultCity = {
  lat: 19.4326,
  lon: -99.1332,
}

const { weather, loading, error } = useWeather(defaultCity.lat, defaultCity.lon);



</script>

<style scoped></style>
