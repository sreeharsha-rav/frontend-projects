import { useSupabase } from './useSupabase';
import { useNavigate } from '@tanstack/react-router';

export function useAuthCheck() {
  const { session } = useSupabase();
  const navigate = useNavigate();

  const checkAuth = () => {
    if (!session) {
      navigate({ to: '/' });
      return false;
    }
    return true;
  };

  return { checkAuth, isAuthenticated: !!session };
}
