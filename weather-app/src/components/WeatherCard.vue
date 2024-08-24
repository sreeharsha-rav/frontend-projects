<script setup lang="ts">
import { ref, onMounted } from "vue";
import useForecast from "../composables/useForecast";
import type { SearchLocation } from "../types/search";
import LoadingSpinner from "./LoadingSpinner.vue";
import Forecast3Day from "./Forecast3Day.vue";
import WeatherInfo from "./WeatherInfo.vue";

const props = defineProps<{
  location: SearchLocation;
}>();

const emit = defineEmits(["removeLocation"]);

const { forecast, getForecast } = useForecast();
const showDetail = ref<boolean>(false);

const toggleDetail = () => {
  showDetail.value = !showDetail.value;
};

const handleRemove = () => {
  // console.log(`Removing location with name: ${props.location.name} and id: ${props.location.id}`);
  emit("removeLocation", props.location.id);
};

onMounted(async () => {
  try {
    await getForecast(props.location.id);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div v-if="forecast.isLoading" class="flex justify-center items-center h-96">
    <LoadingSpinner />
  </div>
  <div
    v-else-if="forecast.error"
    class="flex justify-center items-center h-96 text-red-600 rounded-lg shadow-lg p-6"
  >
    <p>Error fetching forecast: {{ forecast.error }}</p>
  </div>
  <div v-else-if="forecast.data">
    <!-- Background -->
    <div
      :class="forecast.data.current.is_day === 1 ? 'bg-day' : 'bg-night'"
      class="text-white p-10 rounded-lg shadow-lg gap-6 mb-6 relative overflow-hidden max-w-sm mx-auto"
    >
      <!-- Location & time -->
      <div class="mb-2 flex justify-between items-center">
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-location-dot"></i>
          <h1 class="text-3xl">{{ forecast.data.location.name }}</h1>
        </div>
        <div class="flex items-center justify-center gap-2">
          <i class="fa-solid fa-clock"></i>
          <h1 class="text-3xl">
            {{ new Date(forecast.data.location.localtime).getHours() }}:{{
              new Date(forecast.data.location.localtime).getMinutes()
            }}
          </h1>
        </div>
      </div>

      <!-- current weather -->
      <div class="text-center flex-1">
        <img
          :src="forecast.data.current.condition.icon"
          alt="icon"
          width="200"
          class="mx-auto -mb-10"
        />
        <h1 class="text-9xl mb-2 -mr-4">{{ Math.round(forecast.data.current.temp_c) }}&deg;</h1>
        <p class="text-2xl">{{ forecast.data.current.condition.text }}</p>
      </div>

      <!-- border -->
      <div class="w-full h-px bg-gradient-to-r from-white/0 via-white/90 to-white/0 my-10"></div>

      <!-- forecast -->
      <div v-for="(day, idx) in forecast.data.forecast.forecastday" :key="idx">
        <Forecast3Day :forecast-day="day" />
      </div>

      <!-- info -->
      <Transition name="fade">
        <WeatherInfo
          v-if="showDetail && forecast.data"
          :current="forecast.data.current"
          @close="toggleDetail"
          @remove="handleRemove"
        />
      </Transition>

      <!-- forecast btn -->
      <div class="flex justify-end items-center gap-1 mt-10">
        <button @click="showDetail = true">
          More <i class="fa-solid fa-arrow-right text-sm -mb-px"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-day {
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
}
.bg-night {
  background-color: #07223d;
  background-image: linear-gradient(62deg, #0a2a4a 0%, #270845 100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
