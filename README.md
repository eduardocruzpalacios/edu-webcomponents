# 🎨 Edu Web Components Library

[![npm version](https://img.shields.io/npm/v/edu-webcomponents.svg)](https://www.npmjs.com/package/edu-webcomponents)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with Lit](https://img.shields.io/badge/Built%20with-Lit-324FFF.svg)](https://lit.dev)

A modern, lightweight collection of reusable web components built with [Lit](https://lit.dev) following [open-wc](https://github.com/open-wc/open-wc) recommendations.

**[📖 View Live Demo & Documentation](https://eduardocruzpalacios.github.io/edu-webcomponents/)**

## ✨ Features

- 🚀 **Lightweight** - Built with Lit for minimal bundle size
- ♿ **Accessible** - ARIA-compliant components with keyboard support
- 🎯 **Framework-agnostic** - Works with any JavaScript framework or vanilla JS
- 🎨 **Customizable** - CSS custom properties for easy theming
- 🌓 **Dark mode support** - Automatic theme switching with `@media (prefers-color-scheme: dark)`
- 📦 **Tree-shakeable** - Import only what you need
- ✅ **Well-tested** - Comprehensive test coverage

## 📦 Installation

```bash
npm install edu-webcomponents
```

## 🚀 Quick Start

Import all components:

```html
<script type="module">
  import 'edu-webcomponents/index.js';
</script>

<edu-button text="Click me"></edu-button>
```

Or import individual components:

```html
<script type="module">
  import 'edu-webcomponents/src/edu-button/index.js';
</script>

<edu-button text="Click me"></edu-button>
```

## 📚 Components

### 🏷️ Badge

A small status indicator or label component perfect for displaying counts, categories, or status information.

**Properties:**
- `text` (String) - Badge text content (default: `''`)
- `variant` (String) - Color variant: `'default'`, `'primary'`, `'success'`, `'warning'`, `'error'`, or `'info'` (default: `'default'`)
- `size` (String) - Size variant: `'small'`, `'medium'`, or `'large'` (default: `'medium'`)
- `aria-label` (String) - Accessibility label
- `aria-live` (String) - Announces dynamic changes to screen readers: `'polite'` or `'assertive'`
- `decorative` (Boolean) - Marks badge as decorative (hidden from screen readers)

**Accessibility:**
- Uses `role="status"` for screen reader announcements (non-decorative badges)
- Supports `aria-live` attribute for dynamic content announcements
- Automatically adds `aria-atomic="true"` when `aria-live` is set
- Decorative mode (`decorative` property) hides badge from screen readers with `aria-hidden="true"`
- Customizable ARIA labels for better context
- Semantic color choices with sufficient contrast ratios
- Full dark mode support with optimized color schemes

**Usage:**

```html
<!-- Basic badge -->
<edu-badge text="New"></edu-badge>

<!-- Colored variants -->
<edu-badge text="Active" variant="success"></edu-badge>
<edu-badge text="Pending" variant="warning"></edu-badge>
<edu-badge text="Error" variant="error"></edu-badge>
<edu-badge text="Info" variant="info"></edu-badge>
<edu-badge text="Primary" variant="primary"></edu-badge>

<!-- Different sizes -->
<edu-badge text="Small" size="small" variant="primary"></edu-badge>
<edu-badge text="Medium" size="medium" variant="primary"></edu-badge>
<edu-badge text="Large" size="large" variant="primary"></edu-badge>

<!-- Notification count with live updates -->
<span>Messages 
  <edu-badge 
    text="5" 
    variant="primary" 
    size="small"
    aria-live="polite"
    aria-label="5 unread messages">
  </edu-badge>
</span>

<!-- Decorative badge (category tag) -->
<edu-badge text="JavaScript" variant="info" decorative></edu-badge>
```

**JavaScript:**

```javascript
import { EduBadge } from 'edu-webcomponents';

const badge = document.querySelector('edu-badge');
badge.text = '10';
badge.variant = 'error';
```

---

### 🔘 Button

A customizable button component with hover effects and disabled state.

**Properties:**
- `text` (String) - Button text content (default: `'Default text'`)
- `type` (String) - Button type attribute (default: `'button'`)
- `disabled` (Boolean) - Whether the button is disabled (default: `false`)
- `aria-label` (String) - Accessibility label

**Accessibility:**
- WCAG-compliant touch targets (44×44px minimum)
- Clear focus indicators with `focus-visible`
- Proper ARIA labels and disabled state
- Keyboard accessible

**Usage:**

```html
<!-- Basic button -->
<edu-button text="Click me"></edu-button>

<!-- Disabled button -->
<edu-button text="Disabled" disabled></edu-button>

<!-- Submit button with aria-label -->
<edu-button 
  text="Submit Form" 
  type="submit" 
  aria-label="Submit the form">
</edu-button>
```

**JavaScript:**

```javascript
import { EduButton } from 'edu-webcomponents';

const button = document.querySelector('edu-button');
button.addEventListener('click', () => {
  console.log('Button clicked!');
});
```

---

### ➖ Divider

A horizontal divider to visually separate content sections.

**Properties:**
- `label` (String) - Optional text label displayed in the center (default: `''`)

**Accessibility:**
- Uses semantic `separator` role with `aria-orientation`
- Decorative visual elements hidden from screen readers
- Optional label for additional context

**Usage:**

```html
<!-- Simple divider -->
<edu-divider></edu-divider>

<!-- Divider with label -->
<edu-divider label="OR"></edu-divider>
```

---

### ⏳ Loading Spinner

An animated circular loading spinner with smooth rotation animation. Includes screen reader announcements and respects reduced motion preferences.

**Properties:**
- `label` (String) - Screen reader label for the loading state (default: `'Loading'`)

**Accessibility:**
- Announces loading state to screen readers with `role="status"`
- Slows animation speed when `prefers-reduced-motion` is enabled
- Customizable label for context-specific loading messages

**Usage:**

```html
<!-- Default loading spinner -->
<edu-loading-spinner></edu-loading-spinner>

<!-- Custom accessibility label -->
<edu-loading-spinner label="Loading user data"></edu-loading-spinner>
```

---

### 📊 Progress Bar

A progress bar component to visualize task completion or loading progress.

**Properties:**
- `value` (Number) - Current progress value (default: `0`)
- `max` (Number) - Maximum value (default: `100`)
- `showLabel` (Boolean) - Whether to display percentage label (default: `false`)
- `progressbarName` (String) - Accessibility label (default: `'Progress bar'`)

**Accessibility:**
- Full ARIA progressbar implementation with `role="progressbar"`
- Dynamic `aria-valuenow`, `aria-valuemin`, and `aria-valuemax` attributes
- Customizable labels for context-specific progress tracking

**Usage:**

```html
<!-- Basic progress bar -->
<edu-progress-bar value="50" max="100"></edu-progress-bar>

<!-- With percentage label -->
<edu-progress-bar 
  value="75" 
  max="100" 
  showLabel>
</edu-progress-bar>

<!-- Custom accessibility label -->
<edu-progress-bar 
  value="3" 
  max="5" 
  showLabel 
  progressbarName="File upload progress">
</edu-progress-bar>
```

**JavaScript:**

```javascript
const progressBar = document.querySelector('edu-progress-bar');
let progress = 0;

const interval = setInterval(() => {
  progress += 10;
  progressBar.value = progress;
  
  if (progress >= 100) {
    clearInterval(interval);
  }
}, 500);
```

---

### 💀 Skeleton Text

Animated skeleton loader for content placeholders during loading states. Includes screen reader announcements and respects reduced motion preferences.

**Properties:**
- `width` (String) - Width of skeleton lines (default: `'100%'`)
- `lineHeight` (String) - Height of each line (default: `'1em'`)
- `lines` (Number) - Number of skeleton lines to display (default: `1`)

**Accessibility:**
- Announces loading state to screen readers with `role="status"`
- Automatically pauses animation when `prefers-reduced-motion` is enabled

**Usage:**

```html
<!-- Single line skeleton -->
<edu-skeleton-text></edu-skeleton-text>

<!-- Multiple lines -->
<edu-skeleton-text lines="3"></edu-skeleton-text>

<!-- Custom width and height -->
<edu-skeleton-text 
  width="60%" 
  lineHeight="1.5em" 
  lines="2">
</edu-skeleton-text>
```

**Common Patterns:**

```html
<!-- Loading a card -->
<div class="card">
  <edu-skeleton-text width="80%" lineHeight="2em" lines="1"></edu-skeleton-text>
  <edu-skeleton-text width="100%" lines="3"></edu-skeleton-text>
</div>

<!-- Loading a profile -->
<div class="profile">
  <edu-skeleton-text width="150px" lineHeight="150px" lines="1"></edu-skeleton-text>
  <edu-skeleton-text width="200px" lines="2"></edu-skeleton-text>
</div>
```

---

### 💬 Tooltip

A flexible tooltip component that displays contextual information on hover.

**Properties:**
- `text` (String) - Tooltip content to display
- `position` (String) - Tooltip position: `'top'`, `'bottom'`, `'left'`, or `'right'` (default: `'bottom'`)

**Accessibility:**
- Semantic `tooltip` role with proper ARIA relationships
- Full keyboard support (hover, focus, Escape to dismiss)
- Screen reader announcements via `aria-describedby`

**Usage:**

```html
<!-- Bottom tooltip (default) -->
<edu-tooltip text="This is helpful information">
  <button>Hover me</button>
</edu-tooltip>

<!-- Top tooltip -->
<edu-tooltip text="Tooltip on top" position="top">
  <span>🎯 Target element</span>
</edu-tooltip>

<!-- Left and right tooltips -->
<edu-tooltip text="Left side tooltip" position="left">
  <edu-button text="Button with tooltip"></edu-button>
</edu-tooltip>

<edu-tooltip text="Right side tooltip" position="right">
  <a href="#">Link with tooltip</a>
</edu-tooltip>
```

---

## 🎨 Theming

Components use CSS custom properties for easy theming. Override these in your CSS:

```css
:root {
  --primary: #1976d2;
  --primaryHover: #1565c0;
  --primaryForeground: #ffffff;
  --disabled: #bdbdbd;
  --greyLight: #e0e0e0;
  --greyDark: #757575;
  --blackLight: #424242;
  --skeletonBase: #e0e0e0;
  --skeletonHighlight: #f0f0f0;
}
```

### 🌓 Dark Mode Support

All components automatically support dark mode via `@media (prefers-color-scheme: dark)`. When your operating system or browser is set to dark mode, the components will automatically adapt with optimized color schemes:

```css
@media (prefers-color-scheme: dark) {
  :host {
    --primary: #4db8ff;
    --primaryHover: #66c2ff;
    --primaryForeground: #000;
    --blackLight: #e0e0e0;
    --greyLight: #3d3d3d;
    --greyDark: #666;
    --disabled: #555;
    --skeletonBase: #3d3d3d;
    --skeletonHighlight: #4d4d4d;
  }
}
```

No additional configuration required - dark mode works out of the box!

## 🧪 Development

### Local Demo

Run the local development server with live demo:

```bash
npm start
```

Opens a development server at http://localhost:8000 with the demo page.

### Storybook

View components in Storybook with interactive controls:

```bash
npm run storybook
```

Build Storybook for deployment:

```bash
npm run build-storybook
```

### Testing

Run tests once:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Linting & Formatting

Check for linting/formatting errors:

```bash
npm run lint
```

Auto-fix linting/formatting errors:

```bash
npm run format
```

## 📝 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern browsers with ES2015+ support

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- 📖 [Live Demo & Storybook](https://eduardocruzpalacios.github.io/edu-webcomponents/)
- 📦 [npm Package](https://www.npmjs.com/package/edu-webcomponents)
- 💻 [GitHub Repository](https://github.com/eduardocruzpalacios/edu-webcomponents)
- 🔥 [Lit Documentation](https://lit.dev)
- 🌐 [Open Web Components](https://open-wc.org)

## 🙏 Acknowledgments

Built with [Lit](https://lit.dev) and following [open-wc](https://github.com/open-wc/open-wc) recommendations for modern web component development.

---

Made with ❤️ by [Eduardo de la Cruz Palacios](https://github.com/eduardocruzpalacios)
