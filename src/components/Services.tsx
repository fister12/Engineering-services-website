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
              className="group bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-yellow-500 dark:hover:border-yellow-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
