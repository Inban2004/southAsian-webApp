import type { CSSProperties, ReactNode } from 'react';
import { Colours } from '../../Assets/Colours';
import { Radius, Spacing } from '../../Assets/Tokens';

type ButtonStyle = 'Primary' | 'Secondary' | 'Outline' | 'Ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  type?: 'button' | 'submit';
  size?: ButtonSize;
  buttonStyle?: ButtonStyle;
  disabled?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
};

const SIZE_PADDING: Record<ButtonSize, CSSProperties> = {
  sm: { paddingInline: Spacing.md, paddingBlock: Spacing.sm },
  md: { paddingInline: Spacing.lg, paddingBlock: Spacing.sm },
  lg: { paddingInline: Spacing.xl, paddingBlock: Spacing.md },
};

const STYLE_VARIANTS: Record<ButtonStyle, CSSProperties> = {
  Primary: { background: Colours.primary900, color: Colours.neutralWhite, border: 'none' },
  Secondary: { background: Colours.secondary900, color: Colours.primary900, border: 'none' },
  Outline: { background: 'transparent', color: Colours.accentGold, border: `1px solid ${Colours.accentGold}` },
  Ghost: { background: 'transparent', color: Colours.primary900, border: 'none' },
};

export default function Button({ children, type = 'button', size = 'sm', buttonStyle = 'Primary', disabled = false, onClick, style }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...STYLE_VARIANTS[buttonStyle],
        ...SIZE_PADDING[size],
        borderRadius: Radius.pill,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 600,
        fontSize: '15px',
        letterSpacing: '0.15px',
        opacity: disabled ? 0.5 : 1,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...style,
      }}
    >
      {children}
    </button>
  );
}
