export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="max-w-5xl mx-auto text-center px-6 py-32">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-white mb-6 leading-tight">
            Punakkattuhar Engineering an contractors
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 font-light">
            Engineering & Marine Services
          </p>
        </div>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
          We build structural solutions using <span className="text-yellow-500">Heavy Fabrication</span>, <span className="text-yellow-500">Marine Vessels</span>, and <span className="text-yellow-500">Industrial Equipment</span>. 
          Specialized in treatment plants and marine operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#contact" 
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-black px-8 py-4 text-lg font-medium hover:bg-yellow-500 hover:text-black transition-all duration-300 rounded-lg"
          >
            Get Started
          </a>
          <a 
            href="#about" 
            className="inline-block border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 text-lg font-medium hover:border-yellow-500 hover:text-yellow-500 transition-all duration-300 rounded-lg"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
