export default function Footer() {
  const whatsappNumber = "919971281622"; // WhatsApp number without + and spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-black dark:from-black dark:via-gray-900 dark:to-black text-white border-t border-gray-800 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-light mb-6">
              <span className="text-yellow-500">Punakkattuthara</span><br />
              <span className="text-xl">Engineering & Contractors</span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-6 max-w-md">
              Specialized in heavy structural fabrication, marine services, and industrial engineering solutions. 
              Your trusted partner for construction and shipping needs.
            </p>
            {/* WhatsApp Contact Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              {/* WhatsApp Icon - Using a reliable SVG path */}
              <svg
                className="w-6 h-6 flex-shrink-0"
                fill="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="font-semibold">Chat on WhatsApp</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-yellow-500 pb-2 inline-block">
              Quick Links
            </h3>
            <div className="space-y-3">
              <a href="#hero" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light hover:translate-x-1 transform duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light hover:translate-x-1 transform duration-200">
                About
              </a>
              <a href="#services" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light hover:translate-x-1 transform duration-200">
                Services
              </a>
              <a href="#gallery" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light hover:translate-x-1 transform duration-200">
                Gallery
              </a>
              <a href="#contact" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light hover:translate-x-1 transform duration-200">
                Contact
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white border-b border-yellow-500 pb-2 inline-block">
              Contact Info
            </h3>
            <div className="space-y-4 text-gray-400 font-light">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Kottapuram Rd, Aroor gram panchayat</p>
                  <p>Kochi, Kerala 688534</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919971281622" className="hover:text-yellow-500 transition-colors">
                  +91 9971281622
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@lmdinternational.com" className="hover:text-yellow-500 transition-colors break-all">
                  info@lmdinternational.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-light text-center md:text-left">
              © {new Date().getFullYear()} Punakkattuthara Engineering and Contractors. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Built with</span>
              <span className="text-yellow-500">⚡</span>
              <span>for excellence</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}