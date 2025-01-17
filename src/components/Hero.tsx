import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png')] opacity-5 bg-repeat"></div>
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Transforme seu Negócio com Soluções Digitais
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              Desenvolvimento de sistemas personalizados e soluções tecnológicas para impulsionar sua empresa ao próximo nível.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Solicitar Demonstração
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                Conhecer Mais
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-up delay-200">
            <div className="absolute -inset-4 bg-white/10 rounded-full blur-3xl"></div>
            <div className="relative grid grid-cols-2 gap-4">
              <img 
                src="/lovable-uploads/3cd42689-d953-409e-be7c-a086e97c130a.png" 
                alt="Sistema Dashboard"
                className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
              />
              <img 
                src="/lovable-uploads/b0db2735-0ba8-4c37-bbc2-0cec9837d6b5.png" 
                alt="Sistema Mobile"
                className="w-full rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;