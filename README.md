# Anita D'Souza - Life & Success Coach Website

A visually breathtaking one-page website for Anita D'Souza's life coaching business, built with modern web technologies for exceptional performance and user experience.

## 🌟 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Stunning Animations**: Framer Motion with scroll-triggered reveals
- **Glass Morphism Design**: Beautiful backdrop-blur effects
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **Performance Optimized**: Lighthouse score ≥ 95
- **Accessibility First**: WCAG compliant with proper ARIA labels
- **Static Export Ready**: Can be deployed anywhere

## 🎨 Design System

### Colors
- **Primary Amethyst**: `#651fff`
- **Soft Lavender**: `#f8f6ff` 
- **Rose Accent**: `#ffb3a7`
- **Slate Greys**: For text and subtle elements

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Poppins (sans-serif)

### Visual Elements
- Glass morphism cards with backdrop-blur
- Rounded corners (24px, 48px)
- Subtle gradients and shadows
- Floating animated elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone and install dependencies:**
   ```bash
   git clone <repository-url>
   cd anita-life-coach
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
# Build and generate static files
npm run build

# For static export (recommended)
npm run export
```

## 📁 Project Structure

```
anita-life-coach/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles and Tailwind
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx          # Main homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   │   ├── button.tsx    # Button variants
│   │   ├── glass-card.tsx # Glass morphism card
│   │   └── reveal.tsx    # Animation wrapper
│   ├── sections/         # Page sections
│   │   ├── hero-section.tsx
│   │   ├── about-section.tsx
│   │   ├── programs-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── resources-section.tsx
│   │   └── cta-section.tsx
│   ├── navbar.tsx        # Navigation with mobile menu
│   └── footer.tsx        # Footer with links
├── lib/                  # Utility functions
│   └── utils.ts         # Helper functions
├── public/               # Static assets
│   └── assets/          # Images and media
└── Configuration files
```

## 🎭 Sections Overview

### 1. Hero Section
- Full-screen gradient background
- Animated floating elements
- Call-to-action buttons
- Statistics counters
- Scroll indicator

### 2. About Section  
- Two-column layout with portrait
- Animated statistics
- Credentials display
- Personal story

### 3. Programs Section
- Three coaching program cards
- Glass morphism effects
- Hover animations
- Popular program highlighting

### 4. Testimonials
- Client success stories
- Star ratings
- Achievement highlights
- Social proof statistics

### 5. Resources Section
- Free downloadable content
- Interactive card effects
- Multiple resource types
- Community CTA

### 6. Contact/CTA
- Email capture form
- Gradient background
- Animated elements
- Trust indicators

### 7. Footer
- Quick navigation links
- Social media icons
- Newsletter signup
- Contact information

## ⚡ Performance Features

- **Image Optimization**: Next.js automatic optimization
- **Font Loading**: Strategic font loading with `next/font`
- **Code Splitting**: Automatic with Next.js App Router
- **Static Generation**: Pre-rendered for fastest loading
- **Reduced Motion**: Respects user accessibility preferences

## 🎨 Animations

- **Scroll Reveals**: Framer Motion `useInView` hooks
- **Hover Effects**: Subtle lift and scale transforms
- **Page Load**: Staggered element animations
- **Micro-interactions**: Button hover states
- **Background**: Floating geometric shapes

## 📱 Responsive Design

- **Mobile First**: Designed for mobile, enhanced for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Appropriate touch targets
- **Swipe Gestures**: Mobile-optimized interactions

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload `out` folder to Netlify
```

### GitHub Pages
```bash
npm run export
# Deploy `out` folder to GitHub Pages
```

### Traditional Hosting
```bash
npm run export
# Upload `out` folder to any static host
```

## 🔧 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  amethyst: {
    DEFAULT: "#651fff",
    // ... other shades
  }
}
```

### Content
- Update text content in each section component
- Replace placeholder images in `/public/assets/`
- Modify contact information in footer
- Update metadata in `app/layout.tsx`

### Features
- Add new sections by creating components in `/components/sections/`
- Extend animations in individual components
- Add new UI components in `/components/ui/`

## 📈 SEO & Analytics

- **Meta Tags**: Comprehensive OpenGraph and Twitter cards
- **Structured Data**: JSON-LD for rich snippets (can be added)
- **Sitemap**: Generated automatically by Next.js
- **Analytics**: Ready for Google Analytics integration

## 🧪 Testing

```bash
# Lint code
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support with this website:
- Create an issue in the repository
- Contact: hello@anitadsouza.com

---

**Built with ❤️ for transformation and success** 