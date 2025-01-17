import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 animate-[bounce_2s_ease-in-out_infinite] hover:animate-pulse transition-all duration-300">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Fundo branco */}
                <rect width="40" height="40" rx="8" fill="white" />
                
                {/* Letras FD em azul */}
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  fill="#0046BB"
                  fontSize="20"
                  fontWeight="bold"
                >
                  FD
                </text>
              </svg>
            </div>
            <a href="/" className="text-2xl font-bold text-white">
              First Developer <span className="text-primary-light">MT</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-primary-light transition-colors duration-300"
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
            {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
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