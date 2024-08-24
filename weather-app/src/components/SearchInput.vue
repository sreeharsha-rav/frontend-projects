<script setup lang="ts">
import { ref, computed } from "vue";
import { Search } from "lucide-vue-next";
import useSearch from "../composables/useSearch";
import type { SearchLocation } from "../types/search";

const {
  searchQuery,
  results,
  isSearchLoading,
  handleSearch,
  showResults,
  showNoResults,
  searchError,
} = useSearch();
const selectedLocation = ref<SearchLocation | null>(null);

const emit = defineEmits(["locationSelected"]);

const handleSelect = (result: SearchLocation) => {
  searchQuery.value = "";
  selectedLocation.value = result;
  results.value = [];
  emit("locationSelected", result);
};

const hasError = computed(() => !!searchError.value);
</script>

<template>
  <!-- Search Field -->
  <form @submit.prevent="handleSearch">
    <div class="bg-white border border-indigo-600/30 rounded-lg shadow-lg flex items-center">
      <div class="p-2 text-indigo-600">
        <Search />
      </div>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search location..."
        class="rounded-r-lg p-2 border-0 outline-0 focus:ring-2 focus:ring-indigo-600 ring-inset w-full"
        @input="handleSearch"
      />
    </div>
  </form>
  <!-- Search Suggestions -->
  <div class="bg-white my-2 rounded-lg shadow-lg">
    <!-- Loading Indicator -->
    <div v-if="isSearchLoading" class="py-2 px-4 text-gray-500">Loading...</div>

    <!-- Search Error -->
    <div v-if="hasError" class="text-red-600">
      <p>{{ searchError }}</p>
      <button @click="handleSearch" class="text-indigo-600 underline">Retry</button>
    </div>

    <!-- Search Results -->
    <ul v-else-if="showResults" class="bg-white border border-gray-300 rounded-lg shadow-lg">
      <li
        v-for="result in results"
        :key="result.id"
        class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
      >
        <button
          type="button"
          class="px-3 my-2 hover:text-indigo-600 hover:font-bold"
          @click="handleSelect(result)"
        >
          {{ result.name }}, {{ result.region }}, {{ result.country }}
        </button>
      </li>
    </ul>

    <!-- No Results found -->
    <div v-else-if="showNoResults" class="py-2 px-4 text-gray-500">
      <p>No results found for "{{ searchQuery }}"</p>
    </div>
  </div>
</template>
