import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

function HeartIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z' />
    </svg>
  );
}

interface TweetProps {
  name: string;
  username: string;
  content: string;
  likes: number;
}

function Initials({ name }: { name: string }) {
  const words = name.split(' ');
  const initials = words.map((word) => word.charAt(0).toUpperCase()).join('');
  return <span>{initials}</span>;
}

export function Tweet(props: TweetProps) {
  const { name, username, content, likes } = props;

  return (
    <div className='flex items-start gap-3'>
      <Avatar className='h-10 w-10'>
        <AvatarImage src='/placeholder-user.jpg' alt='Avatar' />
        <AvatarFallback>{<Initials name={name} />}</AvatarFallback>
      </Avatar>
      <div className='flex-1'>
        <div className='flex items-center gap-2'>
          <div className='font-semibold'>{name}</div>
          <div className='text-muted-foreground'>@{username}</div>
        </div>
        <p>{content}</p>
        <div className='flex items-center gap-4 pt-2 text-muted-foreground'>
          <Button variant='ghost' size='icon'>
            <HeartIcon className='w-4 h-4' />
            <span className='sr-only'>Like</span>
          </Button>
          <div>{likes} Likes</div>
        </div>
      </div>
    </div>
  );
}
