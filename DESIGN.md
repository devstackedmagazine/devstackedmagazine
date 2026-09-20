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
| Display | Unbounded | 600, 700 | -0.03em | H1 and H2 only. NEVER below 32px. |
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

Below `md`, the asymmetric grid collapses to a single column in DOM order. The
hero keeps its left alignment; it does NOT centre on mobile.

### Divider construction

Dividers are **grid gaps with `Void` showing through**, not borders. Set the grid
container background to `Rule` and the gap to `1px`; cells get `Shelf` or `Void`.
This prevents the doubled 2px seam that borders produce at shared edges.

At the viewport edge, the outermost line is **omitted** — lines terminate at content,
never bleed to the window edge. At corners, no join decoration.

### Composition

- Hero is **split or left-aligned, asymmetric**. Centred heroes are banned at this
  variance level.
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

### Project-specific bans

- **No generic dark-SaaS look.** No purple-to-blue gradient mesh backgrounds, no
  glassmorphic frosted cards, no floating 3D blobs, no grid-of-dots hero backdrop.
- **Lime is never a background.** If a section reads as "the green section", it is wrong.
- **No security-theatre imagery.** No padlock icons, no shield icons, no hooded
  figures, no binary rain, no fingerprint graphics.
