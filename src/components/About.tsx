export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-6">
            About <span className="text-yellow-500">Us</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
              We specialize in heavy structural fabrication, marine services, and industrial engineering solutions. From steel tanks for treatment plants to tugboats and barges, we deliver comprehensive engineering and marine services for industrial and commercial projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-light mb-8">
              Every project is completed with attention to safety, efficiency, and quality standards.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Fabrication', 'Marine Engineering', 'Equipment Rental', 'Industrial Solutions'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                To provide innovative engineering solutions that build the foundation for industrial progress and marine operations.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-3">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light">
                Leading the industry in sustainable fabrication and marine engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
