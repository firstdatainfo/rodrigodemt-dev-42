import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
            Soluções em Software Empresarial
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up">
            Transforme sua gestão com nossas soluções integradas
          </p>
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 animate-fade-up"
          >
            Fale Conosco
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;