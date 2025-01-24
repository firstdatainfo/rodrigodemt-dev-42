import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { 
  Calendar, 
  Music, 
  Users, 
  Sparkles, 
  Phone, 
  Instagram, 
  ArrowRight,
  Smartphone,
  ChartBar,
  QrCode,
  Printer,
  Shield,
  RefreshCw,
  Mail,
  Globe
} from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useNavigate } from "react-router-dom";
import IsaPassLogo from "@/components/IsaPassLogo";

const SistemaEventos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleContactClick = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  const services = [
    {
      title: "Sistema de gestão ERP em nuvem",
      description: "Facilita o seu negócio e a sua vida",
      icon: Calendar
    },
    {
      title: "Sistema para Eventos",
      description: "Bilheterias, bares, shows, boates, parques, cinema",
      icon: Music
    },
    {
      title: "Sistema para estacionamentos",
      description: "Gestão completa de estacionamentos",
      icon: Users
    },
    {
      title: "Sistema de emissão de notas",
      description: "Emissão e gestão de notas fiscais",
      icon: Sparkles
    },
    {
      title: "Automação Industrial e IoT",
      description: "Soluções inteligentes para sua indústria",
      icon: Calendar
    },
    {
      title: "Inteligência Artificial",
      description: "Soluções avançadas com IA",
      icon: Sparkles
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Controle total na palma da sua mão"
    },
    {
      icon: ChartBar,
      title: "Relatórios",
      description: "Análises e estatísticas em tempo real"
    },
    {
      icon: QrCode,
      title: "QR Code",
      description: "Validação rápida e segura"
    },
    {
      icon: Printer,
      title: "Impressão",
      description: "Impressão de tickets e comprovantes"
    },
    {
      icon: Shield,
      title: "Segurança",
      description: "Controle de acesso e permissões"
    },
    {
      icon: RefreshCw,
      title: "Sincronização",
      description: "Dados atualizados em tempo real"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/lovable-uploads/6b644bc7-2f02-43e3-a255-2c3a249e4f51.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'scale(1.1)',
          filter: 'brightness(0.9)'
        }}
      />
      
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-purple-900/50 via-primary/50 to-pink-900/50" />

      <div className="absolute inset-0 z-10 opacity-30">
        <ParticlesBackground />
      </div>
      
      <div className="relative z-20 min-h-screen">
        <section className="container px-4 mx-auto pt-20 lg:pt-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left max-w-3xl mx-auto">
              <div className="flex justify-center lg:justify-start mb-8">
                <IsaPassLogo />
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/15"
                  >
                    <service.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                    <h3 className="text-white text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-white/80 text-sm">{service.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-20">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
                  Recursos Principais
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="group bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:-translate-y-2 hover:bg-white/15"
                    >
                      <feature.icon className="w-8 h-8 text-purple-400 mb-4 group-hover:text-purple-300 transition-colors" />
                      <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-white/80 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  Contato e Redes Sociais
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <a 
                    href="https://instagram.com/first_developer_mt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    first_developer_mt
                  </a>
                  <a 
                    href="https://firstsistemas.acess.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    firstsistemas.acess.app
                  </a>
                  <a 
                    href="tel:+5566992480993"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (66) 99248-0993 / 99225-8469
                  </a>
                  <a 
                    href="mailto:rodrigodev@yahoo.com"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    rodrigodev@yahoo.com
                  </a>
                  <a 
                    href="mailto:rodrigodev@firstsistemas.com.br"
                    className="flex items-center gap-2 text-white/80 hover:text-white transition-colors md:col-span-2"
                  >
                    <Mail className="w-5 h-5" />
                    rodrigodev@firstsistemas.com.br
                  </a>
                </div>
              </div>
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
