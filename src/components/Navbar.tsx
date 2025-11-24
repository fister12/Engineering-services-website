import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3 text-gray-900 dark:text-white -ml-2 md:-ml-4">
              <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <Image
                  src="/final_logo.png"
                  alt="Punakkattuthara logo"
                  width={180}
                  height={180}
                  className="rounded-md object-contain"
                />
              </div>
          <div className="text-xl font-medium leading-tight ml-2">
            <span className="text-yellow-500">Punakkattuthara</span> <span className="block text-sm font-light">Engineering & Contractors</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  scroll={true} 
                  className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-200 font-normal relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
