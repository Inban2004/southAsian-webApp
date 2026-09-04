import { apiClient } from './apiClient';
import { App } from '../../App/config';
import type { Category } from '../../Model/Category';

export const CategoryService = {
  getCategories: () => apiClient.get<Category[]>(App.endpoints.categories),
};
