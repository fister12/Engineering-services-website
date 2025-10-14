const socialLinks = [
  { name: "Facebook", href: "#", icon: "fab fa-facebook-f" },
  { name: "Instagram", href: "#", icon: "fab fa-instagram" },
  { name: "LinkedIn", href: "#", icon: "fab fa-linkedin-in" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
  <div className="font-bold text-xl text-yellow-600">Heavy Equipment & Building Services</div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-yellow-400">Home</a>
          <a href="#about" className="hover:text-yellow-400">About</a>
          <a href="#services" className="hover:text-yellow-400">Services</a>
          <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-yellow-400" aria-label={link.name}>
              <i className={link.icon + " text-xl"}></i>
            </a>
          ))}
        </div>
      </div>
  <div className="text-center text-gray-400 mt-4 text-sm">© {new Date().getFullYear()} Heavy Equipment & Building Services. All rights reserved.</div>
    </footer>
  );
}
