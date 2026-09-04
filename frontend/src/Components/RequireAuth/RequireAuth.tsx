import type { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthSession } from '../../Utility/useAuthSession';
import { Colours } from '../../Assets/Colours';

type RequireAuthProps = {
  children: ReactNode;
};

// Wrap any route that should be unreachable without a logged-in Supabase
// session — redirects to /login if there isn't one.
export default function RequireAuth({ children }: RequireAuthProps) {
  const isAuthenticated = useAuthSession();

  if (isAuthenticated === null) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: Colours.neutralCream,
        }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", color: Colours.neutralWarmGrey, margin: 0 }}>Loading…</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
