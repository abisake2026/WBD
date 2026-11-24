# Wellington Builders & Developers – React Website

**Location:** Coimbatore, Tamil Nadu, India  
**Brand Positioning:** Luxury, Architectural Excellence, Innovation, & Transparency  
**Brand Identity Palette:** Deep Forest (`#092327`), Teal (`#0B5351`), Aqua (`#00A9A5`), Soft Mint (`#ECFEE8`)

---

## Run the React App

Install dependencies with `npm install`, start the local development server with `npm run dev`, and create a production build with `npm run build`. Use `npm run preview` to serve the production build locally.

The site is rendered by React on all existing `.html` routes. Original page markup is preserved as source content in `src/content/`; shared styling remains in `css/`, and existing page interactions are initialized after React renders. Static assets are served from `public/assets/`.

## Project Structure

```text
.
├── assets/
│   ├── icons/
│   ├── images/
│   │   └── wellington-builders-transparent-logo.png
│   ├── documents/
│   └── models/
├── css/
│   ├── animations.css
│   ├── home-refresh.css
│   ├── responsive.css
│   └── style.css
├── public/
│   └── assets/
├── js/
│   ├── animations.js
│   ├── contact.js
│   ├── faq.js
│   ├── gallery.js
│   ├── main.js
│   ├── navigation.js
│   ├── projects.js
│   └── testimonials.js
├── src/
│   ├── content/
│   ├── main.jsx
│   └── styles.css
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
├── about.html
├── contact.html
├── faq.html
├── gallery.html
├── project-details.html
├── projects.html
├── services.html
├── testimonials.html
├── sitemap.xml
└── README.md
```

The website is the single project in this folder; the unused Vite starter has been removed. React entry pages remain at the project root to preserve the existing URLs. Source page content is kept in `src/content/`; shared styles and scripts remain in `css/` and `js/`.
The floating quotation-download action links to `assets/documents/Wellington_Builders_Sample_Quotation.pdf`.

## 🌟 Key Features

1. **Dedicated 9-Page Architecture**:
   - `index.html` – Hero landing page featuring a luxury villa image, property categories, featured developments, why choose us, lifestyle gallery, testimonials, and contact triggers.
   - `about.html` – Company story, vision, mission, core values, construction philosophy, and safety commitments.
   - `projects.html` – Dynamic multi-category and status filtering (Apartments, Villas, Plots, Commercial, Ongoing, Completed, Upcoming).
   - `project-details.html` – Detailed project profile with master overview, technical specifications, interactive 2D floor plans, amenities, and instant enquiry form.
   - `services.html` – 8 core construction and real estate services with benefit highlights.
   - `gallery.html` – Masonry grid with category filtering and interactive fullscreen lightbox with zoom & keyboard navigation.
   - `testimonials.html` – Client testimonial review slider with verified placeholders.
   - `faq.html` – 5-category interactive accordion with instant real-time search filtering.
   - `contact.html` – Comprehensive contact details, interactive Coimbatore Google map, validated enquiry form, direct WhatsApp launcher, and click-to-call.

2. **Motion Design & Interactivity**:
   - Uses lightweight, staggered scroll reveals with Intersection Observer and respects reduced-motion preferences.
   - Clean micro-interactions, responsive hamburger mobile drawer, back-to-top floating button, and floating WhatsApp contact button.

3. **SEO & Performance**:
   - Semantic HTML5 structure with LocalBusiness JSON-LD schema markup.
   - Search-engine optimized meta tags targeting Coimbatore real estate keywords.
   - XML sitemap (`sitemap.xml`) and `robots.txt`.
