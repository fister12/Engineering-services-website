"use client";

import { useState } from "react";

const services = [
  {
    name: "Heavy Structural Fabrication",
    description: "Custom steel structures, industrial frameworks, and heavy-duty fabrication solutions.",
    detailedInfo: "We specialize in manufacturing and assembling heavy-duty steel structures for industrial and commercial projects. Our services include custom design, precision cutting, welding, and installation of structural components. With state-of-the-art equipment and experienced engineers, we deliver robust fabrication solutions that meet the highest safety and quality standards."
  },
  {
    name: "MS and SS Tanks for STP and ETP",
    description: "Mild steel and stainless steel tanks for sewage and effluent treatment plants.",
    detailedInfo: "Our MS and SS tanks are designed specifically for Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP). We manufacture tanks in various capacities and configurations to suit your specific requirements. Our tanks feature corrosion-resistant coatings, reinforced structures, and comply with all environmental regulations. We handle everything from design to installation and commissioning."
  },
  {
    name: "Fire Water Tanks",
    description: "Specialized fire protection water storage systems and safety infrastructure.",
    detailedInfo: "We design and install fire water storage systems that comply with fire safety regulations and insurance requirements. Our tanks are available in various materials including MS, SS, and FRP. We provide complete solutions including tank design, pump systems, piping networks, and fire hydrant connections. All installations meet NFPA and local fire department standards."
  },
  {
    name: "Heavy Equipment Rentals",
    description: "Modern, well-maintained construction and industrial equipment for rent.",
    detailedInfo: "Access our extensive fleet of construction and industrial equipment on flexible rental terms. Our inventory includes cranes, excavators, loaders, forklifts, compressors, and more. All equipment is regularly serviced and maintained to ensure optimal performance and safety. We offer short-term and long-term rental options with operator support available upon request."
  },
  {
    name: "TUG Boats",
    description: "Marine tugboat services for vessel assistance and harbor operations.",
    detailedInfo: "Our tugboat services support maritime operations including ship berthing, unberthing, towing, and emergency assistance. We operate a fleet of modern tugs with experienced crews available 24/7. Our vessels are equipped with powerful engines and advanced navigation systems to handle vessels of all sizes safely and efficiently in ports and offshore locations."
  },
  {
    name: "Barges & Pontoons",
    description: "Marine transportation solutions and floating platform services.",
    detailedInfo: "We provide a range of barges and pontoons for cargo transportation, construction support, and floating platforms. Our fleet includes flat-deck barges, crane barges, and modular pontoon systems. Whether you need to transport heavy equipment, support marine construction, or create temporary floating structures, we have the right solution for your project."
  }
];

interface ServiceModalProps {
  service: typeof services[0] | null;
  isOpen: boolean;
  onClose: () => void;
}

function ServiceModal({ service, isOpen, onClose }: ServiceModalProps) {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300" />

      {/* Modal Content */}
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100 animate-modal-enter"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-7 h-7 bg-white rounded-lg" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                {service.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-2">
              Overview
            </h4>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-yellow-500 uppercase tracking-wider mb-2">
              Detailed Information
            </h4>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {service.detailedInfo}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 pb-8">
          <button
            onClick={onClose}
            className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Close
          </button>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section id="services" className="bg-gray-50 dark:bg-gray-900 py-24 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-3xl mx-auto">
            Comprehensive engineering and marine solutions for industrial projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openModal(service)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openModal(service);
                }
              }}
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <div className="w-6 h-6 bg-yellow-500 rounded"></div>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-yellow-500 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                <span>Learn more</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
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
