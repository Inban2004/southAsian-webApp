import { Colours } from '../../Assets/Colours';
import type { Category } from '../../Model/Category';

type CategoryTileProps = {
  category: Category;
};

export default function CategoryTile({ category }: CategoryTileProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
      <div
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '60px',
          border: `2px solid ${Colours.accentGold}`,
          overflow: 'hidden',
          background: Colours.neutralCream,
        }}
      >
        <img src={category.image} alt={category.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '0.24px',
          textTransform: 'uppercase',
          color: Colours.neutralCharcoal,
          textAlign: 'center',
          margin: 0,
        }}
      >
        {category.name}
      </p>
    </div>
  );
}
