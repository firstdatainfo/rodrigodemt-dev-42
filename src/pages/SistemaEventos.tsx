import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Phone, Instagram, Building2, Ticket, Car, Receipt, Factory, BrainCircuit } from "lucide-react";
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

  const solutions = [
    {
      icon: Building2,
      title: "Sistema de gestão ERP em nuvem",
      description: "Facilita o seu negócio e a sua vida com uma solução completa e integrada."
    },
    {
      icon: Ticket,
      title: "Sistema para Eventos",
      description: "Solução completa para bilheterias, bares, shows, boates, parques e cinema."
    },
    {
      icon: Car,
      title: "Sistema para estacionamentos",
      description: "Gestão eficiente de vagas, pagamentos e controle de acesso."
    },
    {
      icon: Receipt,
      title: "Sistema de emissão de notas",
      description: "Emissão simplificada de notas fiscais eletrônicas integrada ao seu negócio."
    },
    {
      icon: Factory,
      title: "Automação Industrial e IoT",
      description: "Soluções inteligentes para indústria 4.0 e Internet das Coisas."
    },
    {
      icon: BrainCircuit,
      title: "Inteligência Artificial",
      description: "Tecnologia de ponta para otimizar processos e tomada de decisões."
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with adjusted size */}
      <div 
        className="absolute inset-0 z-0 bg-fixed"
        style={{
          backgroundImage: "url('/lovable-uploads/6b644bc7-2f02-43e3-a255-2c3a249e4f51.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
          filter: 'brightness(1.1) contrast(1.1)',
        }}
      />
      
      {/* Overlay gradient with reduced opacity */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/40 via-primary/50 to-pink-900/40" />

      <div className="absolute inset-0 z-10 opacity-20">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-20 min-h-screen">
        {/* Logo with enhanced glassmorphism */}
        <div className="absolute top-8 left-8 z-30">
          <div className="flex items-center gap-2">
            <div className="bg-white/15 backdrop-blur-md p-3 rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-300">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                IsaPass
              </h1>
            </div>
          </div>
        </div>

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
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl rounded-full animate-pulse" />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-xl lg:text-2xl text-white font-light leading-relaxed">
                  Crie, publique e venda eventos na maior e melhor plataforma do Brasil
                </p>
                <p className="text-lg md:text-xl text-white/90 mt-2">
                  Junte-se a mais de 1 mil produtores na IsaPass
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
                  onClick={handleContactClick}
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  COMEÇAR AGORA
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-6 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                  onClick={handleSocialRedirect}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  AGENDAR DEMONSTRAÇÃO
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid with enhanced cards */}
        <section className="container px-4 mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className="group relative overflow-hidden bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:bg-white/15 transition-all duration-500 animate-fade-up transform hover:-translate-y-2 border border-white/20 hover:border-white/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon container with enhanced gradient */}
                <div className="relative z-10 w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <solution.icon className="w-7 h-7 text-white animate-pulse" />
                </div>

                {/* Content with enhanced visibility */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {solution.title}
                  </h3>
                  <p className="text-white/90 group-hover:text-white transition-colors duration-300 text-lg">
                    {solution.description}
                  </p>
                </div>

                {/* Enhanced hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </section>
      </div>
      <Toaster />
    </div>
  );
};

export default SistemaEventos;