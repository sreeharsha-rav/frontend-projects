import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    // Log out the user
    console.log('Logging out user');
    await logout();
  };

  return (
    <header className='sticky top-0 z-10 bg-background border-b px-4 py-3 flex items-center justify-between'>
      <div className='flex items-center gap-3'>
        <h2 className='text-lg font-semibold'>
          <Link to='/'>Tweets</Link>
        </h2>
      </div>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button asChild>
          <Link to='/login'>Login</Link>
        </Button>
      )}
    </header>
  );
}
