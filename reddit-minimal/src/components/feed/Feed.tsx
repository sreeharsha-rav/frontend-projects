import React from 'react';
import Loader from '../common/Loader';
import Sort from './sort';
import { SubredditPost } from '../../types/subreddit';
import Post from './post-preview';

const styles = {
    wrapper: 'container mx-auto px-4 mb-12',
    sort_wrapper: 'flex justify-end items-center',
    postList: 'flex flex-col space-y-4',
    loading: 'text-center text-gray-500 dark:text-gray-400',
    error: 'error',
};

type SortOption = '' | 'new' | 'hot' | 'top';

interface FeedProps {
  posts: SubredditPost[];
  loading: boolean;
  error: string | null;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  // renderPosts: () => React.ReactNode;
}

const Feed: React.FC<FeedProps> = ({ posts, loading, error, sort, onSortChange}) => {
  if (loading) return <div className={styles.loading}><Loader /></div>;
  if (error) return <div className={styles.error}>{error}</div>;

  return (
    <div className={styles.wrapper}>
      <Sort sort={sort} onSortChange={onSortChange} />
      <div className={styles.postList}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default React.memo(Feed);