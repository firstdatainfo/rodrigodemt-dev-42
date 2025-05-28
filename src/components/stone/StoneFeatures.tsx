
import { Shield, Smartphone, Wifi, Clock, Users, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Segurança PCI DSS",
    description: "Certificação de segurança máxima para transações financeiras, garantindo proteção total dos dados."
  },
  {
    icon: Smartphone,
    title: "Terminal Android",
    description: "Compatível com terminais Android Stone, oferecendo flexibilidade e modernidade no atendimento."
  },
  {
    icon: Wifi,
    title: "Conectividade Total",
    description: "Conexão via WiFi, 3G/4G e Bluetooth para garantir processamento em qualquer ambiente."
  },
  {
    icon: Clock,
    title: "Processamento Rápido",
    description: "Transações processadas em tempo real com confirmação instantânea para melhor experiência."
  },
  {
    icon: Users,
    title: "Multi-usuário",
    description: "Sistema que suporta múltiplos operadores com controle de acesso e permissões personalizadas."
  },
  {
    icon: BarChart3,
    title: "Relatórios Detalhados",
    description: "Dashboard completo com relatórios de vendas, análises e métricas de performance em tempo real."
  }
];

const StoneFeatures = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Funcionalidades <span className="text-green-600">Avançadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa solução oferece tudo que você precisa para integrar pagamentos Stone 
            de forma eficiente e segura em seus terminais Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoneFeatures;
