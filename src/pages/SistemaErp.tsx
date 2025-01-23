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
    <div className="min-h-screen bg-white">
      <section className="relative pt-20 pb-32 bg-[#000B2E] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/lovable-uploads/5e4f7f88-f9aa-4f35-93f6-4a3302bc94f4.png')`
          }}
        />
        
        {/* Neural Network Animation */}
        <div className="absolute inset-0">
          <NeuralNetwork />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-800/60 to-blue-700/60" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block mb-8">
                <div className="text-6xl font-bold text-white relative z-10">
                  ERP FIRST
                </div>
                <div className="absolute -inset-4 bg-blue-500/20 blur-xl rounded-full" />
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white animate-fade-up">
                Sistema ERP Completo para sua Empresa
              </h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                Transforme sua gestão empresarial com nossa solução integrada e moderna
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-white/90 animate-fade-up w-full md:w-auto"
                  style={{ animationDelay: "0.4s" }}
                  onClick={handleDemoRequest}
                >
                  Solicitar Demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 animate-fade-up w-full md:w-auto"
                  style={{ animationDelay: "0.6s" }}
                >
                  Conhecer Planos
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 -right-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="relative">
                  <img
                    src="/lovable-uploads/19c607c2-dd16-4d89-8f9c-3cf97ecabce4.png"
                    alt="Sistema ERP Dashboard"
                    className="w-full max-w-md mx-auto rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Módulos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{module.title}</h3>
                <p className="text-gray-600">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Soluções</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Agende uma demonstração gratuita e descubra como nosso sistema pode
              transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-white/90"
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