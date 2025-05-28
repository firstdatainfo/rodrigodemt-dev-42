
import { Code, Database, Smartphone, Zap } from "lucide-react";

const integrationSteps = [
  {
    icon: Code,
    title: "1. Configuração da API",
    description: "Configuramos a API Stone com suas credenciais e parâmetros específicos do seu negócio."
  },
  {
    icon: Smartphone,
    title: "2. Integração Android",
    description: "Desenvolvimento da aplicação Android otimizada para terminais Stone com interface intuitiva."
  },
  {
    icon: Database,
    title: "3. Sincronização de Dados",
    description: "Implementação de sincronização em tempo real com seu sistema de gestão existente."
  },
  {
    icon: Zap,
    title: "4. Testes & Deploy",
    description: "Testes completos em ambiente homologado e deploy seguro em produção."
  }
];

const StoneIntegration = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Processo de <span className="text-green-600">Integração</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso processo estruturado garante uma integração perfeita e sem complicações 
              com os terminais Stone do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < integrationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-green-300 to-emerald-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pronto para começar sua integração?
              </h3>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco e receba uma consultoria gratuita sobre a melhor solução para seu negócio.
              </p>
              <button 
                onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                💬 Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneIntegration;
