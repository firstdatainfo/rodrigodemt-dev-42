import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Calendar, Music, Users, Sparkles, Phone, Instagram } from "lucide-react";
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
    <div className="relative min-h-screen bg-gradient-to-b from-primary via-primary-light to-secondary overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-[1000px] h-4/5 z-0 opacity-80"
        style={{
          backgroundImage: 'url("/lovable-uploads/96dae26a-eb3a-4bd0-918b-0f32f37e7470.png")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          imageRendering: 'crisp-edges',
        }}
      />
      
      {/* Particles Overlay */}
      <div className="absolute inset-0 z-10 opacity-50">
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
                  Transforme seus eventos em experiências inesquecíveis
                  <span className="block mt-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    com nossa plataforma completa de gestão
                  </span>
                </p>
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
                    className="group bg-white/5 backdrop-blur-lg p-4 lg:p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <item.icon className="w-8 h-8 text-white mb-3 group-hover:text-purple-400 transition-colors" />
                    <h3 className="text-white text-sm lg:text-base font-medium">{item.text}</h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                  onClick={handleContactClick}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg"
                  onClick={handleSocialRedirect}
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  @first_developer_mt
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SistemaEventos;