import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">First Sistemas</h3>
            <p className="text-gray-300">
              Soluções em software para sua empresa crescer
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>contato@firstsistemas.com.br</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-light transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                Facebook
              </a>
              <a href="#" className="hover:text-primary-light transition-colors">
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2024 First Sistemas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;