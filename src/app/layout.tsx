import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, Poppins, Noto_Serif_Devanagari, Great_Vibes } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";

const fontCormorant = Cormorant_Garamond({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const fontCinzel = Cinzel({
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const fontPoppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const fontHindi = Noto_Serif_Devanagari({
  weight: ["400", "500", "600", "700"],
  subsets: ["devanagari"],
  variable: "--font-hindi",
  display: "swap",
});

const fontScript = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gdcaterers.in"),
  title: `${siteConfig.brandName} Dhampur | Royal Indian Wedding Catering & Halwai Heritage`,
  description: `${siteConfig.brandName} - A proud unit of Gudduramji Halwai, Dhampur. Grand wedding catering, authentic halwai sweets in pure desi ghee, live gourmet counters & 5-star service in Dhampur, Bijnor, UP.`,
  keywords: [
    "caterers in Dhampur",
    "wedding catering Dhampur",
    "halwai Dhampur",
    "Gudduramji halwai",
    "best catering service Bijnor",
    "G.D. Caterers",
    "royal Indian catering UP",
    "luxury wedding banquet Dhampur"
  ],
  authors: [{ name: "G.D. Caterers" }],
  openGraph: {
    title: `${siteConfig.brandName} | Royal Indian Feast | Dhampur`,
    description: "Where Every Celebration Becomes a Royal Feast. Luxury wedding catering, pure desi ghee sweets, and live gourmet counters.",
    url: "https://gdcaterers.in",
    siteName: siteConfig.brandName,
    images: [
      {
        url: "/assets/images/hero-buffet.jpg",
        width: 1200,
        height: 675,
        alt: "G.D. Caterers Royal Wedding Buffet",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brandName} | Dhampur`,
    description: "A proud unit of Gudduramji Halwai. Grand wedding catering and royal feasts.",
    images: ["/assets/images/hero-buffet.jpg"],
  },
  icons: {
    icon: "/assets/logo/crest.svg",
    apple: "/assets/logo/crest.svg",
  },
  alternates: {
    canonical: "https://gdcaterers.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#B3202A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fontCormorant.variable} ${fontCinzel.variable} ${fontPoppins.variable} ${fontHindi.variable} ${fontScript.variable} scroll-smooth`}
    >
      <body className="bg-[#FDFBF7] text-[#2D0B0E] font-body antialiased selection:bg-[#B3202A] selection:text-[#FFF]">
        {children}
      </body>
    </html>
  );
}
