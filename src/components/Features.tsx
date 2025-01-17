import { Smartphone, FileText, QrCode, Printer, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    title: "App Mobile",
    description: "Controle total na palma da sua mão com nosso aplicativo intuitivo e completo",
    icon: Smartphone,
  },
  {
    title: "Relatórios Avançados",
    description: "Análises detalhadas e estatísticas em tempo real para tomada de decisões",
    icon: FileText,
  },
  {
    title: "QR Code Integrado",
    description: "Sistema de validação rápida e segura através de QR Code",
    icon: QrCode,
  },
  {
    title: "Gestão de Impressão",
    description: "Sistema completo para gerenciamento e controle de impressões",
    icon: Printer,
  },
  {
    title: "Segurança Máxima",
    description: "Controle de acesso e permissões com criptografia avançada",
    icon: Shield,
  },
  {
    title: "Sincronização Real-time",
    description: "Dados sempre atualizados em todos os dispositivos conectados",
    icon: RefreshCw,
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
            Recursos Exclusivos
          </h2>
          <p className="text-lg text-gray-600">
            Oferecemos as melhores soluções tecnológicas para otimizar seus processos
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;