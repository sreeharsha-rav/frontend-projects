<script setup lang="ts">
import { defineProps } from 'vue';
import { usePostStore } from '@/stores/post';
import type { Post } from '@/types/post.model';
import TrashOutline from '@/assets/trash-outline.svg';
import BookmarkSolid from '@/assets/bookmark-solid.svg';
import BookmarkOutline from '@/assets/bookmark-outline.svg';

const props = defineProps<{
  post: Post;
}>();
const postStore = usePostStore();

const handleDelete = async () => {
  try {
    await postStore.deletePost(props.post.id);
  } catch (error) {
    console.error('Failed to delete post:', error);
  }
};

const handleToggleBookmark = async () => {
  try {
    await postStore.toggleBookmark(props.post.id);
  } catch (error) {
    console.error('Failed to toggle bookmark:', error);
  }
};
</script>

<template>
  <li>
    <div class="inline-flex items-center w-full justify-between">
      <p class="text-xs text-gray-500 dark:text-neutral-500">
        <span>{{ post.createdAt }}</span>
        <span aria-hidden="true" class="mx-2">•</span>
        <span>{{ post.author }}</span>
      </p>
      <div class="inline-flex items-center space-x-2">
        <button @click="handleDelete">
          <TrashOutline
            class="text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400 cursor-pointer"
          />
        </button>
        <button @click="handleToggleBookmark">
          <BookmarkOutline
            v-if="!post.is_saved"
            class="text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400 cursor-pointer"
          />
          <BookmarkSolid
            v-else
            class="text-gray-500 dark:text-neutral-500 hover:text-gray-800 dark:hover:text-neutral-400 cursor-pointer"
          />
        </button>
      </div>
    </div>
    <h5 class="font-medium text-lg text-gray-800 dark:text-neutral-200">
      {{ post.title }}
    </h5>
    <p class="mt-1 text-md text-gray-500 dark:text-neutral-500">
      {{ post.body }}
    </p>
    <p class="mt-1">
      <a
        class="text-sm text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
        href="#"
      >
        Continue reading
      </a>
    </p>
    <hr class="my-4 border-gray-200 dark:border-neutral-700" />
  </li>
</template>
