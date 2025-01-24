import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Music, Users, Sparkles, Phone, Instagram, ArrowRight } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useNavigate } from "react-router-dom";

const SistemaEventos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/6b644bc7-2f02-43e3-a255-2c3a249e4f51.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/70 via-primary/70 to-pink-900/70" />

      <div className="absolute inset-0 z-10 opacity-30">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-20 min-h-screen">
        <section className="container px-4 mx-auto pt-20 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto">
              <div className="relative inline-block mb-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white relative z-10 tracking-tight leading-tight">
                  Sistema de 
                  <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Eventos
                  </span>
                </h1>
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full" />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed">
                  Crie, publique e venda eventos na maior e melhor plataforma do Brasil
                </p>
                <p className="text-lg md:text-xl text-white/80 mt-2">
                  Junte-se a mais de 1 mil produtores na IsaPass
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={handleContactClick}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  COMEÇAR AGORA
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
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: Calendar, text: "Gestão de Datas" },
                  { icon: Music, text: "Controle de Shows" },
                  { icon: Users, text: "Gestão de Público" },
                  { icon: Sparkles, text: "Efeitos Especiais" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg p-4 lg:p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 hover:bg-white/15"
                  >
                    <item.icon className="w-8 h-8 text-white mb-3 group-hover:text-purple-400 transition-colors" />
                    <h3 className="text-white text-sm lg:text-base font-medium">{item.text}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SistemaEventos;