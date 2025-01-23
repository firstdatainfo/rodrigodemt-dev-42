import { Code, Home, Building2, Factory, Cpu, BrainCircuit } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Automação Residencial",
    description: "Transforme sua casa em um ambiente inteligente e conectado. Controle iluminação, temperatura, segurança e entretenimento de forma integrada.",
    icon: Home,
  },
  {
    title: "Automação Comercial",
    description: "Soluções inteligentes para otimizar seu negócio. Gestão de estoque, PDV, controle de acesso e monitoramento em tempo real.",
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
  {
    title: "Desenvolvimento Mobile e Web",
    description: "Apps e sistemas web personalizados com as mais modernas tecnologias do mercado.",
    icon: Code,
  },
  {
    title: "Inteligência Artificial",
    description: "Soluções avançadas com IA para automatizar e otimizar processos do seu negócio.",
    icon: BrainCircuit,
  },
];

const Services = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary via-primary-light to-blue-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-all duration-300 animate-fade-up bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 relative z-30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
