import { useEffect, useState } from 'react';
import { AuthService } from '../Service/API/AuthService';

// null = still checking, true/false = resolved auth state.
// Reuses AuthService.checkSession() (already crash-safe via try/catch)
// rather than calling the Supabase client directly, so this hook can't
// reintroduce the eager-throw-on-load bug we hit earlier.
export function useAuthSession(): boolean | null {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;
    void AuthService.checkSession().then((result) => {
      if (mounted) {
        setIsAuthenticated(result.statusCode === 200 && result.data?.session != null);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  return isAuthenticated;
}
