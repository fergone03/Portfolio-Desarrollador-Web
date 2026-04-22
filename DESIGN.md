# Design System: Dev Esteban — Portfolio

## 1. Visual Theme & Atmosphere

A developer portfolio with a studio-dark soul and an airy light counterpart. The atmosphere is technically precise yet warm — like a well-lit workspace at night. Confident typographic hierarchy, generous breathing room, and ambient depth created through floating gradient orbs and a subtle dot-grid substrate. Content sits inside glass panels that catch a soft spotlight under the cursor.

- **Variance:** 8 — Asymmetric hero (left-aligned), offset section labels, masonry-ready grid thinking
- **Motion:** 6 — Fluid CSS spring reveals, infinite floating orbs, scroll-triggered IntersectionObserver fade-ups
- **Density:** 4 — Daily App Balanced. Sections breathe with `pb-24`. Cards only where elevation earns it

Dual theme: dark (default, near-black with purple-violet accent family) and light (soft lavender-tinted white, same violet accent deepened). Theme transitions animate smoothly at `0.35s ease`.

---

## 2. Color Palette & Roles

### Dark Mode (Primary)
- **Void Background** (`#08090F`) — Page canvas. Near-black with a blue undertone, not pure black
- **Glass Surface** (`rgba(255,255,255,0.04)`) — Card fill. Barely-there white veil
- **Ghost Border** (`rgba(255,255,255,0.09)`) — Card and section borders. Whisper-light
- **Snow Text** (`#F1F5F9`) — Primary text. Slate-50, cool off-white
- **Muted Slate** (`#94A3B8`) — Secondary text. Metadata, descriptions
- **Fog Slate** (`#64748B`) — Tertiary text. Timestamps, labels, placeholders
- **Violet Accent** (`#A78BFA`) — Primary accent. CTAs, active states, gradient start, spotlight glow. Desaturated purple
- **Sky Accent** (`#38BDF8`) — Secondary accent. Gradient end, icon highlights. Electric sky blue
- **Dot Grid** (`rgba(255,255,255,0.045)`) — Background texture. 1px dots on 28px grid

### Light Mode
- **Lavender Canvas** (`#F2F4FF`) — Page canvas. Soft blue-tinted white, not pure white
- **Glass Surface** (`rgba(0,0,0,0.04)`) — Card fill
- **Ink Border** (`rgba(0,0,0,0.09)`) — Card and section borders
- **Ink Text** (`#0F172A`) — Primary text. Slate-950 depth
- **Steel Text** (`#374151`) — Secondary text
- **Iron Text** (`#64748B`) — Tertiary text
- **Deep Violet** (`#7C3AED`) — Primary accent. Richer than dark mode variant
- **Ocean Blue** (`#0EA5E9`) — Secondary accent

**Rule:** Max 2 accent colors — violet (primary) + sky blue (secondary gradient only). Both below 80% saturation. Strictly no neon glows, no pure black (`#000000`).

---

## 3. Typography Rules

- **Display Font:** `Onest Variable` — Geometric, modern, slightly rounded. Feels approachable and technical at once. Used for all headings, hero name, section titles
- **Mono Font:** `Courier New` / any JetBrains Mono — For section labels (`// 01`), code references, timestamps, filter badges
- **Body Font:** `Onest Variable` same family, weight 400. System fallback: `system-ui, sans-serif`
- **Banned:** `Inter` (too generic), any serif (`Times New Roman`, `Georgia`, `Garamond`). Serif is always banned here

### Scale
- **Hero Name:** `text-6xl sm:text-7xl lg:text-8xl`, `font-bold`, `tracking-tight`, `leading-none`. Gradient fill (accent → accent-2)
- **Hero Greeting:** `text-lg`, `font-mono`, tertiary color, block above name
- **Section Title:** `2rem / font-weight 700`, primary text color
- **Section Label:** `0.7rem`, `letter-spacing 0.15em`, `uppercase`, mono, accent color — prefix pattern `// 01`
- **Body/Descriptions:** `text-base`, `leading-relaxed`, max `max-w-lg` (≈65ch), secondary text color
- **Card Metadata:** `text-sm`, tertiary color, mono for dates

---

## 4. Component Stylings

### Glass Card
Frosted panel used for experience items, contact section, project cards.
- Fill: `var(--surface)` — translucent, adapts to theme
- Border: `1px solid var(--border)` — barely visible
- Blur: `backdrop-filter: blur(12px)`
- Radius: `rounded-xl` to `rounded-2xl` (12–16px)
- Shadow: none by default — depth comes from the glass effect itself
- Inner refraction: `border-white/10` + `shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]` for premium edge

### Spotlight Effect
Cursor-tracked radial glow on glass cards.
- Mechanism: `::before` pseudo-element with `radial-gradient(500px at --mx --my, var(--card-glow), transparent 40%)`
- Opacity 0 default → 1 on `:hover`. Transition `0.3s ease`
- CSS vars `--mx`, `--my` updated via JS `mousemove`
- **Never** animate `left`/`top`. Use CSS vars only

### Ambient Orbs
3 fixed blurred blobs creating atmospheric depth behind content. `pointer-events: none`, `z-index: 0`.
- Orb 1: `550×550px`, top-left, Violet family, `float1` 22s loop
- Orb 2: `420×420px`, top-right, Indigo family, `float2` 18s loop, `-6s` delay offset
- Orb 3: `350×350px`, mid-bottom, Sky blue family, `float3` 25s loop, `-12s` delay offset
- All use `filter: blur(90px)` on fixed pseudo-elements only (no repaint on scroll)

### Buttons — Pill Style
- **Default pill** (`.pill-btn`): `inline-flex`, `rounded-full`, glass surface, `border var(--border)`, `text-sm`, secondary text. Hover: accent color text + accent border + `translateY(-2px)`
- **Accent pill** (`.pill-accent`): Same shape but filled with `var(--accent)`. White text. Used for primary CTA only (Download CV)
- **Active state:** `-translate-y-[1px]` tactile push. No outer glow
- **Icon+text:** `gap-2`, icons `size-4`

### Navigation Header
Sticky, glassmorphism. `backdrop-blur-xl`, `bg: var(--header-bg)` (80% opaque bg). `border-bottom: var(--border)`. Nav links: hover accent color. Theme toggle + lang toggle as icon buttons

### Filter Buttons (Skills)
Pill-shaped filter tabs. Default: glass surface. Active: `background: var(--accent)`, white text. Small variant for subcategories. Data Engineer filter in its own row above DevOps/AI

### Badge
Green pulsing dot + label. Signals availability status. Used at top of Hero

### Social Links (Hero nav)
`pill-btn` style with icons. SVG icons — never emoji

---

## 5. Layout Principles

- **Max width:** `max-w-4xl` (896px) centered via `mx-auto` with `px-6` gutters
- **Section spacing:** `pb-24` between sections
- **Hero:** Left-aligned. `min-h-[90vh]`. Name takes full typographic weight. No centered layout. Background orbs float behind
- **Section anatomy:** `// XX` mono label → `2rem` bold title → content
- **Cards:** Vertical stack (experience, projects). No 3-column equal grids
- **Projects:** Horizontal card — image left (40%), content right (60%) on desktop. Full-width stack on mobile
- **Skills:** Flex-wrap filter row → masonry-friendly skill grid below
- **Grid:** CSS Grid for structured layouts. Never `calc()` flexbox percentage math
- **Z-index layers:** bg orbs `z-0`, page content `z-10`, header sticky `z-50`. No arbitrary z-index spam

### Responsive Collapse
- Below `md` (768px): all multi-column → single column. No exceptions
- Project cards: image stacks above content
- Hero font scale: `text-6xl` → `text-7xl sm` → `text-8xl lg`
- Section padding reduces proportionally

---

## 6. Motion & Interaction

### Load Animations (Hero)
- `fadeUp`: `opacity:0 translateY(24px)` → `opacity:1 translateY(0)`. Duration `0.7s`. Easing: `cubic-bezier(.16,1,.3,1)` (expo-out, spring-like)
- `fadeIn`: `opacity:0` → `opacity:1`. Duration `0.6s ease`
- Stagger delays: `100ms`, `200ms`, `300ms`, `400ms`, `500ms`, `600ms` — applied via class cascade

### Scroll Reveals
- `[data-animate]` elements: `opacity:0 translateY(20px)` → `opacity:1 translateY(0)` on IntersectionObserver entry
- Transition: `0.65s cubic-bezier(.16,1,.3,1)`. Optional delay via `data-animate-delay`
- **Never** use `window.addEventListener('scroll')` for reveal logic

### Orb Float (Perpetual)
- `float1/2/3` keyframes: `transform: translate() scale()` only. No `top`/`left` animation
- Infinite, offset start times to desync the three orbs naturally

### Theme Transition
- `background-color`, `color`, `border-color` all transition `0.35s ease` on `html.dark` class toggle
- Anti-FOUC: tiny inline script in `<head>` applies class before paint

### Performance Rules
- Animate exclusively via `transform` and `opacity`
- Orbs on `position:fixed` — no GPU repaint on scroll
- `will-change: transform` sparingly, only on actively animated elements
- Cleanup all `useEffect` intervals/observers on unmount (if React)

---

## 7. Anti-Patterns (Banned)

**Visual**
- No emojis anywhere — icons or SVG only
- No pure black (`#000000`) — use Void (`#08090F`) or Zinc-950
- No neon/outer glow `box-shadow` — inner refraction border only
- No oversaturated accents — both accent colors are desaturated
- No excessive gradient text — only used on hero name display
- No custom mouse cursors

**Typography**
- No `Inter` font — use `Onest Variable`
- No serif fonts (`Times New Roman`, `Georgia`, etc.)
- No screaming oversized H1 — hierarchy via weight + color, not scale alone

**Layout**
- No centered Hero — always left-aligned
- No 3-column equal card feature rows
- No `h-screen` — use `min-h-[100dvh]`
- No `calc()` percentage flexbox math — use CSS Grid
- No `position:absolute` content overlapping other content
- No horizontal overflow on mobile

**Content**
- No filler text: "Scroll to explore", "Swipe down", bouncing chevrons
- No AI copywriting clichés: "Elevate", "Seamless", "Unleash", "Next-Gen", "Revolutionary"
- No Unsplash links (broken) — use `picsum.photos/seed/{slug}/800/600`
- No generic placeholder names ("John Doe", "Acme Corp")
- No fake round numbers (`99.99%`, `50%`)

**Motion**
- No `window.addEventListener('scroll')` for reveals — use `IntersectionObserver`
- No linear easing — always `cubic-bezier(.16,1,.3,1)` or spring equivalent
- No animating `top`, `left`, `width`, `height` — transform + opacity only
- No mixing GSAP and Framer Motion in same component tree

---

## 8. Stitch Prompt Notes

When generating new screens for this portfolio in Stitch:

1. **Background:** Near-black (`#08090F`) with a faint 1px dot grid. Three large blurred radial blobs in violet, indigo, sky-blue — fixed position, not scrolling
2. **Cards:** Frosted glass panels. No heavy shadows. Thin ghost border. Spotlight glow on hover
3. **Accent:** Violet-purple (`#A78BFA` dark / `#7C3AED` light) + sky blue (`#38BDF8`) for gradient accents only
4. **Font:** Onest or Satoshi — geometric, modern sans-serif with good weight range
5. **Section entry:** Always `// XX` mono label above `2rem bold` title
6. **Hero:** Left-aligned name in `gradient-text` (violet→sky). Greeting line in mono above. Pill nav below
7. **Tone:** Professional technical portfolio. Confident, not flashy. Warmth from the violet palette, not from rounded-bubble UI
