import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Store, Home, Factory, Cpu } from "lucide-react";

const solutions = [
  {
    title: "Automação Residencial",
    description: "Transforme sua casa em um ambiente inteligente e conectado. Controle iluminação, temperatura, segurança e entretenimento de forma integrada.",
    icon: Home,
  },
  {
    title: "Automação Comercial",
    description: "Soluções inteligentes para otimizar seu negócio. Gestão de estoque, PDV, controle de acesso e monitoramento em tempo real.",
    icon: Store,
  },
  {
    title: "Automação Privada",
    description: "Sistemas exclusivos e personalizados para condomínios, clubes e áreas restritas, garantindo segurança e controle total.",
    icon: Building2,
  },
  {
    title: "Automação Industrial",
    description: "Modernize sua indústria com sistemas avançados de controle e monitoramento. Aumente a produtividade e reduza custos operacionais.",
    icon: Factory,
  },
  {
    title: "IoT - Internet das Coisas",
    description: "Conecte e gerencie dispositivos de forma inteligente. Coleta e análise de dados em tempo real para tomada de decisões estratégicas.",
    icon: Cpu,
  },
];

const Solutions = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-accent-foreground to-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Nossas Soluções
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={solution.title}
              className="glass-card animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-accent-foreground/20 rounded-lg flex items-center justify-center mb-4">
                  <solution.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl text-white">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;