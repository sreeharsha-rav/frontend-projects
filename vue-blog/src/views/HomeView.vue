<script setup lang="ts">
import { shallowRef } from 'vue';
import { usePostStore } from '@/stores/post';
import PostCard from '@/components/PostCard.vue';
import PostWrapper from '@/components/PostWrapper.vue';

const postStore = usePostStore();
const postFilter = shallowRef<string>('all');

const setPostFilter = (filter: string) => {
  postFilter.value = filter;
};
</script>

<template>
  <!-- Header with filters -->
  <div class="inline-flex items-center justify-between w-full mb-6">
    <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">
      {{ postFilter === 'all' ? 'All Posts' : 'Saved Posts' }}
    </h2>
    <div class="flex space-x-4">
      <button
        @click="setPostFilter('all')"
        :class="{
          'text-blue-500 dark:text-blue-400': postFilter === 'all',
          'text-gray-500 dark:text-neutral-500': postFilter !== 'all',
        }"
      >
        All
      </button>
      <button
        @click="setPostFilter('saved')"
        :class="{
          'text-blue-500 dark:text-blue-400': postFilter === 'saved',
          'text-gray-500 dark:text-neutral-500': postFilter !== 'saved',
        }"
      >
        Saved
      </button>
    </div>
  </div>

  <!-- Loading state -->
  <div v-if="postStore.loading" class="text-center">Loading posts...</div>

  <!-- Error state -->
  <div v-else-if="postStore.error" class="text-center text-red-500">
    Error: {{ postStore.error }}
  </div>

  <!-- Posts -->
  <div v-if="postFilter === 'all'">
    <PostWrapper v-for="post in postStore.sorted" :key="post.id">
      <PostCard :post="post" />
    </PostWrapper>
  </div>
  <div v-else>
    <PostWrapper v-for="post in postStore.saved" :key="post.id">
      <PostCard :post="post" />
    </PostWrapper>
  </div>
</template>
