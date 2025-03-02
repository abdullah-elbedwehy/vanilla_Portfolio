# Abdullah El-Bedwehy - Modern Portfolio 🚀

A high-performance, responsive portfolio website built with vanilla technologies. Features advanced CSS animations, responsive design patterns, and modern JavaScript implementations.

## 🌐 Live Demo

Check out my portfolio in action! ✨

[View Portfolio](https://elbedwehy.vercel.app/) 🚀

#### Quick Tech Overview 🛠️

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

💻 Built with pure HTML, CSS, and JavaScript - no frameworks needed! Just clean, efficient code.

## 📱 Mobile-First Features

## 🎨 Layout & Styling Features

### 💪 Flexbox Implementation
```css
/* Modern Flexbox Layout System */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

/* Responsive Card Grid */
.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.card {
  flex: 1 1 300px;
  max-width: 100%;
}

/* Navigation Menu */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

/* Center Content */
.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

### 🔲 CSS Grid Layouts
```css
/* Auto-fit Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

/* Feature Grid */
.features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .features {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### 🎭 CSS Animations
```css
/* Smooth Transitions */
.element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Hover Effects */
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
```

### Touch Optimization

- Native-like touch interactions
- Smooth swipe gestures
- Touch-friendly tap targets (min 44x44px)
- Mobile-optimized click events
- Custom active/hover states for touch

### Mobile Performance

- Compressed images and assets
- Mobile-first CSS architecture
- Reduced motion for better battery life
- Optimized font loading strategy
- Mobile network resilience

### Responsive Layout System

```css
/* Mobile-First Media Query System */
/* Base styles are mobile by default */
.component {
  padding: 1rem;
  font-size: clamp(1rem, 4vw, 1.25rem);
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: 2rem;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: 3rem;
  }
}
```

## 🛠 Technical Stack

### Core Technologies

- **HTML5**
  - Semantic markup
  - Accessibility-first approach
  - Schema.org structured data
  - Open Graph meta tags
  - Mobile meta viewport configuration
- **CSS3**
  - Custom Properties (CSS Variables)
  - CSS Grid with auto-fit/minmax
  - Flexbox layouts
  - CSS Animations and Transitions
  - Mobile-optimized Media Queries
  - Touch-friendly hover states
- **JavaScript (ES6+)**
  - Intersection Observer API
  - Local Storage API
  - Touch Events API
  - Mobile Gesture Recognition
  - Network Status Detection
  - Device Orientation Handling

### External Libraries

- **[Typed.js](https://github.com/mattboldt/typed.js)** v2.0.12
  - Custom type speeds
  - Configurable backspace functionality
  - Loop and delay settings
- **[Font Awesome](https://fontawesome.com)** v6.0
  - SVG-based icons
  - Custom icon animations

## 🎯 Technical Features

### Performance Optimizations

- Lazy loading of images
- Deferred loading of non-critical CSS/JS
- Optimized asset delivery
- Minified production builds
- Browser caching implementation

### Theme System

```css
:root {
  --bg-primary: #0a0a0f;
  --bg-secondary: #1a1a1f;
  --text-primary: #ffffff;
  --text-secondary: #8892b0;
  --accent: #64ffda;
  --transition: all 0.3s ease;
}
```

### Responsive Design

- Mobile-first approach
- Breakpoints System:
  ```css
  /* Mobile - Default */
  @media (min-width: 320px) {
    /* Small phones */
  }
  @media (min-width: 375px) {
    /* Medium phones */
  }
  @media (min-width: 425px) {
    /* Large phones */
  }
  @media (min-width: 768px) {
    /* Tablets */
  }
  @media (min-width: 1024px) {
    /* Laptops */
  }
  @media (min-width: 1440px) {
    /* Large screens */
  }
  ```
- Viewport Optimizations:
  - Dynamic viewport units (dvh, svh, lvh)
  - Safe area insets for notched devices
  - Orientation change handling
- Mobile Typography:
  - Fluid type scale using clamp()
  - Minimum 16px font size
  - Optimized line heights for readability
- Touch Targets:
  - Minimum tap target size: 44x44px
  - Adequate spacing between interactive elements
  - Clear visual feedback on touch

### Mobile Performance Optimizations

- Network Optimization:
  - Lazy loading of off-screen content
  - Progressive image loading
  - WebP image format with fallbacks
  - Preload critical assets
  - Service Worker for offline support
- Battery Optimization:
  - Reduced motion for animations
  - Efficient event listeners
  - Debounced scroll handlers
  - Optimized JavaScript execution
- Loading Performance:
  - Critical CSS inlining
  - Deferred non-critical JavaScript
  - Optimized asset loading order
  - Compressed resources
  - Browser caching strategy

### Interactive Features

- 🌓 Theme Switcher
  - Smooth transitions between themes
  - Persistent theme storage
  - System preference detection
- 🖱 Cursor Effects
  - Custom gradient following
  - Interactive hover states
  - Performance-optimized animations
- 📜 Scroll Animations
  - Intersection Observer implementation
  - Throttled scroll events
  - Progressive loading

### JavaScript Architecture

```javascript
// Module pattern implementation
const Portfolio = {
  init() {
    this.themeManager.init();
    this.navigationManager.init();
    this.animationManager.init();
  },

  themeManager: {
    init() {
      /* Theme initialization */
    },
    toggle() {
      /* Theme toggle logic */
    },
    persist() {
      /* LocalStorage operations */
    },
  },

  // Additional modules...
};
```

## 🚀 Quick Start

1. **Clone and Install**

```bash
git clone https://github.com/abdullah-elbedwehy/vanilla_Portfolio.git
cd vanilla_Portfolio
```

2. **Development Setup**

```bash
# If using VS Code with Live Server
code . && live-server

# Or simply open in browser
open website/index.html
```

## 🔧 Advanced Customization

### Theme Configuration

1. Modify CSS variables in `styles.css`
2. Update color schemes in theme objects
3. Adjust transition timings

### ✨ Animation System

```javascript
// Core Animation Configuration
const animationConfig = {
  duration: 800,
  easing: "cubic-bezier(0.4, 0, 0.2, 1)",
  threshold: 0.1,
  rootMargin: "20px",
};

// Scroll Animation System
const ScrollAnimator = {
  init() {
    this.animated = document.querySelectorAll('.animate-on-scroll');
    this.setupObserver();
  },

  setupObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: animationConfig.threshold,
        rootMargin: animationConfig.rootMargin
      }
    );

    this.animated.forEach(element => observer.observe(element));
  }
};

// Page Transitions
const PageTransitions = {
  enter(element) {
    gsap.from(element, {
      opacity: 0,
      y: 20,
      duration: animationConfig.duration / 1000,
      ease: animationConfig.easing
    });
  },
  
  exit(element) {
    gsap.to(element, {
      opacity: 0,
      y: -20,
      duration: animationConfig.duration / 1000,
      ease: animationConfig.easing
    });
  }
};
```

```css
/* Animation Classes */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s var(--ease-out);
}

.animate-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover Animations */
.hover-lift {
  transition: transform 0.3s var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
}

/* Loading Animations */
.loading-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Stagger Animations */
.stagger-fade-up > * {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeUp 0.5s ease forwards;
}

.stagger-fade-up > *:nth-child(1) { animation-delay: 0.1s; }
.stagger-fade-up > *:nth-child(2) { animation-delay: 0.2s; }
.stagger-fade-up > *:nth-child(3) { animation-delay: 0.3s; }

@keyframes fadeUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Performance Monitoring

- Lighthouse scores:
  - Performance: 95+
  - Accessibility: 100
  - Best Practices: 95+
  - SEO: 100

## 📈 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- iOS/Android (latest 2 versions)

## 📄 License

MIT License - See [LICENSE](LICENSE) for details

---

**Built with 💻 by [Abdullah El-Bedwehy](https://linkedin.com/in/abdullah-elbedwehy)**

### 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Mobile Testing Guide

### Device Testing

1. Test on real devices:
   - iOS (iPhone, iPad)
   - Android (various screen sizes)
   - Different browsers (Safari, Chrome, Firefox)

### Performance Testing

```bash
# Using Lighthouse CLI for mobile auditing
npm install -g lighthouse
lighthouse https://elbedwehy.vercel.app/ --view --preset=mobile
```

### Touch Testing Checklist

- [ ] Tap targets are sized appropriately
- [ ] Swipe gestures work smoothly
- [ ] No unintended touch interactions
- [ ] Proper touch feedback
- [ ] Orientation changes handled properly

## 📱 Device-Specific Optimizations

### iPhone Configuration

```css
/* iPhone-specific CSS */
/* Safe Area Support */
:root {
  --sat: env(safe-area-inset-top);
  --sar: env(safe-area-inset-right);
  --sab: env(safe-area-inset-bottom);
  --sal: env(safe-area-inset-left);
}

/* iPhone Notch Handling */
.header {
  padding-top: var(--sat);
  padding-left: var(--sal);
  padding-right: var(--sar);
}

.footer {
  padding-bottom: var(--sab);
}

/* iPhone-specific Media Queries */
/* iPhone SE, 5S, 5 */
@media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
  :root {
    --base-font-size: 14px;
    --header-height: 60px;
  }
}

/* iPhone 6, 6S, 7, 8 */
@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  :root {
    --base-font-size: 15px;
    --header-height: 65px;
  }
}

/* iPhone X, XS, 11 Pro */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) {
  :root {
    --base-font-size: 16px;
    --header-height: 88px;
  }
}

/* iPhone 12, 13, 14 Pro */
@media only screen and (min-device-width: 390px) and (max-device-width: 844px) and (-webkit-device-pixel-ratio: 3) {
  :root {
    --base-font-size: 16px;
    --header-height: 94px;
  }
}
```

### Android Device Optimization

```css
/* Android-specific CSS */
/* Chrome Mobile-specific styles */
@supports (-webkit-touch-callout: none) {
  .scroll-container {
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
  }
}

/* Samsung Galaxy Fold */
@media only screen and (min-device-width: 280px) and (max-device-width: 653px) {
  :root {
    --base-font-size: 13px;
    --header-height: 56px;
  }
}

/* General Android Devices */
@media only screen and (max-width: 420px) {
  /* Optimize touch targets for Android */
  .button,
  .link,
  .input {
    min-height: 48px; /* Google's recommended minimum */
    margin: 8px 0;
  }
}
```

### Mobile-Specific JavaScript

```javascript
// Device Detection and Optimization
const MobileOptimizer = {
  init() {
    this.detectDevice();
    this.applyOptimizations();
    this.handleOrientation();
  },

  detectDevice() {
    const ua = navigator.userAgent;
    this.isIOS = /iPhone|iPad|iPod/.test(ua);
    this.isAndroid = /Android/.test(ua);
    this.isMobile = this.isIOS || this.isAndroid;
  },

  applyOptimizations() {
    if (this.isIOS) {
      // Prevent elastic scrolling
      document.body.style.overscrollBehavior = "none";
      // Enable smooth scrolling only on iOS
      document.documentElement.style.scrollBehavior = "smooth";
    }

    if (this.isAndroid) {
      // Optimize touch feedback
      this.setupTouchFeedback();
      // Handle Android-specific keyboard behavior
      this.handleAndroidKeyboard();
    }
  },

  handleOrientation() {
    window.addEventListener("orientationchange", () => {
      // Reset viewport height for mobile browsers
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  },

  setupTouchFeedback() {
    document.addEventListener(
      "touchstart",
      (e) => {
        const target = e.target;
        if (target.matches(".button, .link")) {
          target.style.opacity = "0.7";
        }
      },
      { passive: true }
    );
  },

  handleAndroidKeyboard() {
    const inputs = document.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        // Scroll to input when keyboard appears
        setTimeout(() => {
          input.scrollIntoView({ behavior: "smooth" });
        }, 300);
      });
    });
  },
};

// Initialize mobile optimizations
document.addEventListener("DOMContentLoaded", () => {
  MobileOptimizer.init();
});
```

### Device-Specific Meta Tags

```html
<!-- Add these to your HTML head -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, viewport-fit=cover"
/>
<meta name="theme-color" content="#0a0a0f" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta
  name="apple-mobile-web-app-status-bar-style"
  content="black-translucent"
/>
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

<!-- Add PWA support -->
<link rel="manifest" href="/manifest.json" />
```

### Mobile Performance Best Practices

1. **Image Optimization**

```javascript
// Implement responsive images
<img
    src="image-400w.jpg"
    srcset="
        image-400w.jpg 400w,
        image-800w.jpg 800w,
        image-1200w.jpg 1200w"
    sizes="(max-width: 400px) 100vw,
           (max-width: 800px) 50vw,
           33vw"
    alt="Responsive image"
>
```

2. **Touch Event Optimization**

```javascript
// Use passive event listeners
document.addEventListener("touchstart", handler, { passive: true });
```

## 📝 Typography System

### Font Stack Implementation

```css
/* Modern Font Stack */
:root {
  /* Primary Font - Inter */
  --font-primary: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;

  /* Secondary Font - Manrope for Headings */
  --font-secondary: "Manrope", "SF Pro Display", -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;

  /* Monospace Font - Fira Code */
  --font-mono: "Fira Code", "SF Mono", SFMono-Regular, Consolas,
    "Liberation Mono", Menlo, monospace;
}

/* Font Imports */
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;600;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap");

/* Font Size System using Modern Fluid Typography */
:root {
  /* Base Sizes */
  --text-xs: clamp(0.75rem, 0.7vw + 0.6rem, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8vw + 0.75rem, 1rem);
  --text-base: clamp(1rem, 1vw + 0.85rem, 1.125rem);
  --text-lg: clamp(1.125rem, 1.2vw + 0.9rem, 1.25rem);
  --text-xl: clamp(1.25rem, 1.5vw + 1rem, 1.5rem);
  --text-2xl: clamp(1.5rem, 2vw + 1.1rem, 2rem);
  --text-3xl: clamp(1.875rem, 2.5vw + 1.2rem, 2.5rem);
  --text-4xl: clamp(2.25rem, 3vw + 1.3rem, 3rem);

  /* Line Heights */
  --leading-tight: 1.2;
  --leading-snug: 1.375;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;

  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-extrabold: 800;
}

/* Typography Scale Implementation */
h1,
.h1 {
  font-family: var(--font-secondary);
  font-size: var(--text-4xl);
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
  letter-spacing: -0.02em;
}

h2,
.h2 {
  font-family: var(--font-secondary);
  font-size: var(--text-3xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-tight);
  letter-spacing: -0.01em;
}

h3,
.h3 {
  font-family: var(--font-secondary);
  font-size: var(--text-2xl);
  font-weight: var(--font-semibold);
  line-height: var(--leading-snug);
}

p,
.body {
  font-family: var(--font-primary);
  font-size: var(--text-base);
  line-height: var(--leading-normal);
}

.small {
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

code,
pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
}
```

### Font Performance Optimization

```javascript
// Font Loading Strategy
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

// Font Loading JavaScript
document.fonts.ready.then(() => {
    document.documentElement.classList.add('fonts-loaded');
});

// Font Display Strategy
@font-face {
    font-family: 'Inter';
    font-display: swap;
    /* ... other properties ... */
}
```

### Device-Specific Font Adjustments

```css
/* iOS Font Optimization */
@supports (-webkit-touch-callout: none) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}

/* Android Font Optimization */
@supports not (-webkit-touch-callout: none) {
  body {
    text-rendering: optimizeLegibility;
  }
}

/* High-DPI Screens */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
}
```

### Font Loading CSS

```css
/* Progressive Font Loading */
.fonts-loading {
  /* System font stack while custom fonts load */
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}

.fonts-loaded {
  /* Custom fonts once loaded */
  font-family: var(--font-primary);
}

/* Prevent FOUT (Flash of Unstyled Text) */
.fonts-loading h1,
.fonts-loading h2,
.fonts-loading h3 {
  /* Adjust metrics to match custom font */
  letter-spacing: -0.01em;
  word-spacing: 0.01em;
}
```