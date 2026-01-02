"use client";

import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const whatsappNumber = "919971281622";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-slate-950 text-white border-t border-slate-900"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div
            className={`lg:col-span-2 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <div className="mb-6">
              <span className="text-3xl font-bold text-white font-heading tracking-tight block">Punakkattuthara</span>
              <span className="text-gold-500 text-sm font-semibold tracking-widest uppercase mt-1 block">Engineering & Contractors</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-md text-lg">
              Your trusted partner for heavy structural fabrication, marine services,
              and industrial engineering solutions in Kerala and beyond.
            </p>

            {/* WhatsApp Contact Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:-translate-y-1 group"
              aria-label="Chat with us on WhatsApp"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Links */}
          <nav
            className={`transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            aria-label="Footer navigation"
          >
            <h3 className="text-lg font-bold mb-6 text-white font-heading">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", href: "#hero" },
                { name: "About Us", href: "#about" },
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Contact", href: "#contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-gold-500 transition-all duration-200 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <address
            className={`not-italic transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            <h3 className="text-lg font-bold mb-6 text-white font-heading">
              Contact Info
            </h3>
            <div className="space-y-5 text-slate-400">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors border border-slate-800 group-hover:border-gold-500/30">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Our Location</p>
                  <p>Kottapuram Rd, Aroor</p>
                  <p>Kochi, Kerala 688534</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors border border-slate-800 group-hover:border-gold-500/30">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Phone Number</p>
                  <a href="tel:+919971281622" className="hover:text-gold-500 transition-colors">
                    +91 9971281622
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/10 transition-colors border border-slate-800 group-hover:border-gold-500/30">
                  <svg className="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Email Address</p>
                  <a href="mailto:info@lmdinternational.com" className="hover:text-gold-500 transition-colors break-all">
                    info@lmdinternational.com
                  </a>
                </div>
              </div>
            </div>
          </address>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t border-slate-900 pt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
            <p className="text-center md:text-left">
              © {new Date().getFullYear()} Punakkattuthara Engineering. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <span>Engineered with precision for</span>
              <span className="text-gold-500">Excellence</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 w-12 h-12 bg-gold-600 text-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gold-500 hover:-translate-y-1 transition-all duration-300 z-40 border border-gold-400/20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}