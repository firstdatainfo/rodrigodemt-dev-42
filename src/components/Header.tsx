import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Bio Rodrigo Dev MT", path: "/sistema-erp" },
    { name: "Sistema de Eventos", path: "#sistema-de-eventos" },
    { name: "Sistema de Automações", path: "#sistema-de-automacoes" },
    { name: "Sobre", path: "#sobre" },
    { name: "Contato", path: "#contato" }
  ];

  return (
    <header className="fixed w-full bg-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 hover:scale-105 transition-all duration-300 ease-in-out">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full animate-[float_3s_ease-in-out_infinite]"
              >
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="white"
                  fontSize="18"
                  fontWeight="bold"
                  style={{ 
                    filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.3))',
                    fontFamily: 'Arial, sans-serif'
                  }}
                >
                  RD
                </text>
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0046BB" />
                    <stop offset="100%" stopColor="#00A3FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <Link to="/" className="text-2xl font-bold text-white">
              Rodrigo Dev <span className="text-primary-light">MT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-primary-light transition-colors duration-300 text-sm"
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-primary-light transition-colors duration-300 text-sm"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-down">
            {menuItems.map((item) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="block py-2 text-white hover:text-primary-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-2 text-white hover:text-primary-light transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;