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
import ParticlesBackground from "@/components/ParticlesBackground";

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
        {/* Logo */}
        <div className="absolute top-4 left-4 z-20">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-white">FD</span>
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-bold text-white">FirstDeveloper</span>
              <span className="text-sm text-white/80 -mt-1">MT</span>
            </div>
          </div>
        </div>

        {/* Background Image */}
        <img 
          src="/lovable-uploads/8e5468c5-aea9-4018-8084-7aacd2d38e80.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{
            position: 'fixed'
          }}
        />
        
        {/* Particles Effect */}
        <div className="absolute inset-0 z-10">
          <ParticlesBackground />
        </div>

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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
                Sistema ERP Completo para sua Empresa
              </h1>
              <p className="text-xl text-white/80 mb-8">
                Transforme sua gestão empresarial com nossa solução integrada e moderna
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-900 hover:bg-white/90 w-full md:w-auto"
                  onClick={handleDemoRequest}
                >
                  Solicitar Demonstração
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 w-full md:w-auto"
                >
                  Conhecer Planos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Módulos Principais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {module.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {module.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br from-blue-500 to-purple-500 transition-all duration-300">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
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
