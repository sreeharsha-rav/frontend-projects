import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';

export function CreateTweet() {
  return (
    <section className='sticky top-0 z-10 bg-background border-b px-4 py-3'>
      <div className='flex items-center gap-3'>
        <Avatar className='h-8 w-8'>
          <AvatarImage src='/placeholder-user.jpg' alt='Avatar' />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="What's happening?"
          className='flex-1 resize-none border-0 focus:ring-0 focus:outline-none'
        />
      </div>
    </section>
  );
}
