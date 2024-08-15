import React from 'react';
import Vote from './vote';
import Actions from './actions';
import Info from './info';
import { Link } from 'react-router-dom';

/**
 * Represents the properties of a post.
 */
interface PostProps {
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

const styles = {
    post: 'flex flex-wrap flex-col justify-center align-middle',
    wrapper: 'flex space-x-3 rounded-lg bg-card p-2 border hover:bg-neutral-100',
    title: 'p-2 flex flex-wrap text-2xl font-semibold hover:text-blue-500',
    content: 'p-3 flex flex-col space-y-2 justify-center items-center align-middle',
    description: '-mt-2 text-sm text-muted-foreground max-h-20 text-ellipsis overflow-hidden',
    image: 'rounded-lg overflow-hidden',
};

/**
 * Represents a post image component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.imageUrl - The URL of the image.
 * @returns {JSX.Element} The rendered post image component.
 */
const PostImage: React.FC<{ imageUrl: string }> = React.memo(({ imageUrl }) => (
    <div className={styles.image}>
        <img
            src={imageUrl}
            alt="Post Image"
            width={500}
            height={500}
        />
    </div>
));

/**
 * Represents a post preview component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {string} props.title - The title of the post.
 * @param {string} props.author - The author of the post.
 * @param {string} props.subreddit - The subreddit of the post.
 * @param {number} props.score - The score of the post.
 * @param {number} props.num_comments - The number of comments on the post.
 * @param {number} props.created_utc - The creation timestamp of the post.
 * @param {string} props.selftext - The selftext of the post.
 * @param {string} props.url - The URL of the post.
 * @param {string} props.id - The ID of the post.
 * @returns {JSX.Element} The rendered post preview component.
 */
const Post: React.FC<PostProps> = React.memo(({ 
    subreddit, 
    title, 
    author, 
    url, // Use this instead of imageUrl
    score,
    // ups,
    // downs, 
    num_comments, // Use this instead of numComments
    created_utc, // Use this instead of createdAt
    selftext,
    id,
}: PostProps) => {

    // Check if the post has a selftext
    const hasSelftext = selftext.length > 0;
    // Check if the image URL contains a valid image extension
    const isImage = (url.match(/\.(jpeg|jpg|gif|png)$/) != null);

    return (
        <div className={styles.wrapper}>
            <Vote initialScore={score} />
            <div className={styles.post}>
                <Info 
                    subreddit={subreddit} 
                    author={author} 
                    createdAt={created_utc}
                />
                <h2 className={styles.title}>
                    <Link to={{pathname: `/post/${id}`}}>
                        {title}
                    </Link>
                </h2>
                <div className={styles.content}>
                    {hasSelftext && <p className={styles.description}>{selftext}</p>}
                    {isImage && <PostImage imageUrl={url} />}
                </div>

                <Actions numComments={num_comments}/>
            </div>
        </div>
    );
});

export default Post;