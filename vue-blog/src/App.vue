<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { usePostStore } from './stores/post';
import NavBar from './components/NavBar.vue';

const postStore = usePostStore();

// Fetch posts from the API
onMounted(async () => {
  await postStore.fetchPosts();
});
</script>

<template>
  <NavBar />
  <div class="container mx-auto font-sans">
    <main class="flex flex-col items-center justify-center space-y-2 mx-auto max-w-7xl px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>
