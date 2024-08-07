import Feed from '@/components/feed/index';
import Banner from "@/components/community/banner";
import Info from "@/components/community/info";
import { getSubredditAbout } from "@/lib/reddit-api";
import { SubredditAbout } from "@/types/index";

/**
 * Styles for the subreddit home page.
 */
const style = {
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
};

/**
 * The subreddit home page component that displays the subreddit's feed and about information with banner.
 * 
 * @param {Object} { params } The parameters object that contains the subreddit name.
 * @returns {JSX.Element} The subreddit home page component.
 */
export default async function SubredditHome({ params }: { params: { subreddit: string }}) {
  
  // Get subreddit about information
  const about: SubredditAbout = await getSubredditAbout({ subreddit: params.subreddit });

  // Prepare the props for the banner
  const bannerProps = {
      bannerImage: about.banner_url,
      profilePic: about.icon_url,
      name: about.name,
      title: about.title,
  };

  // Prepare the props for the info
  const infoProps = {
      name: about.name,
      title: about.title,
      description: about.description,
      subscribers: about.subscribers,
      activeUsers: about.active_users,
      profilePic: about.icon_url,
      createdAt: new Date(about.creation_date * 1000).toLocaleDateString(),
      isOver18: about.is_over_18,
  };

  return (
    <> 
      <Banner {...bannerProps} />
      <main className={style.main}>
        <div className={style.content}>
          {/* TODO: Wrap feed in Suspense */}
          <Feed subreddit={params.subreddit} />
        </div>
        <div className={style.infoContainer}>
          <Info {...infoProps} />
        </div>
      </main>
    </>
  );
}