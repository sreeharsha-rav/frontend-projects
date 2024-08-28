<script setup lang="ts">
import { computed, reactive } from 'vue';
import { usePostStore } from '@/stores/post';
import type { NewPost } from '@/types/post.model';
import { useRouter } from 'vue-router';

const postStore = usePostStore();
const newPost = reactive<NewPost>({
  title: '',
  body: '',
  author: 'John Doe', // Set the author name
});
const router = useRouter();

const isFormInvalid = computed(() => !newPost.title || !newPost.body);

const handleSubmit = async (event: Event) => {
  event.preventDefault();
  try {
    await postStore.addPost(newPost);
    newPost.title = '';
    newPost.body = '';
    router.push({ name: 'home' });
  } catch (error) {
    console.error('Failed to create post:', error);
    // You might want to show an error message to the user here
  }
};
</script>
<template>
  <div class="w-full">
    <div class="mx-auto max-w-2xl">
      <!-- Title -->
      <div class="text-center">
        <h2 class="text-xl text-gray-800 font-bold sm:text-3xl dark:text-white">Create a Post</h2>
      </div>

      <!-- Card -->
      <div
        class="mt-5 p-4 relative z-10 bg-white border rounded-xl sm:mt-10 md:p-10 dark:bg-neutral-900 dark:border-neutral-700"
      >
        <form @submit="handleSubmit">
          <div class="mb-4 sm:mb-8">
            <label
              for="hs-feedback-post-comment-name-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Post title</label
            >
            <input
              type="text"
              id="post-title"
              v-model="newPost.title"
              class="py-3 px-4 bg-gray-100 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Post title"
            />
          </div>

          <div>
            <label
              for="hs-feedback-post-comment-textarea-1"
              class="block mb-2 text-sm font-medium dark:text-white"
              >Content</label
            >
            <div class="mt-1">
              <textarea
                id="hs-feedback-post-comment-textarea-1"
                name="hs-feedback-post-comment-textarea-1"
                rows="3"
                v-model="newPost.body"
                class="py-3 px-4 bg-gray-100 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Write your post here"
              ></textarea>
            </div>
          </div>

          <div class="mt-6 grid">
            <button
              type="submit"
              :disabled="isFormInvalid"
              class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <!-- End Card -->
    </div>
  </div>
</template>
