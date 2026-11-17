# Ambika Motors – Project Documentation

Marketing website for **Ambika Motors**, an exporter of truck, tractor and auto parts and automotive oils based in
Surat, Gujarat, India. The site shows the truck, tractor and parts brands the company covers, and has a contact form
that emails inquiries to the business.

- Live site: https://ambicamotors.com (custom domain set in `public/CNAME`)
- Repository: `git@github.com:Ravikava/ambika-motors.git`, branch `main`
- Business contact: +91-9979847932 · ambikamotors932@gmail.com

`README.md` is the short version of this document (running the site, where to change things, publishing).

---

## 1. Tech stack

| Area | Choice |
|---|---|
| UI | React 19 (function components and hooks), plain JavaScript |
| Bundler / dev server | Vite 7 |
| Routing | react-router-dom 7 (`BrowserRouter`) |
| Styling | Plain CSS: one file per component plus shared tokens in `theme.css` (no CSS framework) |
| Fonts | Plus Jakarta Sans (headings) and Space Grotesk (text) from Google Fonts |
| Icons | SVG files in `public/images/redesign/`, plus `react-icons` in the navbar and footer |
| Contact form email | EmailJS (`@emailjs/browser`) |
| Linting | ESLint 9 (flat config) with the react-hooks and react-refresh plugins |
| Hosting | GitHub Pages, built and published by GitHub Actions |

No TypeScript, no backend, no automated tests (decided against for now, November 2026).

---

## 2. Getting started

Needs Node.js 20.19 or newer (the live build uses Node 24).

```bash
npm install
cp .env.example .env   # then fill in the EmailJS keys (section 3)
npm run dev            # http://localhost:3000, opens a browser tab
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server with live reload |
| `npm run build` | Production build into `dist/` (including the SEO files in section 7) |
| `npm run preview` | Serves `dist/` locally to check a build |
| `npm run lint` | Runs ESLint over the project |

Restart `npm run dev` after editing `.env`; Vite reads it only at startup.

---

## 3. Contact form and environment variables

The form on `/contact-us` sends inquiries through EmailJS. It needs three keys:

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID (`service_…`) |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID (`template_…`) |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS account public key |

- **On your computer:** in `.env` (copied from `.env.example`). `.env` is ignored by git and never committed.
- **On the live site:** as repository secrets (GitHub > Settings > Secrets and variables > Actions). The deploy
  workflow passes them to the build.

Anything prefixed `VITE_` ends up in the public JavaScript, so only keys meant to be public belong there (EmailJS
public keys are; restrict them to the site's domain in the EmailJS account).

If the keys are missing or still the `your_…` placeholders, the site still builds, and the form tells visitors it
isn't available right now and to email or call instead (with a note in the browser console). Full setup steps and
the template variables (`from_name`, `from_email`, `company`, `phone`, `message`, `to_email`) are in
`EMAILJS_SETUP.txt`. The form's code is `src/components/redesign/ContactForm.jsx`.

---

## 4. Project structure

```
.
├── .github/workflows/deploy-pages.yml   # build + publish on every push to main
├── index.html                           # HTML entry: icons, fonts, dark loading screen
├── vite.config.js                       # Vite config (dev server on port 3000) + the seo-pages plugin
├── scripts/seo-pages.js                 # build step: one HTML file per page, redirects, 404, sitemap, robots
├── eslint.config.js
├── EMAILJS_SETUP.txt                    # contact-form email setup
├── public/
│   ├── CNAME                            # custom domain for GitHub Pages
│   ├── favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png, site.webmanifest
│   └── images/
│       ├── redesign/                    # site logo, loading-screen logo, SVG icons
│       ├── share/                       # picture shown in link previews (1200 × 630)
│       ├── truck-brand/                 # truck brand logos
│       ├── tractor-brand/               # tractor brand logos
│       ├── part_brand/                  # parts / oil brand logos
│       └── Trucks/<Brand>/              # truck model photos per brand
└── src/
    ├── main.jsx                         # React root
    ├── App.jsx                          # routes and redirects
    ├── routes.js                        # every page address + old addresses to redirect
    ├── seo.js                           # page titles, descriptions, business details for Google
    ├── index.css                        # site-wide base rules
    ├── data/
    │   ├── brands.js                    # parts, truck and tractor brands, logos, truck models
    │   └── contact.js                   # phone, email, address, map, social links, inquiry email
    ├── pages/                           # one component per page
    └── components/
        ├── PageMeta.jsx, Preloader.jsx, ScrollToTop.jsx
        └── redesign/                    # every section of the site, each with its own CSS file
```

### Routes (`src/routes.js`, `src/App.jsx`)

| Address | Page | Content |
|---|---|---|
| `/` | `Home` | Hero, brands (tabs: parts / trucks / tractors), About teaser, contact details + map |
| `/truck-brands` | `TruckBrands` | Truck brand cards, each linking to its models |
| `/truck-brands/:brandSlug` | `TruckBrandDetails` | One truck brand's models (`slug` from `brands.js`) |
| `/tractor-brands` | `TractorBrands` | Tractor brand cards |
| `/parts-brands` | `PartsBrands` | Parts / oil brand cards |
| `/about-us` | `AboutUs` | Company text and the "why us" cards |
| `/contact-us` | `ContactUs` | Contact cards, inquiry form, map |
| anything else | `NotFound` | "Page not found" with links home and to Contact |

`REDIRECTS` in `src/routes.js` sends old addresses to their new pages: `/index.html`, the `/demo…` preview links
used before the redesign went live, and `/truck-brands/new-holland` and `/truck-brands/tafe` (tractor brands that
once had truck-brand pages).

Every page sits in `SiteLayout` (navbar, page, footer). `Preloader` fades out the loading screen from `index.html`
once the page and its fonts are ready (2.5 s at most); `ScrollToTop` starts each new page at the top.

### Components (`src/components/redesign/`)

| Component | Used on | Notes |
|---|---|---|
| `SiteLayout` | every page | Navbar + page + footer |
| `Navbar` | every page | Fixed top bar; menu button and drop-down menu below 992 px |
| `SiteFooter` | every page | Main contact details, quick links, social icons, quote button |
| `HeroSection` | Home | Headline, stats, hanging-container graphic |
| `BrandsSection` | Home | Tabbed brand tiles (keyboard-accessible tabs) |
| `AboutSection` | Home (`teaser`), About | Company text with the "WHY US?" watermark; the About page adds the cards |
| `ContactStrip` | Home | `ContactInfoCard` + `FindUsCard` side by side |
| `ContactSection` | Contact | `ContactCards`, `ContactForm`, `FindUsCard` |
| `PageHeader` | brand pages, Not Found | Breadcrumb, eyebrow, title, subtitle |
| `BrandDirectory` | brand list pages | Brand cards; linked only on the truck page |
| `TruckModels` | truck brand page | Brand logo and model photo cards |
| `BrandInquiryCta` | brand pages | "Send an inquiry" prompt |
| `SectionHeading` | most sections | Centred eyebrow + title + subtitle |
| `ContactCards`, `ContactInfoCard`, `ContactDetailsList`, `FindUsCard`, `BreakableEmail` | contact areas | Contact details and the Google map |

`navLinks.js` holds the links shared by the navbar and the footer.

---

## 5. Content

All content lives in two data files; pages and sections read from them, so each fact is written once.

- **`src/data/brands.js`:** `partsBrands` (14), `truckBrands` (6, each with `slug` and `models`) and
  `tractorBrands` (8). Used by the home tabs, the brand pages and the search details.
- **`src/data/contact.js`:** `CONTACT_GROUPS` (one block per office; the first is the main one shown in the footer
  and on the home page; every field is optional), `INQUIRY_EMAIL` (where the form sends to), `MAP_EMBED_SRC` and
  `SOCIAL_LINKS`. The WhatsApp link is built from the main phone number.
- **Page titles and descriptions:** `src/seo.js` (section 7).

### Adding a truck brand or model

1. Add the logo to `public/images/truck-brand/` and the model photos to `public/images/Trucks/<Brand>/`.
2. Add the brand (with a unique `slug`) or the model to `truckBrands` in `src/data/brands.js`.

Its page, its title and description, and its place in the sitemap all follow automatically.

### Images

Truck photos and logos are WebP files trimmed to the subject on a white or transparent background, at twice the size
the site shows them: photos up to 800 × 400 px, logos up to 700 × 240 px (a few tens of KB each). JPG and PNG work
too, but keep new files close to those sizes so pages stay fast.

---

## 6. Styling

- Everything sits inside `.am-v2` and uses `v2-` class names. Each section's CSS file sits next to its component.
- `src/components/redesign/theme.css` holds the shared tokens: colours (orange brand scale, slate greys), fonts,
  page width (1280 px), side gutter (32 px, 16 px on phones), navbar height, the space between sections
  (`--v2-section-space`: 64 px, 56 px below 1024 px, 40 px below 768 px), and the shared button styles.
- `src/index.css` only has site-wide base rules (dark background, box sizing, link reset).
- Layout breakpoints: 1024 px (tablet) and 768 px (phone), the navbar's menu button below 992 px, and a few smaller
  tweaks down to 320 px.
- Keyboard users get a visible focus ring. The brand tabs' fade and the footer's scroll to the form follow the
  visitor's "reduce motion" setting.

---

## 7. Search engines and link previews

GitHub Pages can only serve files, so the build gives every page its own HTML file:

- **`src/seo.js`:** each page's title and description (`PAGE_META`), the truck brand pages' descriptions
  (`truckBrandMeta`), the list of pages to publish (`INDEXED_PAGES`), and the business details Google can show
  (`organizationData`, on the home page).
- **`scripts/seo-pages.js`** (Vite plugin) writes into `dist/`:
  - one HTML file per page (`about-us.html` is served at `/about-us`) with its title, description, canonical
    address and link-preview tags already in it
  - a small redirect page for each old address in `REDIRECTS`
  - `404.html` for unknown addresses (kept out of search results)
  - `sitemap.xml` and `robots.txt`
- **`src/components/PageMeta.jsx`** keeps the browser's title and tags right while visitors move between pages.

A new page needs a route in `src/routes.js` and `src/App.jsx`, and entries in `PAGE_META` and `INDEXED_PAGES`.

---

## 8. Deployment

- Every push to `main` runs `.github/workflows/deploy-pages.yml`: `npm ci`, `npm run build` (with the EmailJS
  secrets), then publishes `dist/` to GitHub Pages. The site updates within a minute or two.
- Repository Settings > Pages > Source must be **GitHub Actions**.
- `vite.config.js` has `base: '/'` because the site is served from its own domain.

---

## 9. Known gaps

- `https://www.ambicamotors.com` shows a certificate warning: its DNS record should point to `ravikava.github.io`
  (pending).
- Google Search Console isn't set up yet; once it is, submit `https://ambicamotors.com/sitemap.xml` there.
- The About page has only the company text and the "why us" cards; more About content is being collected.
- A few source images are small and can look soft on high-resolution screens: the Everest, SML and Toyota logos, and
  the Tata 1613, Eicher 11.10 and Eicher 20.16 photos.
