import React from "react";
import { siteConfig } from "@/data/siteConfig";

export default function LocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    "name": "G.D. Caterers, Dhampur",
    "alternateName": "G.D. Caterers - A proud unit of Gudduramji Halwai",
    "image": "https://gdcaterers.in/assets/images/hero-buffet.jpg",
    "logo": "https://gdcaterers.in/assets/logo/crest.svg",
    "@id": "https://gdcaterers.in",
    "url": "https://gdcaterers.in",
    "telephone": ["+919012841000", "+917055857777"],
    "priceRange": "₹₹₹",
    "servesCuisine": [
      "Royal Indian",
      "North Indian",
      "Halwai Sweets",
      "Awadhi",
      "Vegetarian",
      "Live Street Chaat"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address.street,
      "addressLocality": "Dhampur",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "246761",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.308252,
      "longitude": 78.473523
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      siteConfig.socialLinks.instagram,
      siteConfig.socialLinks.facebook,
      siteConfig.socialLinks.youtube
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
