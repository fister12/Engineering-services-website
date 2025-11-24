import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Punakkattuthara Engineering and Contractors",
  description: "Professional heavy equipment rentals, construction, plumbing, and comprehensive building solutions",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Explicit favicon links to ensure browsers pick up the tab icon. */}
        {/* Some browsers cache aggressively or have issues with parentheses in filenames – provide a clean fallback. */}
        {/* Use cache-busting query params so browsers fetch the updated icon when you deploy. */}
        <link rel="icon" href="/favicon.ico?v=4" />
        <link rel="shortcut icon" href="/favicon.ico?v=4" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=4" />
        {/* keep the site logo as a fallback for browsers that prefer PNG */}
        <link rel="icon" type="image/png" href="/final_logo.png?v=3" />
        {/* If you still see the old icon, add a real /favicon.ico (binary .ico) at /public and update the href above. */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
