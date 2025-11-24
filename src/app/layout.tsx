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
    icon: '/final_logo(1).png',
    shortcut: '/final_logo(1).png',
    apple: '/final_logo(1).png',
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
        {/* Explicit favicon links to ensure browsers pick up the tab icon */}
        <link rel="icon" href="/final_logo(1).png" />
        <link rel="shortcut icon" href="/final_logo(1).png" />
        <link rel="apple-touch-icon" href="/final_logo(1).png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
