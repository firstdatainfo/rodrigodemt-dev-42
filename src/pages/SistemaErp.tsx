import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  BarChart3, 
  Box, 
  ClipboardCheck, 
  DollarSign, 
  Users, 
  FileText, 
  Factory,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
  PhoneCall,
  Cloud,
  Ticket,
  Car,
  Receipt
} from "lucide-react";
import NeuralNetwork from "@/components/NeuralNetwork";

const modules = [
    {
      icon: <Box className="w-6 h-6" />,
      title: "Gestão de Estoque",
      description: "Controle completo de produtos, entradas, saídas e inventário"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Financeiro",
      description: "Contas a pagar, receber, fluxo de caixa e conciliação bancária"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6" />,
      title: "Vendas",
      description: "PDV, orçamentos, pedidos e acompanhamento de vendas"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Recursos Humanos",
      description: "Gestão de funcionários, folha de pagamento e ponto eletrônico"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Fiscal",
      description: "Emissão de NF-e, NFC-e, controle de impostos e obrigações"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios",
      description: "Dashboards e relatórios personalizados para tomada de decisão"
    }
];

const features = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Integração Total",
      description: "Todos os módulos integrados em tempo real"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Segurança",
      description: "Proteção de dados e backup automático"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilidade",
      description: "Acesso 24/7 de qualquer dispositivo"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Sistema rápido e otimizado"
    }
];

const solutions = [
  {
    icon: <Cloud className="w-6 h-6 text-secondary" />,
    title: "Sistema de gestão ERP em nuvem",
    description: "que facilita o seu negócio e a sua vida"
  },
  {
    icon: <Ticket className="w-6 h-6 text-accent" />,
    title: "Sistema para Eventos",
    description: "(bilheterias, bares, shows, boates, parques, cinema)"
  },
  {
    icon: <Car className="w-6 h-6 text-secondary-foreground" />,
    title: "Sistema para estacionamentos",
    description: "Gestão completa do seu estacionamento"
  },
  {
    icon: <Receipt className="w-6 h-6 text-accent-foreground" />,
    title: "Sistema de emissão de notas",
    description: "Emissão e gestão de notas fiscais"
  }
];

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-primary relative">
      {/* Background Neural Network */}
      <div className="absolute inset-0 opacity-60">
        <NeuralNetwork />
      </div>

      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left z-10">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-up">
                Sistema ERP Completo para sua Empresa
              </h1>
              
              {/* Solutions with Icons */}
              <div className="space-y-4 mb-8">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-white/10 p-2 rounded-lg">
                      {solution.icon}
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-semibold">{solution.title}</h3>
                      <p className="text-white/80 text-sm">{solution.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Images and Button Container */}
              <div className="flex items-center gap-6 justify-center lg:justify-start animate-fade-up">
                <div className="flex gap-4">
                  <img
                    src="/lovable-uploads/bdc9b654-0bf9-46a1-8aa1-08fcdcd5baee.png"
                    alt="First Tickets Device 1"
                    className="w-32 h-auto object-contain"
                  />
                  <img
                    src="/lovable-uploads/280b36d6-3e6c-4f4c-be94-2471e02a8260.png"
                    alt="First Tickets Device 2"
                    className="w-32 h-auto object-contain"
                  />
                </div>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90"
                  onClick={handleDemoRequest}
                >
                  Solicitar Demonstração
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Módulos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-6 glass-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4 text-white">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                <p className="text-white/90">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 glass-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">
              Agende uma demonstração gratuita e descubra como nosso sistema pode
              transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={handleDemoRequest}
              >
                <PhoneCall className="w-4 h-4 mr-2" />
                Solicitar Contato
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <CheckCircle2 className="w-4 h-4 mr-2" />
                Ver Planos
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SistemaErp;
