import { Truck, Award, Lock, Phone } from 'lucide-react';
import type { ComponentType } from 'react';
import { Colours } from '../../Assets/Colours';

type TrustItem = {
  Icon: ComponentType<{ size?: number }>;
  title: string;
  subtitle: string;
};

const ITEMS: TrustItem[] = [
  { Icon: Truck, title: 'Free Delivery Over ₹1,999', subtitle: 'Reliable shipping across India' },
  { Icon: Award, title: 'Freshness Guaranteed', subtitle: '100% hand-picked quality' },
  { Icon: Lock, title: 'Secure Checkout', subtitle: 'Your data is perfectly safe' },
  { Icon: Phone, title: 'Dedicated Customer Support', subtitle: 'Ready to assist you 24/7' },
];

export default function TrustStrip() {
  return (
    <div
      style={{
        background: Colours.neutralCream,
        borderTop: `1px solid ${Colours.neutralBorder}`,
        borderBottom: `1px solid ${Colours.neutralBorder}`,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '24px 64px',
      }}
    >
      {ITEMS.map(({ Icon, title, subtitle }) => (
        <div key={title} style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '999px',
              border: `1px solid ${Colours.accentGold}`,
              background: Colours.neutralWhite,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: Colours.accentGold,
              flexShrink: 0,
            }}
          >
            <Icon size={18} />
          </div>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '14px', color: Colours.primary900, margin: 0 }}>{title}</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '12px', color: Colours.neutralWarmGrey, margin: 0 }}>{subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
