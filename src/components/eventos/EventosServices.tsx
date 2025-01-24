import { Smartphone, Music, Users, Nfc, CreditCard, Tablet } from 'lucide-react';

const services = [
  {
    title: "Sistema de gestão em Terminais Android",
    description: "Compatível com máquinas de cartões, totens e tablets - a tecnologia que facilita seu negócio",
    icon: Smartphone
  },
  {
    title: "Sistema para Eventos",
    description: "Bilheterias, bares, shows, boates, parques, cinema",
    icon: Music
  },
  {
    title: "Sistema para estacionamentos",
    description: "Gestão completa de estacionamentos",
    icon: Users
  },
  {
    title: "Sistema de Pulseiras NFC",
    description: "Controle de acesso e consumo via pulseiras inteligentes",
    icon: Nfc
  },
  {
    title: "Cartões por Aproximação",
    description: "Sistema completo de pagamento e acesso via NFC",
    icon: CreditCard
  },
  {
    title: "Gestão Mobile",
    description: "Controle total através de smartphones e tablets",
    icon: Tablet
  }
];

const EventosServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/15"
        >
          <service.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
          <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
          <p className="text-white/80 text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default EventosServices;