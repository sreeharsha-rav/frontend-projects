import { createFileRoute } from '@tanstack/react-router';
import { CreateTweet } from '@/components/tweets/CreateTweet';
import { Feed } from '@/components/tweets/Feed';

export const Route = createFileRoute('/')({
  component: Index,
});

function Index() {
  console.log('Rendering Index in main route');

  return (
    <div className='flex flex-col w-full max-w-2xl mx-auto'>
      <CreateTweet />
      <Feed />
    </div>
  );
}
