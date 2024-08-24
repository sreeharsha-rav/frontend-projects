import type { SearchLocation } from '../types/search';
import type { ForecastResponse } from '../types/forecast';

const API_URL = 'https://api.weatherapi.com/v1';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error('API key not found');
}

class WeatherService {
  private apiUrl: string;
  private apiKey: string;

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl;
    this.apiKey = apiKey;
  }

  async getLocationsAutocomplete(query: string): Promise<SearchLocation[]> {
    try {
      const response = await fetch(`${this.apiUrl}/search.json?key=${this.apiKey}&q=${query}`);
      if (!response.ok) {
        throw new Error(`Error fetching locations: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching locations from API URL', error);
      throw error;
    }
  }

  async getForecast(id: number, days: number = 3): Promise<ForecastResponse> {
    try {
      const response = await fetch(`${this.apiUrl}/forecast.json?key=${this.apiKey}&q=id:${id}&days=${days}&aqi=no&alerts=no`);
      if (!response.ok) {
        throw new Error(`Error fetching forecast: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error('Error fetching forecast:', error);
      throw error;
    }
  }
}

const weatherService = new WeatherService(API_URL, API_KEY);

export default weatherService;