import type { ApiResult } from '../Service/API/apiClient';

export function handleException(error: unknown): ApiResult<null> {
  const message = error instanceof Error ? error.message : 'Unable to connect to server';
  return {
    message,
    statusCode: 500,
    data: null,
  };
}
