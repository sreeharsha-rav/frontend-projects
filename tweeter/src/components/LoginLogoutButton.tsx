import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { useAuth } from '@/contexts/AuthContext';

export function LoginLogoutButton() {
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    // Log out the user
    console.log('Logging out user');
    await logout();
  };

  return (
    <>
      {isAuthenticated ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <Button asChild>
          <Link to='/login'>Login</Link>
        </Button>
      )}
    </>
  );
}
