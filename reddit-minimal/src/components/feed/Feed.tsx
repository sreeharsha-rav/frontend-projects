import Post from './post-preview';
import useFetchPosts from '../../hooks/useFetchPosts';
import Loader from '../common/Loader';
import { useState } from 'react';

const styles = {
    wrapper: 'container mx-auto px-4 mb-12',
    sort_wrapper: 'flex justify-end items-center',
    postList: 'flex flex-col space-y-4',
    loading: 'text-center text-gray-500 dark:text-gray-400',
    error: 'error',
    sortDropdown: 'mb-4 p-2 border rounded',
};

type SortOption = '' | 'new' | 'hot' | 'top';

interface FeedProps {
    subreddit: string;
}

/**
 * Renders a feed component that displays posts from a specified subreddit.
 * 
 * @param subreddit - The subreddit to fetch posts from.
 * @param sort - The sorting option for the posts (default: '').
 * @returns The rendered feed component.
 */
export default function Feed ({subreddit}: FeedProps) {
  const [sort, setSort] = useState<SortOption>('');
    const { posts, loading, error } = useFetchPosts(subreddit, sort);

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSort(event.target.value as SortOption);
    };

    if (loading) return <div className={styles.loading}><Loader /></div>;

    if (error) return <div className={styles.error}>{error}</div>;

    return (
      <div className={styles.wrapper}>
        <div className={styles.sort_wrapper}>
          <select 
            className={styles.sortDropdown}
            value={sort}
            onChange={handleSortChange}
          >
            <option value="">Best</option>
            <option value="new">New</option>
            <option value="hot">Hot</option>
            <option value="top">Top</option>
          </select>
        </div>
        <div className={styles.postList}>
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
      </div>
    );
}