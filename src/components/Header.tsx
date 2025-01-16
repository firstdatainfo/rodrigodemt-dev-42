import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png" 
              alt="First Sistemas Logo" 
              className="w-10 h-10 object-contain"
            />
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