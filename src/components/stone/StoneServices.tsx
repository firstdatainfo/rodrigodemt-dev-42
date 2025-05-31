
import { Building2, CreditCard, Calendar, Ticket, Car, UtensilsCrossed, BarChart3, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Building2,
    title: "Abertura de Contas",
    description: "Facilitamos a abertura de conta Stone para seu negócio com suporte completo e documentação simplificada.",
    features: ["Documentação Simplificada", "Suporte Especializado", "Aprovação Rápida", "Taxa Competitiva"]
  },
  {
    icon: CreditCard,
    title: "Solicitação de Terminais",
    description: "Solicite terminais Stone diretamente conosco com configuração personalizada para seu tipo de negócio.",
    features: ["Entrega Rápida", "Configuração Inclusa", "Treinamento Gratuito", "Suporte Técnico"]
  },
  {
    icon: BarChart3,
    title: "Sistema ERP",
    description: "Integração completa com sistemas ERP para gestão total do seu negócio e controle financeiro.",
    features: ["Integração Total", "Relatórios Avançados", "Controle de Estoque", "Dashboard Completo"]
  },
  {
    icon: Calendar,
    title: "Gestão de Eventos",
    description: "Solução completa para eventos com venda de ingressos, controle de acesso e pagamentos.",
    features: ["Venda de Ingressos", "Controle de Acesso", "Check-in Digital", "Relatórios de Vendas"]
  },
  {
    icon: Ticket,
    title: "Sistema de Ingressos",
    description: "Plataforma completa para venda e validação de ingressos com integração Stone.",
    features: ["Venda Online", "QR Code", "Validação Instant.", "Anti-fraude"]
  },
  {
    icon: Car,
    title: "Estacionamento",
    description: "Sistema completo para estacionamentos com cobrança automática e controle de permanência.",
    features: ["Entrada/Saída Auto", "Cobrança por Tempo", "Ticket Digital", "Relatórios"]
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    description: "Solução completa para restaurantes com cardápio digital, pedidos e pagamentos integrados.",
    features: ["Cardápio Digital", "Pedidos Online", "Delivery", "Comanda Eletrônica"]
  },
  {
    icon: Users,
    title: "Fichas de Bares",
    description: "Sistema de fichas eletrônicas para bares e casas noturnas com controle total de consumo.",
    features: ["Fichas Eletrônicas", "Controle de Consumo", "Pagamento Rápido", "Relatórios Detalhados"]
  }
];

const StoneServices = () => {
  const handleServiceQuote = (service: typeof services[0]) => {
    const message = `Olá! Tenho interesse no serviço: *${service.title}*

📋 *Descrição do Serviço:*
${service.description}

✅ *Recursos Incluídos:*
${service.features.map(feature => `• ${feature}`).join('\n')}

Gostaria de receber mais informações e um orçamento detalhado para este serviço.

Aguardo seu contato!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5566992480993?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleSpecialistContact = () => {
    const message = `Olá! Preciso de uma *solução personalizada* com integração Stone.

🎯 *Interesse:*
Desenvolver uma solução sob medida para meu negócio com integração Stone completa.

Gostaria de falar com um especialista para entender as possibilidades e receber um orçamento personalizado.

Aguardo seu contato!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5566992480993?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-primary to-green-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Soluções <span className="text-green-400">Completas</span>
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto">
            Oferecemos um ecossistema completo de soluções Stone para diferentes segmentos, 
            desde abertura de contas até sistemas especializados para seu tipo de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-black/30 backdrop-blur-sm border border-white/30 shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/80 text-sm text-center mb-4 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => handleServiceQuote(service)}
                  className="w-full mt-4 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  Solicitar Orçamento
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Precisa de uma solução personalizada?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Desenvolvemos soluções sob medida para seu negócio com integração Stone completa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleSpecialistContact}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              💬 Falar com Especialista
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Ver Todos os Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneServices;
