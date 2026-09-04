import { Colours } from '../../Assets/Colours';

export default function AnnouncementBar() {
  return (
    <div
      style={{
        background: Colours.primary900,
        display: 'flex',
        justifyContent: 'center',
        padding: '12px 40px',
      }}
    >
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '0.36px',
          textTransform: 'uppercase',
          color: Colours.accentGold,
          margin: 0,
        }}
      >
        Free Delivery on Orders Over ₹1,999
      </p>
    </div>
  );
}
