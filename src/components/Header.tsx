import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10">
              <svg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Triângulo principal com sombra */}
                <path
                  d="M20 4L36 32H4L20 4Z"
                  fill="url(#gradient-blue)"
                  filter="drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.1))"
                />
                
                {/* Triângulo sobreposto com efeito de brilho */}
                <path
                  d="M20 12L28 28H12L20 12Z"
                  fill="url(#gradient-orange)"
                  filter="drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05))"
                />
                
                {/* Definição dos gradientes */}
                <defs>
                  <linearGradient
                    id="gradient-blue"
                    x1="20"
                    y1="4"
                    x2="20"
                    y2="32"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#0052D4" />
                    <stop offset="50%" stopColor="#4364F7" />
                    <stop offset="100%" stopColor="#00A3FF" />
                  </linearGradient>
                  
                  <linearGradient
                    id="gradient-orange"
                    x1="20"
                    y1="12"
                    x2="20"
                    y2="28"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#FF9500" />
                    <stop offset="50%" stopColor="#FF5E3A" />
                    <stop offset="100%" stopColor="#FF3B2E" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <a href="/" className="text-2xl font-bold text-primary">
              First Sistemas
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["Início", "Produtos", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-textGray hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
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
                className="block py-2 text-textGray hover:text-primary transition-colors duration-300"
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