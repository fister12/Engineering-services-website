const socialLinks = [
  { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  { name: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="text-lg font-light mb-8">
          <span className="text-yellow-500">Punakkattuthara</span> Engineering & Contractors
        </div>
        <div className="flex justify-center gap-8 mb-8">
          <a href="#hero" className="text-gray-400 hover:text-yellow-500 transition-colors font-light">Home</a>
          <a href="#about" className="text-gray-400 hover:text-yellow-500 transition-colors font-light">About</a>
          <a href="#services" className="text-gray-400 hover:text-yellow-500 transition-colors font-light">Services</a>
          <a href="#gallery" className="text-gray-400 hover:text-yellow-500 transition-colors font-light">Gallery</a>
          <a href="#contact" className="text-gray-400 hover:text-yellow-500 transition-colors font-light">Contact</a>
        </div>
        <div className="w-16 h-0.5 bg-yellow-500 mx-auto mb-6"></div>
        <div className="text-sm text-gray-500 font-light">© {new Date().getFullYear()} Punakkattuthara Engineering and Contractors. All rights reserved.</div>
      </div>
    </footer>
  );
}