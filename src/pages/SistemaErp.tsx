import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  BarChart3, 
  Box, 
  ClipboardCheck, 
  DollarSign, 
  Users, 
  FileText, 
  Database,
  Ticket,
  Car,
  Receipt,
  Factory,
  Shield,
  Clock,
  Zap,
  CheckCircle2,
  PhoneCall
} from "lucide-react";
import NeuralNetwork from "@/components/NeuralNetwork";

const modules = [
    {
      icon: <Box className="w-6 h-6 text-blue-500" />,
      title: "Gestão de Estoque",
      description: "Controle completo de produtos, entradas, saídas e inventário"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-green-500" />,
      title: "Financeiro",
      description: "Contas a pagar, receber, fluxo de caixa e conciliação bancária"
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-purple-500" />,
      title: "Vendas",
      description: "PDV, orçamentos, pedidos e acompanhamento de vendas"
    },
    {
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      title: "Recursos Humanos",
      description: "Gestão de funcionários, folha de pagamento e ponto eletrônico"
    },
    {
      icon: <FileText className="w-6 h-6 text-red-500" />,
      title: "Fiscal",
      description: "Emissão de NF-e, NFC-e, controle de impostos e obrigações"
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-500" />,
      title: "Relatórios",
      description: "Dashboards e relatórios personalizados para tomada de decisão"
    }
];

const features = [
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "Sistema de gestão ERP em nuvem",
      description: "Facilita o seu negócio e a sua vida"
    },
    {
      icon: <Ticket className="w-6 h-6 text-purple-500" />,
      title: "Sistema para Eventos",
      description: "Bilheterias, bares, shows, boates, parques, cinema"
    },
    {
      icon: <Car className="w-6 h-6 text-green-500" />,
      title: "Sistema para estacionamentos",
      description: "Gestão completa do seu estacionamento"
    },
    {
      icon: <Receipt className="w-6 h-6 text-orange-500" />,
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
              <p className="text-xl text-white mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Transforme sua gestão empresarial com nossa solução integrada e moderna
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-8">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 animate-fade-up"
                    style={{ animationDelay: "0.4s" }}
                    onClick={handleDemoRequest}
                  >
                    Solicitar Demonstração
                  </Button>
                  <div className="flex gap-4 items-center">
                    <img
                      src="/lovable-uploads/19c607c2-dd16-4d89-8f9c-3cf97ecabce4.png"
                      alt="Sistema ERP Dashboard"
                      className="w-24 h-[190px] object-contain rounded-lg shadow-lg"
                    />
                    <img
                      src="/lovable-uploads/29f32a30-4b59-40fb-b6c1-a86d9887d1c3.png"
                      alt="Sistema ERP Mobile"
                      className="w-24 h-[190px] object-contain rounded-lg shadow-lg"
                    />
                  </div>
                </div>
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
                <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 glass-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white/30 rounded-lg flex items-center justify-center mb-4">
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