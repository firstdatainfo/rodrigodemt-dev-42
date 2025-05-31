
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "CEO",
    content: "O Rodrigo Dev transformou completamente nosso negócio com soluções inovadoras de IA. Resultados impressionantes!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Ana Costa",
    role: "Diretora",
    content: "Automação perfeita e sistema de gestão que revolucionou nossa produtividade. Recomendo totalmente!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "João Santos",
    role: "Fundador",
    content: "Desenvolvimento mobile excepcional! App Flutter entregue no prazo com qualidade superior.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Mariana Lima",
    role: "Gerente de Projetos",
    content: "A integração com a Stone foi perfeita! Sistema funcionando sem problemas e suporte excelente.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Pedro Oliveira",
    role: "Diretor Comercial",
    content: "Excelente trabalho na implementação do sistema de pagamentos. Equipe muito profissional e dedicada.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Beatriz Souza",
    role: "Coordenadora de TI",
    content: "Sistema de automação entregue com alta qualidade e dentro do prazo. Superou nossas expectativas!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-900 to-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Veja os depoimentos de quem já transformou seus negócios conosco
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white/10 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-white/20 hover:bg-white/20 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8 relative">
                <div className="absolute top-4 right-4 text-white/20">
                  <Quote className="w-8 h-8" />
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
