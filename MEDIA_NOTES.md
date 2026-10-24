# MEDIA NOTES & ASSET INVENTORY
**G.D. Caterers, Dhampur (A proud unit of Gudduramji Halwai)**

This document details all media assets created and utilized on the website, clearly distinguishing AI-generated imagery and placeholders so the brand owners can swap in their authentic event and kitchen photos when ready.

---

## 1. Brand Identity & Crest Monogram
| Asset File | Format | Source | Description | Action for Owner |
|---|---|---|---|---|
| `/assets/logo/crest.svg` | Scalable Vector SVG | Custom Digital Illustration | Recreated from brand flyer. Crimson royal crest with 5-point crown, laurel wreath, inner beaded ring, and "G.D." monogram. | Ready for print & web. Replace with vector AI/CDR file if available. |
| `/assets/decor/filigree-divider.svg` | SVG | Custom Vector | Symmetrical gold filigree ornamental divider with central rosette. | Production ready. |
| `/assets/decor/corner-ornament.svg` | SVG | Custom Vector | Baroque royal gold corner bracket for cards and frames. | Production ready. |
| `/assets/decor/lemon-slice.svg` | SVG | Custom Vector | Translucent fresh lemon slice for floating parallax motifs. | Production ready. |
| `/assets/decor/chillies.svg` | SVG | Custom Vector | Red & green fresh Indian chillies for culinary background aesthetics. | Production ready. |
| `/assets/decor/coriander.svg` | SVG | Custom Vector | Organic green coriander sprig for food freshness accents. | Production ready. |
| `/assets/decor/gold-wave.svg` | SVG | Custom Vector | Silky drifting gold ribbon wave for ambient background motion. | Production ready. |

---

## 2. Hero & Ambience Photography
| Asset File | Format | Dimensions | Generation Model | Description | Replacement Recommendation |
|---|---|---|---|---|---|
| `/assets/images/hero-buffet.jpg` | JPG / WebP | 1920x1080 (16:9) | Gemini Nano Banana (Ultra-realistic) | Lavish royal Indian wedding buffet at night with steaming brass & copper chafers, marigolds, red roses, and candelabras. | Replace with wide-angle photo of G.D. Caterers' real wedding banquet buffet setup. |
| `/assets/images/hero-live-counter.jpg` | JPG / WebP | 1920x1080 (16:9) | Gemini Nano Banana (Ultra-realistic) | Indian chefs in royal maroon turbans at live charcoal tandoor and live chaat station with embers and garlands. | Replace with real photos of your uniformed chef teams live cooking in Dhampur/Bijnor. |
| `/assets/images/hero-banquet-hall.jpg` | JPG / WebP | 1920x1080 (16:9) | Gemini Nano Banana (Ultra-realistic) | Palatial reception hall with crystal chandeliers, crimson velvet drapes, and dining guests. | Replace with real indoor banquet or hotel ballroom weddings catered by you. |

---

## 3. Halwai Heritage & Tradition
| Asset File | Format | Dimensions | Generation Model | Description | Replacement Recommendation |
|---|---|---|---|---|---|
| `/assets/images/halwai-heritage.jpg` | JPG / WebP | 1600x1200 (4:3) | Gemini Nano Banana (Ultra-realistic) | Elderly master Indian halwai stirring pure desi ghee sweets in a massive bronze kadhai over hearth. | **High Priority:** Replace with vintage or authentic photograph of Shri Gudduramji Halwai or founding family workshop. |

---

## 4. Culinary Showcase & Menu Items
| Asset File | Dish Name | Model Source | Description |
|---|---|---|---|
| `/assets/images/menu-paneer-tikka.jpg` | Shahi Angara Paneer Tikka | Gemini Nano Banana | Tandoori marinated charred cottage cheese on antique brass thali with mint chutney & lemon. |
| `/assets/images/menu-dal-makhani.jpg` | Heritage Dal Bukhara / Makhani | Gemini Nano Banana | Slow-simmered black lentils in hammered copper handi with white butter swirl and garlic naan. |
| `/assets/images/menu-biryani.jpg` | Nawabi Dum Veg Biryani | Gemini Nano Banana | Fragrant saffron basmati rice sealed with dough, pomegranate raita, and spicy salan. |
| `/assets/images/menu-jalebi-rabri.jpg` | Desi Ghee Jalebi with Rabri | Gemini Nano Banana | Saffron spiral jalebi with chilled laccha rabri in earthen kulhad, pistachios, and chandi varq. |
| `/assets/images/menu-chaat-counter.jpg` | Purani Dilli Shahi Chaat | Gemini Nano Banana | Royal chaat station with dahi bhalla, golgappe, and papdi chaat in brass vessels with flower canopy. |
| `/assets/images/menu-mithai-platter.jpg` | Royal Chandi Varq Mithai Thal | Gemini Nano Banana | Assorted kaju katli, gulab jamun, rasmalai, ladoos on ornate hammered gold tray with rose petals. |
| `/assets/images/menu-spring-rolls.jpg` | Crispy Golden Spring Rolls | Gemini Nano Banana | Diagonally sliced spring rolls on black plate with sweet chilli dip and fresh lettuce. |
| `/assets/images/menu-royal-thali.jpg` | Maharaja Grand Royal Thali | Gemini Nano Banana | 12-katori maharaja thali on polished brass platter with curries, breads, raita and sweets. |
| `/assets/images/event-wedding-stage.jpg` | Grand Wedding Mandap & Stage | Gemini Nano Banana | Palace wedding stage with cascading roses, golden arches, and royal throne chairs. |

---

## 5. Guidelines for Swapping Images
1. Save high-resolution photos in JPG or WebP format.
2. Keep file names identical (e.g. `public/assets/images/menu-paneer-tikka.jpg`) or update paths in `src/data/menu.json` and `src/data/gallery.json`.
3. Recommended aspect ratios:
   - **Hero Slides & Video Previews:** `16:9` (e.g., 1920x1080)
   - **Menu Dishes & Culinary:** `4:3` or `1:1` (e.g., 1200x900 or 1000x1000)
   - **Logo & Crest:** SVG (infinite resolution) or PNG with transparent background.
