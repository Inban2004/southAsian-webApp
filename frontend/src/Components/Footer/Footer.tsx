import { Colours } from '../../Assets/Colours';

const SHOP_LINKS = ['Groceries', 'Fresh Produce', 'Sweets & Snacks', 'Spices & Masalas', 'Frozen Foods'];
const CARE_LINKS = ['Help Centre', 'Shipping & Returns', 'Track Your Order', 'FAQs', 'Privacy Policy'];

const columnTitleStyle = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: '14px',
  color: Colours.neutralWhite,
  letterSpacing: '0.28px',
  textTransform: 'uppercase' as const,
  margin: 0,
};

const linkStyle = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 400,
  fontSize: '14px',
  color: Colours.neutralCream,
  margin: 0,
};

export default function Footer() {
  return (
    <footer style={{ background: Colours.primary900, borderTop: `1px solid ${Colours.accentGold}`, padding: '64px 96px 24px' }}>
      <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '270px' }}>
          <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: '18px', color: Colours.neutralWhite }}>
            South Asian Fly
          </span>
          <p style={{ ...linkStyle, margin: 0 }}>Bringing the flavours of South Asia to your doorstep.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '270px' }}>
          <p style={columnTitleStyle}>Shop</p>
          {SHOP_LINKS.map((link) => (
            <p key={link} style={linkStyle}>
              {link}
            </p>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '270px' }}>
          <p style={columnTitleStyle}>Customer Care</p>
          {CARE_LINKS.map((link) => (
            <p key={link} style={linkStyle}>
              {link}
            </p>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '270px' }}>
          <p style={columnTitleStyle}>Contact</p>
          <p style={linkStyle}>hello@southasianfly.co.uk</p>
          <p style={linkStyle}>+44 20 1234 5678</p>
          <p style={linkStyle}>London, United Kingdom</p>
        </div>
      </div>
      <div style={{ borderTop: `1px solid ${Colours.accentGold}`, marginTop: '48px', paddingTop: '24px' }}>
        <p style={{ ...linkStyle, fontSize: '12px', color: Colours.neutralWarmGrey }}>
          © 2026 South Asian Fly. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
