---
name: Playdate Founding 100
description: An airy sky-and-clouds landing page for a gentle three-ingredient cleanser — calm, transparent, never clinical.
colors:
  bg-blue: "#B9DDF2"
  cloud-white: "#F9F7F2"
  ink: "#08397C"
  ink-secondary: "#114F8F"
  ink-accent: "#064D8D"
  baby: "#24A8DA"
  kids: "#F6CF69"
  kids-deep: "#EBBE45"
  toddlers: "#DF6334"
  ink-toddler: "#BD4A1E"
  mark-water: "#1C6FA0"
  mark-salt: "#B4431C"
  on-ink-muted: "#CDE2F3"
  on-ink-faint: "#B3C9E0"
  on-ink-eyebrow: "#A9CDEA"
  on-ink-error: "#FFC7A6"
  strike: "#E4572E"
typography:
  display:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2rem, 5.5vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.6rem, 4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1.15rem, 2.4vw, 1.4rem)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Quicksand, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(1rem, 1.1vw + 0.9rem, 1.125rem)"
    fontWeight: 500
    lineHeight: 1.6
    letterSpacing: "normal"
  supporting:
    fontFamily: "Lora, Georgia, 'Times New Roman', serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.7rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  sm: "14px"
  card: "22px"
  pill: "100px"
spacing:
  2xs: "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.5rem"
  xl: "4rem"
  2xl: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.kids}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.9rem"
  button-primary-hover:
    backgroundColor: "{colors.kids-deep}"
    textColor: "{colors.ink}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.9rem"
  input-email:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "1.05rem 1.15rem"
  card:
    backgroundColor: "{colors.cloud-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "clamp(1.3rem, 3vw, 2rem)"
  ingredient-mark-water:
    backgroundColor: "{colors.mark-water}"
    textColor: "{colors.cloud-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    height: "62px"
    width: "62px"
  ingredient-mark-salt:
    backgroundColor: "{colors.mark-salt}"
    textColor: "{colors.cloud-white}"
  ingredient-mark-hocl:
    backgroundColor: "{colors.ink-secondary}"
    textColor: "{colors.cloud-white}"
---

# Design System: Playdate Founding 100

## Overview

**Creative North Star: "The Clear-Sky Field"**

The page reads like a bright, open sky. Wide bands of soft Background Blue and
Cloud White stack down the scroll, each one a calm field with room to breathe;
a single rounded wave marks the one transition where the ground changes from
sky to cream, echoing the bottle label. Everything is rounded — pill buttons,
22px cards, circular ingredient marks — and nothing has a hard edge or a sharp
corner. The mood is calm, tender, honest, and quietly premium. Warmth comes
from real photography of little hands in natural light set against the cool
sky palette; structure comes from generous whitespace, not rules or boxes.

The deliberate opposite of this system is the **clinical germ-fear sanitizer**
look: warning reds and greens, shield and germ iconography, "kills 99.9%"
urgency, sharp edges, and hospital whites. Playdate never raises its voice.
Where a fear brand would shout a threat, this design leaves quiet space and
lets a plain sentence of navy Quicksand do the work.

Type is a three-voice pairing: rounded **Quicksand** for every headline and the
wordmark, utilitarian **Montserrat** in all-caps for eyebrows, chips, and
button labels, and italic **Lora** for the warm human asides. Depth is minimal
— surfaces are flat at rest, lifted only by one soft blue ambient shadow on
cards; a hover/focus shadow is the only other one, as a response to state.
Motion follows one thesis — *the page exhales as you scroll* — gentle entrance
and state feedback, all behind `prefers-reduced-motion`.

**Key Characteristics:**
- Alternating Background Blue / Cloud White / Primary Ink section bands as the
  primary structural device
- Everything rounded: pill buttons and inputs (100px), 22px cards, circular marks
- One soft ambient shadow at rest; a state-only hover/focus shadow; otherwise flat
- One section-title scale (`--step-h2`); eyebrow tight to its heading
- Three type voices with fixed jobs: Quicksand display, Montserrat labels, Lora warmth
- Real warm-toned photography of little hands against the cool palette
- Accent colors appear only as the baby·kids·toddlers set, never as large fields;
  accent *text* uses the darkened `--ink-toddler`
- Gentle scroll-entrance + a considered confirmation moment, reduced-motion safe

## Colors

A sky palette: cool blues and a warm off-white ground, navy for all text, and
three saturated category accents used only as small deliberate pops.

### Primary
- **Primary Ink** (`#08397C`): Every headline, body copy, and the `playdate`
  wordmark. Also the full-bleed background of the announcement bar, the proof
  strip, and the two conversion sections (Founding offer, Final CTA), where
  text flips to Cloud White.
- **Secondary Ink** (`#114F8F`): Subheads, eyebrows, captions, ingredient card
  body text, notes — the quieter navy one step down from headline ink. Also
  the focus-ring color.
- **Accent Ink** (`#064D8D`): Fine print and the deepest ingredient captions.

### Secondary
- **Background Blue** (`#B9DDF2`): The default sky ground. Roughly half the
  section bands sit on it, and it is the fill of the transition wave. The hero
  and the Founding offer carry a *radial tint* of their two ground tokens (a
  soft light from upper-right on the hero; a navy depth-glow behind the
  Founding price) — not a new color, a gradient of the existing ones.
- **Cloud White** (`#F9F7F2`): The warm off-white ground that alternates with
  Background Blue. Also every card, the signup success panel, and the sticky
  header (at 92% opacity with an 8px backdrop blur).

### Tertiary — the baby·kids·toddlers accents
- **Baby Blue** (`#24A8DA`): The "baby" category word/dot. (The Water
  ingredient mark uses **Mark Water** `#1C6FA0`, a darkened sibling — the
  bright value fails contrast under cloud-white mark text.)
- **Kids Yellow** (`#F6CF69`): The "kids" category word/dot; the primary
  button fill; the "Save $10+" offer badge; check-mark bullets on the offer
  perks list. Hover state deepens to **Kids Yellow Deep** (`#EBBE45`).
- **Toddler Orange** (`#DF6334`): The "toddlers" category word/dot. As *text*
  on a light ground it fails AA, so accent-colored copy uses **Ink Toddler**
  (`#BD4A1E`, ≥4.5:1 on cloud-white) — the "Meet Playdate" and "The everyday
  moment" eyebrows, and the form error line. The Salt ingredient mark uses
  **Mark Salt** (`#B4431C`) for the same reason.
- **Strike** (`#E4572E`): the line-through rule on the struck regular price
  (the struck text itself is Cloud White).

### On-ink tints
On the navy `--ink` sections, dimmed text is a *solid tint*, never `opacity`:
**On-Ink Muted** (`#CDE2F3`, microcopy/disclaimer), **On-Ink Faint**
(`#B3C9E0`, lowest-priority print), **On-Ink Eyebrow** (`#A9CDEA`),
**On-Ink Error** (`#FFC7A6`).

### Named Rules
**The Let-the-Sky-Breathe Rule.** Roughly 70% of any screen is Background Blue
and Cloud White ground, ~20% is navy ink, and no more than ~10% is
accent-color pop. The three accents appear *together* as the
baby·kids·toddlers set, sparingly, and **never as a large color field** — no
full-width accent sections, no accent-colored panels. Their rarity is what
makes them read as playful rather than loud.

**The Navy-Carries-the-Words Rule.** Text is Primary, Secondary, or Accent Ink
(or Cloud White on ink grounds) — never a raw category accent. When copy must
carry accent warmth, use the darkened text-safe sibling (`--ink-toddler`),
never `--toddlers` / `--baby` themselves. Accents are fills behind navy text
or small graphic marks, not a text color on a light ground.

## Typography

**Display Font:** Quicksand (fallback: system-ui, -apple-system, 'Segoe UI', sans-serif)
**Body Font:** Quicksand, weight 500 (same family, lighter weight)
**Label Font:** Montserrat (fallback: system-ui, sans-serif)
**Supporting Font:** Lora, italic (fallback: Georgia, 'Times New Roman', serif)

**Character:** Quicksand's rounded, friendly letterforms are the brand's core
signal — approachable but not childish. Montserrat all-caps adds utilitarian
precision for labels and buttons. Italic Lora is the warm human counterpoint,
reserved for pull-quotes and tender asides. Friendly, but precise.

### Hierarchy
- **Display / h1** (Quicksand 700, `clamp(2rem, 5.5vw, 3.25rem)`, line-height
  1.12, tracking -0.03em): The hero headline only. In the hero it splits into a
  Quicksand bold line (`.hl-a`, sized fluidly with `cqi`, tracking -0.032em)
  and an italic Lora second line (`.hl-b`).
- **Headline / h2** (Quicksand 700, **`--step-h2`** =
  `clamp(1.95rem, 3.1vw + 0.55rem, 2.75rem)`, line-height 1.12, tracking
  -0.03em): every section title, one scale — no per-section overrides. The
  Founding heading runs one step larger as a deliberate peak.
- **Title / h3** (Quicksand 700, `clamp(1.15rem, 2.4vw, 1.4rem)`): Ingredient
  card names, FAQ answer parents. The success-panel heading is an `<h2>` for
  document-outline order but sized at this step.
- **Body** (Quicksand 500, `clamp(1rem, 1.1vw + 0.9rem, 1.125rem)`, line-height
  1.6): All paragraphs. Section intro copy runs a step larger
  (`clamp(1.1rem, 1.4vw, 1.25rem)`). On `--ink` sections, body gets line-height
  1.68 and `0.003em` tracking (light-on-dark comp). Prices/figures use
  `font-variant-numeric: lining-nums tabular-nums`.
- **Supporting** (Lora 400 italic, `clamp(1.3rem, 2.4vw, 1.7rem)`,
  line-height 1.4): Pull-quotes and the hairline "note" footnote.
- **Label / eyebrow** (Montserrat 700, `0.78rem`, tracking 0.16em, UPPERCASE,
  `margin-bottom: 0.7rem` — tight to its heading): Section eyebrows, proof
  chips, button text (`0.95rem`, tracking 0.04em), footer tags. The HOCl trust
  line is sentence-case Montserrat 600, not caps.

### Named Rules
**The Three-Voice Rule.** Every piece of text is Quicksand (headings + body),
Montserrat (uppercase labels only), or italic Lora (warm asides only). A
fourth treatment, or Lora set upright, or Montserrat in sentence case, is off
the system.

**The Short-Caps Rule.** All-caps + wide tracking is for labels of a few words.
Never set a full sentence or a multi-item list in uppercase.

## Layout

Single-column, mobile-first, one continuous scroll. A centered `.container`
caps content at **1120px** (narrow variant 760px for FAQ and the final CTA)
with fluid side padding `clamp(1.15rem, 5vw, 2.5rem)`.

**Section rhythm:** each `<section>` is a self-contained band with vertical
padding `clamp(3rem, 8vw, 5.5rem)` (compressed to `clamp(2.5rem, 7vw, 3.75rem)`
below 820px — enough to keep the beats separate on a phone) and one of three
background classes — `--blue`, `--cloud`, `--ink`. Bands alternate; two
consecutive bands never share a background. Within a text block: eyebrow sits
tight to its heading (`0.7rem`), the heading then breathes before the body.

**Split layout:** the recurring image+text unit is a flex column on mobile
(image above text) that becomes a 50/50 row at **820px**. A `--text-left`
modifier swaps the order so the image can sit on either side.

**Spacing scale** (`--space-2xs` 0.5rem → `--space-2xl` 6rem) plus `.stack`
utilities (`> * + * { margin-top: 1rem }`, `-lg` variant 1.5rem) for vertical
rhythm inside text blocks.

**Breakpoints:** 520 / 560 / 640 / 720 / 820 / 960px, used ad hoc per
component rather than as global tiers. Grids: ingredients 3-up at 720px,
use-cases 2-up at 640px then 3-up at 960px, "made without" 2-up then 4-up at
640px.

**Mobile carousels:** below their grid breakpoint, the ingredients and
use-case grids become native horizontal scroll-snap carousels (`overflow-x:
auto`, `scroll-snap-type: x mandatory`, hidden scrollbars, negative inline
margin to bleed to the viewport edge) with an animated "Swipe →" hint.

## Elevation & Depth

Flat by default. Depth is carried almost entirely by the alternating
blue / cloud / ink section bands, not by shadow. A single soft ambient shadow
lifts the elements that need to read as "on top of" the sky.

### Shadow Vocabulary
- **Soft ambient** (`box-shadow: 0 18px 40px -24px rgba(8, 57, 124, 0.35)`):
  The only shadow in the system. Used on cards (ingredient cards, cloud-bubble
  callouts), the signup success panel, use-case image tiles, and the hero
  badge pill. It is a tinted navy shadow, wide and very soft, offset downward —
  a shadow cast by sky light, not a hard drop shadow.
- **Diagram drop-shadow** (`filter: drop-shadow(0 16px 34px rgba(8,57,124,.22))`):
  A softer variant on the transparent HOCl diagram PNG only, so the artwork
  floats without a card behind it.
- **Hover lift** (`0 14px 30px -16px rgba(8,57,124,.55)`; on `--ink`,
  `0 14px 30px -14px rgba(0,0,0,.5)`): appears only on `:hover` of a button,
  as a *response to state*. Never present at rest.
- **Focus glow** (`0 0 0 4px` of `--ink-secondary` at 20%): the email input's
  `:focus-visible` ring, on top of the standard focus outline.

### Named Rules
**The Flat-Field Rule.** Surfaces are flat *at rest*. The soft ambient shadow
appears only on genuine "cards" floating above a section band — never on
buttons, inputs, section bands, or full-width elements. Shadow may appear as a
*response to state* (button hover, input focus) and nowhere else. No borders
used as fake elevation; dividers are 1px `color-mix` hairlines at ~12–16% ink.

### Motion
**Delight thesis: the page exhales as you scroll** — calm, warm, unhurried.
Blocks rise 14px and fade in once on scroll-in (`cubic-bezier(.16,1,.3,1)`,
~700ms, ≤4-step 60ms stagger). The signup confirmation settles in with a
checkmark that strokes itself. Button hover lifts `translateY(-2px)` + the
hover shadow over 150ms. FAQ answers ease open. **Everything is gated on
`prefers-reduced-motion`** — the reduced path keeps every state change,
instant. No parallax, no scroll-jacking, no looping decoration; the wave
motif still appears exactly once.

## Shapes

One rounded language throughout, at three radii:
- **Pill** (`border-radius: 100px`): buttons, email inputs, the hero badge,
  the offer badge, footer tag chips — anything small and interactive or
  label-like.
- **Card** (`border-radius: 22px`): cards, callouts, the success panel,
  use-case image tiles, the "our why" illustration.
- **Small** (`border-radius: 14px`): the compact "made without" grid cells.
- **Circle** (`border-radius: 50%`): ingredient chemistry marks (62px),
  check-mark bullet discs (20px), the "3 Simple Ingredients" badge device.

Borders are thin and quiet: buttons carry a 2px border in their own fill color
(or navy for ghost); inputs use a 2px `color-mix` navy border at ~22%. The
only non-rounded geometry is the **wave** — a single SVG `path` with a soft
curved crest — used exactly once, at the blue→cream transition into the HOCl
section, mirroring the bottle label.

## Components

### Buttons
- **Shape:** Pill (`border-radius: 100px`), 2px solid border in the fill color,
  Montserrat 700 uppercase `0.95rem` with `0.04em` tracking, padding
  `0.95rem 1.9rem`.
- **Primary:** Kids Yellow (`#F6CF69`) fill, Primary Ink (`#08397C`) text.
  Used for every reserve/join CTA, on both light and ink grounds (the
  `--on-ink` variant is visually identical — yellow reads on navy).
- **Hover / Focus:** background deepens to Kids Yellow Deep (`#EBBE45`), border
  matches, the button lifts `translateY(-2px)` and picks up the hover shadow
  (see Elevation) over 0.15s. Focus-visible shows a 3px Secondary Ink outline
  offset 3px.
- **Ghost:** transparent fill, navy text and border; inverts to navy fill /
  Cloud White text on hover. Defined but currently unused on the page.
- **Header button:** the sticky-header CTA is the primary button at reduced
  padding (`0.78rem 1.4rem`, `0.8rem` text; `0.8rem 1.15rem` / `0.74rem`
  under 520px — still ≥44px tall).
- **Hero CTA:** taller than the base button (`1.05rem 1.5rem`) so it reads as
  a peak without widening into the email field.

### Cards / Containers
- **Corner Style:** 22px (`--radius-card`).
- **Background:** Cloud White on Background-Blue sections; Background Blue on
  Cloud-White sections (cards always contrast their band).
- **Shadow Strategy:** the single soft ambient shadow (see Elevation).
- **Border:** none.
- **Internal Padding:** `clamp(1.3rem, 3vw, 2rem)` for callouts; ingredient
  cards use `1.15rem 1.15rem 1.3rem`.

### Inputs / Fields
- **Style:** pill (100px), Cloud White fill, 2px `color-mix` navy border at
  ~22%, padding `1.05rem 1.15rem`, `1rem` text. Placeholder is navy at ~55%.
- **Layout:** stacks above the button on mobile; becomes a nowrap row sharing
  one line with the submit button at 560px.
- **Focus:** border shifts to solid Secondary Ink, default outline suppressed,
  plus a soft `0 0 0 4px` Secondary-Ink-at-20% glow.
- **Error:** helper line in Ink Toddler (`#BD4A1E`, Montserrat 600, `0.8rem`),
  `aria-live="polite"`; `aria-invalid` toggled on the input. On ink grounds
  the error color lightens to On-Ink Error (`#FFC7A6`).

### Navigation
- **Header:** sticky, Cloud White at 92% opacity with an 8px backdrop blur and
  a 1px hairline bottom border. Left: `playdate` wordmark (132px, 108px under
  520px). Right: primary CTA button. Condenses its vertical padding on scroll
  past 40px via an `is-condensed` class.
- No in-page nav links or menu; the page is a single scroll.

### FAQ (signature component)
Native `<details>/<summary>`. Summary is Quicksand 700 `1.05rem` with a `+`
glyph on the right that rotates 45° to `×` when open. 1px hairline divider
between items, no card, no background fill. Answers are Secondary Ink
`0.98rem`.

### Ingredient mark (signature component)
A 62px circle, Montserrat 700 `0.92rem`, Cloud White text, holding the formula
shorthand (`H₂O`, `NaCl`, `HOCl`). Fills are **Mark Water** (`#1C6FA0`) /
**Mark Salt** (`#B4431C`) / **Secondary Ink** (`#114F8F`) by DOM order — the
first two are darkened from Baby Blue / Toddler Orange so the mark text meets
AA on the circle. On mobile the three cards become a scroll-snap carousel that
opens centered on HOCl.

### Proof strip (signature component)
Full-width Primary Ink band of Montserrat 700 uppercase `0.74rem` claim chips
separated by middot on desktop. Below 560px the chips wrap to a static
centered block (all four visible at once) with the separators dropped — no
marquee.

## Do's and Don'ts

### Do:
- **Do** alternate `--blue` / `--cloud` / `--ink` section bands so no two
  neighbors share a ground, and give each band `clamp(3rem, 8vw, 5.5rem)`
  vertical padding.
- **Do** keep every corner rounded — pill (100px) for interactive/label
  elements, 22px for cards, 50% for marks and bullets.
- **Do** use the soft ambient shadow (`0 18px 40px -24px rgba(8,57,124,.35)`)
  only on cards that float above a band.
- **Do** hold text to Primary/Secondary/Accent Ink (or Cloud White on ink),
  and put the category accents behind navy text or into small marks.
- **Do** keep the accent trio together and rare (the Let-the-Sky-Breathe
  Rule): ~70% blue/white ground, ~20% navy, ≤10% accent.
- **Do** set warm real photography of little hands in natural light against
  the cool palette; keep the product on hands/skin only.
- **Do** reserve italic Lora for pull-quotes and one-line warm asides.
- **Do** set a low-priority aside as a quiet footnote under a 1px hairline
  (the "not a replacement for handwashing" note), not a bordered callout.
- **Do** hold every animation behind `prefers-reduced-motion`, and make the
  reduced path keep the state change instantly.

### Don't:
- **Don't** use a raw category accent (`#24A8DA` / `#F6CF69` / `#DF6334`) as a
  text color on a light ground — it fails contrast and breaks the
  Navy-Carries-the-Words Rule. Use `--ink-toddler` for accent-warm text, or
  keep the accent as a fill.
- **Don't** paint a large surface (a full section, a wide panel) in an accent
  color; accents are pops, not fields.
- **Don't** add a colored `border-left`/`-right` above 1px to a card, list
  item, callout, or note — the side-tab is the classic AI-UI tell.
- **Don't** add a resting shadow tier beyond the soft ambient, or a shadow on
  a button/input at rest — state-response shadow only.
- **Don't** auto-scroll, marquee, parallax, or loop decoration; motion is for
  entrance and state, once.
- **Don't** introduce sharp corners, hard drop shadows, warning reds/greens,
  shields, or germ iconography — the clinical-sanitizer look is the
  anti-reference.
- **Don't** set sentences or lists in all-caps; uppercase is for short
  Montserrat labels only.
- **Don't** add a fourth type treatment or use Lora upright / Montserrat in
  sentence case.
- **Don't** let the wave motif repeat; it appears exactly once, at the
  blue→cream HOCl transition.
