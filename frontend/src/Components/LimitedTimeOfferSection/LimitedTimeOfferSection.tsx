import { Colours } from '../../Assets/Colours';
import { Radius, Spacing } from '../../Assets/Tokens';
import Button from '../Button/Button';

// Countdown values (12d 08h 17m 39s) are static, matching the Figma mock —
// Figma has no live-countdown behavior defined. Wire this to a real
// end-of-sale timestamp when that business rule is decided.
const TIMER_BOXES = [
  { value: '12', label: 'Days' },
  { value: '08', label: 'Hours' },
  { value: '17', label: 'Mins' },
  { value: '39', label: 'Secs' },
];

export default function LimitedTimeOfferSection() {
  return (
    <div
      style={{
        background: `linear-gradient(to right, ${Colours.secondary900}, #d95300)`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: Spacing.xl,
        padding: Spacing['3xl'],
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '40px', color: Colours.neutralWhite, margin: 0 }}>
          Festive Regional Specials Sale
        </h2>
        <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '18px', color: Colours.neutralWhite, opacity: 0.9, margin: 0 }}>
          Up to 20% off Chettinad & Madurai Specials — limited time only
        </p>
      </div>

      <div style={{ display: 'flex', gap: Spacing.lg }}>
        {TIMER_BOXES.map(({ value, label }) => (
          <div
            key={label}
            style={{
              background: Colours.neutralWhite,
              borderRadius: Radius.md,
              padding: '12px',
              width: '80px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '28px', color: Colours.primary900 }}>{value}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '10px', textTransform: 'uppercase', color: Colours.neutralWarmGrey }}>
              {label}
            </span>
          </div>
        ))}
      </div>

      <Button size="lg" buttonStyle="Primary" style={{ borderRadius: Radius.md, paddingInline: '36px' }}>
        Shop the Sale
      </Button>
    </div>
  );
}
