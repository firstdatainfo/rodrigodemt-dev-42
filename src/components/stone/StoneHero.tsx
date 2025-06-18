
import { CreditCard, Smartphone, Zap } from "lucide-react";

const StoneHero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-primary to-green-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
      
      <div className="container mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6 mb-8">
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-center lg:text-left">
                  Integração de
                  <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    Pagamentos Stone
                  </span>
                </h1>
              </div>

              {/* Selo Stone Oficial */}
              <div className="flex flex-col items-center lg:items-start mb-8">
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 sm:gap-8 mb-6 flex-nowrap w-full">
                  {/* Tamanho maior para mobile, menor para web */}
                  <div className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-64 xl:w-72 2xl:w-80">
                    <img 
                      src="/uploads/5949be6f-6616-4b08-977b-903de24aa9f2.png" 
                      alt="Stone Logo" 
                      className="w-full h-auto max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-shrink-0 h-32 sm:h-36 md:h-40 lg:h-32 xl:h-36 2xl:h-40 px-2">
                    <img 
                      src="/uploads/27467abd-8fc5-4d5f-bee4-d00db5bb9312.png" 
                      alt="PagarMe Logo" 
                      className="h-full w-auto max-w-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <p className="text-2xl md:text-3xl font-bold text-white text-center lg:text-left leading-tight">
                  🏆 <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                    PARCEIRO OFICIAL
                  </span>
                </p>
                <p className="text-lg text-white/90 font-semibold text-center lg:text-left mt-2">
                  Credibilidade e confiança garantidas pela Stone, Pagar.me e Stone Partner Program
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-white/90 leading-relaxed">
                  Soluções completas para terminais Android com integração Stone. 
                  Processamento de pagamentos seguro, rápido e confiável para o seu negócio.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30">
                  <CreditCard className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Pagamentos Seguros</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-400/30">
                  <Smartphone className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">Terminais Android</span>
                </div>
                <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30">
                  <Zap className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">API Integrada</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/25"
                >
                  💬 Solicitar Orçamento
                </button>
                <button 
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Ver Funcionalidades
                </button>
              </div>
            </div>

            <div className="relative animate-fade-up w-full flex justify-center lg:justify-end" style={{ animationDelay: '200ms' }}>
              <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                <div className="relative pb-[100%] md:pb-[90%] lg:pb-[80%] w-full">
                  <img 
                    src="/uploads/16ac9748-7b55-4ef0-87d5-bd0e6a6c85ae.png" 
                    alt="Terminal Stone" 
                    className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneHero;
