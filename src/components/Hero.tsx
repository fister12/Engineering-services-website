export default function Hero() {
  return (
    <section id="hero" className="relative flex items-center justify-center min-h-[70vh] bg-yellow-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="relative z-10 text-center max-w-2xl mx-auto py-20 px-4">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 drop-shadow-lg">Heavy Equipment Rentals, Construction, Plumbing & More</h1>
        <p className="text-lg sm:text-2xl mb-8 font-medium">Professional, reliable building services for every project.</p>
        <a href="#contact" className="inline-block bg-white text-yellow-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-100 transition-all text-lg">Get a Quote</a>
      </div>
    </section>
  );
}
