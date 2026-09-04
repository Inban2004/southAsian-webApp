import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../../Service/API/AuthService';

export function useSignupVM() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const onSignup = async () => {
    setError(null);

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    const result = await AuthService.register(email, password);
    setLoading(false);

    if (result.statusCode !== 200) {
      setError(result.message);
      return;
    }

    // Supabase requires email confirmation by default, so we don't log the
    // user in directly here — route to Login with a message instead of
    // silently dropping them on Home.
    navigate('/login', { state: { message: 'Account created — check your email to confirm it, then log in.' } });
  };

  return { email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, loading, error, onSignup };
}
