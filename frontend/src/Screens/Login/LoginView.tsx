import { Link } from 'react-router-dom';
import { Colours } from '../../Assets/Colours';
import { Radius, Shadow, Spacing } from '../../Assets/Tokens';
import InputField from '../../Components/InputField/InputField';
import Button from '../../Components/Button/Button';
import { useLoginVM } from './useLoginVM';

// Not part of the current Figma file — Figma has no login screen yet.
// Built to match the existing design tokens (cream bg, navy/gold accents,
// Fraunces heading, InputField/Button reuse) so it fits visually. Replace
// with the real design once Figma has one.
export default function LoginView() {
  const { email, setEmail, password, setPassword, loading, error, infoMessage, onLogin } = useLoginVM();

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
          void onLogin();
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
          Log In
        </h2>

        {infoMessage && (
          <p style={{ color: Colours.successGreen, fontFamily: "'Inter', sans-serif", fontSize: '14px', margin: 0 }}>{infoMessage}</p>
        )}

        <InputField type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} style={{ width: '100%' }} />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{ width: '100%' }}
        />

        {error && (
          <p role="alert" style={{ color: Colours.secondary900, fontFamily: "'Inter', sans-serif", fontSize: '14px', margin: 0 }}>
            {error}
          </p>
        )}

        <Button type="submit" size="lg" buttonStyle="Primary" disabled={loading} style={{ width: '100%' }}>
          {loading ? 'Logging in…' : 'Log In'}
        </Button>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: Colours.neutralWarmGrey, textAlign: 'center', margin: 0 }}>
          {"Don't have an account? "}
          <Link to="/signup" style={{ color: Colours.accentGold, fontWeight: 600, textDecoration: 'none' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}
