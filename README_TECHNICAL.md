# WiseMount Real Estate - Technical Documentation

This document provides a detailed overview of the project architecture, directory structure, and instructions for content updates and deployment.

## 🏗️ Technical Architecture
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Vanilla CSS (Global variables, utility classes, and component-specific styles)
- **Data Layer**: Decoupled JSON files for easy future conversion to a Headless CMS.
- **Static Export**: Prerendered as static HTML/JS/CSS for maximum speed and SEO.

## 📁 Directory Structure

```text
/src
  /app                     # Next.js App Router (Pages and Layouts)
    /location/[city]        # Location-based dynamic listing pages
    /properties            # Main properties listing page
    /properties/[slug]     # Dynamic property detail pages
    globals.css            # Global styles and design tokens
    layout.tsx             # Root layout with fonts and metadata
    page.tsx               # Home page
  /components              # Modular, reusable UI components
    Header.tsx
    Footer.tsx
    PropertyCard.tsx      # Card display used in grids
    SearchBar.tsx          # Client-side filtering logic
    StickyCTA.tsx          # Mobile-first floating contact buttons
  /data                    # Local source of truth (JSON)
    properties.json        # Primary listing data
    locations.json         # City/Area data
  /utils                   # Helper functions
    whatsapp.ts            # WhatsApp link generation
    seo.ts                 # Metadata configuration helpers
/public                    # Static assets (Images, Icons)
next.config.ts             # Configured for 'output: export'
```

## 📝 How to Update Content

### 🏢 Adding/Editing Properties
Modify `src/data/properties.json`. Each entry requires:
- `id`: Unique identifier
- `slug`: URL-friendly name (e.g., `modern-apartment`)
- `price`: Formatted price string
- `featured`: Boolean (true/false) to show on the Home page
- `amenities`: Array of strings

### 📍 Adding/Editing Locations
Modify `src/data/locations.json`. Adding a location here automatically creates a new page at `/location/your-slug`.

## 🚀 Deployment Guide

### Local Build
Before deploying, always run:
```bash
npm run build
```
This generates an `out` directory containing your static website.

### 🧪 Local Testing Without a Server
While you can't simply open the `index.html` file in a browser (due to absolute path references), you can test the production-ready static files locally without a complex server setup:

1. **Simple Python Server** (if you have Python installed):
   ```bash
   cd out
   python -m http.server 8000
   ```
2. **Node.js Serve**:
   ```bash
   npx serve out
   ```
3. **VS Code Live Server**: Open the `out` folder in VS Code and click "Go Live".

### 📦 Git Repository Management
When pushing to a public GitHub repository, follow these guidelines:

**Required Files (Commit these):**
- `src/`: All source code and data.
- `public/`: Images and static assets.
- `package.json` & `package-lock.json`: Dependencies.
- `tsconfig.json` & `next.config.ts`: Configuration.
- `.ai/`: (Optional) AI context files for future development.
- `README.md` & `README_TECHNICAL.md`: Documentation.

**Excluded Files (Do NOT commit):**
- `node_modules/`: (Handled by `npm install`)
- `.next/`: Next.js build cache.
- `out/`: The generated static export (GitHub Actions will generate this on the fly).
- `.env*`: Any environment variables or secrets.

### GitHub Pages
1. Push your code to a GitHub repository.
2. In `next.config.ts`, if not using a custom domain, add:
   ```typescript
   basePath: '/your-repo-name',
   ```
3. I have provided a GitHub Actions workflow at `.github/workflows/nextjs.yml`. 
4. Go to **Settings > Pages** on your GitHub repo and under **Build and deployment > Source**, select **GitHub Actions**.
5. Once you push to `main`, the site will automatically deploy.

### Cloudflare Pages
1. Connect your repository to Cloudflare.
2. Set Build Command: `npm run build`
3. Set Build Output: `out`

## 🛠️ Proceeding with Enhancements

1. **New Components**: Add them to `src/components`. Use Server Components by default for better performance.
2. **Headless CMS**: To upgrade, simply replace the `import properties from '@/data/properties.json'` in pages with a fetch call to your CMS API (e.g., Strapi, Contentful, Sanity).
3. **Advanced Filtering**: The logic is currently in `src/app/properties/page.tsx` and `src/components/SearchBar.tsx`. You can extend this by adding range sliders for price or checkboxes for amenities.
