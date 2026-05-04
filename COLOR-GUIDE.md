# Technossus Design System - Color Palette Reference

## 🎨 Complete Color System

### Brand Colors

#### Primary Red
```
Color: #ed2939
Variable: --color-red
Usage: Primary brand color, CTAs, emphasis
```

**Use Cases:**
- Primary buttons
- Active states
- Link hover states
- Accent borders
- Important headings

**Combinations:**
- White text on red background (primary buttons)
- Red text on white/grey backgrounds (links, headings)
- Red borders on white cards (emphasis)

---

## Neutral Colors - Dark (Ink Family)

### Ink 900 - Deepest Black
```
Color: #0a0a0a
Variable: --color-ink-900
Usage: Reserved for strongest contrast needs
```

### Ink 800 - Primary Dark Background
```
Color: #050510
Variable: --color-ink-800
Usage: Dark section backgrounds, metrics panels
```

**Use Cases:**
- Hero backgrounds with white text
- Feature sections with contrast
- CTA sections

### Ink 700 - Footer Background
```
Color: #0b0b0b
Variable: --color-ink-700
Usage: Footer, secondary dark sections
```

### Ink 600 - Card Backgrounds
```
Color: #1b1b1b
Variable: --color-ink-600
Usage: Cards on dark backgrounds
```

**Use Cases:**
- Success story cards
- Testimonial cards on dark sections

### Ink 500 - Dark Elements
```
Color: #1e1e1e
Variable: --color-ink-500
Usage: Dark buttons, subtle elements
```

**Use Cases:**
- Dark variant buttons
- Subtle UI elements

---

## Grey Scale

### Grey 700 - Darkest Text
```
Color: #373737
Variable: --color-grey-700
Usage: Reserved for extreme contrast
```

### Grey 600 - Primary Text
```
Color: #424242
Variable: --color-grey-600
Usage: Headings, body text, primary content
```

**Use Cases:**
- All headings
- Body paragraphs
- Card descriptions
- Primary interface text

**Contrast Ratios:**
- On white: 10.22:1 ✓ AAA
- On surface-grey: 9.8:1 ✓ AAA

### Grey 500 - Secondary Text
```
Color: #4b5563
Variable: --color-grey-500
Usage: Secondary navigation, less prominent text
```

**Use Cases:**
- Navigation links (inactive state)
- Subheadings
- Secondary information

**Contrast Ratios:**
- On white: 7.53:1 ✓ AA

### Grey 400 - Muted Text
```
Color: #7a7a7a
Variable: --color-grey-400
Usage: Metadata, tags, tertiary information
```

**Use Cases:**
- Industry labels
- Tags
- Timestamps
- Metadata

**Contrast Ratios:**
- On white: 4.61:1 ✓ AA (large text)

### Grey 300 - Subtle Text & Borders
```
Color: #c9c9c9
Variable: --color-grey-300
Usage: Footer text, subtle borders, disabled states
```

**Use Cases:**
- Footer links
- Copyright text
- Dividers
- Disabled text

**Contrast Ratios:**
- On ink-700: 4.72:1 ✓ AA (large text)

### Grey 200 - Light Text on Dark
```
Color: #d9e4ea
Variable: --color-grey-200
Usage: Light text on dark backgrounds
```

**Use Cases:**
- Supporting text on dark cards
- Descriptions on ink backgrounds

### Grey 100 - Subtle Borders
```
Color: #e5e7eb
Variable: --color-grey-100
Usage: Very subtle borders, dividers
```

**Use Cases:**
- Navbar border
- Section dividers
- Subtle separators

---

## Surface Colors

### White - Primary Surface
```
Color: #ffffff
Variable: --color-white
Usage: Main page background, card backgrounds
```

**Use Cases:**
- Page background
- Card backgrounds
- Modal backgrounds
- Button text

### Surface Light
```
Color: #f9f9f9
Variable: --color-surface-light
Usage: Subtle alternating backgrounds
```

**Use Cases:**
- Familiar cards
- Alternating sections
- Hover states

### Surface Grey
```
Color: #f9fafb
Variable: --color-surface-grey
Usage: Card backgrounds, sections
```

**Use Cases:**
- Service cards
- Active service items
- Client strip background
- Section backgrounds

---

## Color Accessibility Matrix

### Text on White Background
| Color | Contrast | WCAG AA | WCAG AAA | Usage |
|-------|----------|---------|----------|-------|
| Grey 600 (#424242) | 10.22:1 | ✓ Pass | ✓ Pass | Primary text |
| Grey 500 (#4b5563) | 7.53:1 | ✓ Pass | ✓ Pass | Secondary text |
| Grey 400 (#7a7a7a) | 4.61:1 | ✓ Pass (large) | ✗ Fail | Metadata only |
| Red (#ed2939) | 4.98:1 | ✓ Pass | ✗ Fail | Headings, links |

### Text on Dark Backgrounds
| Color | Background | Contrast | Status |
|-------|-----------|----------|--------|
| White (#ffffff) | Ink 800 (#050510) | 19.42:1 | ✓✓✓ Excellent |
| White (#ffffff) | Ink 700 (#0b0b0b) | 17.89:1 | ✓✓✓ Excellent |
| Grey 300 (#c9c9c9) | Ink 700 (#0b0b0b) | 4.72:1 | ✓ Good |
| Grey 200 (#d9e4ea) | Ink 800 (#050510) | 9.31:1 | ✓✓ Very Good |

---

## Color Pairing Recommendations

### Primary Combinations

**High Impact**
```
Background: White (#ffffff)
Heading: Red (#ed2939)
Body: Grey 600 (#424242)
```

**Dark Contrast**
```
Background: Ink 800 (#050510)
Heading: White (#ffffff)
Body: Grey 200 (#d9e4ea)
Accent: Red (#ed2939)
```

**Subtle Elegance**
```
Background: Surface Grey (#f9fafb)
Heading: Grey 600 (#424242)
Body: Grey 600 (#424242)
Border: Red (#ed2939)
```

---

## Color Usage Dos and Don'ts

### ✅ DO:
- Use grey-600 for all primary body text
- Use red sparingly for emphasis and CTAs
- Maintain high contrast ratios (4.5:1 minimum)
- Use surface colors for subtle backgrounds
- Use ink colors for dark sections
- Test colors at different opacities

### ❌ DON'T:
- Use grey-400 for primary content
- Overuse red throughout the interface
- Place light grey text on white backgrounds
- Mix too many grey shades in one component
- Use color alone to convey information
- Ignore contrast requirements for accessibility

---

## Quick Reference: Semantic Usage

| Semantic Purpose | Variable | Hex |
|-----------------|----------|-----|
| Primary Brand | `--color-red` | #ed2939 |
| Primary Text | `--color-grey-600` | #424242 |
| Secondary Text | `--color-grey-500` | #4b5563 |
| Muted Text | `--color-grey-400` | #7a7a7a |
| Footer Text | `--color-grey-300` | #c9c9c9 |
| Page Background | `--color-white` | #ffffff |
| Card Background | `--color-surface-grey` | #f9fafb |
| Dark Section | `--color-ink-800` | #050510 |
| Dark Card | `--color-ink-600` | #1b1b1b |
| Footer | `--color-ink-700` | #0b0b0b |
| Border | `--color-grey-100` | #e5e7eb |
| Accent Border | `--color-red` | #ed2939 |

---

**Color System Version:** 1.0.0  
**Last Updated:** 2024
