import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Code, Cpu, PhoneCall, CheckCircle2, Mail, MapPin } from "lucide-react";
import Features from "@/components/Features";
import ParticlesBackground from "@/components/ParticlesBackground";
import ProfileHeader from "@/components/ProfileHeader";
import AboutMe from "@/components/AboutMe";
import CodeSnippets from "@/components/CodeSnippets";
import ModulesGrid from "@/components/ModulesGrid";

const SistemaErp = () => {
  const { toast } = useToast();

  const handleDemoRequest = () => {
    window.open('https://wa.me/5566992480993', '_blank');
  };

  const handleSocialRedirect = () => {
    window.open('https://instagram.com/first_developer_mt', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary via-primary-light to-secondary">
      <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden pt-32">
        <ProfileHeader />

        <div className="absolute inset-0 opacity-30">
          <ParticlesBackground />
        </div>
        
        <div className="container relative z-20 px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="relative inline-block mb-4 mt-16">
                <div className="text-4xl md:text-7xl font-bold text-white relative z-10 tracking-tight">
                  Rodrigo Dev
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl rounded-full" />
              </div>
              
              <div className="mb-8 animate-fade-up">
                <p className="text-lg md:text-2xl text-white/90 font-light leading-relaxed">
                  Transformando ideias em código, com a paixão de quem vive para criar 
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    e a expertise de quem respira tecnologia.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8">
                <Button
                  size="lg"
                  className="bg-transparent backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6 shadow-lg"
                  onClick={handleDemoRequest}
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto text-lg px-8 py-6"
                  onClick={handleSocialRedirect}
                >
                  <Cpu className="w-5 h-5 mr-2" />
                  @first_developer_mt
                </Button>
              </div>
            </div>
          </div>
        </div>

        <AboutMe />
        <CodeSnippets />
        <ModulesGrid />
        <Features />

        <section className="py-20 relative w-full">
          <div className="container mx-auto px-4">
            <div className="bg-primary rounded-2xl p-8 lg:p-12 shadow-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
                Entre em Contato
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Vamos conversar sobre seu projeto
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-white">rodrigodev@yahoo.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-white">Mato Grosso</span>
                    </div>
                  </div>
                </div>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Seu Nome"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Seu Email"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Assunto"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Sua Mensagem"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-secondary resize-none"
                    />
                  </div>
                  <Button
                    className="w-full bg-secondary hover:bg-secondary/80 text-white font-semibold py-3"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default SistemaErp;
