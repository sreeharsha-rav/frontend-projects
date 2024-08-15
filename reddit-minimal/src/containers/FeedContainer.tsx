// src/containers/FeedContainer.tsx

import { useState, useCallback } from 'react';
import Feed from '../components/feed/Feed';
import useFetchPosts from '../hooks/useFetchPosts';
// import { FixedSizeList as List } from 'react-window';

type SortOption = '' | 'new' | 'hot' | 'top';

interface FeedContainerProps {
  subreddit: string;
}

const FeedContainer: React.FC<FeedContainerProps> = ({ subreddit }) => {
  const [sort, setSort] = useState<SortOption>('');
  const { posts, loading, error } = useFetchPosts(subreddit, sort);

  const handleSortChange = useCallback((newSort: SortOption) => {
    setSort(newSort);
  }, []);

  // const Row = ({ index, style }: { index: number; style: React.CSSProperties }) => (
  //   <div style={style}>
  //     <Post {...posts[index]} />
  //   </div>
  // );

  return (
    <Feed
      posts={posts}
      loading={loading}
      error={error}
      sort={sort}
      onSortChange={handleSortChange}
    //   renderPosts={() => (
    //     <List
    //       height={window.innerHeight}
    //       itemCount={posts.length}
    //       itemSize={200} // Adjust based on your post height
    //       width="100%"
    //     >
    //       {Row}
    //     </List>
    //   )}
    />
  );
};

/**
 * TODO: Fix Virtual Window Error
 * Objects are not valid as a React child (found: object with keys {$$typeof, type, key, props, _owner, _store}).
 * If you meant to render a collection of children, use an array instead.
 * An error occurred while fetching the feed
 */

export default FeedContainer;