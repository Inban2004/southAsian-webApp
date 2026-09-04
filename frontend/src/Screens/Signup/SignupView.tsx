import { Link } from 'react-router-dom';
import { Colours } from '../../Assets/Colours';
import { Radius, Shadow, Spacing } from '../../Assets/Tokens';
import InputField from '../../Components/InputField/InputField';
import Button from '../../Components/Button/Button';
import { useSignupVM } from './useSignupVM';

// Not part of the current Figma file — same as LoginView, built to match
// existing design tokens. Replace with the real design once Figma has one.
export default function SignupView() {
  const { email, setEmail, password, setPassword, confirmPassword, setConfirmPassword, loading, error, onSignup } = useSignupVM();

  return (
    <div
      style={{
        background: Colours.neutralCream,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={(event) => {
          event.preventDefault();
          void onSignup();
        }}
        style={{
          background: Colours.neutralWhite,
          borderRadius: Radius.card,
          boxShadow: Shadow.sm,
          padding: Spacing['3xl'],
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          gap: Spacing.lg,
        }}
      >
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '28px', color: Colours.primary900, margin: 0 }}>
          Sign Up
        </h2>

        <InputField type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ width: '100%' }} />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ width: '100%' }}
        />
        <InputField
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          style={{ width: '100%' }}
        />

        {error && (
          <p role="alert" style={{ color: Colours.secondary900, fontFamily: "'Inter', sans-serif", fontSize: '14px', margin: 0 }}>
            {error}
          </p>
        )}

        <Button type="submit" size="lg" buttonStyle="Primary" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Creating account…' : 'Sign Up'}
        </Button>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: Colours.neutralWarmGrey, textAlign: 'center', margin: 0 }}>
          Already have an account?{' '}
          <Link to="/login" style={{ color: Colours.accentGold, fontWeight: 600, textDecoration: 'none' }}>
            Log In
          </Link>
        </p>
      </form>
    </div>
  );
}
