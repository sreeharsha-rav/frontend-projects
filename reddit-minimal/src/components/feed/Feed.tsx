import Post from './post-preview';
import useFetchPosts from '../../hooks/useFetchPosts';
import Loader from '../common/Loader';

const styles = {
    wrapper: 'container mx-auto px-4 mb-12 space-y-2.5',
    postList: 'container mx-auto px-4 mb-12 space-y-2.5',
    loading: 'text-center text-gray-500 dark:text-gray-400',
    error: 'error',
};

interface FeedProps {
    subreddit: string;
    sort?: '' | 'new' | 'hot' | 'top';
}

/**
 * Renders a feed component that displays posts from a specified subreddit.
 * 
 * @param subreddit - The subreddit to fetch posts from.
 * @param sort - The sorting option for the posts (default: '').
 * @returns The rendered feed component.
 */
export default function Feed ({subreddit, sort = ''}: FeedProps) {
    const { posts, loading, error } = useFetchPosts(subreddit, sort);

    if (loading) return <div className={styles.loading}><Loader /></div>;

    if (error) return <div className={styles.error}>{error}</div>;

    return (
      <div className={styles.wrapper}>
          {posts.map((post) => (
            <Post 
              key={post.title}
              subreddit={post.subreddit}
              title={post.title} 
              author={post.author}
              imageUrl={post.url}
              score={post.score}
              numComments={post.num_comments}
              createdAt={post.created_utc}
              selftext={post.selftext}
              id={post.id}
            />
          ))}
      </div>
    );
}