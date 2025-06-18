import { Instagram, MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";

const Footer = () => {
  const services = [
    "Desenvolvimento Web",
    "Apps Mobile",
    "Automação Industrial",
    "Inteligência Artificial",
    "IoT - Internet das Coisas",
    "Consultoria Técnica"
  ];

  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Sistema de Eventos", href: "/sistema-eventos" },
    { name: "Integração Stone", href: "/sistema-stone" },
    { name: "Sistema de Automações", href: "/sistema-automacoes" },
    { name: "Sobre", href: "/sobre" }
  ];

  return (
    <footer className="bg-gradient-to-b from-primary to-primary-light text-white">
      <div className="container mx-auto px-4">
        {/* Seção principal do footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre a empresa */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">RD</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Rodrigo Dev</h3>
                <span className="text-green-300">MT</span>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Transformando ideias em soluções digitais inovadoras. Especialistas em desenvolvimento web, mobile e automação industrial.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://instagram.com/first_developer_mt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/5566992480993" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">Nossos Serviços</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors cursor-pointer">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-green-300">Entre em Contato</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mato Grosso, Brasil</p>
                  <p className="text-sm text-gray-400">Atendimento Nacional</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="tel:+5566992480993" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (66) 99248-0993
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400 flex-shrink-0" />
                <a 
                  href="mailto:developer@rodrigodevmt.com.br" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  developer@rodrigodevmt.com.br
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Seg - Sex: 8h às 18h</p>
                  <p className="text-sm text-gray-400">Sáb: 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10"></div>

        {/* Copyright */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-300 text-center md:text-left">
            &copy; {new Date().getFullYear()} Rodrigo Dev MT. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
