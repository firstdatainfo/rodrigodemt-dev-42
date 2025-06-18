import { Button } from "./ui/button";
import { Facebook, Twitter, Linkedin, Star, Users, Award } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";
import ParticlesBackground from "./ParticlesBackground";
import MagicParticles from "./MagicParticles";
import { SiNodedotjs, SiReact, SiPython, SiFirebase, SiFlutter, SiSupabase, SiEspressif, SiJavascript, SiTypescript, SiFigma } from "react-icons/si";

const technologies = [
  {
    name: "Node.js",
    icon: SiNodedotjs
  },
  {
    name: "React",
    icon: SiReact
  },
  {
    name: "Python",
    icon: SiPython
  },
  {
    name: "Firebase",
    icon: SiFirebase
  },
  {
    name: "Flutter",
    icon: SiFlutter
  },
  {
    name: "Supabase",
    icon: SiSupabase
  },
  {
    name: "ESP32",
    icon: SiEspressif
  },
  {
    name: "JavaScript",
    icon: SiJavascript
  },
  {
    name: "TypeScript",
    icon: SiTypescript
  },
  {
    name: "Figma",
    icon: SiFigma
  }
];

const stats = [
  {
    number: "100+",
    label: "Projetos Concluídos",
    icon: Award
  },
  {
    number: "80+",
    label: "Clientes Satisfeitos",
    icon: Users
  },
  {
    number: "7.0",
    label: "Avaliação Média",
    icon: Star
  }
];

const Hero = () => {
  const handleSocialRedirect = () => {
    window.open('https://www.instagram.com/first_developer_mt/', '_blank');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 via-primary to-red-900">
      {/* Apenas para desktop/notebook - Imagem com efeito de partículas mágicas */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full max-w-[50%] xl:max-w-[40%] 2xl:max-w-[35%]">
          <MagicParticles 
            imageSrc="/uploads/8ce6711e-4c5f-45db-b9cd-0d7edf3d53dd.png" 
            className="w-full h-full object-contain object-right-top" 
          />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>
      
      <div className="container mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="my-[8px]">
            <div className="bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center mb-6 block w-auto mt-20 md:mt-0 text-xs md:text-sm animate-pulse">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 md:px-4 py-1 rounded-full mr-2 md:mr-3 font-semibold">✨ NOVO</span>
              <span className="text-white whitespace-nowrap font-medium">Inteligência Artificial & Soluções Inovadoras</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold text-white mb-6 leading-tight my-[20px]">
              Transformando o 
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                Futuro Digital
              </span>
              com IA
            </h1>

            <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
              Criamos soluções tecnológicas avançadas que impulsionam sua empresa ao próximo nível. 
              <span className="block mt-2 font-semibold text-blue-300">
                Inovação, eficiência e resultados garantidos.
              </span>
            </p>

            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-black/20 backdrop-blur-sm rounded-xl border border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-2xl md:text-3xl font-bold text-white">{stat.number}</span>
                  </div>
                  <p className="text-white/80 text-xs md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 justify-start mb-12 relative z-30">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={handleSocialRedirect}
              >
                🚀 Começar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 px-8 py-6 rounded-full text-lg backdrop-blur-sm hover:backdrop-blur-md transition-all duration-300"
                onClick={() => window.location.href = '#contato'}
              >
                💬 Fale Conosco
              </Button>
            </div>

            {/* Redes Sociais */}
            <div className="flex items-center gap-4 mb-8">
              <span className="text-white/80 text-sm">Siga-nos:</span>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Tecnologias */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg">Tecnologias que dominamos:</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <div 
                    key={tech.name} 
                    className="group flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl w-14 h-14 transition-all duration-300 hover:scale-110 cursor-pointer backdrop-blur-sm border border-white/10 hover:border-white/30"
                    title={tech.name}
                  >
                    <tech.icon className="w-7 h-7 text-white group-hover:text-blue-300 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
