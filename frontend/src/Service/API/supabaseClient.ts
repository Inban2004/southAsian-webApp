import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { App } from '../../App/config';

// Constructed lazily, not at module load — createClient() throws immediately
// if the URL is empty, and Supabase keys aren't configured yet. Building it
// eagerly here crashed the whole app on load before React could render
// anything, since this module gets pulled in by the Login screen's static
// import chain regardless of which route is active.
let client: SupabaseClient | null = null;

export function getSupabaseClient(): SupabaseClient {
  if (!client) {
    client = createClient(App.supabase.url, App.supabase.anonKey);
  }
  return client;
}
