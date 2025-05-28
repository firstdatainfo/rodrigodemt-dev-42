
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: "Início", path: "/" },
    { name: "Bio Rodrigo Dev MT", path: "/sistema-erp" },
    { name: "Sistema de Eventos", path: "/sistema-eventos" },
    { name: "Sistema de Automações", path: "#sistema-de-automacoes" },
    { name: "Sobre", path: "#sobre" },
    { name: "Contato", path: "#contato" }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-black/20' 
        : 'bg-black/60 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="w-12 h-12 hover:scale-110 transition-all duration-300 ease-in-out transform group-hover:rotate-12">
                <svg
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full animate-[float_3s_ease-in-out_infinite]"
                >
                  <rect width="48" height="48" rx="12" fill="url(#gradient)" />
                  <rect width="48" height="48" rx="12" fill="url(#gradientOverlay)" opacity="0.3" />
                  <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="white"
                    fontSize="20"
                    fontWeight="bold"
                    style={{ 
                      filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5))',
                      fontFamily: 'Arial, sans-serif'
                    }}
                  >
                    RD
                  </text>
                  <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0046BB" />
                      <stop offset="50%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#00A3FF" />
                    </linearGradient>
                    <linearGradient id="gradientOverlay" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="100%" stopColor="#FF6B35" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <Link to="/" className="text-2xl md:text-3xl font-bold text-white hover:text-blue-300 transition-colors duration-300">
              Rodrigo Dev <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="relative text-white hover:text-blue-300 transition-colors duration-300 text-sm font-medium group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="relative text-white hover:text-blue-300 transition-colors duration-300 text-sm font-medium group"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              )
            ))}
            
            {/* CTA Button */}
            <button 
              onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              💬 WhatsApp
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 animate-fade-down bg-black/80 backdrop-blur-md rounded-b-xl mx-4 -mx-4">
            {menuItems.map((item, index) => (
              item.path.startsWith('#') ? (
                <a
                  key={item.name}
                  href={item.path}
                  className="block py-3 px-6 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 rounded-lg mx-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-3 px-6 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-300 rounded-lg mx-2 animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <div className="px-6 mt-4">
              <button 
                onClick={() => {
                  window.open('https://wa.me/5566992480993', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                💬 Falar no WhatsApp
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
