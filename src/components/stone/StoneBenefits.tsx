
import { TrendingUp, Clock, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Aumento nas Vendas",
    percentage: "35%",
    description: "Processamento mais rápido resulta em maior satisfação do cliente e aumento nas vendas."
  },
  {
    icon: Clock,
    title: "Redução no Tempo",
    percentage: "60%",
    description: "Transações processadas em segundos, reduzindo filas e melhorando a experiência."
  },
  {
    icon: Shield,
    title: "Segurança Máxima",
    percentage: "100%",
    description: "Certificação PCI DSS garante total proteção nas transações financeiras."
  },
  {
    icon: Users,
    title: "Satisfação do Cliente",
    percentage: "95%",
    description: "Interface intuitiva e processo simplificado aumentam a satisfação dos clientes."
  }
];

const StoneBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-primary to-green-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Benefícios <span className="text-green-400">Comprovados</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nossos clientes experimentam resultados significativos após a implementação 
            da integração Stone em seus terminais Android.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-4xl font-bold text-green-400 mb-2">
                {benefit.percentage}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-white/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Transforme seu negócio hoje mesmo
          </h3>
          <p className="text-xl mb-8 text-white/90">
            Junte-se a centenas de empresas que já revolucionaram seus pagamentos com nossa solução Stone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.open('https://wa.me/5566992480993', '_blank')}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              💬 Solicitar Demonstração
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
            >
              Ver Preços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoneBenefits;
