
import { CreditCard, Smartphone, Zap } from "lucide-react";

const StoneHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/5 to-emerald-600/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Integração de
                  <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    Pagamentos Stone
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Soluções completas para terminais Android com integração Stone. 
                  Processamento de pagamentos seguro, rápido e confiável para o seu negócio.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <CreditCard className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">Pagamentos Seguros</span>
                </div>
                <div className="flex items-center gap-2 bg-emerald-100 px-4 py-2 rounded-full">
                  <Smartphone className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-medium">Terminais Android</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-800 font-medium">API Integrada</span>
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
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Ver Funcionalidades
                </button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: '200ms' }}>
              <div className="relative">
                <img 
                  src="/lovable-uploads/16ac9748-7b55-4ef0-87d5-bd0e6a6c85ae.png" 
                  alt="Terminal Stone" 
                  className="w-full max-w-md mx-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneHero;
