import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { BarChart3, Users2, DollarSign, Package, FileText, Factory, Phone, Mail, MapPin } from "lucide-react";

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    toast({
      title: "Solicitação Recebida!",
      description: "Em breve nossa equipe entrará em contato.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      {/* Hero Section - Mais moderno e impactante */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-primary-light py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-12 animate-fade-down">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sistema ERP First Sistemas
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Transforme sua gestão empresarial com nossa solução completa e integrada.
              Desenvolvido para impulsionar a eficiência e o crescimento do seu negócio.
            </p>
          </div>
          <div className="flex justify-center gap-4 animate-fade-up">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
              onClick={handleDemoRequest}
            >
              Solicitar Demonstração
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>

      {/* Features Grid - Cards mais modernos e interativos */}
      <div className="container mx-auto px-4 -mt-16 mb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Gestão Financeira</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  Controle de contas
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Fluxo de caixa detalhado
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Relatórios gerenciais
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up [animation-delay:200ms]">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Controle de Estoque</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Gestão completa de produtos
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Controle de entrada/saída
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Relatórios de estoque
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-up [animation-delay:400ms]">
            <CardHeader className="space-y-1">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Recursos Humanos</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-primary" />
                  Folha de pagamento
                </li>
                <li className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  eSocial integrado
                </li>
                <li className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Gestão de benefícios
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Seção de Benefícios - Nova seção moderna */}
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16">Por que escolher a First Sistemas?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Users2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Suporte Especializado</h3>
                <p className="text-gray-600">Equipe técnica sempre disponível para auxiliar em todas as etapas.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Sistema Personalizado</h3>
                <p className="text-gray-600">Adaptamos o sistema às necessidades específicas da sua empresa.</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Factory className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tecnologia Avançada</h3>
                <p className="text-gray-600">Sistema sempre atualizado com as últimas inovações do mercado.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de Contato - Nova seção moderna */}
        <div className="mt-32 mb-16">
          <div className="bg-gradient-to-r from-primary to-primary-light rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-6 h-6" />
                    <span>(11) 4444-5555</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-6 h-6" />
                    <span>contato@firstsistemas.com.br</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    <span>São Paulo - SP</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Pronto para transformar sua gestão?</h3>
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={handleDemoRequest}
                >
                  Solicitar Demonstração Gratuita
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SistemaErp;