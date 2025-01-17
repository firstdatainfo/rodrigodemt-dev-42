import { Button } from "./ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import NeuralNetwork from "./NeuralNetwork";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-blue-900 via-primary to-red-900">
      <div className="absolute inset-0 opacity-50">
        <NeuralNetwork />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div 
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm mr-3">New</span>
              <span className="text-white/90 text-sm">Inteligência Artificial & Soluções Inovadoras</span>
            </div>

            <h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Transformando o Futuro com Inteligência Artificial
            </h1>

            <p 
              className="text-white/80 text-lg mb-8"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              Soluções avançadas de IA para impulsionar sua empresa ao próximo nível de inovação e eficiência.
            </p>

            <div 
              className="flex flex-wrap gap-4 justify-start mb-12"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
                Começar Agora
              </Button>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Fale Conosco
              </Button>
            </div>

            <div 
              className="flex justify-start gap-4"
              data-aos="fade-up"
              data-aos-duration="800"
            >
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
          </div>

          <div 
            className="hidden lg:block relative"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <img 
              src="/lovable-uploads/19c607c2-dd16-4d89-8f9c-3cf97ecabce4.png"
              alt="AI Robot"
              className="w-full max-w-[600px] mx-auto animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;