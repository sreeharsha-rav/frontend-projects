/**
 * Represents the about information of a subreddit.
 * 
 * @typedef {Object} SubredditAbout
 * @property {string} name - The name of the subreddit.
 * @property {string} title - The title of the subreddit.
 * @property {string} description - The description of the subreddit.
 * @property {number} subscribers - The number of subscribers.
 * @property {number} active_users - The number of active users.
 * @property {string} icon_url - The URL of the icon.
 * @property {string} banner_url - The URL of the banner.
 * @property {number} creation_date - The creation date of the subreddit.
 * @property {boolean} is_over_18 - Indicates if the subreddit is over 18.
 */
type SubredditAbout = {
    name: string;
    title: string;
    description: string;
    subscribers: number;
    active_users: number;
    icon_url: string;
    banner_url: string;
    creation_date: number;
    is_over_18: boolean;
}

/**
 * Represents the response from the subreddit about API.
 * 
 * @typedef {Object} SubredditAboutResponse
 * @property {string} kind - The kind of the response.
 * @property {Object} data - The data object.
 */
type SubredditAboutResponse = {
    kind: string;
    data: any;
}

/**
 * Represents a post in a subreddit.
 * 
 * @typedef {Object} SubredditPost
 * @property {string} title - The title of the post.
 * @property {string} author - The author of the post.
 * @property {string} subreddit - The subreddit of the post.
 * @property {number} score - The score of the post based on upvotes and downvotes.
 * @property {number} ups - The number of upvotes.
 * @property {number} downs - The number of downvotes.
 * @property {number} num_comments - The number of comments.
 * @property {number} created_utc - The creation date of the post in UTC.
 * @property {string} selftext - The text content of the post.
 * @property {string} url - The URL of the post.
 * @property {string} permalink - The permalink of the post.
 */
type SubredditPost = {
    title: string;
    author: string;
    subreddit: string;
    score: number;
    ups: number;
    downs: number;
    num_comments: number;
    created_utc: number;
    selftext: string;
    url: string;
    permalink: string;
}

/**
 * Represents the response from the subreddit post API.
 * 
 * @typedef {Object} SubredditPostResponse
 * @property {string} kind - The kind of the response.
 * @property {Object} data - The data object.
 * @property {Array} data.children - The children array containing the posts.
 */
type SubredditPostResponse = {
    kind: string;
    data: {
        children: Array<{
            kind: string;
            data: any;
        }>;
    };
}
  
export type { SubredditAbout, SubredditAboutResponse, SubredditPost, SubredditPostResponse };