/**
 * Styles for the Info component.
 */
const styles = {
    wrapper: 'flex items-center space-x-1 text-xs text-gray-500',
    profilePic: 'h-4 w-4 rounded-full',
    profilePicContainer: 'flex items-center space-x-1',
    tag: 'font-semibold',
    postedBy: 'flex items-center space-x-1',
}


/**
 * Represents the information of a feed item.
 *
 * @interface InfoProps
 * @property {string} subreddit - The subreddit of the feed item.
 * @property {string} author - The author of the feed item.
 * @property {number} createdAt - The timestamp when the feed item was created.
 */
interface InfoProps {
    subreddit: string;
    author: string;
    createdAt: number;
}


/**
 * Calculates the time ago based on the provided creation timestamp.
 * @param createdAt - The timestamp when the post was created.
 * @returns The time ago in a human-readable format.
 */
const getTimeAgo = (createdAt: number) => {
    // Get current time set in seconds
    const currentTime = Math.floor(Date.now() / 1000);

    // Calculate the difference between the current time and the time the post was created
    const timeDifference = currentTime - createdAt;

    // Calculate the time ago
    const seconds = timeDifference;
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} days ago`;
    if (hours > 0) return `${hours} hours ago`;
    if (minutes > 0) return `${minutes} minutes ago`;
    if (seconds > 0) return `${seconds} seconds ago`;
}

/**
 * Renders the information about a post, including the subreddit, author, and creation time.
 * 
 * @param subreddit - The name of the subreddit.
 * @param author - The username of the author who posted the content.
 * @param createdAt - The timestamp when the post was created.
 * @returns The JSX element representing the post information.
 */
const Info = ({ subreddit, author, createdAt }: InfoProps) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.profilePicContainer}>
                <img 
                    className={styles.profilePic}
                    src="src/assets/reddit-icon.png"
                />
            </div>

            <div className={styles.tag}>
                r/{subreddit}
            </div>

            <div>•</div>

            <div className={styles.postedBy}>Posted by {author}</div>

            <div>•</div>

            <span>{getTimeAgo(createdAt)}</span>
        </div>
    );
}

export default Info;