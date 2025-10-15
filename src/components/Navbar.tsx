import Link from "next/link";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-xl font-medium text-white">
          <span className="text-yellow-500">Punakkattuthara</span> Engineering & Contractors
        </div>
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                scroll={true} 
                className="text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-normal"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
