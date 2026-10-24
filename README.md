# G.D. Caterers, Dhampur — Royal Wedding Catering Website
**"A proud unit of Gudduramji Halwai"**

A royal, luxury-themed, mobile-first catering web application built with **Next.js 15+ (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **Lucide Icons**.

---

## 🌟 Key Highlights
- **Royal Indian Feast Aesthetic**: Crimson red (`#B3202A`), Warm Cream/Parchment (`#FDFBF7`), and Antique Gold (`#C9A24B`) palette.
- **Royal Preloader**: SVG stroke drawing animation of the royal crimson crest with monogram and crown reveal.
- **Cinematic Hero Slideshow**: Slow-zoom Ken Burns animation, floating gold particle canvas, word-by-word royal headline, and dual CTAs.
- **Heritage Timeline**: Chronicling the halwai master origins of Gudduramji Halwai with marked placeholders.
- **Filterable Menu Showcase**: Starters, Mains, Breads, Live Counters, Sweets, Desserts, and Beverages with starting plate prices editable from JSON.
- **Direct WhatsApp Dispatch**: Event inquiry form validates and instantly prepares a formatted WhatsApp inquiry to `+91 9012841000`.
- **Bilingual Support**: Toggle between English and हिंदी across all major sections.
- **LocalBusiness SEO**: Structured JSON-LD schema, dynamic sitemap, and robots.txt.

---

## 📁 Project Directory Structure
```
gd-catering-website/
├── public/
│   └── assets/
│       ├── images/        # High-res photography (Buffet, Tandoor, Sweets, Thali)
│       ├── decor/         # SVG botanical cut-outs (Chillies, Lemon, Coriander, Waves)
│       └── logo/          # Royal Crest SVG & Favicon
├── src/
│   ├── app/
│   │   ├── globals.css    # Royal theme variables, gradients, and animations
│   │   ├── layout.tsx     # Google fonts (Cormorant, Cinzel, Poppins, Hindi, Script)
│   │   ├── page.tsx       # Main page assembling all 12 sections
│   │   ├── robots.ts      # Search engine crawler directives
│   │   └── sitemap.ts     # Dynamic XML sitemap
│   ├── components/        # Preloader, Navbar, Hero, Menu, Gallery, Form, etc.
│   └── data/
│       ├── siteConfig.ts  # Phones, WhatsApp, Address, Socials & Stats
│       ├── menu.json      # Dishes, descriptions, plate prices & categories
│       ├── services.json  # 7 core catering solutions
│       ├── timeline.json  # Heritage history milestones
│       ├── events.json    # Grand celebrations showcase
│       ├── gallery.json   # Photo and video showcase
│       └── testimonials.json # Client review quotes & star ratings
├── MEDIA_NOTES.md         # Inventory of AI images and replacement instructions
└── README.md              # Documentation & deployment guide
```

---

## 🛠️ How to Edit Content & Placeholders

### 1. Changing Phone Numbers, WhatsApp & Address
Edit file: `src/data/siteConfig.ts`
```typescript
phones: [
  { display: "+91 90128 41000", raw: "9012841000", link: "tel:+919012841000" },
  { display: "+91 70558 57777", raw: "7055857777", link: "tel:+917055857777" },
],
whatsapp: {
  number: "919012841000", // Receiving WhatsApp number
  ...
},
address: {
  full: "Your Exact Shop / Office Address, Dhampur, Bijnor, UP - 246761",
  mapsEmbedUrl: "Paste Google Maps Embed Iframe URL"
}
```

### 2. Editing Dishes, Categories & Per-Plate Prices
Edit file: `src/data/menu.json`
```json
{
  "id": "paneer-tikka",
  "name": "Shahi Angara Paneer Tikka",
  "nameHindi": "शाही अंगारा पनीर टिक्का",
  "category": "starters",
  "startingPrice": "₹450",
  "image": "/assets/images/menu-paneer-tikka.jpg"
}
```

### 3. Editing Heritage History Milestones
Edit file: `src/data/timeline.json`
- Replace `[YEAR FOUNDED]` (e.g., 1985)
- Replace `[FOUNDER NAME]` (e.g., Shri Gudduramji Halwai)
- Replace `[MILESTONE YEAR]` with real milestones

### 4. Updating Grand Events & Real Client Photos
Edit file: `src/data/events.json`
- Replace `[EVENT NAME]` (e.g., Mittal Family Destination Wedding)
- Replace `[CLIENT NAME]` and `[CITY, YEAR]`
- Swap images in `public/assets/images/`

---

## 🚀 Running Locally

```bash
# 1. Enter project directory
cd gd-catering-website

# 2. Install dependencies (if not already installed)
npm install

# 3. Start local development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment Options

### Option A: Deploy to Vercel (Recommended for Next.js)
1. Push your code to a GitHub/GitLab repository.
2. Sign in to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import the repository and select framework as **Next.js**.
4. Click **Deploy**. Vercel will automatically build and assign a global CDN URL.

### Option B: Deploy to Netlify
1. Connect your repository in [Netlify](https://netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `.next`
4. Deploy!

### Option C: Shared Hosting (cPanel / Apache / Nginx via Static Export)
If you want to host on traditional shared hosting (like Hostinger, GoDaddy, Bluehost):
1. In `next.config.ts`, add:
   ```typescript
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
   };
   export default nextConfig;
   ```
2. Run:
   ```bash
   npm run build
   ```
3. A folder named `out/` will be generated containing pure static HTML, CSS, JS, and images.
4. Upload all files from `out/` directly into your cPanel `public_html/` folder!

---

## 📋 Summary of Placeholders to Replace for Owner
1. **Founder & Founding Year**: `src/data/timeline.json` (`[YEAR FOUNDED]`, `[FOUNDER NAME]`).
2. **Office Street Address**: `src/data/siteConfig.ts` (`[SHOP / OFFICE ADDRESS, DHAMPUR]`).
3. **Google Maps Embed Link**: `src/data/siteConfig.ts` (`address.mapsEmbedUrl`).
4. **Social Handles**: `src/data/siteConfig.ts` (`socialLinks.instagram`, `facebook`, `youtube`).
5. **Real Event Photos**: `src/data/events.json` (`[EVENT NAME]`, `[CLIENT NAME]`).
6. **Per-Plate Starting Prices**: `src/data/menu.json` (`startingPrice` values).
7. **Client Testimonials**: `src/data/testimonials.json` (Replace sample names with approved real client reviews).
