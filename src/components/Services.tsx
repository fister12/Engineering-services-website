const services = [
  {
    name: "Heavy Equipment Rentals",
    description: "Modern, well-maintained equipment for every job size."
  },
  {
    name: "Construction Services",
    description: "Expert building, renovation, and project management."
  },
  {
    name: "Plumbing Solutions",
    description: "Professional plumbing installation, repair, and maintenance."
  },
  {
    name: "Building Services",
    description: "Electrical, painting, landscaping, and specialized trades."
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
