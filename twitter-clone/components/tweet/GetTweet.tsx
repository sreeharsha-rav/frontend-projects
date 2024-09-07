import { getTweets } from "@/app/tweet_actions";
import Image from "next/image";

const fetchData = async () => {
  try {
    const { data } = await getTweets();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export async function Tweets() {
  const tweets = await fetchData();
  return (
    <div>
      <h1>Tweets</h1>
      <div>
        {tweets.map((tweet) => (
          <div key={tweet.id}>
            <h2>{tweet.title}</h2>
            <p>{tweet.profiles.name}</p>
            <p>{tweet.profiles.username}</p>
            <Image
              src={tweet.profiles.avatar_url}
              alt="User avatar"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}