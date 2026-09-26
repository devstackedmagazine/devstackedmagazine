# Design System — Landing Page

Single source of truth for the visual language. Every value here is measured.
Where a rule says NEVER, it is not a preference.

---

## 1. Visual Theme & Atmosphere

**Density 3 · Variance 8 · Motion 6**

A darkroom with one light source. Near-black surfaces carry weight and silence;
a single acid-lime line cuts through them like a laser sight or an oscilloscope
trace. Type is oversized and set hard against the left edge, the way a technical
poster is printed — the page should feel engineered rather than decorated, closer
to lab equipment than to a startup template.

Deviations from default practice, recorded as decisions:

- **Accent saturation exceeds the usual 80% ceiling.** `#AFFC41` is the brand
  colour and is not being dulled. It is controlled by area instead: see §2.
- **Base is not pure `#000000`.** `#0A0B08` is used so elevation reads on OLED
  and the greys share one temperature with the lime.

---

## 2. Colour Palette & Roles

The table below is the complete palette. No colour outside it may be introduced.

| Name | Hex | Functional role |
|---|---|---|
| Void | `#0A0B08` | Page background. The only full-bleed background. |
| Shelf | `#131510` | Raised surfaces: module blocks, input fields, code panes. |
| Hairline | `#2A2E24` | Decorative-only edges. NEVER load-bearing structure. |
| Rule | `#5F6553` | Structural dividers, input borders, disabled outlines. |
| Bone | `#F2F4EE` | Primary text, headings, icons. |
| Ash | `#8F9488` | Secondary text, captions, metadata, mono labels. |
| Lime | `#AFFC41` | The accent. See area rule below. |
| Lime Lift | `#C4FF66` | Lime hover state only. |
| Lime Press | `#93D62E` | Lime active/pressed state only. |
| Flare | `#FF6B4A` | Error states only: input borders, error messages, destructive confirmation. NEVER decorative. |

### Measured contrast ratios

| Pairing | Ratio | Requirement | Pass |
|---|---|---|---|
| Bone on Void | 17.81:1 | 4.5:1 text | yes |
| Lime on Void | 15.81:1 | 4.5:1 text | yes |
| Void on Lime | 15.81:1 | 4.5:1 text | yes |
| Ash on Void | 6.35:1 | 4.5:1 text | yes |
| Void on Lime Press | 11.18:1 | 4.5:1 text | yes |
| Void on Lime Lift | 16.77:1 | 4.5:1 text | yes |
| Flare on Void | 6.29:1 | 4.5:1 text | yes |
| Rule on Void | 3.26:1 | 3:1 non-text UI | yes |
| Hairline on Void | 1.42:1 | — | decorative only |
| Shelf on Void | 1.07:1 | — | fill only, never an edge |

`Hairline` and `Shelf` are below the 3:1 non-text floor. They may tint a surface.
They may NEVER be the only thing separating two regions — that is `Rule`'s job.

### Accent area rule

Lime may cover **no more than 10% of any viewport**. Permitted uses:

- Primary button fill (one per viewport, maximum)
- Focus rings, 2px, offset 2px
- Active nav item underline
- Thin rules and bracket marks
- A single word or number inside a heading, never the whole heading
- Mono label text and list markers

Forbidden uses: section backgrounds, full-width bands, card fills, body copy,
any gradient, anything with a glow.

---

## 3. Typography

| Role | Face | Weights | Tracking | Scope |
|---|---|---|---|---|
| Display | Unbounded | 600, 700 | -0.03em | H1 and H2 only. NEVER below 30px; the 30px value is reserved for `display-l` at mobile widths, and no other role may use the face at that size. |
| Body | Outfit | 400, 500, 600 | -0.01em | Everything readable: H3–H6, paragraphs, buttons, nav. |
| Mono | JetBrains Mono | 400, 500 | 0 | Metadata, stat figures, tags, timestamps, code, form labels. NEVER prose. |

Unbounded is wide. Headlines are capped at **6 words**; longer copy moves to Outfit.

**Wordmark:** the header logo is an SVG image asset, not live text, and carries no
type specification here. It is deliberately out of scope pending the rebrand. Do
not restyle it, do not convert it to text, and do not apply a face to it.

### Type scale

| Token | Face / weight | Desktop | Mobile | Leading |
|---|---|---|---|---|
| `display-xl` | Unbounded 700 | 72px | 40px | 0.95 |
| `display-l` | Unbounded 600 | 44px | 30px | 1.05 |
| `heading` | Outfit 600 | 26px | 22px | 1.2 |
| `subhead` | Outfit 500 | 20px | 18px | 1.35 |
| `body` | Outfit 400 | 17px | 16px | 1.6 |
| `small` | Outfit 400 | 15px | 14px | 1.5 |
| `label` | JetBrains Mono 500 | 13px | 12px | 1.4 |

Body copy is capped at **65 characters per line** (`max-w-[65ch]`).

### Subset coverage — verification required

Content may contain Albanian diacritics (`ë`, `Ë`, `ç`, `Ç`). All three faces must
load the **`latin-ext`** subset, not `latin`.

Verify before shipping by rendering the string `Gërxhaliu çështje ËÇ` in each face
and **measuring glyph advance width against the surrounding characters**. A
fallback glyph often looks plausible at a glance but measures differently. Do not
trust the subset name alone.

---

## 4. Layout

- **Grid:** CSS Grid, 12 columns, 24px gutter. NEVER `calc()` percentage math.
- **Containment:** `max-w-[1400px]`, centred, with 24px page padding (16px mobile).
- **Full-height sections:** `min-h-[100dvh]`. NEVER `h-screen` — it jumps in iOS Safari.
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192. No other values.
- **Section rhythm:** 128px vertical padding desktop, 64px mobile.

### Breakpoints (capped — no others may be invented)

`sm 640` · `md 768` · `lg 1024` · `xl 1280`

Below `md`, the asymmetric grid collapses to a single column in DOM order.
Non-home heroes keep their left alignment; they do NOT centre on mobile. The
home hero's centred layout (§4 Composition) holds at every breakpoint — it was
never a split grid to begin with, so there's no asymmetric layout to collapse.

### Divider construction

Dividers are **grid gaps with `Void` showing through**, not borders. Set the grid
container background to `Rule` and the gap to `1px`; cells get `Shelf` or `Void`.
This prevents the doubled 2px seam that borders produce at shared edges.

At the viewport edge, the outermost line is **omitted** — lines terminate at content,
never bleed to the window edge. At corners, no join decoration.

### Composition

- **Hero exception:** the home page hero is centred — eyebrow, headline, 3D
  robot centrepiece, subheading, and buttons, all centre-aligned and stacked.
  This overrides the general rule below. It's a deliberate choice built around
  the Spline robot as the page's focal point, not an unconverted section.
- Every other hero on the site (About, Services, Contact, Project intake) stays
  **split or left-aligned, asymmetric**. Centred heroes are banned there.
- Feature sections are a **two-column zig-zag** or an **asymmetric 5/7 grid**.
- NEVER three equal cards in a row.

---

## 5. Components

Every interactive element specifies all five states. Hover rules are wrapped in
`@media (hover: hover)` so touch devices do not inherit a stuck hover.

### Button — primary
- Default: `Lime` fill, `Void` text, radius 4px, padding 14px/28px, Outfit 500.
- Hover: fill `Lime Lift`.
- Focus: 2px `Lime` ring, 2px offset, fill unchanged.
- Active: fill `Lime Press`, `translateY(1px)`.
- Disabled: `Shelf` fill, `Ash` text, `Rule` 1px border, no pointer events.
- NEVER an outer glow or box-shadow in the accent colour.

### Button — secondary
- Default: transparent, `Bone` text, 1px `Rule` border.
- Hover: border `Lime`, text `Lime`.
- Focus: 2px `Lime` ring, offset 2px.
- Active: `translateY(1px)`.
- Disabled: border and text `Rule`.

### Module block (replaces cards)
At Density 3 there are no elevated cards and no shadows. Content sits in grid
cells separated by the gap construction above. Each block: `Shelf` background,
32px padding, a `label` in mono at the top, `heading` below, `body` under that.
Hover on an interactive block raises the top border to `Lime`, 1px, nothing else.

### Input
- Label above in mono `label`, `Ash`.
- Field: `Shelf` background, 1px `Rule` border, radius 4px, `Bone` text, 12px/16px padding.
- Focus: border `Lime`, plus 2px `Lime` ring at 2px offset.
- Error: border `Lime` is NOT used for errors — use `#FF6B4A`, message below in `small`.
- Disabled: `Ash` text, `Hairline` border.
- NEVER floating labels.

### Loading
Skeletons matching real layout dimensions, `Shelf` fill. **Static — no shimmer.**
NEVER circular spinners.

### Empty state
A composed layout showing the shape of the data and the action that populates it.
NEVER the string "No data found".

---

## 6. Motion

- **Curve, site-wide:** `cubic-bezier(0.22, 1, 0.36, 1)`.
- **Durations:** entry 340ms · exit 220ms · micro-interaction (hover, press) 140ms.
- **Stagger:** lists cascade at 60ms per item, **capped at 8 items**; item 9 onward
  shares item 8's delay so the tail is not visibly late.
- **Properties:** animate `transform` and `opacity` only. NEVER `top`, `left`,
  `width`, `height`.
- **Idle motion:** at Motion 6, one perpetual micro-interaction is permitted —
  a 3s opacity pulse between 0.6 and 1.0 on a single lime status dot. Nothing else loops.
- **Grain/noise:** fixed pseudo-element only, never on a scrolling container.

### Reduced motion

Under `@media (prefers-reduced-motion: reduce)`, all transitions resolve to their
final state in 0ms, the stagger is removed, and the status-dot pulse is disabled.
This is not optional.

---

## 7. Anti-Patterns (Banned)

- No emojis anywhere in the UI
- No `Inter`; no generic serifs (`Georgia`, `Times New Roman`, `Garamond`)
- No serif faces at all
- No pure black `#000000`
- No neon, outer-glow, or coloured shadows
- No gradient text on headings
- No gradients in the accent colour
- No custom mouse cursors
- No overlapping or absolutely-positioned stacked content
- No three-column equal card rows
- No centred hero sections
- No carousels — and no horizontal scroll strip that later gains dots, arrows, or autoplay
- No filler UI text: "Scroll to explore", "Swipe down", bouncing chevrons, scroll arrows
- No placeholder names: "John Doe", "Acme", "Nexus", "Lorem ipsum" in shipped copy
- No fabricated metrics: "99.9% uptime", "10x faster", "trusted by 500+ teams",
  fake logo walls, fake testimonials
- No AI copy clichés: "elevate", "seamless", "unleash", "next-gen", "transform",
  "empower", "revolutionise", "dream"
- No broken image links — use `picsum.photos` or inline SVG
- No `h-screen`

### Approved exceptions

These override the bans above. They are decisions, not oversights, and must not be
"corrected" by a later pass.

- **`TrustedMarquee` — auto-scrolling logo strip.** Overrides the carousel ban (§7)
  and the single-loop limit (§6). Conditions: the animation is `transform`-only
  (`translate3d`), and under `prefers-reduced-motion: reduce` it renders fully
  static with `animation: none`. If either condition is broken, the exception
  lapses and the component comes out.

- **`ShowcaseHorizontal` — horizontal scroll strip.** Overrides the horizontal
  scroll strip ban (§7). Conditions: scrolling is transform-only — it uses native
  `overflow-x` and never drives position with `left`/`margin`; under
  `prefers-reduced-motion: reduce` there is no automatic or scroll-driven motion
  and the section stays readable and navigable; it remains a scroll strip
  permanently — **no dots, no arrows, no autoplay, ever**, as that progression is
  precisely how it becomes the banned pattern; and it is operable by keyboard,
  reachable in tab order, and must never trap scroll, so a user scrolling past
  reaches the next section. The native scrollbar is the intended affordance and
  must stay visible — hiding it invites the dots/arrows that void this exception.
  If any condition is broken, the exception lapses and the component comes out.

### Project-specific bans

- **No generic dark-SaaS look.** No purple-to-blue gradient mesh backgrounds, no
  glassmorphic frosted cards, no floating 3D blobs, no grid-of-dots hero backdrop.
- **Lime is never a background.** If a section reads as "the green section", it is wrong.
- **No security-theatre imagery.** No padlock icons, no shield icons, no hooded
  figures, no binary rain, no fingerprint graphics.

---

## 8. Known Out-of-Scope Work

Logged deviations that are **real and deliberately not being fixed yet**. They are
recorded here so a later pass does not rediscover them as new findings, and so
nobody "helpfully" converts them mid-task. Do not touch these without a separate
instruction.

### Legacy token aliases (from the main merge)

Pages kept from `main` (about, contact, services, 404, thank-you, `Quiz`,
`WorkingNotes`) use main's `--board*` / `--ink*` tokens and the `.sheet` /
`.meta-label` classes. A block at the end of `app/globals.css`, marked "Legacy
aliases", maps them onto ours: `--board` → `Void`, `--board-raised` and
`--board-card` → `Shelf`, `--ink` → `Bone`, `--ink-dim` and `--ink-faint` → `Ash`
(not `Rule`: 3.26:1 on `Void` is too low for text). Remove the block when those
pages are converted to §3 tokens.

### Unconverted sections (still on the pre-redesign system)

These three still use the old `editorial-card` primitive (1px `--hairline` border,
1.25rem radius) and the old inline type ramp (`font-display` with `clamp()`,
`text-white/NN`, `font-mono-meta`) instead of §3 tokens and the §4 grid-gap divider
construction. Their body contrast currently passes (measured 6.25:1–8.47:1 on
`Void`), so this is a system-consistency debt, not an accessibility defect.

| Section | File | Also violates |
|---|---|---|
| About — "Principle 01/02/03" | `components/about/DreamToRealitySection.tsx` | §4 three-equal-card row |
| Services — "Tier 01/02/03" | `components/services/PricingSection.tsx` | §4 three-equal-card row |
| Services — service list 01–04 | `components/services/ServiceListSection.tsx` | — |

The two three-equal-card rows break §4 Composition ("NEVER three equal cards in a
row") and the §7 ban on the same. Converting them to the divider construction does
not fix that on its own — the column count has to change too.

`.editorial-card` in `app/globals.css` exists only to serve these three. It is
expected to be deleted, not restyled, when they are converted.

---

## 9. Performance Budget

No budget existed before this section — it was written retroactively after the
Hero Spline embed (§9.3) forced the question of where that weight should land.
Numbers below are targets, not a report of current measured state; check new
work against them before it lands, not after.

### 9.1 Budget

| Metric | Budget | Scope |
|---|---|---|
| Initial page load, first-party JS | **250 KB gzip / route** | Everything parsed and executed before the route is interactive — the main framework chunk plus that route's own chunk. Excludes anything gated behind a breakpoint, viewport intersection, or user interaction that does not fire on first paint. |
| Async / lazy-loaded chunk | **150 KB gzip / chunk** | Anything code-split behind `next/dynamic`, a route change, or a similar deferred boundary — modals, rich embeds, heavier interactive widgets. |

Measure with a clean production build (`npm run build`), gzip each file under
`.next/static/chunks`, and diff against a build of the same commit without the
change. Do not estimate from `node_modules` package size — bundlers tree-shake,
and third-party packages often ship far more than what actually lands in a chunk.

### 9.2 What counts against the budget

Any JS the browser downloads because of a first-party change: npm-bundled
imports, self-hosted static assets pulled in via a runtime-injected `<script>`
tag, anything served from `/public`. **Where the bytes are declared does not
matter — only whether the visitor's browser fetches them as a consequence of
using this site.** A self-hosted `<script src>` is not a loophole around the
async-chunk budget; it is the same spend measured a different way.

### 9.3 Named exception — Hero Spline embed

`components/home/HeroSplineScene.tsx` (`<spline-viewer>` web component,
`public/spline-viewer/`) is excluded from both budgets above, not folded into
them. Measured for the reference scene profiled during implementation:
**~985 KB gzip for the base engine, ~1.1–1.2 MB gzip/br total** once the
scene's own feature chunks (physics/boolean ops, navmesh, audio, UI panel —
varies per scene) are counted. That is 4–8x either budget number by itself.

It is excluded rather than counted because folding it in would do one of two
bad things: force both budget numbers so high they stop catching real bloat,
or make this one deliberate, isolated, non-blocking hero element look like an
ordinary line item any future addition can point to as precedent. Neither is
the goal — the goal is a number that still means something the next time
someone wants to add 1 MB of JS to a section.

**Why the exclusion is defensible here, specifically:**
- It never loads on mobile — the element is not mounted below the `md`
  breakpoint (§4), full stop, not merely hidden.
- It costs zero bytes in the JS bundle graph — confirmed via clean A/B
  production build (+586 bytes gzip total, which is our own loader logic, not
  the engine). It is not in Next's chunk graph at all; it is a same-document
  custom element loaded async via `<script type="module">`, self-hosted so the
  hero doesn't depend on a third party's uptime.
- It does not block initial paint, hydration, or TTI for the rest of the page
  — same-document, async, desktop-gated.
- It is one deliberate centerpiece, not a pattern — this exception covers
  this element, not "hero embeds" as a category.

**The exception lapses — the element comes out or gets rebudgeted — if any of
these change:**
- The mobile gate is removed or weakened so the engine loads on small
  viewports.
- It stops being self-hosted / async-injected (e.g. reverts to an
  `import`-based bundle, which would show up in the JS bundle graph and then
  does count against §9.1/§9.2).
- A second embed of comparable weight is added anywhere on the site — at that
  point this stops being "one named exception" and becomes a pattern that
  needs its own budget line, not a blanket carve-out.
- It starts blocking or visibly delaying render of content around it.
