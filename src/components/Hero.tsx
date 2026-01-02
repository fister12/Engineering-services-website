"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    // Add visible class after mount for animations
    const elements = hero.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, index * 150);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden"
      aria-label="Welcome to Punakkattuthara Engineering"
    >
      {/* Background with Dark Industrial Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        {/* Abstract Gold Glows */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 w-full">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 mb-8 inline-block"
            style={{ transitionDelay: '0ms' }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span className="text-slate-300 text-sm font-medium tracking-wide uppercase">Trusted Engineering Partner Since 1995</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
            style={{ transitionDelay: '150ms' }}
          >
            Precision Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              For Heavy Industry
            </span>
          </h1>

          <p
            className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 text-lg md:text-xl text-slate-400 font-light max-w-2xl leading-relaxed mb-10"
            style={{ transitionDelay: '300ms' }}
          >
            Delivering world-class <span className="text-slate-200 font-medium">fabrication</span>, <span className="text-slate-200 font-medium">marine services</span>, and <span className="text-slate-200 font-medium">industrial solutions</span>. We build the infrastructure that powers progress.
          </p>

          {/* CTA Buttons */}
          <div
            className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 flex flex-col sm:flex-row gap-5"
            style={{ transitionDelay: '450ms' }}
          >
            <a
              href="#contact"
              className="btn-primary flex items-center justify-center gap-2 group"
              aria-label="Get a free quote"
            >
              Get Free Quote
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="px-8 py-3 rounded-lg font-semibold text-slate-300 border border-slate-700 hover:bg-slate-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              aria-label="Explore our services"
            >
              Our Services
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats / Trust Indicators - Redesigned as a grid */}
          <div
            className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 mt-20 pt-10 border-t border-slate-800/60 grid grid-cols-2 md:grid-cols-4 gap-8"
            style={{ transitionDelay: '600ms' }}
          >
            <div>
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Safety Record</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gold-500 mb-1">24/7</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Operational Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:flex flex-col items-center opacity-50 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
      </div>
    </section>
  );
}
