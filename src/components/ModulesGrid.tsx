import React from 'react';

const ModulesGrid = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8">Serviços</h2>
          <p className="text-white/80 mb-8">
            Soluções completas em desenvolvimento e automação
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Desenvolvimento Mobile</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Apps Flutter Multiplataforma</li>
                <li>• FlutterFlow Low-Code</li>
                <li>• UI/UX Design Mobile</li>
                <li>• Publicação nas Lojas</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Automação</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Automação Industrial</li>
                <li>• Automação Residencial</li>
                <li>• Automação Predial</li>
                <li>• Projetos GERBE</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Backend & Cloud</h3>
              <ul className="text-white/80 space-y-2">
                <li>• APIs RESTful</li>
                <li>• Firebase/Supabase</li>
                <li>• Cloud Functions</li>
                <li>• Banco de Dados</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Inteligência Artificial</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Machine Learning</li>
                <li>• Análise de Dados</li>
                <li>• Chatbots IA</li>
                <li>• Automação com IA</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Internet das Coisas</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Sensores Inteligentes</li>
                <li>• Monitoramento Remoto</li>
                <li>• Integração IoT</li>
                <li>• Dashboards IoT</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Consultoria Técnica</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Arquitetura de Software</li>
                <li>• Projetos de Automação</li>
                <li>• Soluções Tecnológicas</li>
                <li>• Otimização de Processos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;