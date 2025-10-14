const services = [
  {
    name: "Heavy Equipment Rentals",
    icon: "🚜",
    description: "Modern, well-maintained equipment for every job size."
  },
  {
    name: "Construction",
    icon: "🏗️",
    description: "Expert building, renovation, and project management."
  },
  {
    name: "Plumbing",
    icon: "🔧",
    description: "Professional plumbing installation, repair, and maintenance."
  },
  {
    name: "Other Building Services",
    icon: "🛠️",
    description: "Electrical, painting, landscaping, and more."
  }
];

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {services.map((service) => (
          <div key={service.name} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:scale-105 transition-transform">
            <span className="text-5xl mb-4">{service.icon}</span>
            <h3 className="text-xl font-bold mb-2 text-yellow-700">{service.name}</h3>
            <p className="text-gray-700 dark:text-gray-200">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
