import React from "react";
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
  PhoneCall
} from "lucide-react";
import HumanoidAnimation from "@/components/HumanoidAnimation";

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary to-primary-light bg-fixed bg-cover bg-center">
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 w-full">
              <HumanoidAnimation />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Módulos Principais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{module.title}</h3>
                <p className="text-gray-200">{module.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-white/20"
              >
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-white border border-white/20">
            <h2 className="text-3xl font-bold mb-6 text-center">Pronto para Começar?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
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
