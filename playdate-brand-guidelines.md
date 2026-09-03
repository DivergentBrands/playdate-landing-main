# Playdate™ — Brand Guidelines (One-Pager)

> gentle care for little hands.
> A water-based hypochlorous acid spray for baby, kids & toddlers, by **Divergent Brands LLC**.

**Brand asset:** `./brand-assets/playdate-label-design.png` (8 oz label — source of truth for color & type)

---

## 1. Brand Essence

**Positioning:** The warm alternative in a category built on fear. Every other bottle shouts about germs; Playdate is a gentle cosmetic cleanser you feel *good* reaching for a dozen times a day.

- **One line:** gentle care for little hands.
- **Promise:** Three simple ingredients. Nothing to sting, nothing to decode.
- **Feeling:** Calm, tender, honest, quietly premium — soft blue skies and clouds, never clinical, never alarmist.
- **Audience anchor:** the research-every-label parent ("Jessica") who reads the back of the bottle in the aisle.

**Voice — warm over fear**

| Do | Don't |
|---|---|
| "Sticky hands happen. Meet their gentlest clean." | "Kills 99.9% of germs on contact." |
| "Gentle enough for the softest skin." | "Protect your baby from dangerous bacteria." |
| "Three ingredients. That's the whole list." | "Hospital-grade disinfecting power." |
| Plain, tender, specific | Fear-driven, clinical, hype |

---

## 2. Color Palette

Derived directly from the label. Bright, soft, gender-neutral — sky-blue and cloud-white with three playful category accents.

### Core

| Token | Hex | Role |
|---|---|---|
| **Background Blue** | `#B9DDF2` | Primary background / sky field |
| **Cloud White** | `#F9F7F2` | Clouds, wave shapes, cards, label field |
| **Primary Ink** | `#08397C` | "playdate" wordmark, headlines, body |
| **Secondary Ink** | `#114F8F` | Product descriptor (HYPOCHLOROUS ACID SPRAY), subheads |
| **Accent Ink** | `#064D8D` | Ingredient text, captions, fine print |

### Category Accents — the "baby · kids · toddlers" line

| Token | Hex | Role |
|---|---|---|
| **Baby Blue** | `#24A8DA` | "baby" — category word / dot |
| **Kids Yellow** | `#F6CF69` | "kids" — category word / dot; "3 Simple Ingredients" badge fill |
| **Toddler Orange** | `#DF6334` | "toddlers" — category word / dot |

**Ratio rule:** ~70% background blue + cloud white ground, ~20% navy ink, ~10% category-accent pops. Let the sky breathe — whitespace and soft clouds are part of the brand. Use the three accents together as a set (the category line), sparingly, and never as large color fields.

---

## 3. Typography

Three families, pulled straight from the packaging.

| Role | Typeface | Weight | On-pack spec |
|---|---|---|---|
| **Wordmark / display** | **Quicksand** | Bold | 36 pt · tracking −2 |
| **Product descriptor** (ALL CAPS) | **Montserrat** | Bold | 16 pt · tracking 100 · line-height 0.85 |
| **Category highlight** ("baby · kids · toddlers") | **Quicksand** | Bold | 11 pt · tracking 10 |
| **Supporting message** ("gentle care for little hands") | **Lora** | Regular | 11 pt · line-height 1.2 |
| **Badge / feature** ("3 SIMPLE INGREDIENTS") | **Montserrat** | Bold | "3" 17 pt · text 9 pt · tracking 60 |
| **Product type** ("HAND + SKIN CLEANSER") | **Montserrat** | Bold | 11 pt · tracking 75 |
| **Size / volume** ("8 FL OZ (236 ML)") | **Montserrat** | Medium | 8 pt · tracking 25 |

**Signature treatments**
- **Wordmark:** Quicksand Bold, lowercase, single navy color. The rounded, friendly letterforms are the brand's signal.
- **Eyebrows / badges / product type:** Montserrat Bold, ALL CAPS, wide tracking.
- **Supporting lines & warm flourishes:** Lora Regular (serif) for the soft, human notes — the counterpoint to Montserrat's utility.

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500;600;700&family=Montserrat:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

---

## 4. Logo / Wordmark

- **Single-tone lockup:** `playdate` in **Primary Ink `#08397C`**, set in **Quicksand Bold**, all lowercase, no space between letters.
- **Do:** navy, lowercase, Quicksand — clean and friendly.
- **Don't:** recolor (e.g. purple), set in ALL CAPS, condense, add a second color, add drop shadows, or place on busy photography without a soft cloud/scrim.
- **Clear space:** keep at least the x-height of the "p" clear on all sides.
- **Minimum size:** ~90 px wide on screen / 18 mm in print for legibility.
- **Icon / favicon:** a single soft cloud as the primary small mark; lowercase **"p"** in Quicksand as the fallback.
- **Trademark:** ™ / ® set per current registration status.

---

## 5. Iconography & Components

The system rests on two soft shapes: **clouds** and a **wave**.

- **Clouds:** soft, friendly, rounded — they represent gentleness, purity, and care. Cloud White on Background Blue (or reversed). This is the hero motif.
- **Wave:** the rounded bottom shape — a soft, playful, approachable ground for type and badges.
- **Line icons:** thin-stroke (~1.5 px), single-color navy, inside a soft rounded / cloud frame. Never harsh, never filled-heavy.
- **Category line:** "baby · kids · toddlers" set in the three accent colors, separated by dots.
- **Badge:** filled circle (Kids Yellow `#F6CF69`) with navy text — the "3 Simple Ingredients" device.
- **Cards / callouts:** large corner radius (`20–24px`), Cloud White fill on Background Blue, soft or no shadow.
- **Buttons:** pill-shaped (`border-radius: 100px`); Primary Ink fill / Cloud White text; ghost = navy outline on blue.

---

## 6. Web / Landing-Page Layout

**Direction:** an airy, sky-and-clouds take on Nara Organics' structure — a warm lifestyle hero, **soft rounded "cloud bubble" callouts** stacked as a guided story, benefit-forward copy over **alternating blue / cloud-white grounds**, generous whitespace, everything rounded and friendly. Dressed in Playdate's navy + accent palette with Quicksand, Montserrat, and Lora.

**Section flow (top → bottom):**
1. **Hero** — lifestyle photo (real little hands, natural light) + navy wordmark + Secondary-Ink `HYPOCHLOROUS ACID SPRAY` pill + Quicksand headline + Lora supporting line + one CTA, over a soft cloud/sky ground.
2. **Trust bar** — approved-claim chips on a Primary Ink strip.
3. **"Get to know Playdate"** — stacked **rounded cloud-bubble callouts** walking through the story (gentle → transparent → multi-use).
4. **Three-ingredient transparency block** — Cloud White card, big `0%` alcohol callout.
5. **Benefit cards** — 2×2 rounded cards on a Background Blue ground (no bleach smell / won't leak / kind to skin / nothing to decode).
6. **Multi-use icon row** — thin-line cloud-framed icons (hands · little faces · on-the-go). *Always shown on hands/skin, never on surfaces.*
7. **Founder note** — centered, Lora, warm-over-fear mission.
8. **Founding 100 CTA** — Primary Ink ground, email capture.
9. **FAQ** — Quicksand summaries, "Is this a sanitizer? No." up top.
10. **Footer** — wordmark + **tag chips** (`#GENTLE  #ALCOHOL-FREE  #SENSITIVE-SKIN  #HOCL`) + compliance disclaimer.

**Imagery:** real babies/kids and little hands in natural, softly-lit settings — warm skin tones set against the cool sky/cloud palette (not studio-white, not clinical). Soft focus and airy light. Avoid germ/danger imagery entirely, and keep the product on hands/skin, never on surfaces.

---

## 7. Design Tokens (paste into your CSS)

```css
:root {
  /* Core */
  --bg-blue:        #B9DDF2;  /* background / sky */
  --cloud-white:    #F9F7F2;  /* clouds, waves, cards, label field */
  --ink:            #08397C;  /* wordmark, headlines, body */
  --ink-secondary:  #114F8F;  /* descriptors, subheads */
  --ink-accent:     #064D8D;  /* ingredients, fine print */

  /* Category accents */
  --baby:      #24A8DA;
  --kids:      #F6CF69;
  --toddlers:  #DF6334;

  /* Type */
  --font-display:    'Quicksand', system-ui, sans-serif;
  --font-utility:    'Montserrat', system-ui, sans-serif;
  --font-supporting: 'Lora', Georgia, serif;

  /* Shape */
  --radius-card: 22px;
  --radius-pill: 100px;
}
```

---

## 8. Compliance Guardrails (non-negotiable)

Playdate has **no EPA registration** and is positioned as a **cosmetic cleanser** — copy and design must stay inside this lane on the label, site, and ads.

**✅ Approved claim set**
Alcohol-Free · Hypoallergenic · Dermatologically Tested · Suitable for Sensitive Skin · Non-Toxic · HOCl Formula · Water-Based · gently cleanses / wipes away dirt.

**⛔ Never use**
- "sanitizer," "sanitize," "disinfect," "disinfectant," "antimicrobial," "antibacterial"
- "kills 99.9%," "kills germs/bacteria/viruses," "kills norovirus," "protects from illness"
- treat/heal claims (eczema, diaper rash, pink eye, acne, cuts) — these are drug claims
- "Pediatrician Approved," "Infant & Toddler Approved," "0+ months," "newborn safe"

**Standing disclaimer (footer/label):** *Playdate™ is a cosmetic hand & skin cleanser — not a hand sanitizer, disinfectant, or drug — and is not intended to diagnose, treat, cure, or prevent any disease. Always wash with soap and water; Playdate is a gentle extra for when soap and water aren't available. Keep out of reach of children; for use by an adult.*

---

*© 2026 Divergent Brands LLC · Playdate™. Keep this file in the repo root or `/brand-assets`.*
