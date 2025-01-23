import React from 'react';
import { Code } from "lucide-react";

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
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="glass-card p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
              <Code className="w-5 h-5" />
              {service.title}
            </h3>
            <div className="bg-black/40 rounded-lg p-4">
              <pre className="text-sm text-blue-300 overflow-x-auto">
                <code>
                  {service.items.map((item, i) => (
                    <div key={i} className="mb-1">{item}</div>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesGrid;