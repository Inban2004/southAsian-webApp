export type BadgeVariant = 'Gold' | 'Green' | 'Saffron';

export type ProductBadge = {
  label: string;
  variant: BadgeVariant;
};

export type Product = {
  id: string;
  name: string;
  price: number;
  compareAtPrice?: number | null;
  image: string;
  rating: number;
  badge?: ProductBadge | null;
  categoryId?: string | null;
};
