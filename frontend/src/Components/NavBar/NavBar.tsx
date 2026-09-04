import { Link } from 'react-router-dom';
import { User, Heart, ShoppingBag } from 'lucide-react';
import { Colours } from '../../Assets/Colours';
import { Radius } from '../../Assets/Tokens';
import InputField from '../InputField/InputField';

// Matches the real "Header Area" instance on the homepage (node 1:2295), not
// the standalone "Nav Bar" component-library symbol (1:3427) — the two
// disagree on nav links/icons, same drift as the Product Card symbol.
const NAV_LINKS = [
  'Regional Specials',
  'Whole Spices',
  'Masala Powders',
  'Instant Mixes',
  'Snacks',
  'Wellness Essentials',
  'Offers',
];

type NavBarProps = {
  activeLink?: string;
  cartCount?: number;
};

export default function NavBar({ activeLink = 'Regional Specials', cartCount = 3 }: NavBarProps) {
  return (
    <nav style={{ background: Colours.neutralCream, width: '100%', borderBottom: `1px solid ${Colours.neutralBorder}` }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 64px' }}>
        <img src="/logo.svg" alt="South Asian Fly" style={{ height: '48px', width: '118px' }} />

        <InputField placeholder="Search spices, masalas, regional specials..." style={{ width: '360px' }} />

        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }}>
          <Link
            to="/login"
            style={{
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
              color: Colours.primary900,
              textDecoration: 'none',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: '14px',
            }}
          >
            <User size={18} />
            Account
          </Link>
          <span style={{ display: 'flex', gap: '8px', alignItems: 'center', color: Colours.primary900, fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
            <Heart size={18} />
            Wishlist
          </span>
          <span style={{ display: 'flex', gap: '8px', alignItems: 'center', color: Colours.primary900, fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: '14px' }}>
            <ShoppingBag size={18} />
            Cart
            {cartCount > 0 && (
              <span
                style={{
                  background: Colours.secondary900,
                  color: Colours.neutralWhite,
                  borderRadius: Radius.pill,
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: '10px',
                  padding: '2px 6px',
                }}
              >
                {cartCount}
              </span>
            )}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 64px 18px' }}>
        {NAV_LINKS.map((link) => (
          <div key={link} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', padding: '4px 12px' }}>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '13px',
                letterSpacing: '0.52px',
                textTransform: 'uppercase',
                color: Colours.primary900,
              }}
            >
              {link}
            </span>
            {link === activeLink && <div style={{ background: Colours.accentGold, height: '2px', width: '24px', borderRadius: '1px' }} />}
          </div>
        ))}
      </div>
    </nav>
  );
}
