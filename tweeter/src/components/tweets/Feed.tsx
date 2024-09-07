import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Tweet } from './Tweet';
import { CreateTweet } from './CreateTweet';

const tweets = [
  {
    name: 'John Doe',
    username: 'johndoe',
    content:
      'This is a sample tweet with some content. It can be a few lines long and should wrap to the next line as needed.',
    likes: 10,
  },
  {
    name: 'Jane Doe',
    username: 'janedoe',
    content:
      'This is another sample tweet with some content. It can be a few lines long and should wrap to the next line as needed.',
    likes: 5,
  },
  {
    name: 'Bob Smith',
    username: 'bobsmith',
    content:
      'This is a third sample tweet with some content. It can be a few lines long and should wrap to the next line as needed.',
    likes: 15,
  },
];

export default function Feed() {
  return (
    <div className='flex flex-col w-full max-w-2xl mx-auto'>
      <CreateTweet />
      <div className='flex-1 overflow-auto'>
        <div className='space-y-4 p-4'>
          {tweets.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </div>
      </div>
    </div>
  );
}
