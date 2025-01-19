import { Smartphone, FileText, QrCode, Printer, Shield, RefreshCw } from "lucide-react";

const features = [
  {
    title: "App Mobile",
    description: "Controle total na palma da sua mão",
    icon: Smartphone,
    color: "#0EA5E9",
  },
  {
    title: "Relatórios",
    description: "Análises e estatísticas em tempo real",
    icon: FileText,
    color: "#0EA5E9",
  },
  {
    title: "QR Code",
    description: "Validação rápida e segura",
    icon: QrCode,
    color: "#0EA5E9",
  },
  {
    title: "Impressão",
    description: "Impressão de tickets e comprovantes",
    icon: Printer,
    color: "#0EA5E9",
  },
  {
    title: "Segurança",
    description: "Controle de acesso e permissões",
    icon: Shield,
    color: "#0EA5E9",
  },
  {
    title: "Sincronização",
    description: "Dados atualizados em tempo real",
    icon: RefreshCw,
    color: "#0EA5E9",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-primary via-primary-light to-accent-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Recursos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-effect p-6 rounded-xl hover:bg-white/5 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-foreground to-secondary flex items-center justify-center mb-4 mx-auto"
              >
                <feature.icon 
                  className="w-8 h-8 text-white"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white text-center">{feature.title}</h3>
              <p className="text-white/80 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
