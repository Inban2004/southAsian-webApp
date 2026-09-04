// All Supabase-auth-related operations live in this one file — do not split
// login/register/logout/session-check into separate files. Keep adding new
// auth methods here (e.g. resetPassword, updateEmail) instead of creating
// new service files per method.
//
// Unlike ProductService/CategoryService, this talks to Supabase directly
// (via getSupabaseClient) rather than through our FastAPI apiClient —
// Supabase handles auth itself. Every method still returns the project's
// standard { message, statusCode, data } shape so the ViewModel layer
// doesn't need to special-case auth results.
//
// Every method is wrapped in try/catch: getSupabaseClient() throws
// synchronously (not just rejects) when Supabase isn't configured yet, and
// without a catch that turns into an unhandled promise rejection that
// leaves the UI stuck on "Logging in…" forever instead of showing an error.

import { getSupabaseClient } from './supabaseClient';
import type { ApiResult } from './apiClient';
import type { User } from '../../Model/User';
import type { Session } from '@supabase/supabase-js';

function toUser(id: string, email: string | null): User {
  return { id, email };
}

function toErrorResult<T>(err: unknown): ApiResult<T> {
  const message = err instanceof Error ? err.message : 'Unable to reach authentication service';
  return { message, statusCode: 500, data: null };
}

export const AuthService = {
  // Logs an existing user in with email + password.
  // Used by: LoginView / useLoginVM on form submit.
  async login(email: string, password: string): Promise<ApiResult<{ user: User }>> {
    try {
      const { data, error } = await getSupabaseClient().auth.signInWithPassword({ email, password });
      if (error || !data.user) {
        return { message: error?.message ?? 'Login failed', statusCode: error?.status ?? 400, data: null };
      }
      return { message: 'Login successful', statusCode: 200, data: { user: toUser(data.user.id, data.user.email ?? null) } };
    } catch (err) {
      return toErrorResult(err);
    }
  },

  // Creates a new account with email + password (Supabase may require email
  // confirmation depending on project settings).
  // Used by: a future SignupView — not built yet, but the method lives here
  // now so all auth operations stay in one place.
  async register(email: string, password: string): Promise<ApiResult<{ user: User | null }>> {
    try {
      const { data, error } = await getSupabaseClient().auth.signUp({ email, password });
      if (error) {
        return { message: error.message, statusCode: error.status ?? 400, data: null };
      }
      return {
        message: 'Registration successful',
        statusCode: 200,
        data: { user: data.user ? toUser(data.user.id, data.user.email ?? null) : null },
      };
    } catch (err) {
      return toErrorResult(err);
    }
  },

  // Signs the current user out and clears the local Supabase session.
  // Used by: NavBar / account menu once a logged-in state exists.
  async logout(): Promise<ApiResult<null>> {
    try {
      const { error } = await getSupabaseClient().auth.signOut();
      if (error) {
        return { message: error.message, statusCode: error.status ?? 400, data: null };
      }
      return { message: 'Logged out', statusCode: 200, data: null };
    } catch (err) {
      return toErrorResult(err);
    }
  },

  // Checks whether a session already exists (e.g. on app load) so the UI
  // knows if the user is already logged in without forcing a fresh login.
  // Used by: route guards / NavBar to decide Account vs Login link.
  async checkSession(): Promise<ApiResult<{ session: Session | null }>> {
    try {
      const { data, error } = await getSupabaseClient().auth.getSession();
      if (error) {
        return { message: error.message, statusCode: error.status ?? 400, data: null };
      }
      return { message: 'Session checked', statusCode: 200, data: { session: data.session } };
    } catch (err) {
      return toErrorResult(err);
    }
  },
};
