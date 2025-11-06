const socialLinks = [
  { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  { name: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 border-t border-gray-200 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="text-2xl font-light mb-6">
              <span className="text-yellow-500">Punakkattuthara</span><br />
              Engineering & Contractors
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Specialized in heavy structural fabrication, marine services, and industrial engineering solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <a href="#hero" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light">Home</a>
              <a href="#about" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light">About</a>
              <a href="#services" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light">Services</a>
              <a href="#gallery" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light">Gallery</a>
              <a href="#contact" className="block text-gray-400 hover:text-yellow-500 transition-colors font-light">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Info</h3>
            <div className="space-y-3 text-gray-400 font-light">
              <p>Kottapuram Rd, Aroor gram panchayat</p>
              <p>Kochi, Kerala 688534</p>
              <p>+91 9971281622</p>
              <p>info@lmdinternational.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <div className="w-20 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-sm text-gray-500 font-light">
            © {new Date().getFullYear()} Punakkattuthara Engineering and Contractors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}