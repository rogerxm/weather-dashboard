<template>
  <div class="min-h-screen flex items-center justify-center">
    <CardContainer>
      <LoadingSpinner v-if="loading" />

      <div v-else>
        <SearchInput />
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
