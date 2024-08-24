import { ref, computed } from "vue";
import WeatherService from "../services/weatherService";
import { debounce } from "../lib/utils";
import type { SearchLocation } from "../types/search";

/**
 * Composable function to handle search functionality
 * @returns {Object} searchQuery, isLoading, error, handleSearch, showResults, showError, showNoResults, results
 */
export default function useSearch() {

  const searchQuery = ref<string>("");
  const results = ref<SearchLocation[]>([]);
  const isSearchLoading = ref<boolean>(false);
  const cache = new Map<string, SearchLocation[]>();
  const searchError = ref<Error | null>(null);

  const fetchData = async (query: string) => {
    // Check if the query is already in the cache
    if (cache.has(query)) {
      results.value = cache.get(query) as SearchLocation[];
      return;
    }
  
    isSearchLoading.value = true;
    searchError.value = null;

    try {
      const data = await WeatherService.getLocationsAutocomplete(query);
      results.value = data;
      cache.set(query, data);
    } catch (e) {
      console.error(e);
      searchError.value = e as Error;
    } finally {
      isSearchLoading.value = false;
    }
  };

  const debouncedSearch = debounce(fetchData, 500);

  const handleSearch = () => {
    if (searchQuery.value.trim().length > 0) {
      debouncedSearch(searchQuery.value);
    } else {
      results.value = [];
    }
  };

  const showResults = computed(() => results.value.length > 0 && searchQuery.value.trim().length > 0);
  const showNoResults = computed(() => searchQuery.value.trim().length > 2 && results.value.length === 0 && !isSearchLoading.value);
  
  return {
    searchQuery,
    isSearchLoading,
    handleSearch,
    showResults,
    showNoResults,
    results,
    searchError,
  };
}