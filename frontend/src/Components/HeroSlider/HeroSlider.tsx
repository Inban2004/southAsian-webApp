import { Truck, Award, Shield } from 'lucide-react';
import { Colours } from '../../Assets/Colours';
import { Radius, Spacing } from '../../Assets/Tokens';
import Button from '../Button/Button';

// Only Slide 1's content exists inside the real "Home" frame (node 1:2518).
// The 3-dot indicator implies a carousel, but Slides 2/3 (seen as separate
// top-level frames 1:1065/1:1099) look like an earlier draft — same drift
// pattern as the duplicate homepage frames. Rendering as a static single
// slide for now; revisit once/if real slide 2/3 content is confirmed.
export default function HeroSlider() {
  return (
    <div style={{ display: 'flex', width: '100%', background: Colours.neutralCream, position: 'relative' }}>
      <div style={{ width: '55%', aspectRatio: '792 / 640' }}>
        <img src="/images/hero.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      <div style={{ width: '45%', display: 'flex', flexDirection: 'column', gap: Spacing.xl, justifyContent: 'center', padding: Spacing['3xl'] }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: Spacing.lg }}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.72px',
              textTransform: 'uppercase',
              color: Colours.accentGold,
              margin: 0,
            }}
          >
            Premium UK Delivery
          </p>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '56px', lineHeight: '64px', color: Colours.primary900, margin: 0 }}>
            Bring Asia to Your Doorstep
          </h1>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: Colours.neutralWarmGrey, margin: 0 }}>
            Authentic regional specials from Tamil Nadu, Kerala and Sri Lanka — sourced the traditional way. Hand-picked,
            micro-milled spices crafted to preserve generational flavor profiles.
          </p>
        </div>

        <div style={{ display: 'flex', gap: Spacing.lg }}>
          <Button size="lg" buttonStyle="Secondary" style={{ borderRadius: Radius.md }}>
            Shop Regional Specials
          </Button>
          <Button size="lg" buttonStyle="Outline" style={{ borderRadius: Radius.md }}>
            Explore All Categories
          </Button>
        </div>

        <div style={{ borderTop: `1px solid ${Colours.neutralBorder}` }} />

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {[
            { Icon: Truck, label: 'Pan-India Delivery' },
            { Icon: Award, label: 'Small-Batch & Homemade' },
            { Icon: Shield, label: 'Trusted Sourcing' },
          ].map(({ Icon, label }) => (
            <div key={label} style={{ display: 'flex', gap: Spacing.sm, alignItems: 'center' }}>
              <Icon size={16} color={Colours.primary900} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '13px', color: Colours.primary900 }}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ position: 'absolute', left: '336px', bottom: '40px', display: 'flex', gap: '12px' }}>
        <div style={{ width: '32px', height: '6px', borderRadius: '3px', background: Colours.neutralWhite }} />
        <div style={{ width: '16px', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.5)' }} />
        <div style={{ width: '16px', height: '6px', borderRadius: '3px', background: 'rgba(255,255,255,0.5)' }} />
      </div>
    </div>
  );
}
