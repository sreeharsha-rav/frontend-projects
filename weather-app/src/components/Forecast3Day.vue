<script setup lang="ts">
import type { ForecastDay } from "../types/forecast";
const props = defineProps<{
  forecastDay: ForecastDay;
}>();

const { forecastDay } = props;
</script>

<template>
  <div class="mb-2 flex items-center justify-between">
    <table class="w-full">
      <tr>
        <!-- day of the week -->
        <td class="w-1/3">
          {{ new Date(forecastDay.date).toLocaleDateString("en-us", { weekday: "long" }) }}
        </td>

        <!-- icon -->
        <td class="w-1/3">
          <img :src="forecastDay.day.condition.icon" alt="icon" width="30" class="mx-auto" />
        </td>

        <!-- high/low temp -->
        <td class="w-1/3 text-right">
          {{ Math.round(forecastDay.day.maxtemp_c) }} / {{ Math.round(forecastDay.day.mintemp_c) }}
        </td>
      </tr>
    </table>
  </div>
</template>
