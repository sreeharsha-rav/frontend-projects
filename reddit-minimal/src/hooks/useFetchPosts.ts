import { useState, useEffect } from 'react';
import { SubredditPost } from '../types/subreddit';
import { fetchPosts } from '../services/redditApi';

// Define the possible sorting options for posts
type PostSort = '' | 'new' | 'hot' | 'top';

/**
 * Custom hook for fetching posts from a subreddit.
 * 
 * @param subreddit - The name of the subreddit to fetch posts from.
 * @param sort - The sorting option for the fetched posts (optional).
 * @returns An object containing the fetched posts, loading state, and error message (if any).
 */
const useFetchPosts = (subreddit: string, sort: PostSort = '') => {
  const [posts, setPosts] = useState<SubredditPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const fetchedPosts = await fetchPosts(subreddit, sort);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError('Failed to fetch posts. Please try again later.');
        } else {
          setError('An unknown error occurred.');
        }
        setLoading(false);
      }
    };

    getPosts();
  }, [subreddit, sort]);

  return { posts, loading, error };
};

export default useFetchPosts;