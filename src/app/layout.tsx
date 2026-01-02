import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // Changed imports
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Punakkattuthara Engineering | Heavy Fabrication & Marine Services",
  description: "Premier engineering firm in Kerala specializing in heavy structural fabrication, marine services, industrial tanks, and equipment rentals. ISO certified quality.",
  keywords: "heavy fabrication, marine engineering, tugboat services, barge rental, industrial tanks, structural steel, Kerala engineering, Punakkattuthara",
  authors: [{ name: "Punakkattuthara Engineering" }],
  creator: "Punakkattuthara Engineering",
  publisher: "Punakkattuthara Engineering",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://punakkattuthara.com",
    siteName: "Punakkattuthara Engineering",
    title: "Punakkattuthara Engineering | Heavy Fabrication & Marine Services",
    description: "Premier engineering firm in Kerala specializing in heavy structural fabrication, marine services, and industrial solutions.",
    images: [
      {
        url: "/final_logo.png",
        width: 800,
        height: 600,
        alt: "Punakkattuthara Engineering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Punakkattuthara Engineering",
    description: "Heavy Fabrication, Marine Services & Industrial Engineering Solutions in Kerala",
    images: ["/final_logo.png"],
  },
  alternates: {
    canonical: "https://punakkattuthara.com",
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

// JSON-LD Structured Data for Local Business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Punakkattuthara Engineering and Contractors",
  "description": "Leading engineering company specializing in heavy structural fabrication, marine services, STP/ETP tanks, and heavy equipment rentals.",
  "url": "https://punakkattuthara.com",
  "logo": "https://punakkattuthara.com/final_logo.png",
  "image": "https://punakkattuthara.com/final_logo.png",
  "telephone": "+91-9971281622",
  "email": "info@lmdinternational.com", // Keeping original email as per file
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kottapuram Rd, Aroor gram panchayat",
    "addressLocality": "Kochi",
    "addressRegion": "Kerala",
    "postalCode": "688534",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "9.8582",
    "longitude": "76.3018"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [],
  "priceRange": "$$",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "9.8582",
      "longitude": "76.3018"
    },
    "geoRadius": "100000"
  },
  "serviceType": [
    "Heavy Structural Fabrication",
    "MS and SS Tanks for STP and ETP",
    "Fire Water Tanks",
    "Heavy Equipment Rentals",
    "TUG Boats",
    "Barges and Pontoons"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=4" />
        <link rel="icon" type="image/png" href="/final_logo.png?v=3" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
