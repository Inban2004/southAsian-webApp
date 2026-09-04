import { apiClient } from './apiClient';
import { App } from '../../App/config';
import type { Product } from '../../Model/Product';

export const ProductService = {
  getBestsellers: () => apiClient.get<Product[]>(App.endpoints.bestsellers),
  getNewArrivals: () => apiClient.get<Product[]>(App.endpoints.newArrivals),
};
