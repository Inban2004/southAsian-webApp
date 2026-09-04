export const App = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000',
  endpoints: {
    categories: '/api/categories',
    bestsellers: '/api/products/bestsellers',
    newArrivals: '/api/products/new-arrivals',
  },
  supabase: {
    url: import.meta.env.VITE_SUPABASE_URL || '',
    anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  },
} as const;
