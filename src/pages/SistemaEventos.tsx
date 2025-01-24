import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import EventosHeader from "@/components/eventos/EventosHeader";
import EventosServices from "@/components/eventos/EventosServices";
import BackgroundMusic from "@/components/eventos/BackgroundMusic";
import EventosBackground from "@/components/eventos/EventosBackground";
import EventosContact from "@/components/eventos/EventosContact";
import EventosFeatures from "@/components/eventos/EventosFeatures";

const SistemaEventos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  const handleSystemAccess = () => {
    window.open('https://firstsistemas.acess.app', '_blank');
  };

  return (
    <div className="relative min-h-screen">
      <BackgroundMusic />
      <EventosBackground />
      
      <div className="relative z-20 min-h-screen">
        <section className="container px-4 mx-auto pt-20 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto">
              <div className="flex justify-center lg:justify-start mb-8">
                <EventosHeader />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
                  Transforme seu negócio com soluções tecnológicas que fazem a diferença. Simplicidade, eficiência e inovação em um só lugar.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={handleSystemAccess}
                >
                  ACESSAR SISTEMA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={handleSocialRedirect}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  AGENDAR DEMONSTRAÇÃO
                </Button>
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-accent to-accent-foreground hover:from-accent-foreground hover:to-accent text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={handleContactClick}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  FALAR COM CONSULTOR
                </Button>
              </div>

              <EventosServices />
              <EventosFeatures />
              <EventosContact />
            </div>
          </div>
        </section>

        <footer className="relative z-20 mt-20 py-6 text-center text-white/80 border-t border-white/10">
          <p>&copy; {new Date().getFullYear()} RodrigoDevMT. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  );
};

export default SistemaEventos;