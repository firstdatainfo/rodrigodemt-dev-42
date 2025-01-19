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
    <section className="py-12 bg-gradient-to-b from-primary via-primary-light to-accent-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Nossas Soluções
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-foreground to-secondary flex items-center justify-center mb-4 mx-auto">
                <solution.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white text-center">{solution.title}</h3>
              <p className="text-white/80 text-center">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
