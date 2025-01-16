import { Smartphone, FileText, QrCode, Printer, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    title: "App Mobile",
    description: "Controle total na palma da sua mão",
    icon: Smartphone,
  },
  {
    title: "Relatórios",
    description: "Análises e estatísticas em tempo real",
    icon: FileText,
  },
  {
    title: "QR Code",
    description: "Validação rápida e segura",
    icon: QrCode,
  },
  {
    title: "Impressão",
    description: "Impressão de tickets e comprovantes",
    icon: Printer,
  },
  {
    title: "Segurança",
    description: "Controle de acesso e permissões",
    icon: Shield,
  },
  {
    title: "Sincronização",
    description: "Dados atualizados em tempo real",
    icon: RefreshCw,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Recursos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-6 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-textGray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;