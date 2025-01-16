import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">First Sistemas</h3>
            <p className="text-gray-300">
              Transformando ideias em soluções digitais para seu negócio
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-gray-300 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-gray-300 transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-gray-300 transition-colors">
                  Portfólio
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-gray-300 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex items-center space-x-4">
              <a 
                href="https://instagram.com/first_developer_mt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-gray-300 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} First Sistemas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;