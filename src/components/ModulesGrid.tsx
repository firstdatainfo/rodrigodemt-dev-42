import React from 'react';

const ModulesGrid = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Serviços</h2>
            <p className="text-xl text-white/80">
              Soluções completas em desenvolvimento e automação
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Desenvolvimento Mobile</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Apps Flutter Multiplataforma
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  FlutterFlow Low-Code
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  UI/UX Design Mobile
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Publicação nas Lojas
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Automação</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Automação Industrial
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Automação Residencial
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Automação Predial
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Projetos GERBE
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Backend & Cloud</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  APIs RESTful
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Firebase/Supabase
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Cloud Functions
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Banco de Dados
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Inteligência Artificial</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Machine Learning
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Análise de Dados
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Chatbots IA
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Automação com IA
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Internet das Coisas</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Sensores Inteligentes
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Monitoramento Remoto
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Integração IoT
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Dashboards IoT
                </li>
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-semibold text-white mb-6">Consultoria Técnica</h3>
              <ul className="text-lg text-white/80 space-y-3">
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Arquitetura de Software
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Projetos de Automação
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Soluções Tecnológicas
                </li>
                <li className="flex items-center">
                  <span className="text-accent mr-2">•</span>
                  Otimização de Processos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesGrid;