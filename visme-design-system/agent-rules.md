# Visme Design System — Agent Rules

> Any agent building UI for this project must use the tokens defined here.
> Do not invent hex values, spacing, or font sizes outside this system.

Synthesized from: `www.visme.co`, `dashboard.visme.co`, `my.visme.co`
Date: 2026-05-17

---

## 1. Color rules

### Use these colors — nothing else

**Brand actions**
- Marketing buttons / links: `#3d92e7` (`--color-brand-sky-dark`)
- Marketing hover state: `#3CACD7` (`--color-brand-sky`)
- App buttons (primary): `#2693FF` (`--color-brand-blue`)
- Danger / destructive: `#F45F50`
- Success: `#6CC395`
- Warning / accent: `#FCBC41`

**Text**
- Body text: `#293745` — NEVER use `#000000` for body copy
- Secondary text: `#3F4759`
- Muted / placeholder: `#798297`
- Disabled: `#949DB0`
- Inverse (on dark): `#FFFFFF`
- Links (marketing): `#3CACD7`
- Links (app): `#2693FF`

**Backgrounds**
- Marketing pages: `#FFFFFF`
- App shell / every authenticated page: `#ECF2F5`
- Cards and panels: `#FFFFFF`
- Sidebar: `#F8FAFB`

**Borders**
- Standard: `#dee2e6`
- Subtle: `#DAE4EA`
- App inputs: `#DCDFE6`
- Focus ring: `#3CACD7`

### Do not use
- Raw `#000000` for text
- `--toastify-*` variables — third-party only
- Any hex value not listed in `tokens.json` or `variables.css`

---

## 2. Typography rules

### Fonts
- **Body everywhere**: `Lato, sans-serif`
- **Marketing headings only**: `Montserrat, sans-serif`
- **App secondary / captions**: `Open Sans, sans-serif`

### Scales
**Marketing context** (pages at `www.visme.co`):
- Base: `16px` / Lato
- Display: `48px` / Montserrat / 700
- H1: `44px` / Montserrat / 700
- H2: `40px` / Montserrat / 700
- H3: `36px` / Lato / 700
- Body: `16px` / Lato / 400

**App context** (pages at `dashboard.visme.co`, `my.visme.co`):
- Base: `14px` / Lato
- H1: `30px` / Lato / 500
- H2: `28px` / Lato / 500
- H3: `21px` / Lato / 500
- Body: `14px` / Lato / 400
- Label: `13px` / Lato / 400
- Caption: `11px` / Open Sans / 400

### Do not
- Use `Montserrat` in the app context
- Set body text below `13px`
- Use `Times New Roman` — it's a browser fallback artifact

---

## 3. Spacing rules

Use only these values. Do not use arbitrary pixel values.

`1px` · `4px` · `8px` · `10px` · `15px` · `20px` · `24px` · `30px` · `35px` · `40px` · `48px` · `50px` · `60px` · `100px`

Semantic aliases: `xs=4px` · `sm=8px` · `md=20px` · `lg=24px` · `xl=40px` · `2xl=50px`

---

## 4. Border radius rules

| Use case | Value | Token |
|---|---|---|
| Inputs, selects, checkboxes | `4px` | `--radius-sm` |
| App buttons | `4px` | `--radius-sm` |
| Marketing buttons | `8px` | `--radius-md` |
| Cards | `8px` | `--radius-md` |
| Large cards (marketing) | `16px` | `--radius-lg` |
| Modals / drawers | `20px` | `--radius-xl` |
| Pills / tags / avatars | `50px` | `--radius-full` |

---

## 5. Shadow rules

Only use these shadows. Do not create custom shadow values.

| Use case | Value |
|---|---|
| Hairline separator (app) | `rgb(218, 228, 234) 0px -1px 0px 0px` |
| Cards, inputs (marketing) | `rgba(33, 51, 67, 0.12) 0px 1px 5px 0px` |
| Dropdowns, tooltips (app) | `rgba(49, 65, 82, 0.3) 2px 2px 6px 0px` |
| Popovers (marketing) | `rgba(184, 184, 184, 0.3) 0px 0px 12px 3px` |
| Floating panels (app) | `rgba(0, 0, 0, 0.25) 0px 0px 10px 0px` |
| Elevated cards | `rgba(0, 0, 0, 0.12) 0px 4px 16px 0px` |
| Modals / overlays | `rgba(0, 0, 0, 0.28) 0px 8px 28px 0px` |

---

## 6. Component rules

### Buttons
- App primary: `background: #2693FF`, `color: #FFFFFF`, `border-radius: 4px`
- Marketing primary: `background: #3d92e7`, `color: #FFFFFF`, `border-radius: 8px`
- Danger: `background: #F45F50`, `color: #FFFFFF`, `border-radius: 4px`
- Ghost / link: `background: transparent`, `color: #2693FF` (app) or `#3CACD7` (marketing)

### Inputs
- Border: `1px solid #DCDFE6`
- Focus: `1px solid #3CACD7`, box-shadow focus ring
- Radius: `4px`
- Height: `40px` (app) / `44px` (marketing)
- Font: Lato 14px (app) / Lato 16px (marketing)
- Placeholder: `#798297`

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #DAE4EA` or none
- Radius: `8px`
- Shadow: `rgba(33, 51, 67, 0.12) 0px 1px 5px 0px`
- Padding: `20px` – `24px`

### Navigation
- App sidebar width: `250px` (`--layout-nav-width`)
- Marketing nav height: `72px` (`--layout-top-offset`)
- App nav background: `#FFFFFF` or `#F8FAFB`

---

## 7. Layout rules

- Max content width: `1280px`
- Container padding: `20px`
- Layout model: flexbox-dominant (no CSS grid detected)
- App shell: sidebar (`250px`) + main content area

---

## 8. Voice and copy rules

**Marketing copy**
- Tone: neutral-to-friendly
- Heading case: Sentence case
- Pronoun posture: address user as "you"
- CTA verbs: "Sign up free", "Try it free", "Create", "Get started", "View templates"

**App copy (UI labels)**
- Tone: neutral, task-oriented
- Labels: concise noun phrases ("Projects", "Settings", "Workspace")
- Action buttons: imperative verbs ("Create", "Delete", "Update", "Save")

---

## 9. What NOT to do

- Do not use `#000000` as body text color — use `#293745`
- Do not use Montserrat in app UI — it's marketing-only
- Do not invent new colors or shadows
- Do not add `!important` — the codebase is already over-reliant on it
- Do not use the Toastify color palette for design decisions
- Do not use pixel values outside the spacing scale

---

_Visme design system · synthesized by design-scout · 2026-05-17_
