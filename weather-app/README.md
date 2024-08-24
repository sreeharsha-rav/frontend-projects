# Weather App

A simple weather app that uses the OpenWeatherMap API to get the weather data for a given city.

![Weather App](./public/weather_app.gif)

## Live Demo

[Netlify](https://brilliant-rabanadas-fc36b6.netlify.app/)

## Features

- Auto-complete city search
- Debounced Auto-complete search to avoid unnecessary API calls
- Current weather data
- 3-day Forecast with plenty of details: Wind, Humidity, Pressure, Sunrise, Sunset, etc.
- Performant Optimistic UI updates with loading states

## Tech Stack

- Vue 3
- TypeScript
- Tailwind CSS
- Vite
- pnpm

## Setup

1. Clone the repository
2. Install dependencies: `pnpm install`
3. Create a `.env` file in the root directory and add your [Weather API key](https://www.weatherapi.com/) as follows:
   ```
   VITE_WEATHERMAP_API_KEY=your-api-key
   ```
4. Start the development server: `pnpm dev`

## Build

To build the app, run `pnpm build`. The output will be in the `dist` directory.
