import { Button } from "@/components/ui/button";
import ChipAnimation from "./ChipAnimation";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light overflow-hidden">
      <ChipAnimation />
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center text-white max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
                Transformando Ideias em Soluções Digitais
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
                Desenvolvimento de sistemas personalizados, aplicativos web e mobile para impulsionar seu negócio ao próximo nível.
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100 animate-fade-up"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;