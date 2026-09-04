import { App } from '../../App/config';
import { handleException } from '../../ExceptionHandler/exceptionHandler';

export type ApiResult<T> = {
  message: string;
  statusCode: number;
  data: T | null;
};

async function request<T>(path: string, options: RequestInit = {}): Promise<ApiResult<T>> {
  try {
    const response = await fetch(`${App.apiBaseUrl}${path}`, {
      headers: { 'Content-Type': 'application/json', ...options.headers },
      ...options,
    });
    const body = (await response.json()) as ApiResult<T>;
    if (!response.ok) {
      return { message: body.message || 'Request failed', statusCode: response.status, data: null };
    }
    return body;
  } catch (error) {
    return handleException(error) as ApiResult<T>;
  }
}

export const apiClient = {
  get: <T>(path: string) => request<T>(path, { method: 'GET' }),
  post: <T>(path: string, payload: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(payload) }),
};
