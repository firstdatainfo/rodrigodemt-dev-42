
const terminals = [
  {
    name: "Stone Terminal Clássico",
    image: "/lovable-uploads/16ac9748-7b55-4ef0-87d5-bd0e6a6c85ae.png",
    features: ["Tela Touch", "Leitor de Cartão", "Conectividade 4G", "Bateria Longa Duração"]
  },
  {
    name: "Stone Mobile",
    image: "/lovable-uploads/19fd0175-eece-4359-97f4-a969e427d819.png",
    features: ["Portátil", "Bluetooth", "Design Compacto", "Fácil Manuseio"]
  },
  {
    name: "Stone Smart",
    image: "/lovable-uploads/8fab1bed-4326-44f1-b014-41236a07eff7.png",
    features: ["Teclado Físico", "Impressora Integrada", "WiFi + 4G", "Android Avançado"]
  }
];

const StoneTerminals = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-primary to-red-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Terminais <span className="text-green-400">Compatíveis</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Nossa integração funciona perfeitamente com toda a linha de terminais Stone, 
            oferecendo flexibilidade para diferentes tipos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {terminals.map((terminal, index) => (
            <div 
              key={index}
              className="bg-black/30 backdrop-blur-sm border border-white/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 text-center">
                <div className="relative mb-8">
                  <img 
                    src={terminal.image} 
                    alt={terminal.name}
                    className="w-48 h-64 object-contain mx-auto hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  {terminal.name}
                </h3>
                
                <div className="space-y-3">
                  {terminal.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center justify-center gap-2 bg-white/10 py-2 px-4 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-white font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoneTerminals;
