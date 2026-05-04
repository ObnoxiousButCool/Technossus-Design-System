# Technossus Design System

A comprehensive design system extracted from the Technossus website, providing consistent design tokens, components, and guidelines for building cohesive user interfaces.

## 📦 Contents

```
design-system/
├── index.css                    # Main entry point (import this)
├── variables.css                # Design tokens & CSS custom properties
├── typography.css               # Typography scale & font styles
├── components/
│   ├── buttons.css             # Button variants & states
│   ├── cards.css               # Card components
│   ├── navbar.css              # Navigation bar
│   ├── footer.css              # Footer component
│   └── headers.css             # Hero sections & headers
└── README.md                    # This file
```

## 🚀 Quick Start

### Installation

Import the main CSS file in your project:

```html
<link rel="stylesheet" href="path/to/design-system/index.css">
```

Or in your CSS/SCSS:

```css
@import url('path/to/design-system/index.css');
```

### Basic Usage

```html
<!-- Button -->
<button class="btn btn--primary">Get Started</button>

<!-- Card -->
<div class="metric-card">
  <h3 class="metric-card__title">50+</h3>
  <p class="metric-card__body">Successful projects delivered</p>
</div>

<!-- Typography -->
<h1 class="heading-1">Welcome to Technossus</h1>
<p class="body-regular">We deliver innovative solutions.</p>
```

---

## 🎨 Design Tokens

### Color Palette

#### Brand Color
```css
--color-red: #ed2939;  /* Primary brand color */
```

✅ **DO:**
- Use red for primary CTAs and emphasis
- Use red sparingly for maximum impact
- Pair with neutrals for balance

❌ **DON'T:**
- Overuse red throughout the interface
- Use red for error states (it's a brand color, not semantic)
- Place red text on red backgrounds

---

#### Neutrals - Dark (Ink)
```css
--color-ink-900: #0a0a0a;  /* Deepest black */
--color-ink-800: #050510;  /* Section backgrounds */
--color-ink-700: #0b0b0b;  /* Footer background */
--color-ink-600: #1b1b1b;  /* Card backgrounds */
--color-ink-500: #1e1e1e;  /* Dark elements */
```

✅ **DO:**
- Use ink-800 for dark section backgrounds
- Use ink-600 for cards on dark backgrounds
- Ensure sufficient contrast with text

❌ **DON'T:**
- Mix multiple ink shades in the same component
- Use ink colors for body text (use grey instead)

---

#### Greys
```css
--color-grey-700: #373737;  /* Darkest grey */
--color-grey-600: #424242;  /* Headings, body text */
--color-grey-500: #4b5563;  /* Secondary text */
--color-grey-400: #7a7a7a;  /* Muted text */
--color-grey-300: #c9c9c9;  /* Footer text, borders */
--color-grey-200: #d9e4ea;  /* Light text on dark */
--color-grey-100: #e5e7eb;  /* Subtle borders */
```

✅ **DO:**
- Use grey-600 for primary body text
- Use grey-500 for secondary navigation
- Use grey-300 for footer content

❌ **DON'T:**
- Use grey-400 or lighter for primary content
- Rely on grey alone for important distinctions

---

#### Surfaces
```css
--color-white: #ffffff;        /* Pure white */
--color-surface-light: #f9f9f9;  /* Subtle backgrounds */
--color-surface-grey: #f9fafb;   /* Card backgrounds */
```

✅ **DO:**
- Use white for main page background
- Use surface-grey for card backgrounds
- Use surface-light for alternating sections

❌ **DON'T:**
- Use surface colors for text
- Create low-contrast combinations

---

### Typography

#### Font Families
```css
--font-sans: 'General Sans', system-ui, sans-serif;  /* UI, body text */
--font-serif: 'Roboto Serif', Georgia, serif;        /* Headings, emphasis */
```

✅ **DO:**
- Use serif for all headings and titles
- Use sans-serif for body text and UI elements
- Mix weights for visual hierarchy

❌ **DON'T:**
- Use serif for long-form body copy
- Use sans-serif for main headings
- Mix more than 2 font families

---

#### Typography Scale

| Class | Size | Line Height | Usage |
|-------|------|-------------|-------|
| `heading-display` | 40px | 54.4px (1.36) | Hero headlines |
| `heading-1` | 32px | 41px | Section titles |
| `heading-2` | 30px | 36px | Subsections |
| `heading-3` | 24px | 32px | Card titles |
| `heading-4` | 20px | 28px | Component titles |
| `body-large` | 20px | 28px | Emphasized text |
| `body-medium` | 18px | 28px | Hero subtitles |
| `body-regular` | 16px | 24px | Body text (default) |
| `body-small` | 14px | 20px | Secondary text |
| `caption` | 12px | 16px | Labels, tags |

✅ **DO:**
- Stick to the defined scale
- Use appropriate line heights
- Maintain hierarchy with size and weight

❌ **DON'T:**
- Create custom sizes between scale values
- Use display text for body copy
- Ignore line height recommendations

---

### Spacing Scale

```css
--space-4: 4px      --space-8: 8px      --space-12: 12px
--space-16: 16px    --space-20: 20px    --space-24: 24px
--space-32: 32px    --space-40: 40px    --space-48: 48px
--space-60: 60px    --space-80: 80px    --space-96: 96px
```

✅ **DO:**
- Use the 8px grid system (multiples of 4 or 8)
- Use consistent spacing within components
- Increase spacing for visual separation

❌ **DON'T:**
- Use arbitrary values (like 13px or 27px)
- Reduce spacing below 4px
- Use the same spacing for all gaps

---

### Border Radius

The design system uses **sharp corners** by default (no border radius).

✅ **DO:**
- Embrace the sharp, modern aesthetic
- Use consistent corners throughout
- Focus on layout and spacing instead

❌ **DON'T:**
- Add border-radius without design approval
- Mix rounded and sharp corners
- Round corners just because it's trendy

---

## 🧩 Components

### Buttons

#### Variants

**Primary Button** - Main CTAs
```html
<button class="btn btn--primary">Get Started</button>
```

✅ **DO:**
- Use for the main action in a section
- Limit to one per screen section
- Pair with secondary buttons for choices

❌ **DON'T:**
- Use multiple primary buttons in proximity
- Use for destructive actions
- Make every button primary

---

**Secondary Button** - Alternative actions
```html
<button class="btn btn--secondary">Learn More</button>
```

✅ **DO:**
- Pair with primary buttons
- Use for less critical actions
- Maintain consistent stroke width

❌ **DON'T:**
- Use as the only CTA
- Create ghost buttons on colored backgrounds

---

**Dark Button** - Subtle CTAs
```html
<button class="btn btn--dark">View Details</button>
```

✅ **DO:**
- Use on light backgrounds
- Use for tertiary actions

❌ **DON'T:**
- Use on dark backgrounds (poor contrast)
- Use for important CTAs

---

### Cards

#### Metric Card - Statistics & Numbers
```html
<div class="metric-card">
  <h3 class="metric-card__title">50+</h3>
  <p class="metric-card__body">Projects delivered successfully</p>
</div>
```

✅ **DO:**
- Lead with the number/metric
- Keep descriptions concise
- Use consistent heights in grids

❌ **DON'T:**
- Overcrowd with multiple metrics
- Use long paragraphs
- Vary card sizes in the same row

---

#### Success Card - Case Studies
```html
<div class="success-card">
  <div class="success-card__top">
    <div class="success-card__img">
      <img src="project.jpg" alt="Project">
    </div>
    <div class="success-card__copy">
      <span class="success-card__industry">FINTECH</span>
      <h3 class="success-card__title">Banking Platform</h3>
      <p class="success-card__body">Description...</p>
    </div>
  </div>
  <button class="btn btn--case">View Case Study</button>
</div>
```

✅ **DO:**
- Include industry labels
- Use high-quality images
- Provide clear CTAs

❌ **DON'T:**
- Omit the industry context
- Use low-quality images
- Write vague descriptions

---

### Navigation

#### Navbar
```html
<nav class="navbar">
  <div class="navbar__inner">
    <div class="navbar__logo">
      <img src="logo.svg" alt="Technossus">
    </div>
    <nav class="navbar__nav">
      <a href="#" class="navbar__link navbar__link--active">Home</a>
      <a href="#" class="navbar__link">Services</a>
      <a href="#" class="navbar__link">About</a>
    </nav>
  </div>
</nav>
```

✅ **DO:**
- Keep navigation items concise (5-7 max)
- Indicate the active page clearly
- Maintain consistent spacing

❌ **DON'T:**
- Overcrowd the navigation
- Use multiple active states
- Hide critical navigation on desktop

---

### Footer

```html
<footer class="footer">
  <div class="footer__top">
    <div class="footer__brand">
      <div class="footer__logo">
        <img src="logo.svg" alt="Technossus">
      </div>
      <div class="footer__brand-body">
        <p class="footer__tagline">Your tagline here</p>
        <div class="footer__social">
          <!-- Social icons -->
        </div>
      </div>
    </div>
    <!-- Columns -->
  </div>
  <div class="footer__bottom">
    <p class="footer__copy">© 2024 Technossus</p>
    <div class="footer__links">
      <a href="#" class="footer__link">Privacy</a>
      <a href="#" class="footer__link">Terms</a>
    </div>
  </div>
</footer>
```

✅ **DO:**
- Include social links and branding
- Group links logically
- Keep legal links accessible

❌ **DON'T:**
- Create too many columns (4 max)
- Hide important information
- Use inconsistent spacing

---

## 📐 Layout Guidelines

### Grid System
- Desktop: 1440px max-width
- Padding: 96px (desktop) → 48px (tablet) → 24px (mobile)
- Columns: Use flexbox or CSS Grid
- Gaps: Use spacing scale (24px, 32px, 40px)

### Responsive Breakpoints
```css
/* Mobile */
@media (max-width: 768px) { }

/* Tablet */
@media (max-width: 1024px) { }

/* Desktop */
@media (max-width: 1440px) { }
```

---

## ✅ Design Principles

### Visual Hierarchy
✅ **DO:**
- Use size and weight to create hierarchy
- Group related elements together
- Use whitespace intentionally

❌ **DON'T:**
- Make everything bold or large
- Crowd elements together
- Use color alone for hierarchy

---

### Consistency
✅ **DO:**
- Use design tokens consistently
- Follow component patterns
- Maintain spacing rhythm

❌ **DON'T:**
- Create one-off styles
- Mix different button styles arbitrarily
- Ignore the spacing scale

---

### Accessibility
✅ **DO:**
- Maintain 4.5:1 contrast ratios
- Provide focus states
- Use semantic HTML

❌ **DON'T:**
- Rely on color alone for meaning
- Remove focus outlines
- Use low-contrast text

---

## 🛠 Utility Classes

### Spacing
```html
<div class="mt-6">Margin top 24px</div>
<div class="p-8">Padding 32px</div>
<div class="gap-4">Gap 16px (for flex/grid)</div>
```

### Layout
```html
<div class="flex items-center justify-between gap-4">...</div>
<div class="grid grid-cols-3 gap-6">...</div>
```

### Typography
```html
<p class="text-center text-red">Centered red text</p>
<span class="uppercase font-semibold">LABEL</span>
```

---

## 📝 Contributing

When adding new components or patterns:
1. Follow existing naming conventions
2. Use design tokens for all values
3. Document with examples and dos/don'ts
4. Test across breakpoints
5. Ensure accessibility compliance

---

## 📄 License

This design system is proprietary to Technossus.

---

## 📧 Support

For questions or suggestions, contact the design team or open an issue in the repository.

---

**Version:** 1.0.0  
**Last Updated:** 2024  
**Maintained by:** Technossus Design Team
