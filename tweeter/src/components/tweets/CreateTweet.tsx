import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Send } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const CreateTweetSchema = z.object({
  content: z
    .string()
    .min(10, {
      message: 'Tweet must be at least 10 characters long',
    })
    .max(280, {
      message: 'Tweet must be at most 280 characters long',
    }),
});

type CreateTweetForm = z.infer<typeof CreateTweetSchema>;

export function CreateTweet() {
  const { isAuthenticated } = useAuth();
  const [content, setContent] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTweetForm>({
    resolver: zodResolver(CreateTweetSchema),
  });

  const onSubmit = async (data: CreateTweetForm) => {
    if (!isAuthenticated) {
      console.log('Please log in to post a tweet');
      return;
    }

    console.log('Posting tweet:', data.content);

    // try {
    //   const { error } = await supabase
    //     .from('tweets')
    //     .insert({ content: data.content, user_id: user.id });

    //   if (error) throw error;

    //   reset();
    //   setContent('');
    //   console.log('Tweet posted successfully');
    // } catch (error) {
    //   console.error('Error posting tweet:', error.message);
    // }
  };

  console.log('Rendering CreateTweet with isAuthenticated:', isAuthenticated);

  return (
    <>
      {isAuthenticated && (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex items-center gap-3 px-4 py-3 border-b border-gray-200'
        >
          <Avatar className='h-10 w-10'>
            <AvatarImage src='/placeholder-user.jpg' alt='Avatar' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className='flex-1 relative'>
            <Textarea
              {...register('content')}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="What's happening?"
              className='resize-none border-0 focus:ring-0 focus:outline-none w-full'
            />
            {errors.content && (
              <p className='text-red-500 text-sm mt-1'>
                {errors.content.message}
              </p>
            )}
            <Button
              type='submit'
              size='icon'
              className='absolute w-8 h-8 top-2 right-2'
            >
              <Send className='w-4 h-4' />
              <span className='sr-only'>Submit Post</span>
            </Button>
          </div>
        </form>
      )}
    </>
  );
}
