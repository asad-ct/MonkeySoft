# MonkeySoft Portfolio - Clean & Modular Architecture

## Project Structure Overview

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Navbar
│   ├── page.tsx            # Home page with sections
│   ├── page.module.css     # Page-specific styles
│   └── globals.css         # Global styles
├── components/
│   └── Navbar/
│       ├── Navbar.tsx      # Main navbar component
│       ├── Logo.tsx        # Logo sub-component
│       ├── NavLinks.tsx    # Navigation links sub-component
│       ├── CTAButton.tsx   # CTA button sub-component
│       ├── navbar.module.css # Navbar styles
│       └── index.ts        # Barrel export
└── styles/
    └── (future: shared styles)
```

## Architecture & Design Patterns

### 1. **Component Modularity**
Each component is self-contained and reusable:
- **Navbar**: Main header component
- **Logo**: Displays logo/brand name
- **NavLinks**: Renders navigation links dynamically
- **CTAButton**: Call-to-action button

### 2. **CSS Modules**
- **Scoped styling**: All CSS is scoped to avoid naming conflicts
- **Responsive design**: Mobile-first approach with media queries
- **Dark theme**: Built-in dark mode support
- **Performance**: CSS modules bundle only used styles

### 3. **Configuration-Driven**
The Navbar accepts a config object for easy customization:

```tsx
const navbarConfig = {
  logoText: 'MonkeySoft',
  logoHref: '#/hero',
  navLinks: [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ],
  ctaButton: {
    label: 'Get Started',
    href: '#contact'
  }
};
```

## Components Guide

### Navbar Component

**Location**: `src/components/Navbar/Navbar.tsx`

**Usage**:
```tsx
import { Navbar } from '@/components/Navbar';

<Navbar config={customConfig} />
```

**Props**:
- `config` (optional): NavbarConfig object for customization

### Using Individual Components

```tsx
import { Logo, NavLinks, CTAButton } from '@/components/Navbar';

// Use individual components
<Logo href="#home" text="MyBrand" />
<NavLinks links={navItems} />
<CTAButton href="/contact" label="Book Now" external={false} />
```

## Customization Guide

### Change Navbar Colors

Edit `src/components/Navbar/navbar.module.css`:
```css
.navbar {
  background-color: rgba(0, 0, 0, 0.8);  /* Adjust opacity */
  backdrop-filter: blur(12px);             /* Adjust blur */
}
```

### Modify Navigation Links

Edit the default config in `src/components/Navbar/Navbar.tsx`:
```tsx
const defaultConfig: NavbarConfig = {
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    // Add more links
  ],
  // ...
};
```

### Add More Sections

Edit `src/app/page.tsx` to add new sections:
```tsx
<section id="about" className={styles.section}>
  {/* Your content */}
</section>
```

## Page Sections

### Hero Section
- Full-screen banner with title and CTAs
- Gradient background with animated entrance
- Responsive typography

### Services Section
- 3-column grid layout
- Hover animation effects
- Icon and description support

### Projects Section
- Responsive grid gallery
- Project cards with images
- Easy to populate with real projects

### Contact Section
- Simple CTA section
- Centered content

## Styling Features

- **Fixed Navbar**: navbar stays at top while scrolling (80px height)
- **Smooth Scrolling**: browser scroll-behavior set to smooth
- **Dark Theme**: optimized for dark mode
- **Gradient Effects**: modern gradient text and backgrounds
- **Animations**: fade-in and hover effects
- **Glassmorphism**: backdrop blur effects on cards

## Getting Started

1. **Run the development server**:
```bash
npm run dev
```

2. **Open in browser**:
```
http://localhost:3000
```

3. **Customize**:
   - Update Navbar config in `src/components/Navbar/Navbar.tsx`
   - Modify page content in `src/app/page.tsx`
   - Adjust colors and styling in CSS modules

## Next Steps

1. Add real images to project cards
2. Add form handling for contact section
3. Add more pages (About, Services detail, etc.)
4. Integrate with CMS or database
5. Add animation libraries (Framer Motion, AOS)
6. Implement analytics

## Component Conventions

✅ **Guidelines**:
- Use TypeScript for type safety
- Keep components focused on single responsibility
- Use CSS modules for styling
- Export components from index.ts (barrel export)
- Document props with interfaces
- Make components reusable and configurable

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Optimizations

- CSS modules tree-shake unused styles
- Next.js automatic code splitting
- Image optimization with next/image
- Efficient animations using CSS (not JavaScript)

---

**Happy coding! 🚀**
