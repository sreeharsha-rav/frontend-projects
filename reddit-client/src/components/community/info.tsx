import Image from "next/image";
import { Button } from "../ui/button";

const styles = {
  wrapper:'flex flex-col space-y-2 divide-y divide-secondary rounded border border-secondary bg-card p-4',
  profileInfoContainer: 'flex items-center space-x-4 ',
  profilePicContainer: `relative h-12 w-12`,
  profilePic: 'object-contain',
  aboutContent: 'py-2 text-sm text-muted-foreground',
  statsWrapper: 'flex items-center space-x-16',
  stat: 'flex flex-col',
  statTitle: 'text-xs',
  footer: 'flex flex-col space-y-4 pt-2',
  createdAt: 'text-sm font-light',
};

/**
 * The info component that displays the subreddit's profile picture, name, title, description, subscribers, active users, and creation date.
 * 
 * @param name the name of the subreddit.
 * @param title the title of the subreddit.
 * @param description the description of the subreddit.
 * @param subscribers the number of subscribers in the subreddit.
 * @param activeUsers the number of active users in the subreddit.
 * @param profilePic the profile picture of the subreddit.
 * @param createdAt the date the subreddit was created.
 * @param isOver18 whether the subreddit is over 18.
 */
interface InfoProps {
    name: string;
    title: string;
    description: string;
    subscribers: number;
    activeUsers: number;
    profilePic: string;
    createdAt: string;
    isOver18: boolean;
}

/**
 * Info component that displays the subreddit's profile picture, name, title, description, subscribers, active users, and creation date.
 * 
 * @param {InfoProps} { name, title, description, subscribers, activeUsers, profilePic, createdAt, isOver18 }
 * @returns promise that resolves to the info component.
 */
const Info = ({ name, title, description, subscribers, activeUsers, profilePic, createdAt, isOver18 }: InfoProps) => {
    return (
        <div className={styles.wrapper}>
            <div className='pb-2'>
                <div className={styles.profileInfoContainer}>
                <div className={styles.profilePicContainer}>
                    <Image
                        src={profilePic}
                        layout='fill'
                        className={styles.profilePic}
                        alt='Profile Image'
                    />
                </div>
                <p>r/{name}</p>
                </div>
                <p className={styles.aboutContent}>{description}</p>

                <div className={styles.statsWrapper}>
                <div className={styles.stat}>
                    <span>{subscribers}</span>
                    <span className={styles.statTitle}>Members</span>
                </div>
                <div className={styles.stat}>
                    <span>{activeUsers}</span>
                    <span className={styles.statTitle}>Online</span>
                </div>
                </div>
            </div>

            <div className={styles.footer}>
                <p className={styles.createdAt}>
                    Created {createdAt}
                    <br />
                    {isOver18 && <span>NSFW</span>} 
                </p>
                {/* View Join Status - DUMMY */}
                <Button variant='secondary'>Joined</Button>
            </div>
            </div>
    );
}

export default Info;