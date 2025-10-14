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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-gray-900/90 shadow backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="font-bold text-xl text-yellow-600">Punakkattuthara Contractors</div>
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} scroll={true} className="text-gray-800 dark:text-gray-100 hover:text-yellow-600 transition-colors font-medium">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
