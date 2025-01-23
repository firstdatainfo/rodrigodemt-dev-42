import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const ModulesGrid = () => {
  const services = [
    {
      title: "Desenvolvimento Mobile",
      items: [
        "Apps Flutter Multiplataforma",
        "FlutterFlow Low-Code",
        "UI/UX Design Mobile",
        "Publicação nas Lojas"
      ]
    },
    {
      title: "Automação",
      items: [
        "Automação Industrial",
        "Automação Residencial",
        "Automação Predial",
        "Projetos GERBE"
      ]
    },
    {
      title: "Backend & Cloud",
      items: [
        "APIs RESTful",
        "Firebase/Supabase",
        "Cloud Functions",
        "Banco de Dados"
      ]
    },
    {
      title: "Inteligência Artificial",
      items: [
        "Machine Learning",
        "Análise de Dados",
        "Chatbots IA",
        "Automação com IA"
      ]
    },
    {
      title: "Internet das Coisas",
      items: [
        "Sensores Inteligentes",
        "Monitoramento Remoto",
        "Integração IoT",
        "Dashboards IoT"
      ]
    },
    {
      title: "Consultoria Técnica",
      items: [
        "Arquitetura de Software",
        "Projetos de Automação",
        "Soluções Tecnológicas",
        "Otimização de Processos"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Serviços
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="hover:shadow-lg transition-shadow duration-300 animate-fade-up bg-transparent backdrop-blur-sm border border-white/20 hover:bg-white/10"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li 
                      key={item} 
                      className="text-sm text-textGray hover:text-primary transition-colors flex items-center"
                    >
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></span>
                      {item}
                    </li>
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

export default ModulesGrid;