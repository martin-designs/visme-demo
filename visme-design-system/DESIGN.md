---
site: "Visme — Design System"
sources:
  - "https://www.visme.co/"
  - "https://www.visme.co/report-maker/"
  - "https://dashboard.visme.co/login"
  - "https://dashboard.visme.co/v2"
  - "https://dashboard.visme.co/v2/workspaces/settings"
  - "https://dashboard.visme.co/v2/templates/"
  - "https://my.visme.co/editor/"
synthesized_at: "2026-05-17"
generator: "design-scout"
material: flat
contexts:
  - marketing   # www.visme.co — landing pages, feature pages
  - app         # dashboard.visme.co + my.visme.co — product UI
tokens:
  colors:
    brand-primary: "#3CACD7"
    brand-blue: "#2693FF"
    brand-navy: "#293745"
    brand-amber: "#FCBC41"
    brand-red: "#F45F50"
    brand-green: "#6CC395"
    brand-purple: "#9062F0"
  typography:
    marketing-sans: Lato
    marketing-heading: Montserrat
    app-sans: Lato
    app-secondary: Open Sans
    marketing-base: 16px
    app-base: 14px
  spacing:
    base-marketing: 2px
    base-app: 5px
  radii:
    sm: 4px
    md: 8px
    lg: 16px
    xl: 20px
    full: 50px
---

# Overview

Visme is a **flat-material** SaaS design tool. The product spans two distinct visual contexts that share a common brand language:

- **Marketing context** (`www.visme.co`): Vuetify-based, 16px body, Lato + Montserrat, white backgrounds, large editorial heading scale. Voice: neutral-to-friendly, Sentence case headings, "you" addressed directly.
- **App context** (`dashboard.visme.co`, `my.visme.co`): React SPA, 14px body, Lato + Open Sans, `#ECF2F5` blue-gray background, compact UI heading scale. Voice: task-oriented, third-person interface labels.

Primary CTA patterns: "Sign up free", "Try it free", "Create", "Get started". The product emphasises speed and ease for non-designers.

---

# Colors

## Brand palette

| token | hex | name | usage |
|---|---|---|---|
| `--color-brand-primary` | `#3CACD7` | Sky | Primary brand blue — links, icons, hover states (marketing) |
| `--color-brand-blue` | `#2693FF` | Blue | App action primary — buttons, active states (app) |
| `--color-brand-navy` | `#293745` | Navy | Body text, dark backgrounds |
| `--color-brand-amber` | `#FCBC41` | Amber | Accent, warning, highlight |
| `--color-brand-yellow` | `#FFCC00` | Yellow | Secondary accent (marketing) |
| `--color-brand-red` | `#F45F50` | Red | Danger, destructive actions |
| `--color-brand-green` | `#6CC395` | Green | Success, positive states |
| `--color-brand-purple` | `#9062F0` | Purple | Premium / Pro tier indicator |
| `--color-brand-coral` | `#fa607e` | Coral | App secondary highlight |

## Dark text scale (navy → mid)

| token | hex | use |
|---|---|---|
| `--color-dark-1` | `#293745` | Body text, headings |
| `--color-dark-2` | `#2B3140` | Secondary headings |
| `--color-dark-3` | `#3F4759` | Subheadings, labels |
| `--color-dark-4` | `#586276` | Captions, muted text |
| `--color-dark-5` | `#798297` | Placeholder text |
| `--color-dark-6` | `#949DB0` | Disabled text |

## Base/light scale

| token | hex | use |
|---|---|---|
| `--color-base-1` | `#7F859D` | Borders, dividers (dark) |
| `--color-base-2` | `#A0A5B8` | Borders (medium) |
| `--color-base-3` | `#BBD0E5` | Borders (light) |
| `--color-base-4` | `#DAE4EA` | Subtle borders, secondary bg |
| `--color-base-5` | `#E7EFF3` | Background tints |
| `--color-base-6` | `#EFF6FC` | Lightest tint, hover bg |

## Mid/gray scale

| token | hex | use |
|---|---|---|
| `--color-mid-1` | `#97989A` | Icon fill (inactive) |
| `--color-mid-2` | `#ABABAB` | Input borders |
| `--color-mid-3` | `#DADADA` | Dividers |
| `--color-mid-4` | `#E4E4E4` | Subtle dividers |
| `--color-mid-5` | `#F3F3F3` | Table stripe, card bg |
| `--color-mid-6` | `#FDFDFD` | Near-white bg |

## Surface tokens

| token | hex | context |
|---|---|---|
| `--color-surface-marketing` | `#FFFFFF` | Marketing page backgrounds |
| `--color-surface-app` | `#ECF2F5` | App shell background |
| `--color-surface-card` | `#FFFFFF` | Cards, panels, elevated surfaces |
| `--color-surface-sidebar` | `#F8FAFB` | Sidebar, secondary panels |

## Status tokens

| token | hex |
|---|---|
| `--color-status-success` | `#6CC395` |
| `--color-status-warning` | `#FCBC41` |
| `--color-status-error` | `#F45F50` |
| `--color-status-info` | `#3CACD7` |

---

# Typography

## Font families

| token | value | context |
|---|---|---|
| `--font-sans` | `'Lato', sans-serif` | Universal body font |
| `--font-heading` | `'Montserrat', sans-serif` | Marketing display headings |
| `--font-secondary` | `'Open Sans', sans-serif` | App secondary text, labels |

## Marketing type scale (16px base)

| level | size | weight | line-height | font |
|---|---|---|---|---|
| display | `48px` | `700` | `55.5px` | Montserrat |
| h1 | `44px` | `700` | `57.2px` | Montserrat |
| h2 | `40px` | `700` | `50.9px` | Montserrat |
| h3 | `36px` | `700` | `47.9px` | Lato |
| h4 | `24px` | `600` | `31.2px` | Lato |
| body-lg | `18px` | `400` | `30.6px` | Lato |
| body | `16px` | `400` | `24px` | Lato |
| small | `14px` | `400` | `20px` | Lato |
| caption | `13px` | `400` | `19.5px` | Lato |

## App type scale (14px base)

| level | size | weight | line-height | font |
|---|---|---|---|---|
| h1 | `30px` | `500` | `39px` | Lato |
| h2 | `28px` | `500` | `30px` | Lato |
| h3 | `21px` | `500` | `24px` | Lato |
| body | `14px` | `400` | `18.2px` | Lato |
| label | `13px` | `400` | `16.9px` | Lato |
| caption | `11px` | `400` | `24px` | Open Sans |

---

# Layout

## Spacing scale

A combined scale covering both marketing (generous) and app (compact) contexts:

| token | value | context |
|---|---|---|
| `--spacing-1` | `1px` | Hairlines, borders |
| `--spacing-4` | `4px` | Micro gaps, icon padding |
| `--spacing-8` | `8px` | Inline gaps, tight padding |
| `--spacing-10` | `10px` | App compact padding |
| `--spacing-15` | `15px` | App standard gap |
| `--spacing-20` | `20px` | Component padding |
| `--spacing-24` | `24px` | Card padding, section gap |
| `--spacing-30` | `30px` | App section spacing |
| `--spacing-35` | `35px` | Marketing row gap |
| `--spacing-40` | `40px` | Section padding |
| `--spacing-48` | `48px` | Large section padding |
| `--spacing-50` | `50px` | Hero padding, large gaps |
| `--spacing-60` | `60px` | Marketing section separation |
| `--spacing-100` | `100px` | Marketing hero spacing |

## Breakpoints (marketing)

| name | value |
|---|---|
| `sm` | `680px` |
| `md` | `768px` |
| `lg` | `1024px` |
| `xl` | `1280px` |
| `2xl` | `1600px` |
| `container-max` | `1280px` |

## Layout primitives

- Marketing: flex-dominant (304 flex containers), no CSS grid
- App: flex-dominant (55–81 flex containers), sidebar + main layout via `--navbar-width: 250px`
- Container: centered, `max-width: 1280px`, `padding: 20px`

---

# Elevation and Depth

## Shadow scale

| token | value | use |
|---|---|---|
| `--shadow-border` | `rgb(218, 228, 234) 0px -1px 0px 0px` | Subtle bottom border (app) |
| `--shadow-sm` | `rgba(33, 51, 67, 0.12) 0px 1px 5px 0px` | Cards, inputs |
| `--shadow-offset` | `rgba(49, 65, 82, 0.3) 2px 2px 6px 0px` | Dropdowns, tooltips (app) |
| `--shadow-md` | `rgba(184, 184, 184, 0.3) 0px 0px 12px 3px` | Modals, popovers (marketing) |
| `--shadow-float` | `rgba(0, 0, 0, 0.25) 0px 0px 10px 0px` | Floating panels (app) |
| `--shadow-lg` | `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` | Large cards, overlays |
| `--shadow-xl` | `rgba(0, 0, 0, 0.28) 0px 8px 28px 0px` | Full-screen modals |

## Z-index layers

Marketing uses up to 10 z-index layers. App is minimal (2 layers). Standard values: `--toastify-z-index: 9999`.

---

# Shapes

## Border radius scale

| token | value | use |
|---|---|---|
| `--radius-none` | `0px` | Square elements |
| `--radius-xs` | `2px` | Subtle rounding (legacy) |
| `--radius-sm` | `4px` | Inputs, small controls, badges |
| `--radius-md` | `8px` | Cards, buttons (marketing) |
| `--radius-md-app` | `7px` / `10px` | App controls |
| `--radius-lg` | `16px` | Large cards, marketing panels |
| `--radius-xl` | `20px` — `24px` | Feature cards, modal corners |
| `--radius-full` | `50px` | Pills, avatars, full-round buttons |

Use `--radius-sm: 4px` for all interactive controls (buttons, inputs, selects). Use `--radius-md: 8px` for cards. Use `--radius-full` for pills/tags.

---

# Components

## Detected component patterns (across all pages)

`buttons` · `cards` · `inputs` · `links` · `navigation` · `footer` · `modals` · `dropdowns` · `badges` · `avatars` · `tabs` · `accordions` · `progressBars` · `switches`

## Button anatomy

| context | variant | size | notes |
|---|---|---|---|
| Marketing | primary | xl, lg, xs | `#3d92e7` fill, white text, `radius-md` |
| Marketing | secondary | xl | outlined or ghost |
| Marketing | link | — | text-only, `#3CACD7` |
| App | primary | large | `#2693FF` fill, white text, `radius-sm` |
| App | link | — | text-only, `#2693FF` |
| App | danger | — | `#F45F50` fill |

## Input anatomy

- Border: `1px solid #dee2e6` (marketing) / `1px solid #DCDFE6` (app)
- Focus ring: `#3CACD7` / `#2693FF`
- Radius: `4px` (sm)
- Height: `40–45px`
- Font: Lato 14px

## Navigation

- Marketing: sticky top nav, `--v-top-offset: 72px`, mega-menu with 9–10 items
- App: fixed sidebar `250px` wide (`--navbar-width: 250px`), top bar

## Card anatomy

- Background: `#FFFFFF`
- Border: none or `1px solid #DAE4EA`
- Radius: `8px` (md) — `16px` (lg)
- Shadow: `--shadow-sm`
- Padding: `20px` — `24px`

---

# Do's and Don'ts

## Do's

- Use `#3CACD7` as the primary brand color on marketing surfaces; use `#2693FF` for app action buttons.
- Use `Lato` as the universal body font. Use `Montserrat` only for marketing display headings.
- Set body text to `#293745` (--visme-dark-1) — never raw `#000000`.
- Use the 4px base radius (`--radius-sm`) for all interactive controls: buttons, inputs, selects, checkboxes.
- Use `#ECF2F5` as the app shell background — every authenticated page uses it.
- Keep border colors within the base scale: `#DAE4EA` (subtle), `#dee2e6` (standard).
- Use the status color set consistently: `#6CC395` success · `#FCBC41` warning · `#F45F50` danger · `#3CACD7` info.
- Write marketing CTAs in Sentence case with action verbs: "Sign up free", "Try it free", "Create", "Get started".
- Prefer `rgba` shadows with low opacity — avoid hard colored drop shadows.

## Don'ts

- Don't invent new hex values. Every color needed exists in the palette above.
- Don't use `#000000` for body text — use `#293745` (visme-dark-1).
- Don't mix marketing and app font scales — the 16px/Montserrat scale is marketing-only.
- Don't use `!important` — the codebase already has hundreds of them; don't add more.
- Don't use raw pixel spacing outside the scale — stick to the spacing tokens.
- Don't use Toastify colors (`--toastify-*`) for design — they are a third-party component system.
- Don't create new shadow values — the 7-shadow scale above covers every elevation need.
- Don't use `#FFCC00` (yellow) as a primary action color — it's accent/decorative only.

---

_Synthesized by design-scout from 7 pages across www.visme.co, dashboard.visme.co, and my.visme.co on 2026-05-17._
_Source extractions generated by designlang v12.13.0._
