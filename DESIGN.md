# DESIGN.md — South Asian Fly

UI language extracted from the Figma file `SAS-southAsia`
(`https://www.figma.com/design/LXAmfqc0waFEMOMMGcEwkm/SAS-southAsia`), page "Page 1",
canonical homepage frame `1:2292` ("Home").

This file is the persistent design reference for implementation. If the Figma file changes,
re-extract and update this file — it should never drift silently out of sync with the source of truth.

## 1. Visual Theme

A South Asian grocery/food e-commerce site ("South Asian Fly" — groceries, spices, sweets & snacks,
pooja essentials, frozen foods). Warm, cream-and-navy palette with gold accents; a serif display
font (Fraunces) for product names and headings paired with Inter for UI text — reads as
premium/artisanal rather than discount grocery.

## 2. Colour Roles

| Token | Hex | Role |
|---|---|---|
| `primary900` | `#013080` | Navy — primary brand colour, buttons, headings, footer background |
| `secondary900` | `#f76b03` | Saffron orange — prices, secondary buttons, "Sale" badges |
| `accentGold` | `#c9a227` | Gold — accents, outlines, category tile borders, star ratings |
| `accentGoldLight` | `#f1e4b8` | Light gold — decorative fills |
| `successGreen` | `#035911` | Green — "Organic"/"NEW"/"Small Batch" badges |
| `neutralWhite` | `#ffffff` | Card backgrounds, button text on dark |
| `neutralCream` | `#fbf6ee` | Page background, input backgrounds |
| `neutralCharcoal` | `#1c1c1e` | Body text on light backgrounds |
| `neutralWarmGrey` | `#6b6660` | Secondary/muted text, placeholders |
| `neutralBorder` | `#e8e1d4` | Card and input borders |

## 3. Typography

- **Display / product names / headings:** Fraunces, SemiBold (600), soft/wonk variable axes off/on respectively.
- **UI text / body / labels:** Inter — weights used: Regular (400), Medium (500), Semi Bold (600), Bold (700).
- Section headings: Fraunces SemiBold, 36px.
- Product name (card): Fraunces SemiBold, 18–22px.
- Body: Inter Regular, 16px, line-height 1.5.
- Button label: Inter Semi Bold, 15px, letter-spacing 0.15px.
- Badge label: Inter Medium, 12px, letter-spacing 0.24px, uppercase.
- Nav link: Inter Medium, 12px, letter-spacing 0.24px, uppercase.

## 4. Spacing Scale

`xs 4px · sm 6px · md 10px · lg 16px · xl 24px · 2xl 48px · 3xl 64px · 4xl 96px`

## 5. Radius & Elevation

- `pill`: 999px — buttons, badges, tags, search bar.
- `md`: 10px — inputs, product image containers.
- `card`: 12px — cards (category tile, product card).
- `shadow/sm`: `0px 1px 3px 0px rgba(28,28,30,0.06)` — subtle card elevation, used sparingly.

## 6. Component Styling Rules

- **Buttons** are always pill-shaped (`radius: pill`). Four style variants — Primary (navy fill),
  Secondary (saffron fill, navy text), Outline (gold border, gold text), Ghost (no fill, navy text) —
  each in 3 sizes (sm/md/lg) and 4 states (Default/Hover/Pressed/Disabled at 50% opacity).
- **Badges** are pill-shaped, uppercase, white text on a solid colour: Gold = "Premium"/"Bestseller"/
  "Limited", Green = "Organic"/"NEW"/"Small Batch", Saffron = "Sale".
- **Product Card**: white background, `radius: card`, `shadow/sm`, image on top with an
  absolutely-positioned badge (top-left) and optional wishlist icon (top-right), then name (Fraunces),
  5-star rating row, price (Inter Bold, saffron) with an *optional* strikethrough compare-at price,
  and a full-width Primary button ("Add to Cart").
- **Category Tile**: circular image (120px, gold ring border) + uppercase label underneath.
- **Nav Bar**: cream background, logo left / search centre / account-wishlist-cart icons right,
  divider line, then an uppercase link row centered below.
- **Footer**: navy background, gold top border, 4-column layout (Brand+social / Shop / Customer Care /
  Contact), divider, then a copyright + payment-icons bottom bar.

## 7. Known Design-System Inconsistencies

- The standalone Figma component-library "Product Card" symbol (`1:3409`) uses **£** currency with a
  strikethrough compare-at price. The actual homepage sections build product cards **inline** (not as
  instances of that symbol) using **₹** currency, no strikethrough price, and 3 badge variants. The
  symbol looks like an earlier draft that the page content outgrew. Decision (confirmed with the team):
  the code `ProductCard` component supports an *optional* `compareAtPrice` field so it can render when
  present, but nothing on the current homepage sets it.
- Same drift, different component: the standalone "Nav Bar" symbol (`1:3427`) has different nav links
  (Groceries/Fresh Produce/Sweets & Snacks/Spices & Masalas/Pooja Essentials/Frozen/Offers) than the
  real "Header Area" on the homepage (`1:2295`: Regional Specials/Whole Spices/Masala Powders/Instant
  Mixes/Snacks/Wellness Essentials/Offers, with an active-state underline and Account/Wishlist/Cart
  icons + cart count badge). The code `NavBar` component now matches the real Header Area, not the
  symbol — treat the symbol as stale when the two disagree.
- The homepage's "Footer" has **not** been re-verified against the real "Footer Section" instance
  (`1:3046`) yet — pulling it hit the Figma MCP rate limit. The code `Footer` component currently still
  reflects the standalone symbol and may need the same correction once re-pulled.

## 8. Icons

Icon names used throughout the Figma file (`truck`, `award`, `shield`, `lock`, `phone`, `user`,
`heart`, `shopping-bag`, `arrow-right`, `star`, `quote`, `map-pin`, `ice-cream-bowl`, `instagram`,
`facebook`, `twitter`, `youtube`, `credit-card`) are literally [Lucide](https://lucide.dev) icon
names. Rather than downloading/committing each one as a one-off SVG export (which never expires but
also never gets easier to keep in sync), the project uses the `lucide-react` package and imports by
name — e.g. `import { Truck } from 'lucide-react'`. Photographic images (hero, brand story, category,
product photos) are real photos and are downloaded/committed to `frontend/public/images/`.

## 9. Sections Extracted vs. Outstanding

Extracted and built: Announcement Bar, Header Area (Nav Bar), Hero Slider (slide 1 only — see gap
below), Trust Strip, Shop By Category, Bestsellers Section, Brand Story Section, New Arrivals Section,
Limited-Time Offer Section.

**Not yet extracted** (Figma MCP hit the Starter-plan rate limit mid-session):

- Regional Specials Section (`1:2584`, 1440×1310) — never attempted
- Why Choose Us Section (`1:2963`, 1440×541) — rate-limited
- Testimonials Section (`1:2986`, 1440×589) — rate-limited
- Newsletter Section (`1:3036`, 1440×321) — rate-limited
- Footer Section (`1:3046`, 1440×419) — rate-limited; current `Footer` component reflects the
  (possibly stale) standalone symbol instead

**Hero Slider caveat**: a 3-dot indicator implies a carousel, but only Slide 1's content exists inside
the real "Home" frame. Slides 2/3 exist as separate top-level frames (`1:1065`/`1:1099`) that look
like an earlier draft (same pattern as the duplicate homepage frames) — confirm before building real
carousel behavior.

## 10. Do / Don't

- **Do** pull new values from Figma via the MCP rather than eyeballing the screenshot when adding new
  sections.
- **Don't** hardcode hex values or px sizes in components — use `Assets/Colours.ts`, `Assets/
  Typography.ts`, and `Assets/Tokens.ts`.
- **Don't** copy this file's structure from another company's design system — it reflects only what
  is actually in the South Asian Fly Figma file.
- **Don't** trust a standalone component-library symbol over the real homepage instance without
  checking both — this file has already caught two cases (Product Card, Nav Bar) where they disagreed.
