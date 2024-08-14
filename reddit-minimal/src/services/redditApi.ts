// src/services/redditApi.ts

import axios from 'axios';
import { SubredditPost } from '../types/subreddit';

const BASE_URL = 'https://www.reddit.com';

// Create an axios instance for the Reddit API
const api = axios.create({
  baseURL: BASE_URL,
});

/**
 * Fetches posts from a subreddit.
 * 
 * @param subreddit - The name of the subreddit.
 * @param sort - The sorting option for the posts (optional).
 * @returns A promise that resolves to an array of SubredditPost objects.
 */
export const fetchPosts = async (subreddit: string, sort: string = ''): Promise<SubredditPost[]> => {
    try {
      const url = sort ? `/r/${subreddit}/${sort}.json` : `/r/${subreddit}.json`;
      console.log(`Fetching ${sort || 'standard'} posts from ${url}...`);
  
      const response = await api.get(url);
      const data = response.data;
  
      console.log(`Fetched ${sort || 'standard'} posts:`, data);
  
      return data.data.children.map((child: any) => {         // any type is used here
        const post = child.data;
        return {
          title: post.title,
          author: post.author,
          subreddit: post.subreddit,
          score: post.score,
          ups: post.ups,
          downs: post.downs,
          num_comments: post.num_comments,
          created_utc: post.created_utc,
          selftext: post.selftext,
          url: post.url,
          id: post.id,
        };
      });
    } catch (error) {
        console.error(`Error fetching ${sort || 'standard'} posts:`, error);
        return [];
    }
};

/**
 * Fetches comments for a post.
 * 
 * @param name - The name identifier of the post.
 * @returns A promise that resolves to an array of comment strings.
 */
export const fetchPostComments = async (name: string): Promise<string[]> => {
  try {
    const response = await api.get(`${name}.json`);
    const data = response.data;

    console.log('Fetched post comments:', data);

    return data[1].data.children.map((child: any) => child.data.body);
  } catch (error) {
    console.error('Error fetching post comments:', error);
    return [];
  }
};