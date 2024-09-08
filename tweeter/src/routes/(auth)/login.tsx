import { createFileRoute } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/(auth)/login')({
  component: Login,
});

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

export function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleGithubLogin = async () => {
    // Redirect to GitHub login
    console.log('Redirecting to GitHub login');
    // try {
    //   const { error } = await supabase.auth.signInWithOAuth({
    //     provider: 'github',
    //   });
    //   if (error) throw error;
    //   navigate({ to: '/' });
    // } catch (error) {
    //   console.error('Error logging in with GitHub:', error.message);
    // }
    login();
    navigate({ to: '/' });
  };

  return (
    <div className='flex min-h-[50vh] w-full max-w-2xl mx-auto items-center justify-center'>
      <div className='flex-1 w-full max-w-sm p-4 mx-auto bg-background border border-border rounded-lg'>
        <div className='px-4 pb-4 text-center'>
          <p className='text-muted-foreground'>
            Sign in to using your GitHub account.
          </p>
        </div>
        <Button
          variant={'secondary'}
          className='flex w-full items-center justify-center gap-2'
          onClick={handleGithubLogin}
        >
          <GithubIcon className='h-5 w-5' />
          Sign in with GitHub
        </Button>
      </div>
    </div>
  );
}
