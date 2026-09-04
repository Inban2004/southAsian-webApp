import { Colours } from '../../Assets/Colours';
import { Radius, Spacing } from '../../Assets/Tokens';
import type { BadgeVariant } from '../../Model/Product';

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
};

const VARIANT_COLOURS: Record<BadgeVariant, string> = {
  Gold: Colours.accentGold,
  Green: Colours.successGreen,
  Saffron: Colours.secondary900,
};

export default function Badge({ label, variant = 'Gold' }: BadgeProps) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingInline: Spacing.md,
        paddingBlock: Spacing.xs,
        borderRadius: Radius.pill,
        background: VARIANT_COLOURS[variant],
        color: Colours.neutralWhite,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 500,
        fontSize: '12px',
        letterSpacing: '0.24px',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </span>
  );
}
