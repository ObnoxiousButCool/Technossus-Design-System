# Technossus Design System - Quick Start Guide

Get up and running with the Technossus Design System in minutes.

## 📥 Installation

### Option 1: Direct Link (Fastest)
Add to your HTML `<head>`:
```html
<link rel="stylesheet" href="path/to/design-system/index.css">
```

### Option 2: CSS Import
In your main CSS file:
```css
@import url('path/to/design-system/index.css');
```

### Option 3: Individual Components
Import only what you need:
```css
@import url('path/to/design-system/variables.css');
@import url('path/to/design-system/typography.css');
@import url('path/to/design-system/components/buttons.css');
```

---

## 🎯 Essential Examples

### 1. Basic Page Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Technossus</title>
  <link rel="stylesheet" href="design-system/index.css">
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar">
    <div class="navbar__inner">
      <div class="navbar__logo">
        <img src="logo.svg" alt="Technossus">
      </div>
      <nav class="navbar__nav">
        <a href="#" class="navbar__link navbar__link--active">Home</a>
        <a href="#" class="navbar__link">Services</a>
        <a href="#" class="navbar__link">About</a>
        <a href="#" class="navbar__link">Contact</a>
      </nav>
    </div>
  </nav>

  <!-- Main Content -->
  <main>
    <section class="section container">
      <h1 class="heading-1">Welcome to Technossus</h1>
      <p class="body-regular">We deliver innovative solutions.</p>
      <div class="flex gap-4 mt-6">
        <button class="btn btn--primary">Get Started</button>
        <button class="btn btn--secondary">Learn More</button>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <!-- Footer content -->
  </footer>
</body>
</html>
```

---

### 2. Hero Section
```html
<section class="hero">
  <div class="hero__inner">
    <div class="hero__text">
      <div class="hero__copy">
        <div class="hero__head">
          <h1 class="hero__title">
            Transform Your 
            <span class="hero__title-emphasis">Business</span>
          </h1>
        </div>
        <p class="hero__sub">
          We deliver cutting-edge solutions that drive growth
        </p>
      </div>
      <div class="hero__ctas">
        <button class="btn btn--primary">Get Started</button>
        <button class="btn btn--secondary">View Our Work</button>
      </div>
    </div>
    <div class="hero__image">
      <img src="hero.jpg" alt="Hero">
    </div>
  </div>
</section>
```

---

### 3. Cards Layout
```html
<section class="section container">
  <h2 class="heading-1 mb-12">Our Impact</h2>
  
  <div class="grid grid-cols-2 gap-8">
    <!-- Metric Card -->
    <div class="metric-card">
      <h3 class="metric-card__title">50+</h3>
      <p class="metric-card__body">
        Successful projects delivered to clients worldwide
      </p>
    </div>

    <!-- Metric Card -->
    <div class="metric-card">
      <h3 class="metric-card__title">98%</h3>
      <p class="metric-card__body">
        Client satisfaction rate across all engagements
      </p>
    </div>

    <!-- Metric Card -->
    <div class="metric-card">
      <h3 class="metric-card__title">$10M+</h3>
      <p class="metric-card__body">
        In revenue generated for our clients
      </p>
    </div>

    <!-- Metric Card -->
    <div class="metric-card">
      <h3 class="metric-card__title">24/7</h3>
      <p class="metric-card__body">
        Support available for critical issues
      </p>
    </div>
  </div>
</section>
```

---

### 4. Button Group
```html
<div class="btn-group">
  <button class="btn btn--primary">Primary Action</button>
  <button class="btn btn--secondary">Secondary Action</button>
  <button class="btn btn--dark">Tertiary Action</button>
</div>
```

---

### 5. Dark Section with Cards
```html
<section class="section bg-dark">
  <div class="container">
    <h2 class="heading-1 text-white mb-12">Success Stories</h2>
    
    <div class="flex gap-6">
      <div class="success-card">
        <div class="success-card__top">
          <div class="success-card__img">
            <img src="project.jpg" alt="Project">
          </div>
          <div class="success-card__copy">
            <span class="success-card__industry">FINTECH</span>
            <h3 class="success-card__title">Digital Banking Platform</h3>
            <p class="success-card__body">
              Transformed banking experience for 1M+ users
            </p>
          </div>
        </div>
        <button class="btn btn--case">View Case Study</button>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 Common Patterns

### Typography Hierarchy
```html
<article>
  <h1 class="heading-1">Main Title</h1>
  <h2 class="heading-2 mt-8">Section Title</h2>
  <p class="body-regular mt-4">
    Regular body text goes here with proper spacing.
  </p>
  <p class="body-small mt-3 text-grey-500">
    Secondary information in smaller text.
  </p>
</article>
```

### Color Combinations
```html
<!-- White background, red accent -->
<div class="bg-white p-6">
  <h2 class="heading-3 text-red">Featured Service</h2>
  <p class="body-regular text-grey-600">Description text</p>
</div>

<!-- Dark background -->
<div class="bg-dark p-6">
  <h2 class="heading-3 text-white">Featured Service</h2>
  <p class="body-regular text-grey-200">Description text</p>
</div>
```

### Spacing System
```html
<!-- Using spacing utilities -->
<div class="mt-6 mb-8 p-6">
  <!-- mt-6 = 24px top margin -->
  <!-- mb-8 = 32px bottom margin -->
  <!-- p-6 = 24px padding all sides -->
</div>

<!-- Using flexbox gaps -->
<div class="flex gap-4">
  <button class="btn btn--primary">Button 1</button>
  <button class="btn btn--secondary">Button 2</button>
</div>
```

---

## 🎯 CSS Variables Quick Reference

### Most Used Variables
```css
/* Colors */
var(--color-red)          /* #ed2939 - Brand red */
var(--color-grey-600)     /* #424242 - Primary text */
var(--color-white)        /* #ffffff - White */
var(--color-ink-800)      /* #050510 - Dark backgrounds */

/* Typography */
var(--font-sans)          /* General Sans */
var(--font-serif)         /* Roboto Serif */

/* Spacing */
var(--space-4)            /* 4px */
var(--space-8)            /* 8px */
var(--space-16)           /* 16px */
var(--space-24)           /* 24px */
var(--space-32)           /* 32px */
var(--space-48)           /* 48px */
```

### Using Variables in Custom CSS
```css
.custom-element {
  background: var(--color-surface-grey);
  padding: var(--space-24);
  gap: var(--space-16);
  color: var(--color-grey-600);
  font-family: var(--font-sans);
}
```

---

## ✅ Best Practices Checklist

### Before You Start
- [ ] Understand the color system (see COLOR-GUIDE.md)
- [ ] Review typography scale (see README.md)
- [ ] Check component examples
- [ ] Test on different screen sizes

### Building Components
- [ ] Use design tokens (CSS variables) instead of hardcoded values
- [ ] Follow spacing scale (4px, 8px, 16px, 24px, etc.)
- [ ] Maintain consistent typography hierarchy
- [ ] Test color contrast (minimum 4.5:1)
- [ ] Use semantic HTML elements

### Common Mistakes to Avoid
- ❌ Creating custom spacing (use the scale!)
- ❌ Using arbitrary colors (use design tokens)
- ❌ Mixing font families unnecessarily
- ❌ Ignoring responsive behavior
- ❌ Overusing the primary red color

---

## 🔧 Customization

### Extending Components
```css
/* Add custom modifier */
.btn--large-primary {
  composes: btn btn--primary;
  padding: var(--space-20) var(--space-40);
  font-size: 18px;
}

/* Extend card */
.custom-card {
  composes: metric-card;
  border: 2px solid var(--color-red);
}
```

### Overriding Styles
```css
/* Override specific properties */
.navbar {
  height: 100px; /* Instead of default 80px */
}

/* Add custom variant */
.btn--custom {
  background: var(--color-ink-600);
  color: var(--color-white);
  border: 2px solid var(--color-red);
}
```

---

## 📱 Responsive Design

### Breakpoints
```css
/* Mobile First Approach */
.element {
  padding: var(--space-16);
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: var(--space-24);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: var(--space-48);
  }
}

/* Large Desktop */
@media (min-width: 1440px) {
  .element {
    padding: var(--space-96);
  }
}
```

---

## 🐛 Troubleshooting

### Styles Not Applying
1. Check CSS import order (variables.css must be first)
2. Verify class names (case-sensitive)
3. Check for CSS specificity conflicts
4. Ensure no overriding styles

### Colors Look Wrong
1. Verify you're using CSS variables (not hex values)
2. Check contrast on different backgrounds
3. Test in different browsers
4. Validate color variable names

### Spacing Issues
1. Use the spacing scale (don't create custom values)
2. Check parent container padding
3. Verify flexbox/grid gaps
4. Review responsive behavior

---

## 🚀 Next Steps

1. **Explore Components**: Check the README.md for all component documentation
2. **Study Colors**: Review COLOR-GUIDE.md for color usage
3. **Build Something**: Start with a simple page using the examples above
4. **Customize**: Extend components as needed for your project
5. **Test**: Always test responsive behavior and accessibility

---

## 📚 Documentation

- **README.md** - Complete design system documentation
- **COLOR-GUIDE.md** - Detailed color palette reference
- **variables.css** - All design tokens
- **typography.css** - Typography scale and classes
- **components/** - Individual component styles

---

## 💡 Tips for Success

1. **Start Simple**: Use existing components before creating new ones
2. **Stay Consistent**: Follow the design tokens religiously
3. **Think Mobile First**: Design for small screens, then enhance
4. **Test Accessibility**: Check contrast, focus states, and semantics
5. **Document Changes**: Keep track of customizations

---

**Happy Building! 🎉**

For questions or issues, refer to the main README.md or contact the design team.
