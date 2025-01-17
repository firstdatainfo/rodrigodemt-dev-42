import ChipAnimation from "./ChipAnimation";
import { Button } from "./ui/button";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      <ChipAnimation />
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div 
            className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full inline-flex items-center mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <span className="bg-white/20 text-white px-4 py-1 rounded-full text-sm mr-3">Hot</span>
            <span className="text-white/90 text-sm">Delivering Superior Services & IT Solutions</span>
          </div>

          <h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Providing The Best Services & IT Solutions
          </h1>

          <p 
            className="text-white/80 text-lg mb-8"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Easily customize this template to your preferences. It's SEO-friendly and highly customizable for your unique needs.
          </p>

          <div 
            className="flex flex-wrap gap-4 justify-center mb-12"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              Get Started
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Get Quotes
            </Button>
          </div>

          <div 
            className="flex justify-center gap-4"
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
      </div>
    </section>
  );
};

export default Hero;