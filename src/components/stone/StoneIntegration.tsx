
import { Code, Database, Smartphone, Zap } from "lucide-react";
import ParticlesBackground from "../ParticlesBackground";
import NeuralNetwork from "../NeuralNetwork";

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
    <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-hidden">
      {/* Fundo com partículas e rede neural igual ao Hero */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticlesBackground />
        <NeuralNetwork />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Processo de <span className="text-green-400">Integração</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Nosso processo estruturado garante uma integração perfeita e sem complicações 
              com os terminais Stone do seu negócio.
            </p>
          </div>

          {/* Logos das empresas parceiras */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Parceiros <span className="text-green-400">Oficiais</span>
              </h3>
            </div>
            <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
              {/* Logo Stone */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <img 
                  src="/lovable-uploads/acc8e4f3-a761-4e84-831f-8489518ac3ba.png" 
                  alt="Stone Official Partner" 
                  className="h-12 w-auto"
                />
              </div>
              
              {/* Logo Pagar.me */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <img 
                  src="/lovable-uploads/83ed6efa-5ed6-4771-8ee8-6d1e2b56908f.png" 
                  alt="Pagar.me - Uma empresa Stone Co." 
                  className="h-12 w-auto"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {integrationSteps.map((step, index) => (
              <div 
                key={index}
                className="relative animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/80 leading-relaxed">
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
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para começar sua integração?
              </h3>
              <p className="text-white/80 mb-6">
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
