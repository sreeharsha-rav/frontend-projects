import { SubredditAbout, SubredditAboutResponse, SubredditPost, SubredditPostResponse } from "@/types/index";

// Base URL for the Reddit API
const REDDIT_API_BASE = "https://www.reddit.com/r/";

/**
 * Get subreddit about information from the API
 * 
 * @param {Object} options - The options object.
 * @param {string} options.subreddit - The subreddit name.
 * @returns {Promise<SubredditAbout>} The promise that resolves to the subreddit about information.
 */
export async function getSubredditAbout({subreddit}: {subreddit: string}): Promise<SubredditAbout> {
    try {
        // Fetch subreddit about information from the API
        const response = await fetch(`${REDDIT_API_BASE}/${subreddit}/about.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditAboutResponse = await response.json();

        // Check if the data is valid
        if (data.kind !== "t5") {
            throw new Error("Invalid subreddit about data");
        }

        // Convert the data to a JSON object and return it
        const subredditData = data.data;
        const about: SubredditAbout = {
            name: subredditData.display_name,
            title: subredditData.title,
            description: subredditData.public_description,
            subscribers: subredditData.subscribers,
            active_users: subredditData.active_user_count,
            icon_url: subredditData.icon_img,
            banner_url: subredditData.banner_background_image,
            creation_date: subredditData.created_utc,
            is_over_18: subredditData.over18
        };
        
        return about;
    } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch subreddit about information");
    }
}

/**
 * Get posts standard for a given subreddit from the API
 * 
 * @param {Object} options - The options object.
 * @param {string} options.subreddit - The subreddit name.
 * @returns {Promise<SubredditPost[]>} The promise that resolves to the posts.
 */
export async function getPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch posts from the API
        const response = await fetch(`${REDDIT_API_BASE}/${subreddit}.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();
        
        // Convert the data to a JSON object and return only 5 posts
        const posts: SubredditPost[] = data.data.children.map(child => {
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
                permalink: post.permalink
            };
        });

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Get new posts for a given subreddit from the API
 * 
 * @param {Object} options - The options object.
 * @param {string} options.subreddit - The subreddit name.
 * @returns {Promise<SubredditPost[]>} The promise that resolves to the new posts.
 */
export async function getNewPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
  try {
    // Fetch new posts from the API
    const response = await fetch(`${REDDIT_API_BASE}/${subreddit}/new.json`, {
        next: {
            revalidate: 60
        }
    });
    const data: SubredditPostResponse = await response.json();

    // Convert the data to a JSON object and return it
    const posts: SubredditPost[] = data.data.children.map(child => {
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
            permalink: post.permalink
        };
    });

    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
}

/**
 * Get hot posts for a given subreddit from the API
 * 
 * @param {Object} options - The options object.
 * @param {string} options.subreddit - The subreddit name.
 * @returns {Promise<SubredditPost[]>} The promise that resolves to the hot posts.
 */
export async function getHotPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch hot posts from the API
        const response = await fetch(`${REDDIT_API_BASE}/${subreddit}/hot.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();

        // Convert the data to a JSON object and return it
        const posts: SubredditPost[] = data.data.children.map(child => {
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
                permalink: post.permalink
            };
        });

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Get top posts for a given subreddit from the API
 * 
 * @param {Object} options - The options object.
 * @param {string} options.subreddit - The subreddit name.
 * @returns {Promise<SubredditPost[]>} The promise that resolves to the top posts.
 */
export async function getTopPosts({subreddit}: {subreddit: string}): Promise<SubredditPost[]> {
    try {
        // Fetch top posts from the API
        const response = await fetch(`${REDDIT_API_BASE}/${subreddit}/top.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: SubredditPostResponse = await response.json();

        // Convert the data to a JSON object and return it
        const posts: SubredditPost[] = data.data.children.map(child => {
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
                permalink: post.permalink
            };
        });

        return posts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Get comments for a post from the API
 * 
 * @param {string} permalink - The permalink of the post.
 * @returns {Promise<string[]>} The promise that resolves to the comments.
 */
export async function getPostComments(permalink: string): Promise<string[]> {
    try {
        // Fetch comments for a post from the API
        const response = await fetch(`https://www.reddit.com${permalink}.json`, {
            next: {
                revalidate: 60
            }
        });
        const data: any = await response.json();

        // Convert the data to a JSON object and return it
        const comments: string[] = data[1].data.children.map((child: any) => {
            return child.data.body;
        });

        return comments;
    } catch (error) {
        console.error(error);
        return [];
    }
}

/**
 * Search using a query for the Reddit API
 * 
 * @param {string} query - The search query.
 * @returns {Promise<any[]>} The promise that resolves to the search results.
 */
export async function searchReddit(query: string) {
    try {
        // Fetch search results from the API
        const response = await fetch(`${REDDIT_API_BASE}/search.json?q=${encodeURIComponent(query)}`, {
            next: {
                revalidate: 60
            }
        });
        const data = await response.json();

        // Convert the data to a JSON object and return it
        return data.data.children.map((result: any) => result.data);
    } catch (error) {
        console.error(error);
        return [];
    }
}