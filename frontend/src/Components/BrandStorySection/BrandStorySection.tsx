import { ArrowRight } from 'lucide-react';
import { Colours } from '../../Assets/Colours';
import { Radius, Spacing } from '../../Assets/Tokens';

export default function BrandStorySection() {
  return (
    <div style={{ background: Colours.primary900, position: 'relative', padding: Spacing['2xl'] }}>
      <div style={{ position: 'absolute', top: '24px', left: '24px', width: '48px', height: '48px', borderTop: `2px solid ${Colours.accentGold}`, borderLeft: `2px solid ${Colours.accentGold}` }} />
      <div style={{ position: 'absolute', bottom: '24px', right: '24px', width: '48px', height: '48px', borderBottom: `2px solid ${Colours.accentGold}`, borderRight: `2px solid ${Colours.accentGold}` }} />

      <div style={{ display: 'flex', gap: Spacing['3xl'], alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: Spacing.xl }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: Spacing.lg }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '12px', letterSpacing: '0.72px', textTransform: 'uppercase', color: Colours.accentGold, margin: 0 }}>
              Our Heritage
            </p>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '48px', lineHeight: '56px', margin: 0 }}>
              <span style={{ color: Colours.neutralWhite }}>Homemade Style. </span>
              <span style={{ color: Colours.accentGold }}>Sourced with Care.</span>
            </h2>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '16px', lineHeight: '26px', color: Colours.neutralCream, margin: 0 }}>
            At South Asian Fly, we partner with small-batch regional producers across Tamil Nadu, Kerala, and Sri Lanka to
            bring you the purest heritage ingredients. Grounded in generation-old family recipes and traditional
            sun-drying methods, our spices deliver the deep, uncompromised aromas and comforting taste of authentic home
            cooking directly to your kitchen.
          </p>
          <div style={{ display: 'flex', gap: Spacing.sm, alignItems: 'center' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: Colours.accentGold }}>Our Sourcing Process</span>
            <ArrowRight size={14} color={Colours.accentGold} />
          </div>
        </div>

        <div style={{ width: '580px', height: '420px', borderRadius: Radius.card, overflow: 'hidden', flexShrink: 0 }}>
          <img src="/images/brand-story.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}
