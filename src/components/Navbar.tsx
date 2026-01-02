"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <header role="banner">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${isScrolled
            ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border-gray-200 dark:border-slate-800 shadow-md py-3"
            : "bg-transparent border-transparent py-5"
          }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-3 group"
            aria-label="Punakkattuthara Engineering - Home"
          >
            <div className="bg-white p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-slate-800 group-hover:border-gold-500/50 transition-colors">
              <Image
                src="/final_logo.png"
                alt="Punakkattuthara Engineering and Contractors logo"
                width={70} // Reduced size slightly for cleaner look
                height={70}
                className="rounded-md object-contain w-auto h-12"
                priority
              />
            </div>
            <div className={`flex flex-col ${isScrolled ? "text-slate-900 dark:text-white" : "text-white"}`}>
              <span className="text-lg font-bold uppercase tracking-tight leading-none group-hover:text-gold-500 transition-colors">Punakkattuthara</span>
              <span className="text-[10px] font-medium tracking-wide opacity-80 uppercase">Engineering & Contractors</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8" role="menubar">
              {navLinks.map((link) => (
                <li key={link.name} role="none">
                  <Link
                    href={link.href}
                    className={`relative font-medium text-sm uppercase tracking-wider transition-colors duration-300 py-2 hover:text-gold-500 ${isScrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-100/90 hover:text-white"
                      }`}
                    role="menuitem"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* CTA Button */}
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-white text-sm font-semibold rounded-md shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${isScrolled ? "text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800" : "text-white hover:bg-white/10"
              }`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 md:hidden z-40 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-slate-50 dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out md:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <span className="text-xl font-bold text-slate-900 dark:text-white">Menu</span>
              <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-500 hover:text-slate-900 dark:hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-slate-700 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors border-l-2 border-transparent hover:border-gold-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800">
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gold-600 text-white text-center px-6 py-4 rounded-xl font-bold uppercase tracking-wide hover:bg-gold-700 transition-colors shadow-lg"
              >
                Get Free Quote
              </Link>
              <div className="mt-6 text-center text-sm text-slate-500">
                <p>Support: <a href="tel:+919971281622" className="text-slate-900 dark:text-white font-semibold">+91 9971281622</a></p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
