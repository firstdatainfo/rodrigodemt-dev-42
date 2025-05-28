import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Zap, Settings, Cpu, Smartphone, Wifi, Shield, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteModal from "@/components/ui/quote-modal";
import { useQuoteModal } from "@/hooks/useQuoteModal";
const SistemaAutomacoes = () => {
  const {
    isOpen,
    openModal,
    closeModal
  } = useQuoteModal();
  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };
  const automationTypes = [{
    icon: Home,
    title: "Automação Residencial",
    description: "Transforme sua casa em um ambiente inteligente e conectado",
    features: ["Controle de iluminação", "Climatização automática", "Segurança integrada", "Assistente virtual"]
  }, {
    icon: Settings,
    title: "Automação Industrial",
    description: "Soluções para otimização de processos industriais",
    features: ["Controle de produção", "Monitoramento 24/7", "Manutenção preditiva", "Relatórios em tempo real"]
  }, {
    icon: Cpu,
    title: "Automação Predial",
    description: "Gestão inteligente de edifícios comerciais e residenciais",
    features: ["Controle de acesso", "Gestão energética", "Elevadores inteligentes", "Sistemas de segurança"]
  }, {
    icon: Wifi,
    title: "IoT & Sensores",
    description: "Internet das Coisas para monitoramento e controle remoto",
    features: ["Sensores ambientais", "Monitoramento remoto", "Alertas automáticos", "Dashboard em tempo real"]
  }];
  const benefits = [{
    icon: TrendingUp,
    title: "Aumento da Eficiência",
    description: "Até 40% de redução nos custos operacionais"
  }, {
    icon: Shield,
    title: "Segurança Avançada",
    description: "Proteção 24/7 com monitoramento inteligente"
  }, {
    icon: Smartphone,
    title: "Controle Total",
    description: "Acesse tudo pelo smartphone ou tablet"
  }, {
    icon: Zap,
    title: "Economia de Energia",
    description: "Redução de até 30% no consumo elétrico"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-blue-900 via-primary to-red-900 relative overflow-hidden">
      <Header />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-24 left-4 z-50">
        <Link to="/">
          
        </Link>
      </div>

      <main className="pt-20 relative z-10">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto text-center">
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Sistemas de
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Automação
                  </span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  Revolucione seus processos com soluções de automação inteligente. 
                  Conectamos tecnologia avançada para criar ambientes mais eficientes, seguros e sustentáveis.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button onClick={openModal} className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25">
                  💬 Solicitar Orçamento
                </Button>
                <Button variant="outline" className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Ver Projetos
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Automação */}
        <section className="py-20 bg-black/10 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Soluções de <span className="text-green-400">Automação</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Oferecemos soluções completas para diferentes necessidades de automação
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {automationTypes.map((type, index) => <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white/10 backdrop-blur-md border border-white/20">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <type.icon className="w-8 h-8 text-green-400" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                      {type.title}
                    </h3>
                    
                    <p className="text-white/80 text-center mb-6 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      {type.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                          <span className="text-white/90">{feature}</span>
                        </div>)}
                    </div>

                    <Button onClick={openModal} className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                      Solicitar Orçamento
                    </Button>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="py-20 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Por que escolher <span className="text-green-400">Automação?</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-white/80">{benefit.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600/80 to-emerald-600/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para automatizar seu ambiente?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como a automação pode transformar seu negócio ou residência.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleContactClick} className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105">
                💬 Falar com Especialista
              </Button>
              <Button variant="outline" onClick={openModal} className="border-2 border-white text-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 bg-emerald-50">
                Solicitar Orçamento
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <QuoteModal open={isOpen} onOpenChange={closeModal} service="Automação" />
    </div>;
};
export default SistemaAutomacoes;