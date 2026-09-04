# TODO — South Asian Fly

Picks up where this session left off. Ordered by priority.

## 0. Deployment — ✅ LIVE

Two separate Vercel projects, both linked to `github.com/Inban2004/southAsian-webApp`:

- **Backend**: `https://south-asian-web-app.vercel.app` (root directory: `backend`)
- **Frontend**: `https://south-asian-web-app-3cof.vercel.app` (root directory: `frontend`)

Both verified live end-to-end: `/health` and `/api/categories`/`/api/products/*` return real
MongoDB data, and the frontend's production JS bundle has the real backend URL and Supabase
credentials baked in (not `localhost`). CORS is scoped to the real frontend origin, not `*`.

**Gotchas hit while deploying, worth remembering:**
- Each Vercel project's "Root Directory" setting is applied *relative to wherever you run
  `vercel deploy` from* — you must deploy from the **repo root**, not from inside `backend/` or
  `frontend/` themselves, or it errors "Root Directory does not exist."
- The CLI can only have one project linked per directory (`.vercel/project.json`) at a time. Since
  both projects need root-level deploys, you have to `rm -rf .vercel && vercel link --project <name>`
  to switch which project the repo root points to before each deploy. Easy to deploy to the wrong
  project by forgetting which one is currently linked — always double check with
  `cat .vercel/project.json` before deploying.
- Vite env vars (`VITE_*`) are baked in **at build time**, not read at runtime. Setting them in
  Vercel *after* a build already happened does nothing until you redeploy.
- New Vercel projects start with **zero env vars** even if you typed them into the dashboard's
  "Import Project" form — verify with `vercel env ls` after import, don't assume.
- `git push`/`vercel deploy` of anything with real photo assets (~27MB) is genuinely slow (~60-100
  KiB/s observed) under this environment's network — looks like a hang if you time out too early.
  Give it minutes, not seconds, before assuming it's broken.

- [ ] **Not done**: Supabase's **Site URL / Redirect URLs** (Auth settings in the Supabase
      dashboard) still need updating from `localhost` to `https://south-asian-web-app-3cof.vercel.app`
      — otherwise the signup confirmation email link won't work correctly in production. No CLI for
      this, has to be done in the dashboard.
- [ ] Not done: a custom domain (both projects are on default `*.vercel.app` URLs for now)

## 1. MongoDB — ✅ DONE

- [x] Real `MONGODB_URI` in `backend/.env` (Atlas, free M0 cluster)
- [x] Seeded: `venv/bin/python -m scripts.seed` → 6 categories, 10 products
- [x] Verified live: `/api/categories`, `/api/products/bestsellers`, `/api/products/new-arrivals` all
      return real data (had to kill a stale `uvicorn` process from Aug 31 that was squatting on port
      8000 with empty env vars — if endpoints ever mysteriously go back to 500s, check
      `lsof -i :8000` for a zombie process before assuming the code broke)
- [x] Homepage shows real category/product data

## 2. Supabase — env wired, auth flow still being fixed

- [x] Supabase project created, keys in both `backend/.env` and `frontend/.env`, reachability verified
- [x] **Signup screen built** (`Screens/Signup/`) — there was no way to create an account before, so
      "test login" was a dead end. `/signup` now exists, uses `AuthService.register`.
- [x] Login ↔ Signup cross-linked (each has a link to the other)
- [x] Signup success routes to `/login` with a confirmation-email message, instead of silently
      landing on Home — was the bug the user flagged this session
- [ ] **Not yet tested end-to-end** — need to actually sign up a real test user and confirm login works
- [ ] Backend JWT verification (FastAPI dependency that checks the Supabase token on protected
      routes, per `CLAUDE.md` §9) — still not built
- [x] Decided: login required for everything, not just checkout/admin. `/` is now wrapped in a
      `RequireAuth` guard (`Components/RequireAuth/`, backed by `Utility/useAuthSession.ts`) — an
      unauthenticated visit to `/` redirects to `/login`. `/login` and `/signup` themselves stay
      public (obviously, or nobody could ever log in).
- [ ] **Not visually confirmed in a real browser yet** — type-checks and builds clean, but the
      redirect is client-side JS that curl can't exercise. Test: with `frontend/.env`'s Supabase
      values in place but no active session, visiting `/` should bounce to `/login`, not show Home.
- [ ] Not done: redirecting an *already logged-in* user away from `/login`/`/signup` back to `/` —
      only the Home-requires-auth direction was built. Minor UX gap, not a blocker.

## 3. Admin page (new requirement — not in Figma, not started)

Scope confirmed: Products & Categories CRUD to start (name, price, other fields), gated by a
Supabase admin role (checked on both the frontend route and backend endpoints — not a separate
admin-only auth flow). Depends on §2 (Supabase auth actually working end-to-end) first.

- [ ] Decide how the admin role is stored on the Supabase user (custom claim vs. a `role` column in
      a `profiles` table vs. app_metadata) — open question, needs a decision before building
- [ ] Backend: admin-only routes for product/category CRUD (`POST/PUT/DELETE /api/products`,
      `/api/categories`), following the same Route → Controller → Service → Repository layering
      already in place for the read endpoints
- [ ] Backend: auth dependency that verifies the Supabase JWT *and* the admin role/claim, reusable
      across all admin routes — this is the same JWT verification work already listed in §2, just
      extended to also check role
- [ ] Frontend: new `Screens/Admin/` (View + ViewModel per the MVVM pattern), route-guarded so
      non-admins get redirected
- [ ] Frontend: `AdminProductService`/reuse `ProductService` with the new write methods, forms for
      create/edit, a list/table view, delete confirmation
- [ ] Decide whether admin edits go directly against MongoDB (bypassing the seed script) — likely
      yes, since that's the whole point of having an admin UI instead of hand-editing `seed.py`

## 4. Remaining Figma sections (blocked on MCP rate limit — retry or upgrade plan)

- [ ] Regional Specials Section (`1:2584`) — never pulled
- [ ] Why Choose Us Section (`1:2963`)
- [ ] Testimonials Section (`1:2986`)
- [ ] Newsletter Section (`1:3036`) — also needs a backend endpoint (`POST /api/newsletter` or similar)
- [ ] Footer Section (`1:3046`) — verify against real page instance; current `Footer` component may still reflect the stale component-library symbol (same drift pattern already found in Product Card and Nav Bar — see `DESIGN.md` §7)
- [ ] Hero Slider — confirm whether Slides 2/3 (`1:1065`/`1:1099`) are real content or an earlier draft, before building actual carousel behavior

## 5. Feature gaps — currently static, no logic behind them

- [ ] Cart — "Add to Cart" only `console.log`s right now; no cart state, no cart page, no persistence
- [ ] Search bar — accepts typing, does nothing with it
- [ ] Wishlist — icon/link exists, no state or persistence
- [ ] Countdown timer (Limited-Time Offer) — static numbers, doesn't tick; needs a real end-timestamp decision
- [ ] Hero slider dots — decorative only, no carousel advance logic
- [ ] Nav category links — don't route anywhere yet (no category pages exist)

## Already working

- Full homepage renders with real MongoDB-backed data (categories, bestsellers, new arrivals)
- `Account` nav link → `/login`; Login ↔ Signup cross-linked
- Backend layered architecture (Route → Controller → Service → Repository → MongoDB) verified end-to-end, live
- Supabase project reachable from both frontend and backend; signup/login calls wired, not yet tested with a real account
