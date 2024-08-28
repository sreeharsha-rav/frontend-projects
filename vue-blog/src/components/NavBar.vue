<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full py-7 font-sans">
    <nav
      class="relative max-w-7xl w-full flex flex-wrap md:grid md:grid-cols-12 basis-full items-center px-4 md:px-6 md:px-8 mx-auto"
    >
      <div class="flex justify-between w-full md:col-span-3">
        <h1 class="text-2xl font-bold text-gray-800 dark:text-neutral-200">Vue Blog</h1>
      </div>
      <div class="hidden md:flex md:col-span-6 justify-center space-x-6">
        <RouterLink
          to="/"
          :class="{
            'text-sm text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400':
              $route.path !== '/',
            'text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500':
              $route.path === '/',
          }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/create"
          :class="{
            'text-sm text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400':
              $route.path !== '/create',
            'text-sm text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-500':
              $route.path === '/create',
          }"
        >
          Create Post
        </RouterLink>
      </div>
    </nav>
  </header>
</template>
