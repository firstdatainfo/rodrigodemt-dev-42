
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Sparkles, Zap, Trophy, Home } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import EventosHeader from "@/components/eventos/EventosHeader";
import EventosServices from "@/components/eventos/EventosServices";
import BackgroundMusic from "@/components/eventos/BackgroundMusic";
import EventosBackground from "@/components/eventos/EventosBackground";
import EventosContact from "@/components/eventos/EventosContact";
import EventosFeatures from "@/components/eventos/EventosFeatures";
import QuoteModal from "@/components/ui/quote-modal";
import { useQuoteModal } from "@/hooks/useQuoteModal";

const SistemaEventos = () => {
  const navigate = useNavigate();
  const { isOpen, openModal, closeModal } = useQuoteModal();

  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  const handleSystemAccess = () => {
    window.open('https://firstsistemas.acess.app', '_blank');
  };

  const benefits = [
    { icon: Zap, text: "Implementação Rápida" },
    { icon: Trophy, text: "Resultados Garantidos" },
    { icon: Sparkles, text: "Suporte Premium" }
  ];

  return (
    <div className="relative min-h-screen">
      <BackgroundMusic />
      <EventosBackground />
      
      {/* Botão Voltar ao Início */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            size="sm"
          >
            <Home className="w-4 h-4 mr-2" />
            Voltar ao Início
          </Button>
        </Link>
      </div>
      
      <div className="relative z-20 min-h-screen">
        <section className="container px-4 mx-auto pt-20 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left max-w-4xl mx-auto">
              <div className="flex justify-center lg:justify-start mb-8">
                <EventosHeader />
              </div>
              
              {/* Badge de destaque */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8 animate-pulse">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <span className="text-white font-semibold">✨ LÍDER EM SOLUÇÕES TECNOLÓGICAS</span>
              </div>
              
              <div className="mb-8 animate-fade-up">
                <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Revolucione Seu 
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Negócio
                  </span>
                  com Tecnologia
                </h1>
                <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                  Transforme seu negócio com soluções tecnológicas que fazem a diferença. 
                  <span className="block mt-2 text-blue-300 font-semibold">
                    Simplicidade, eficiência e inovação em um só lugar.
                  </span>
                </p>
              </div>

              {/* Benefícios em destaque */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 bg-black/20 backdrop-blur-sm p-4 rounded-xl border border-white/10 animate-fade-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105 text-lg font-semibold"
                  onClick={handleSystemAccess}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  ACESSAR SISTEMA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg"
                  onClick={handleSocialRedirect}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  AGENDAR DEMONSTRAÇÃO
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-lg font-semibold"
                  onClick={openModal}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  SOLICITAR ORÇAMENTO
                </Button>
              </div>

              {/* Garantia */}
              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm border border-white/20 p-6 rounded-xl mb-12 text-center">
                <h3 className="text-white font-bold text-xl mb-2">🔒 GARANTIA DE SATISFAÇÃO</h3>
                <p className="text-white/90">
                  100% de satisfação garantida ou seu dinheiro de volta em até 30 dias
                </p>
              </div>

              <EventosServices />
              <EventosFeatures />
              <EventosContact />
            </div>
          </div>
        </section>

        <footer className="relative z-20 mt-20 py-8 text-center text-white/80 border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p>&copy; {new Date().getFullYear()} RodrigoDevMT. Todos os direitos reservados.</p>
              <div className="flex items-center gap-4 text-sm">
                <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
                <span>•</span>
                <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
      
      <QuoteModal 
        open={isOpen} 
        onOpenChange={closeModal} 
        service="Sistema de Eventos"
      />
    </div>
  );
};

export default SistemaEventos;
