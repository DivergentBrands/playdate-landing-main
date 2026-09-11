# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary — the prepared-but-not-paranoid caregiver.** A parent or primary
caregiver of a baby, toddler, or preschooler who spends the day in shared
spaces: stores, restaurants, parks, museums, airports, libraries, daycare.
The research defines her by *moment*, not demographics — age, income,
occupation, and location are not reliably knowable and must not be invented.
Her defining moment: a high-touch activity ends, the next snack or
hand-to-mouth contact is seconds away, and there is no sink. She dislikes
having to choose between a plain wipe that feels incomplete and an adult
alcohol sanitizer that feels excessive. She will pay a baby-care premium when
formula, testing, packaging, and proof reduce her uncertainty. She reads the
back of the bottle in the aisle (brand nickname: "Jessica"). She wants to be
thoughtful, calm, informed, and ready — never careless, gullible, alarmist, or
"the parent sanitizing every harmless touch."

**Secondary — the sensitive-skin problem solver.** Came for irritation-free,
short-ingredient-list options after reactions to other products.

**Secondary — the HOCl-aware buyer.** Already uses hypochlorous acid for
skincare, wounds, postpartum, or home care. Needs less education, compares
ppm / pH / stability / packaging / price, and resists a premium without
baby-specific proof.

The largest acquisition audience is reached through the parenting *outcome*,
not the ingredient. Fear-based messaging repels the target and weakens trust.

## Product Purpose

Playdate™ is a gentle, alcohol-free hand + skin cleansing mist for little
hands — water, salt, and stabilized hypochlorous acid (0.02% / 200 ppm), and
nothing else. It exists for the everyday transition moment when soap and water
aren't nearby and a parent wants a fast, low-friction way to feel little hands
have been appropriately cleaned before the next thing happens.

This repository is the **pre-launch "Founding 100" landing page** — a
single-scroll email-capture site inviting the first 100 families to reserve an
8 fl oz bottle. Success = qualified email reservations for the founding offer.
No payment is collected at this stage.

## Positioning

**The warm alternative in a category built on fear — "cleanliness without
panic."** Every other bottle shouts about germs; Playdate is a gentle cosmetic
cleanser a parent feels good reaching for a dozen times a day.

What a neighboring product cannot truthfully copy is the **finished product as
the differentiating asset**: formula control, pH, stability, dose, package
performance, a real safety file and verified directions, plus a genuinely
baby-specific design — combined with radical three-ingredient transparency
("nothing to sting, nothing to decode"). The ingredient name alone is not the
claim; HOCl is the mechanism and proof layer beneath a parenting outcome.

Direct competitor for reference: Littley (8 oz, 0.015% HOCl infant/toddler
hand cleanser, ~$20.99 DTC).

## Operating Context

- **Where it's used:** one-handed, on the move, while managing a squirming
  child and carrying other things — from a diaper bag, car cupholder, or
  stroller pocket. Not a calm bathroom decision.
- **Trigger moments (approved framing):** before snacks, after the playground,
  following a grocery run, at restaurants, during travel, after daycare,
  whenever a sink isn't close by.
- **The competitive event** is the fast transition, not the product
  comparison. Current alternatives: baby wipes (most common), soap and water,
  alcohol sanitizer, benzalkonium foam/wipes, wet washcloth, soap sheets, a
  two-step routine, or doing nothing.
- **Evaluation context:** the buyer reads ingredient lists and judges "natural"
  language skeptically when proof is vague; a minimal formula plus a premium
  price can trigger "simple vs. scam" skepticism that proof must answer.

## Capabilities and Constraints

**What the page does**
- Single-scroll narrative following the confirmed emotional progression:
  "that's me" → "that's my toddler" → "I understand the product" → "I trust the
  ingredients" → "$9.99 is worth trying."
- Email capture in three places (hero, founding offer, final CTA), each with
  client-side validation and an in-place success state. Fields carry
  `form_type=customer`, `contact[email]`, and
  `contact[tags]="newsletter,founding-100"`.
- FAQ, compliance disclaimer, no account or checkout.

**Founding 100 offer — confirmed final**
- $9.99 founding price; $20.99 regular price.
- Email only, no payment collected now.
- Limited to the first 100 eligible subscribers; one founding offer per
  customer; shipping terms shown before purchase.

**Delivery target — confirmed**
- Currently plain static HTML + CSS + vanilla JS, no build step, deployed on
  Vercel.
- Will be ported into the store's Shopify theme: **Horizon** (theme
  blocks / section groups). Each `<section>` is written to map 1:1 to a
  `sections/*.liquid`; signup fields wrap in `{% form 'customer' %}` and the
  JS success-swap is replaced by `form.posted_successfully?`. Keep markup and
  CSS portable to that structure. **The port is a later phase** — current work
  refines the static page first.

**Compliance guardrails — non-negotiable.** Playdate has no EPA registration
and is positioned as a cosmetic cleanser; copy and design must stay in that
lane on label, site, and ads.
- **Never use:** "sanitizer / sanitize / disinfect / disinfectant /
  antimicrobial / antibacterial"; "kills 99.9% / kills germs / bacteria /
  viruses / norovirus"; "protects from illness"; any treat/heal claim (eczema,
  diaper rash, pink eye, acne, cuts); "pediatrician approved / infant & toddler
  approved / 0+ months / newborn safe"; "safe if swallowed / safe in eyes";
  "mimics natural defenses"; any claim to clean or sanitize carts, toys,
  tables, bottles, or pacifiers. Keep the product shown on hands/skin only,
  never on surfaces. Avoid germ/danger imagery entirely.
- **Approved claim set:** Alcohol-Free · Fragrance-Free · Dye-Free · Three
  Ingredients · Hypoallergenic · Dermatologist Tested · Suitable for Sensitive
  Skin · Non-Toxic · HOCl Formula · Water-Based · pH-balanced · "gently
  cleanses / wipes away dirt." (The intelligence report flags
  "dermatologist tested / hypoallergenic / pH-balanced" as usable only with
  complete finished-product substantiation and claims-counsel review — treat as
  approved per brand guidelines, but confirm substantiation before scaling
  spend.)
- **Standing disclaimer (footer/label), verbatim:** *Playdate™ is a cosmetic
  hand & skin cleanser — not a hand sanitizer, disinfectant, or drug — and is
  not intended to diagnose, treat, cure, or prevent any disease. Always wash
  with soap and water; Playdate is a gentle extra for when soap and water
  aren't available. Keep out of reach of children; for use by an adult.*
- The site never names the parent company. Public brand is **Playdate™** only.

**Product facts still to verify (per intelligence report), do not assert as
settled:** the specific age/stage claim, repeated-use and mouthing exposure
safety, formula stability, and package (leak) performance on the final 200 ppm
product; final retail price above the founding tier.

## Brand Commitments

- **Name & mark:** Playdate™. Wordmark is `playdate`, lowercase, single navy
  color (`#08397C`), Quicksand Bold, no drop shadow, not recolored, not all
  caps. Favicon is a single soft cloud; "p" in Quicksand as fallback.
- **Tagline:** "gentle care for little hands."
- **Voice — warm over fear:** plain, tender, specific. "Sticky hands happen.
  Meet their gentlest clean." — never "Kills 99.9% of germs on contact."
  Brand personality: prepared, calm, modern, evidence-aware.
- **Palette (from the 8 oz label, source of truth):** Background Blue
  `#B9DDF2`, Cloud White `#F9F7F2`, Primary Ink `#08397C`, Secondary Ink
  `#114F8F`, Accent Ink `#064D8D`; category accents Baby Blue `#24A8DA`, Kids
  Yellow `#F6CF69`, Toddler Orange `#DF6334`. Ratio ~70% blue/white ground,
  ~20% navy, ~10% accent pops; accents used together as the "baby · kids ·
  toddlers" set, sparingly, never as large fields.
- **Type:** Quicksand (display/wordmark), Montserrat (utility / all-caps
  eyebrows, badges), Lora (warm serif supporting lines).
- **Motifs:** soft clouds (hero motif) and a rounded wave ground; thin-stroke
  (~1.5px) single-color navy line icons in rounded/cloud frames; large card
  radius (20–24px); pill buttons (`border-radius: 100px`).
- **Imagery:** real babies/kids and little hands in natural, softly-lit
  settings; warm skin tones against the cool sky/cloud palette; never
  studio-white or clinical.
- **Binding reference:** `playdate-brand-guidelines.md` and the label design
  in `Brand Assets/` are the visual source of truth.

## Evidence on Hand

- `Landing Page Outline_Copywriting - Playdate.md` — approved, near-verbatim
  page copy (headlines, FAQ, form and success microcopy).
- `Playdate_Baby_Hand_Skin_Cleanser_Customer_Intelligence_Report.docx.md` —
  voice-of-customer phrases, ranked pain points, avatar, objections, five
  advertising angles, five weak angles, and a GREEN/YELLOW/RED claims matrix.
- `playdate-brand-guidelines.md` — one-page brand system and compliance
  guardrails.
- `Brand Assets/` — 8 oz label design, bottle render, `playdate-logo.svg`,
  brand-guidelines image.
- `assets/images/` — lifestyle photography, the HOCl diagram, bottle render.
- `scripts/screenshot.mjs` — Puppeteer visual-QA tooling (real viewport
  widths, `deviceScaleFactor: 2`).

**Absences future work must not fabricate:** no real customer testimonials,
reviews, ratings, or unit-sales numbers exist yet (pre-launch). No press. No
clinical results specific to the finished Playdate product. The VoC quotes in
the intelligence report are from third-party forums/marketplaces about the
category, not about Playdate — never present them as Playdate reviews.

## Product Principles

1. **Lead with the parenting outcome; keep HOCl as the proof layer.** The
   moment ("little hands don't wait for a sink") sells; the chemistry
   reassures.
2. **Transparency is the product.** Three ingredients, plainly named, with
   nothing to decode — every design and copy choice should make the formula
   easier to understand, not more impressive-sounding.
3. **Warm, never alarmist.** No germ or danger framing, no fear imagery, no
   "clean mom" gimmick tone. Calm confidence.
4. **Stay inside the cosmetic-cleanser lane, always.** Compliance guardrails
   outrank persuasion; when a claim is tempting, it is probably RED.
5. **Prove the premium.** A minimal formula at a premium price invites
   "simple vs. scam" doubt — answer it with specificity, testing language,
   packaging quality, and baby-specific design, not ingredient mystique.

## Accessibility & Inclusion

No formal standard was set as a product requirement, but the use context
implies one: the page is often opened one-handed, on a phone, in motion, by a
distracted caregiver. Favor large touch targets, high text contrast, and
legible minimum type sizes; do not rely on hover or fine-pointer gestures.
Creative may feature mothers as the expected primary buyer but should not
assume only mothers experience the problem.
