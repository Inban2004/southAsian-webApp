import { useEffect, useState } from 'react';
import { ProductService } from '../../Service/API/ProductService';
import { CategoryService } from '../../Service/API/CategoryService';
import type { Product } from '../../Model/Product';
import type { Category } from '../../Model/Category';

export function useHomeVM() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [bestsellers, setBestsellers] = useState<Product[]>([]);
  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const [categoriesResult, bestsellersResult, newArrivalsResult] = await Promise.all([
        CategoryService.getCategories(),
        ProductService.getBestsellers(),
        ProductService.getNewArrivals(),
      ]);

      if (categoriesResult.statusCode !== 200 || bestsellersResult.statusCode !== 200 || newArrivalsResult.statusCode !== 200) {
        setError(categoriesResult.message || bestsellersResult.message || newArrivalsResult.message);
      } else {
        setCategories(categoriesResult.data ?? []);
        setBestsellers(bestsellersResult.data ?? []);
        setNewArrivals(newArrivalsResult.data ?? []);
      }
      setLoading(false);
    }
    void load();
  }, []);

  const onAddToCart = (product: Product) => {
    // TODO: wire to cart service once the cart feature is scoped
    console.log('add to cart', product.id);
  };

  return { categories, bestsellers, newArrivals, loading, error, onAddToCart };
}
