const services = [
  {
    name: "Heavy Structural Fabrication",
    description: "Custom steel structures, industrial frameworks, and heavy-duty fabrication solutions."
  },
  {
    name: "MS and SS Tanks for STP and ETP",
    description: "Mild steel and stainless steel tanks for sewage and effluent treatment plants."
  },
  {
    name: "Fire Water Tanks",
    description: "Specialized fire protection water storage systems and safety infrastructure."
  },
  {
    name: "Heavy Equipment Rentals",
    description: "Modern, well-maintained construction and industrial equipment for rent."
  },
  {
    name: "TUG Boats",
    description: "Marine tugboat services for vessel assistance and harbor operations."
  },
  {
    name: "Barges & Pontoons",
    description: "Marine transportation solutions and floating platform services."
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-white mb-4">
            Our <span className="text-yellow-500">Services</span>
          </h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 font-light">
            Comprehensive solutions for your construction needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.name} className="text-center bg-gray-900 p-8 hover:bg-gray-800 transition-colors duration-300 border border-gray-700">
              <h3 className="text-2xl font-light text-white mb-4 border-b border-yellow-500 pb-2">{service.name}</h3>
              <p className="text-lg text-gray-300 font-light leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
