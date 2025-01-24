import { Button } from "./ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";
import ParticlesBackground from "./ParticlesBackground";
import MagicParticles from "./MagicParticles";
import {
  SiNodedotjs,
  SiReact,
  SiPython,
  SiFirebase,
  SiFlutter,
  SiSupabase,
  SiEspressif,
  SiJavascript,
  SiTypescript,
  SiFigma,
} from "react-icons/si";

const technologies = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Python", icon: SiPython },
  { name: "Firebase", icon: SiFirebase },
  { name: "Flutter", icon: SiFlutter },
  { name: "Supabase", icon: SiSupabase },
  { name: "ESP32", icon: SiEspressif },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Figma", icon: SiFigma },
];

const Hero = () => {
  const handleSocialRedirect = () => {
    window.open('https://www.instagram.com/first_developer_mt/', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 via-primary to-red-900">
      {/* Imagem para desktop com efeito de partículas mágicas */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <MagicParticles
          imageSrc="/lovable-uploads/8ce6711e-4c5f-45db-b9cd-0d7edf3d53dd.png"
          className="w-full h-full object-contain object-right"
        />
      </div>

      {/* Imagem para mobile com efeito de partículas mágicas */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        <MagicParticles
          imageSrc="/lovable-uploads/8ce6711e-4c5f-45db-b9cd-0d7edf3d53dd.png"
          className="w-full h-[80vh] object-cover mt-20"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center mb-6 block w-auto mt-20 md:mt-0 text-xs md:text-sm">
              <span className="bg-white/50 text-white px-3 md:px-4 py-1 rounded-full mr-2 md:mr-3">New</span>
              <span className="text-white whitespace-nowrap">Inteligência Artificial & Soluções Inovadoras</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Transformando o Futuro com Inteligência Artificial
            </h1>

            <p className="text-white/80 text-lg mb-8">
              Soluções avançadas de IA para impulsionar sua empresa ao próximo nível de inovação e eficiência.
            </p>

            <div className="flex flex-wrap gap-4 justify-start mb-12 relative z-30">
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/20"
                onClick={handleSocialRedirect}
              >
                @first_developer_mt
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90"
                onClick={() => window.location.href = '#contato'}
              >
                Fale Conosco
              </Button>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 transition-colors"
                  title={tech.name}
                >
                  <tech.icon className="w-5 h-5 text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;