import { Colours } from '../../Assets/Colours';
import { Radius, Shadow } from '../../Assets/Tokens';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import type { Product } from '../../Model/Product';

type ProductCardProps = {
  product: Product;
  onAddToCart?: (product: Product) => void;
};

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { name, price, compareAtPrice, image, rating, badge } = product;

  return (
    <div
      style={{
        background: Colours.neutralWhite,
        borderRadius: Radius.card,
        boxShadow: Shadow.sm,
        overflow: 'hidden',
        width: '260px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', background: Colours.neutralCream, height: '260px' }}>
        <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {badge && (
          <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
            <Badge label={badge.label} variant={badge.variant} />
          </div>
        )}
      </div>
      <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <p style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: '22px', color: Colours.neutralCharcoal, margin: 0 }}>
          {name}
        </p>
        <div style={{ color: Colours.accentGold, fontSize: '14px' }}>{'★'.repeat(Math.round(rating))}</div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: '20px', color: Colours.secondary900 }}>
            ₹{price}
          </span>
          {compareAtPrice != null && (
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: Colours.neutralWarmGrey,
                textDecoration: 'line-through',
              }}
            >
              ₹{compareAtPrice}
            </span>
          )}
        </div>
        <Button size="lg" buttonStyle="Primary" onClick={() => onAddToCart?.(product)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
