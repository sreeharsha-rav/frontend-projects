import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className='sticky top-0 z-10 bg-background border-b px-4 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <h2 className='text-lg font-semibold'>Tweets</h2>
      </div>
      <Button>Login</Button>
    </header>
  );
}
