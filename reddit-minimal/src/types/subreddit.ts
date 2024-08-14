/**
 * Represents a post in a subreddit.
 */
export interface SubredditPost {
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
    id: string;
}

/**
 * Represents the response from the subreddit post API.
 */
export interface SubredditPostResponse {
    kind: string;
    data: {
        children: {
            kind: string;
            data: SubredditPost;
        }[];
    };
}
