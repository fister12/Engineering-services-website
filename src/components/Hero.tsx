export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-5xl mx-auto text-center px-6 py-32">
        <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight">
          Professional <span className="text-yellow-500">Building Services</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Heavy equipment rentals, construction, plumbing, and comprehensive building solutions for your projects.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-white text-black px-8 py-4 text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
