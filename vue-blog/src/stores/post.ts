import { defineStore } from 'pinia';
import type { NewPost, Post } from '@/types/post.model';

export const usePostStore = defineStore('post-store', {
  // State is used to store data
  state: (): { posts: Post[]; loading: boolean; error: string | null } => ({
    posts: [],
    loading: false,
    error: null,
  }),
  // Getters are used to compute derived state
  getters: {
    sorted(): Post[] {
      return [...this.posts].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );
    },
    saved(): Post[] {
      return [...this.posts]
        .filter((post) => post.is_saved)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    },
  },
  // Actions are used to modify the state
  actions: {
    async fetchPosts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('http://localhost:3000/posts');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.posts = data;
        console.log('Posts fetched:', data);
      } catch (e) {
        this.error = e instanceof Error ? e.message : 'An unknown error occurred';
        console.error('Error fetching posts:', e);
      } finally {
        this.loading = false;
      }
    },
    async addPost(post: NewPost) {
      try {
        const response = await fetch('http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...post,
            id: (this.posts.length + 1).toString(),
            createdAt: new Date().toLocaleDateString(),
            is_saved: false,
          }),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const newPost = await response.json();
        this.posts = [...this.posts, newPost];
        console.log('Post added:', newPost);
      } catch (e) {
        console.error('Error adding post:', e);
        throw e;
      }
    },

    async deletePost(id: string) {
      try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
          method: 'DELETE',
        });
        if (response.status === 404) {
          console.warn(`Post with id ${id} not found on server. Removing from local state.`);
          // Remove the post from the local state even if it's not found on the server
          this.posts = this.posts.filter((post) => post.id !== id);
          return;
        }
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        // If deletion was successful on the server, remove from local state
        this.posts = this.posts.filter((post) => post.id !== id);
        console.log(`Post ${id} deleted`);
      } catch (e) {
        console.error('Error deleting post:', e);
        throw e;
      }
    },

    async toggleBookmark(id: string) {
      const post = this.posts.find((post) => post.id === id);
      if (post) {
        const originalSavedState = post.is_saved;
        try {
          // Optimistically update the local state
          post.is_saved = !post.is_saved;

          const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ is_saved: post.is_saved }),
          });

          if (response.status === 404) {
            console.warn(`Post with id ${id} not found on server. Reverting local state.`);
            // Revert the local state change
            post.is_saved = originalSavedState;
            throw new Error('Post not found on server');
          }

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          // If we get here, the server update was successful
          console.log(`Bookmark toggled for post ${id}`);
        } catch (e) {
          // Revert the local state change if there was an error
          post.is_saved = originalSavedState;
          console.error('Error toggling bookmark:', e);
          throw e;
        }
      } else {
        console.error(`Post with id ${id} not found in local state`);
        throw new Error('Post not found in local state');
      }
    },
  },
});
