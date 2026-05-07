# Technossus Design System

Design tokens, CSS variables, Tailwind preset, and React components — all sourced directly from the [Technossus Figma file](https://www.figma.com/design/Ck1TA25mMoYJMnI6ag9Xmh/Technossus-Design-System).

## What's included

| Path | Contents |
|---|---|
| `tokens/index.json` | All tokens in one JSON (W3C Design Token format) |
| `tokens/colors.json` | Color palette |
| `tokens/typography.json` | Typography scale |
| `tokens/spacing.json` | Spacing scale |
| `css/variables.css` | CSS custom properties |
| `css/typography.css` | Typography utility classes |
| `tailwind/preset.js` | Tailwind CSS preset |
| `ts/tokens.ts` | TypeScript token constants + types |
| `components/` | React components (Tag, Stats, SearchBar, Card, Testimonial) |
| `docs/index.html` | Visual showcase |

---

## Usage

### CSS variables

```html
<link rel="stylesheet" href="node_modules/@technossus/design-system/css/variables.css" />
```

```css
.my-button {
  background: var(--color-brand-primary); /* #ED2939 */
  font-family: var(--font-sans);
  padding: var(--space-16) var(--space-24);
}
```

### Tailwind preset

```js
// tailwind.config.js
const technossusPreset = require('@technossus/design-system/tailwind');

module.exports = {
  presets: [technossusPreset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
};
```

### TypeScript tokens

```ts
import tokens, { colors, typography, spacing } from '@technossus/design-system';

// colors.brand.primary       → '#ED2939'
// typography.heading.h1      → { fontFamily, fontSize, lineHeight, ... }
// spacing[24]                → 24
```

### React components

```tsx
import { Tag, Stats, SearchBar, Card, Testimonial } from '@technossus/design-system/components';

<Tag label="INTEGRATED CAPABILITIES" />

<Stats value="250+" label="CONSULTANTS" />

<SearchBar
  placeholder="Ask about services, industries, solutions..."
  onSubmit={(q) => console.log(q)}
/>

<Card mode="dark" variant="small" title="Outcome Driven" description="..." />

<Card
  mode="dark" variant="large"
  category="HEALTHCARE"
  heading="Automating Home Care Operations"
  body="..."
  stats={[{ value: '$50M+', label: 'TOTAL COST SAVING' }]}
  image="/img.jpg"
/>

<Card mode="light" variant="insights" image="/img.jpg" tags="FINTECH" title="..." excerpt="..." />

<Card mode="light" variant="deliver" image="/img.jpg" title="AI Led Transformation" description="..." />

<Card mode="dark" variant="insights" image="/img.jpg" tags="FINTECH" title="..." excerpt="..." />

<Testimonial color="white" quote='"Flawless rollout..."' authorName="Jeffrey Harker" authorTitle="System Manager" />

<Testimonial color="red" quote='"Game-changer..."' authorName="Sarah Mitchell" authorTitle="VP Engineering" />
```

---

## Design Tokens Reference

### Colors

| Token | Value |
|---|---|
| `brand/primary` | `#ED2939` |
| `brand/black` | `#1E1E1E` |
| `brand/gray` | `#616365` |
| `brand/lightGray` | `#EEEEEE` |
| `background/black` | `#010101` |
| `background/dark1–3` | `#1B1B1B` · `#232323` · `#343434` |
| `background/gray4` | `#F9F9F9` |
| `text/100–900` | White → Near-black |
| `surfaces/card` | `#F8F9FB` |

### Typography

| Token | Family | Size | Weight | Line-Height |
|---|---|---|---|---|
| Display 1 | Roboto Serif | 48px | 500 | 52px |
| Display 2 | Roboto Serif | 40px | 600 | 48px |
| Heading 1 | Roboto Serif | 36px | 500 | 40px |
| Heading 2 | Roboto Serif | 32px | 600 | 36px |
| Heading 3 | General Sans | 24px | 600 | 32px |
| Heading 4 | General Sans | 20px | 600 | 28px |
| Body 1 | General Sans | 18px | 500 | 24px |
| Body 2 | General Sans | 16px | 500 | 24px |
| Body 3 | General Sans | 14px | 500 | 20px |
| Label 1 | General Sans | 16px | 600 | 28px |
| Label 2 | General Sans | 14px | 600 | 20px |

### Spacing

`0, 1, 2, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80, 84, 88, 92, 96, 100` px

---

## Components (from Figma)

| Component | Variants |
|---|---|
| `Tag` | Pill with bracket decoration |
| `Stats` | Display value + label |
| `SearchBar` | AI search input with send button |
| `Card` | `dark/small`, `dark/large`, `dark/insights`, `light/insights`, `light/deliver` |
| `Testimonial` | `white`, `red` |

---

## Figma Source

**File:** [Technossus Design System](https://www.figma.com/design/Ck1TA25mMoYJMnI6ag9Xmh/Technossus-Design-System)  
**Key:** `Ck1TA25mMoYJMnI6ag9Xmh`
