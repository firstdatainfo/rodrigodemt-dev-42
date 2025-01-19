import { Smartphone, FileText, QrCode, Printer, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    title: "App Mobile",
    description: "Controle total na palma da sua mão",
    icon: Smartphone,
    color: "#8B5CF6", // Vivid purple
  },
  {
    title: "Relatórios",
    description: "Análises e estatísticas em tempo real",
    icon: FileText,
    color: "#D946EF", // Magenta pink
  },
  {
    title: "QR Code",
    description: "Validação rápida e segura",
    icon: QrCode,
    color: "#F97316", // Bright orange
  },
  {
    title: "Impressão",
    description: "Impressão de tickets e comprovantes",
    icon: Printer,
    color: "#0EA5E9", // Ocean blue
  },
  {
    title: "Segurança",
    description: "Controle de acesso e permissões",
    icon: Shield,
    color: "#9b87f5", // Primary purple
  },
  {
    title: "Sincronização",
    description: "Dados atualizados em tempo real",
    icon: RefreshCw,
    color: "#7E69AB", // Secondary purple
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Recursos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform hover:scale-110 duration-300"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon 
                  className="w-8 h-8 transition-colors duration-300"
                  style={{ color: feature.color }}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;