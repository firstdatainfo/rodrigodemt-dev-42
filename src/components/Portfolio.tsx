import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Code, Brain, Database, Cpu } from "lucide-react";

const portfolioItems = [
  {
    title: "App Mobile Flutter",
    description: "Aplicativo multiplataforma com interface moderna e alta performance",
    technologies: ["Flutter", "Firebase", "GetX", "Java", "React", "Node.js"],
    features: [
      "Multiplataforma (iOS/Android)",
      "API RESTful Node.js",
      "Integração Firebase",
      "Backend Java",
    ],
    icon: Smartphone,
  },
  {
    title: "Backend Moderno",
    description: "APIs e serviços backend com as melhores tecnologias",
    technologies: ["Supabase", "Firebase", "Node.js"],
    features: [
      "APIs RESTful",
      "Real-time Database",
      "Cloud Functions",
      "Serverless",
    ],
    icon: Code,
  },
  {
    title: "Inteligência Artificial",
    description: "Sistema de IA para análise de dados e automação de processos",
    technologies: ["Python", "TensorFlow", "OpenAI"],
    features: [
      "Machine Learning",
      "Processamento de Dados",
      "Análise Preditiva",
      "APIs de IA",
    ],
    icon: Brain,
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Portfólio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card
              key={item.title}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-textGray mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="list-disc list-inside text-sm text-textGray">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;