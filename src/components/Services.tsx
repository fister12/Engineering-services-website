"use client";

import { useState, useEffect, useRef } from "react";

// Service icons as SVG components
const ServiceIcons = {
  fabrication: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  tanks: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  fire: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
    </svg>
  ),
  equipment: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  tugboat: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 17l.5-1.5c.5-1.5 2-2.5 3.5-2.5h10c1.5 0 3 1 3.5 2.5L21 17M3 17v2a1 1 0 001 1h16a1 1 0 001-1v-2M3 17h18M7 13V9a1 1 0 011-1h2a1 1 0 011 1v4M14 13V7a1 1 0 011-1h2a1 1 0 011 1v6" />
    </svg>
  ),
  barge: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 16l2-2h14l2 2M3 16v3a1 1 0 001 1h16a1 1 0 001-1v-3M5 14v-4a1 1 0 011-1h12a1 1 0 011 1v4M8 9V6a1 1 0 011-1h6a1 1 0 011 1v3" />
    </svg>
  ),
};

const services = [
  {
    name: "Heavy Structural Fabrication",
    description: "Custom steel structures, industrial frameworks, and heavy-duty fabrication solutions.",
    detailedInfo: "We specialize in manufacturing and assembling heavy-duty steel structures for industrial and commercial projects. Our services include custom design, precision cutting, welding, and installation of structural components. With state-of-the-art equipment and experienced engineers, we deliver robust fabrication solutions that meet the highest safety and quality standards.",
    icon: "fabrication",
    features: ["Custom Design", "Precision Welding", "Quality Certified"]
  },
  {
    name: "MS and SS Tanks for STP and ETP",
    description: "Mild steel and stainless steel tanks for sewage and effluent treatment plants.",
    detailedInfo: "Our MS and SS tanks are designed specifically for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP). We manufacture tanks in various capacities and configurations to suit your specific requirements. Our tanks feature corrosion-resistant coatings, reinforced structures, and comply with all environmental regulations. We handle everything from design to installation and commissioning.",
    icon: "tanks",
    features: ["Corrosion Resistant", "Custom Capacity", "Eco Compliant"]
  },
  {
    name: "Fire Water Tanks",
    description: "Specialized fire protection water storage systems and safety infrastructure.",
    detailedInfo: "We design and install fire water storage systems that comply with fire safety regulations and insurance requirements. Our tanks are available in various materials including MS, SS, and FRP. We provide complete solutions including tank design, pump systems, piping networks, and fire hydrant connections. All installations meet NFPA and local fire department standards.",
    icon: "fire",
    features: ["NFPA Compliant", "Complete Systems", "24/7 Ready"]
  },
  {
    name: "Heavy Equipment Rentals",
    description: "Modern, well-maintained construction and industrial equipment for rent.",
    detailedInfo: "Access our extensive fleet of construction and industrial equipment on flexible rental terms. Our inventory includes cranes, excavators, loaders, forklifts, compressors, and more. All equipment is regularly serviced and maintained to ensure optimal performance and safety. We offer short-term and long-term rental options with operator support available upon request.",
    icon: "equipment",
    features: ["Flexible Terms", "Maintained Fleet", "Operator Support"]
  },
  {
    name: "TUG Boats",
    description: "Marine tugboat services for vessel assistance and harbor operations.",
    detailedInfo: "Our tugboat services support maritime operations including ship berthing, unberthing, towing, and emergency assistance. We operate a fleet of modern tugs with experienced crews available 24/7. Our vessels are equipped with powerful engines and advanced navigation systems to handle vessels of all sizes safely and efficiently in ports and offshore locations.",
    icon: "tugboat",
    features: ["24/7 Available", "Experienced Crew", "All Vessel Sizes"]
  },
  {
    name: "Barges & Pontoons",
    description: "Marine transportation solutions and floating platform services.",
    detailedInfo: "We provide a range of barges and pontoons for cargo transportation, construction support, and floating platforms. Our fleet includes flat-deck barges, crane barges, and modular pontoon systems. Whether you need to transport heavy equipment, support marine construction, or create temporary floating structures, we have the right solution for your project.",
    icon: "barge",
    features: ["Heavy Cargo", "Modular Systems", "Marine Construction"]
  }
];

interface ServiceModalProps {
  service: typeof services[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300" />

      {/* Modal Content */}
      <article
        className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 animate-scale-in border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <header className="bg-gradient-to-r from-gold-600 to-gold-500 p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm text-white border border-white/20">
                {ServiceIcons[service.icon as keyof typeof ServiceIcons]}
              </div>
              <h3 id="modal-title" className="text-2xl font-bold text-white font-heading">
                {service.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        {/* Body */}
        <div className="p-8 overflow-y-auto max-h-[60vh]">
          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-8">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-4 py-1.5 bg-gold-50 dark:bg-gold-500/10 text-gold-700 dark:text-gold-400 text-sm font-semibold rounded-full border border-gold-200 dark:border-gold-500/20"
              >
                {feature}
              </span>
            ))}
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Overview
            </h4>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Detailed Information
            </h4>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              {service.detailedInfo}
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="p-8 pt-0 flex gap-4">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 py-4 px-6 bg-gold-600 hover:bg-gold-500 text-white font-bold rounded-xl transition-all duration-300 text-center shadow-lg hover:shadow-gold-500/20"
          >
            Request Quote
          </a>
          <button
            onClick={onClose}
            className="py-4 px-6 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold rounded-xl hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-300"
          >
            Close
          </button>
        </footer>
      </article>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openModal = (service: typeof services[0]) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-slate-50 dark:bg-slate-900 py-32 transition-colors duration-500"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <header className="text-center mb-20">
          <h2
            id="services-heading"
            className={`text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 font-heading transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
          >
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div
            className={`w-24 h-1.5 bg-gradient-to-r from-gold-500 to-gold-700 mx-auto mb-8 rounded-full transition-all duration-700 delay-100 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }`}
          />
          <p
            className={`text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            Comprehensive engineering and marine solutions tailored for industrial excellence
          </p>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={service.name}
              className={`group bg-slate-800/80 backdrop-blur-md border border-slate-700 p-10 rounded-2xl transition-all duration-500 cursor-pointer hover-lift hover:border-gold-500/50 hover:shadow-2xl hover:shadow-gold-500/10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
              onClick={() => openModal(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(service);
                }
              }}
              aria-label={`Learn more about ${service.name}`}
            >
              {/* Icon */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300 text-gold-500 border border-slate-700 group-hover:border-gold-500 shadow-lg">
                  {ServiceIcons[service.icon as keyof typeof ServiceIcons]}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-500 transition-colors duration-300 font-heading">
                  {service.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              {/* Features Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-slate-900 text-slate-400 text-xs font-semibold uppercase tracking-wider rounded-lg border border-slate-700 group-hover:border-slate-600 transition-colors"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div className="flex items-center text-gold-500 font-bold text-sm tracking-wide uppercase group-hover:gap-3 transition-all duration-300">
                <span>View Details</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`mt-24 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0 delay-[800ms]" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-gold-500/20 to-slate-500/20 backdrop-blur-sm">
            <div className="bg-white dark:bg-slate-950 rounded-xl px-12 py-12 border border-slate-100 dark:border-slate-800 shadow-2xl">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Have a Complex Project?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
                We specialize in custom engineering solutions. Let&apos;s discuss your requirements and how we can add value.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-10 py-4 rounded-xl font-bold hover:bg-gold-500 hover:text-white dark:hover:bg-gold-500 dark:hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg"
              >
                Start Conversation
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
