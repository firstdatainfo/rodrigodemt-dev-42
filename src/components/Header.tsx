import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Início",
    "Sistema ERP",
    "Sistema de Eventos",
    "Sistema de Automações",
    "Sobre",
    "Contato"
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
                {/* Fundo gradiente */}
                <rect width="40" height="40" rx="8" fill="url(#gradient)" />
                
                {/* Letras FD com sombra e estilo mais moderno */}
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
                  FD
                </text>

                {/* Definição do gradiente */}
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0046BB" />
                    <stop offset="100%" stopColor="#00A3FF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <a href="/" className="text-2xl font-bold text-white">
              First Developer <span className="text-primary-light">MT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-white hover:text-primary-light transition-colors duration-300 text-sm"
              >
                {item}
              </a>
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
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 text-white hover:text-primary-light transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;