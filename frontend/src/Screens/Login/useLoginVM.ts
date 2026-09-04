import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthService } from '../../Service/API/AuthService';

export function useLoginVM() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Set when arriving here after a successful signup (see useSignupVM).
  const infoMessage = (location.state as { message?: string } | null)?.message ?? null;

  const onLogin = async () => {
    setLoading(true);
    setError(null);
    const result = await AuthService.login(email, password);
    setLoading(false);
    if (result.statusCode !== 200) {
      setError(result.message);
      return;
    }
    navigate('/');
  };

  return { email, setEmail, password, setPassword, loading, error, infoMessage, onLogin };
}
