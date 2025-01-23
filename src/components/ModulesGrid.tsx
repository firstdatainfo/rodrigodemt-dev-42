import React from 'react';

const ModulesGrid = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-b from-primary via-primary-light to-secondary rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Serviços</h2>
            <p className="text-xl text-white/80">
              Soluções completas em desenvolvimento e automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((service, index) => (
              <div 
                key={service.title}
                className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold text-white mb-6 gradient-text">
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center text-white/80 hover:text-white transition-colors">
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;