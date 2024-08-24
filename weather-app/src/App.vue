<script setup lang="ts">
import { ref } from "vue";
import SearchInput from "./components/SearchInput.vue";
import type { SearchLocation } from "./types/search";
import WeatherCard from "./components/WeatherCard.vue";

const currentDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
const locations = ref<SearchLocation[]>([]);

const handleSelect = (location: SearchLocation) => {
  locations.value.push(location);
};

const removeLocation = (id: number) => {
  locations.value = locations.value.filter((location) => location.id !== id);
};
</script>

<template>
  <!-- Date -->
  <div class="text-center mb-6">
    {{ currentDate }}
  </div>

  <!-- Search Input -->
  <SearchInput @locationSelected="handleSelect" />

  <!-- Selected locations -->
  <div class="grid lg:grid-cols-3 gap-6 mt-6">
    <!-- Weather Cards -->
    <WeatherCard
      v-for="location in locations"
      :key="location.id"
      :location="location"
      @removeLocation="removeLocation"
    />
  </div>
</template>
