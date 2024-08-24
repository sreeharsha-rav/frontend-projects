import weatherService from "../services/weatherService";
import { reactive } from "vue";
import type { ForecastResponse } from "../types/forecast";

export default function useForecast() {
  const forecast = reactive({
    data: null as ForecastResponse | null,
    isLoading: false,
    error: null as Error | null
  });

  const getForecast = async (id: number, days: number = 3) => {
    forecast.isLoading = true;
    forecast.error = null;

    try {
      const data = await weatherService.getForecast(id, days);
      forecast.data = data;
    } catch (e) {
      console.error(e);
      forecast.error = e as Error;
      throw e;
    } finally {
      forecast.isLoading = false;
    }
  };

  return {
    forecast,
    getForecast
  };
}